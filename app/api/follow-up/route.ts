import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getSql } from '@/lib/db';
import { siteConfig } from '@/lib/site-config';

const MAX_FOLLOW_UPS = 2;
const DAYS_BETWEEN_FOLLOW_UPS = 3;

type DueLead = {
  id: number;
  name: string;
  email: string;
  stop_token: string;
  follow_up_stage: number;
};

function followUpSubject(name: string, stage: number) {
  return stage === 0 ? `Still want that free brand review, ${name}?` : `Last check-in, ${name}`;
}

function followUpBody(name: string, stage: number, stopUrl: string) {
  const intro =
    stage === 0
      ? `Just following up on your request for a free brand review with ${siteConfig.name}. Haven't seen a call on the books yet — still want one?`
      : `Last note from us — the offer for a free 10 minute brand review is still open whenever you're ready.`;

  return [
    `Hey ${name},`,
    '',
    intro,
    '',
    `Grab a time here: ${siteConfig.calendlyUrl}`,
    '',
    siteConfig.name,
    '',
    `Don't want any more reminders? Click here: ${stopUrl}`,
  ].join('\n');
}

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const auth = request.headers.get('authorization');
    if (auth !== `Bearer ${cronSecret}`) {
      return new NextResponse('Unauthorized', { status: 401 });
    }
  }

  const sql = getSql();
  const apiKey = process.env.RESEND_API_KEY;
  if (!sql || !apiKey) {
    return NextResponse.json({ ok: true, sent: 0, note: 'Not configured.' });
  }

  const due = (await sql`
    SELECT id, name, email, stop_token, follow_up_stage
    FROM leads
    WHERE stopped = false
      AND email IS NOT NULL
      AND next_follow_up_at IS NOT NULL
      AND next_follow_up_at <= now()
      AND follow_up_stage < ${MAX_FOLLOW_UPS}
  `) as DueLead[];

  const resend = new Resend(apiKey);
  let sent = 0;

  for (const lead of due) {
    const stopUrl = `${siteConfig.url}/api/stop-followups?token=${lead.stop_token}`;

    try {
      await resend.emails.send({
        from: `${siteConfig.name} <onboarding@resend.dev>`,
        to: lead.email,
        subject: followUpSubject(lead.name, lead.follow_up_stage),
        text: followUpBody(lead.name, lead.follow_up_stage, stopUrl),
      });

      const nextStage = lead.follow_up_stage + 1;
      const nextFollowUpAt =
        nextStage < MAX_FOLLOW_UPS
          ? new Date(Date.now() + DAYS_BETWEEN_FOLLOW_UPS * 24 * 60 * 60 * 1000)
          : null;

      await sql`
        UPDATE leads
        SET follow_up_stage = ${nextStage}, next_follow_up_at = ${nextFollowUpAt}
        WHERE id = ${lead.id}
      `;
      sent += 1;
    } catch (error) {
      console.error(`Failed to send follow-up to lead ${lead.id}:`, error);
    }
  }

  return NextResponse.json({ ok: true, sent });
}
