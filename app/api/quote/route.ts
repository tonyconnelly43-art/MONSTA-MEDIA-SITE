import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';
import { siteConfig } from '@/lib/site-config';

async function saveToDatabase(lead: {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}) {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) return { attempted: false, ok: false };

  try {
    const sql = neon(dbUrl);
    await sql`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        company TEXT NOT NULL,
        phone TEXT NOT NULL,
        email TEXT,
        message TEXT,
        source TEXT NOT NULL DEFAULT 'website',
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )
    `;
    await sql`
      INSERT INTO leads (name, company, phone, email, message, source)
      VALUES (${lead.name}, ${lead.company}, ${lead.phone}, ${lead.email || null}, ${lead.message || null}, 'website')
    `;
    return { attempted: true, ok: true };
  } catch (error) {
    console.error('Failed to save lead to database:', error);
    return { attempted: true, ok: false };
  }
}

async function sendEmail(lead: {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { attempted: false, ok: false };

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: 'Monsta Media Website <onboarding@resend.dev>',
      to: siteConfig.email,
      replyTo: lead.email || undefined,
      subject: `Free Brand Review request: ${lead.company}`,
      text: [
        `Name: ${lead.name}`,
        `Company: ${lead.company}`,
        `Phone: ${lead.phone}`,
        lead.email ? `Email: ${lead.email}` : null,
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

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const { name, company, phone, email, message, website } = body as Record<string, string>;

  // Honeypot: real users never fill this hidden field, bots usually do.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name?.trim() || !company?.trim() || !phone?.trim()) {
    return NextResponse.json({ error: 'Name, company, and phone are required.' }, { status: 400 });
  }

  const lead = { name: name.trim(), company: company.trim(), phone: phone.trim(), email: email?.trim() ?? '', message: message?.trim() ?? '' };

  const [db, mail] = await Promise.all([saveToDatabase(lead), sendEmail(lead)]);

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
