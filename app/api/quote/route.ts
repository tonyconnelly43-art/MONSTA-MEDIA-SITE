import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { siteConfig } from '@/lib/site-config';

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

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set; cannot send lead email.');
    return NextResponse.json(
      { error: 'This form is not fully configured yet. Please call or email us directly.' },
      { status: 500 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: 'Monsta Media Website <onboarding@resend.dev>',
      to: siteConfig.email,
      replyTo: email?.trim() || undefined,
      subject: `Free Brand Review request: ${company}`,
      text: [
        `Name: ${name}`,
        `Company: ${company}`,
        `Phone: ${phone}`,
        email ? `Email: ${email}` : null,
        message ? `Message: ${message}` : null,
      ]
        .filter(Boolean)
        .join('\n'),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Failed to send lead email:', error);
    return NextResponse.json(
      { error: 'Something went wrong sending your request. Please call or email us directly.' },
      { status: 500 },
    );
  }
}
