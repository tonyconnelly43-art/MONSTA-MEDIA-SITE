import { neon } from '@neondatabase/serverless';

export function getSql() {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) return null;
  return neon(dbUrl);
}
