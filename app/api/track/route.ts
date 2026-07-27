import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

export async function POST(request: Request) {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) return NextResponse.json({ ok: true });

  const body = await request.json().catch(() => null);
  const path = typeof body?.path === 'string' ? body.path.slice(0, 500) : '/';
  const referrer = typeof body?.referrer === 'string' ? body.referrer.slice(0, 500) : '';

  try {
    const sql = neon(dbUrl);
    await sql`
      CREATE TABLE IF NOT EXISTS page_views (
        id SERIAL PRIMARY KEY,
        path TEXT NOT NULL,
        referrer TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )
    `;
    await sql`INSERT INTO page_views (path, referrer) VALUES (${path}, ${referrer || null})`;
  } catch (error) {
    console.error('Failed to record page view:', error);
  }

  return NextResponse.json({ ok: true });
}
