import { randomUUID } from 'crypto';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getSql } from '@/lib/db';
import { siteConfig } from '@/lib/site-config';

type Lead = {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
  package: string;
  promo: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
};

async function saveToDatabase(lead: Lead) {
  const sql = getSql();
  if (!sql) return { attempted: false, ok: false, stopToken: null as string | null };

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        company TEXT NOT NULL,
        phone TEXT NOT NULL,
        email TEXT,
        message TEXT,
        package TEXT,
        promo TEXT,
        source TEXT NOT NULL DEFAULT 'website',
        stop_token TEXT,
        follow_up_stage INT NOT NULL DEFAULT 0,
        next_follow_up_at TIMESTAMPTZ,
        stopped BOOLEAN NOT NULL DEFAULT false,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )
    `;
    await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS promo TEXT`;
    await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS stop_token TEXT`;
    await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS follow_up_stage INT NOT NULL DEFAULT 0`;
    await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS next_follow_up_at TIMESTAMPTZ`;
    await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS stopped BOOLEAN NOT NULL DEFAULT false`;
    await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS utm_source TEXT`;
    await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS utm_medium TEXT`;
    await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS utm_campaign TEXT`;

    const stopToken = randomUUID();
    const hasEmail = Boolean(lead.email);
    const nextFollowUpAt = hasEmail ? new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) : null;

    await sql`
      INSERT INTO leads (
        name, company, phone, email, message, package, promo, source, stop_token, next_follow_up_at, stopped,
        utm_source, utm_medium, utm_campaign
      )
      VALUES (
        ${lead.name}, ${lead.company}, ${lead.phone}, ${lead.email || null}, ${lead.message || null},
        ${lead.package || null}, ${lead.promo || null}, 'website', ${stopToken},
        ${nextFollowUpAt}, ${!hasEmail},
        ${lead.utm_source || null}, ${lead.utm_medium || null}, ${lead.utm_campaign || null}
      )
    `;
    return { attempted: true, ok: true, stopToken };
  } catch (error) {
    console.error('Failed to save lead to database:', error);
    return { attempted: true, ok: false, stopToken: null as string | null };
  }
}

async function sendInternalNotification(lead: Lead) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { attempted: false, ok: false };

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: 'Monsta Media Website <onboarding@resend.dev>',
      to: siteConfig.email,
      replyTo: lead.email || undefined,
      subject: lead.package
        ? `Free Brand Review request (${lead.package}): ${lead.company}`
        : `Free Brand Review request: ${lead.company}`,
      text: [
        `Name: ${lead.name}`,
        `Company: ${lead.company}`,
        `Phone: ${lead.phone}`,
        lead.email ? `Email: ${lead.email}` : null,
        lead.package ? `Package: ${lead.package}` : null,
        lead.promo ? `Promo: ${lead.promo}` : null,
        lead.message ? `Message: ${lead.message}` : null,
      ]
        .filter(Boolean)
        .join('\n'),
    });
    return { attempted: true, ok: true };
  } catch (error) {
    console.error('Failed to send lead email:', error);
    return { attempted: true, ok: false };
  }
}

async function sendLeadConfirmation(lead: Lead, stopToken: string | null) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || !lead.email || !stopToken) return;

  const stopUrl = `${siteConfig.url}/api/stop-followups?token=${stopToken}`;

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: `${siteConfig.name} <onboarding@resend.dev>`,
      to: lead.email,
      subject: `Thanks, ${lead.name} — let's book your free brand review`,
      text: [
        `Hey ${lead.name},`,
        '',
        `Thanks for reaching out to ${siteConfig.name}! The fastest next step is to grab a time on our calendar for your free 10 minute brand review:`,
        '',
        siteConfig.calendlyUrl,
        '',
        `Talk soon,`,
        siteConfig.name,
        '',
        `Already booked or not interested? Click here and we won't send any more reminders: ${stopUrl}`,
      ].join('\n'),
    });
  } catch (error) {
    console.error('Failed to send lead confirmation email:', error);
  }
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const { name, company, phone, email, message, package: pkg, promo, website, utm_source, utm_medium, utm_campaign } =
    body as Record<string, string>;

  // Honeypot: real users never fill this hidden field, bots usually do.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name?.trim() || !company?.trim() || !phone?.trim()) {
    return NextResponse.json({ error: 'Name, company, and phone are required.' }, { status: 400 });
  }

  const lead = {
    name: name.trim(),
    company: company.trim(),
    phone: phone.trim(),
    email: email?.trim() ?? '',
    message: message?.trim() ?? '',
    package: pkg?.trim() ?? '',
    promo: promo?.trim() ?? '',
    utm_source: utm_source?.trim() ?? '',
    utm_medium: utm_medium?.trim() ?? '',
    utm_campaign: utm_campaign?.trim() ?? '',
  };

  const [db, mail] = await Promise.all([saveToDatabase(lead), sendInternalNotification(lead)]);
  await sendLeadConfirmation(lead, db.stopToken);

  if (!db.attempted && !mail.attempted) {
    console.error('Neither DATABASE_URL nor RESEND_API_KEY is set; lead was not captured anywhere.');
    return NextResponse.json(
      { error: 'This form is not fully configured yet. Please call or email us directly.' },
      { status: 500 },
    );
  }

  if (!db.ok && !mail.ok) {
    return NextResponse.json(
      { error: 'Something went wrong sending your request. Please call or email us directly.' },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
