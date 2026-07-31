import { NextResponse } from 'next/server';
import { getSql } from '@/lib/db';

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get('token');
  const sql = getSql();

  if (!token || !sql) {
    return new NextResponse('Invalid link.', { status: 400 });
  }

  try {
    await sql`UPDATE leads SET stopped = true WHERE stop_token = ${token}`;
  } catch (error) {
    console.error('Failed to stop follow-ups:', error);
  }

  return new NextResponse(
    '<html><body style="font-family: sans-serif; padding: 40px; text-align: center;">' +
      '<h1>You got it.</h1><p>No more reminder emails will be sent.</p></body></html>',
    { headers: { 'Content-Type': 'text/html' } },
  );
}
