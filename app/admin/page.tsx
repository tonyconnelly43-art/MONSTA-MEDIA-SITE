import { neon } from '@neondatabase/serverless';

export const dynamic = 'force-dynamic';

type Lead = {
  id: number;
  name: string;
  company: string;
  phone: string;
  email: string | null;
  message: string | null;
  package: string | null;
  promo: string | null;
  created_at: string;
};

type PageStat = { path: string; views: number };

async function getData() {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) return null;

  const sql = neon(dbUrl);

  const leads = (await sql`
    SELECT id, name, company, phone, email, message, package, promo, created_at
    FROM leads ORDER BY created_at DESC LIMIT 100
  `) as Lead[];

  const [todayRow] = (await sql`
    SELECT count(*)::int as count FROM page_views WHERE created_at >= now() - interval '1 day'
  `) as { count: number }[];
  const [weekRow] = (await sql`
    SELECT count(*)::int as count FROM page_views WHERE created_at >= now() - interval '7 days'
  `) as { count: number }[];
  const [monthRow] = (await sql`
    SELECT count(*)::int as count FROM page_views WHERE created_at >= now() - interval '30 days'
  `) as { count: number }[];

  const topPages = (await sql`
    SELECT path, count(*)::int as views FROM page_views
    WHERE created_at >= now() - interval '7 days'
    GROUP BY path ORDER BY views DESC LIMIT 10
  `) as PageStat[];

  return {
    leads,
    traffic: { today: todayRow?.count ?? 0, week: weekRow?.count ?? 0, month: monthRow?.count ?? 0 },
    topPages,
  };
}

export default async function AdminPage() {
  const data = await getData();

  if (!data) {
    return (
      <div className="mx-auto max-w-xl px-6 py-20">
        <h1 className="font-display text-2xl text-brand-navy">Dashboard Not Set Up Yet</h1>
        <p className="mt-3 text-brand-navy/70">
          Add a <code className="rounded bg-brand-navy/5 px-1.5 py-0.5">DATABASE_URL</code> environment
          variable in Vercel to enable leads and traffic tracking.
        </p>
      </div>
    );
  }

  const { leads, traffic, topPages } = data;

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="font-display text-3xl text-brand-navy">Monsta Media Dashboard</h1>
      <p className="mt-1 text-sm text-brand-navy/60">Refresh this page anytime for the latest data.</p>

      <div className="mt-8 grid grid-cols-3 gap-4">
        <StatCard label="Views Today" value={traffic.today} />
        <StatCard label="Views This Week" value={traffic.week} />
        <StatCard label="Views This Month" value={traffic.month} />
      </div>

      <div className="mt-10">
        <h2 className="font-display text-xl text-brand-navy">Top Pages (Last 7 Days)</h2>
        <div className="mt-3 overflow-x-auto rounded-chunky border-2 border-brand-navy/10">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-brand-navy/10 bg-brand-navy/5">
                <th className="px-4 py-2 font-semibold text-brand-navy">Page</th>
                <th className="px-4 py-2 font-semibold text-brand-navy">Views</th>
              </tr>
            </thead>
            <tbody>
              {topPages.map((p) => (
                <tr key={p.path} className="border-b border-brand-navy/5">
                  <td className="px-4 py-2 text-brand-navy/80">{p.path}</td>
                  <td className="px-4 py-2 text-brand-navy/80">{p.views}</td>
                </tr>
              ))}
              {topPages.length === 0 && (
                <tr>
                  <td className="px-4 py-3 text-brand-navy/50" colSpan={2}>
                    No traffic recorded yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-display text-xl text-brand-navy">Recent Leads ({leads.length})</h2>
        <div className="mt-3 overflow-x-auto rounded-chunky border-2 border-brand-navy/10">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-brand-navy/10 bg-brand-navy/5">
                <th className="px-4 py-2 font-semibold text-brand-navy">Date</th>
                <th className="px-4 py-2 font-semibold text-brand-navy">Name</th>
                <th className="px-4 py-2 font-semibold text-brand-navy">Company</th>
                <th className="px-4 py-2 font-semibold text-brand-navy">Phone</th>
                <th className="px-4 py-2 font-semibold text-brand-navy">Email</th>
                <th className="px-4 py-2 font-semibold text-brand-navy">Package</th>
                <th className="px-4 py-2 font-semibold text-brand-navy">Promo</th>
                <th className="px-4 py-2 font-semibold text-brand-navy">Message</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-b border-brand-navy/5 align-top">
                  <td className="whitespace-nowrap px-4 py-2 text-brand-navy/70">
                    {new Date(lead.created_at).toLocaleString()}
                  </td>
                  <td className="px-4 py-2 text-brand-navy/80">{lead.name}</td>
                  <td className="px-4 py-2 text-brand-navy/80">{lead.company}</td>
                  <td className="px-4 py-2 text-brand-navy/80">{lead.phone}</td>
                  <td className="px-4 py-2 text-brand-navy/80">{lead.email}</td>
                  <td className="px-4 py-2 text-brand-navy/80">{lead.package}</td>
                  <td className="px-4 py-2 text-brand-navy/80">{lead.promo}</td>
                  <td className="px-4 py-2 text-brand-navy/80">{lead.message}</td>
                </tr>
              ))}
              {leads.length === 0 && (
                <tr>
                  <td className="px-4 py-3 text-brand-navy/50" colSpan={8}>
                    No leads yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-chunky border-2 border-brand-navy/10 p-5">
      <p className="text-xs uppercase tracking-wide text-brand-navy/50">{label}</p>
      <p className="mt-1 font-display text-3xl text-brand-navy">{value}</p>
    </div>
  );
}
