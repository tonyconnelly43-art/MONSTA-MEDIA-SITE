import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/Container';
import { CTAButton } from '@/components/CTAButton';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Case Study: Good Hope Air Conditioning & Heating',
  description:
    'A full website rebuild, domain migration, local SEO buildout, and lead-generation system for a real HVAC client in Hemet, CA.',
  path: '/case-studies/good-hope',
});

const results = [
  { value: '52', label: 'pages indexed in Google Search Console' },
  { value: '3,225', label: 'Business Profile views in the last 5 months' },
  { value: '124', label: 'website clicks straight from the Google listing' },
  { value: '41', label: 'calls placed directly from the Business Profile' },
];

export default function GoodHopeCaseStudyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy to-brand-navy-light py-20 text-white">
        <Container className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-red">Case Study</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] text-white md:text-7xl">
            Good Hope Air Conditioning &amp; Heating
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-brand-cream/80">
            A full website rebuild, domain migration, and local SEO system built to turn Google searches
            into booked HVAC jobs in Hemet, CA.
          </p>
        </Container>
        <div className="relative mt-14">
          <Container>
            <div className="overflow-hidden rounded-chunky border-2 border-white/10 shadow-2xl">
              <div className="relative aspect-[1440/900] w-full">
                <Image
                  src="/work-good-hope-hvac.png"
                  alt="Good Hope Air Conditioning & Heating website, built by Monsta Media & Design"
                  fill
                  sizes="100vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section className="bg-white py-16">
        <Container className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div>
            <h2 className="font-display text-3xl text-brand-navy md:text-4xl">
              A Real HVAC Business, Not a Mockup
            </h2>
            <div className="mt-5 space-y-1 text-sm text-brand-navy/70">
              <p>
                <span className="font-semibold text-brand-navy">Client:</span> Good Hope Air Conditioning
                &amp; Heating &mdash; Hemet, CA
              </p>
              <p>
                <span className="font-semibold text-brand-navy">Services:</span> Website Design &amp;
                Development &middot; Local SEO Strategy &middot; Lead Generation System
              </p>
            </div>
            <p className="mt-6 text-brand-navy/80">
              Good Hope&apos;s logo, mascot, and brand colors already existed before this project &mdash;
              that part isn&apos;t ours. What we were brought in to fix was everything downstream of it: an
              aging website that wasn&apos;t built to rank, a domain migration that needed to happen without
              losing search visibility, and a quote form that was quietly failing to notify anyone when a
              lead came in.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-xs">
            <div className="overflow-hidden rounded-[1.75rem] border-[6px] border-brand-navy bg-brand-navy shadow-xl">
              <div className="relative aspect-[390/844]">
                <Image
                  src="/work-good-hope-hvac-mobile.png"
                  alt="Good Hope Air Conditioning & Heating website on mobile"
                  fill
                  sizes="320px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-brand-cream py-16">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-red">The Approach</p>
          <h2 className="mt-2 font-display text-3xl text-brand-navy md:text-4xl">
            Rebuilt From the Ground Up, Not Patched Over
          </h2>
          <p className="mt-5 max-w-3xl text-brand-navy/80">
            The old site was holding the business back more than helping it &mdash; slow, hard to update,
            and not built with search engines in mind. We rebuilt it from scratch on a modern stack, migrated
            the whole thing to a new domain without losing the search equity already in place, and verified
            every step in Google Search Console instead of assuming the migration worked.
          </p>
        </Container>
      </section>

      <section className="bg-brand-navy py-16 text-white">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-red">The SEO Build</p>
            <h2 className="mt-2 font-display text-3xl text-white md:text-4xl">
              Built to Rank in Every City Served
            </h2>
            <p className="mt-5 text-brand-cream/80">
              Instead of one generic &quot;service area&quot; page, every service &mdash; air conditioning,
              heating, indoor air quality &mdash; got its own dedicated page for each city in the service
              area, written with real local detail instead of a template with the city name swapped in.
              Structured data, an auto-generated sitemap, and a blog built around search terms people were
              actually typing rounded out the foundation.
            </p>
          </div>
          <div className="rounded-chunky border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-red">What Got Built</p>
            <ul className="mt-4 space-y-3 text-sm text-brand-cream/90">
              <li>12 service &times; city landing pages across 4 cities</li>
              <li>Local business structured data (schema.org)</li>
              <li>Auto-generated XML sitemap</li>
              <li>Keyword-researched blog content tied to real search demand</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-red">The Lead System</p>
          <h2 className="mt-2 font-display text-3xl text-brand-navy md:text-4xl">
            A Quote Form That Actually Notifies Someone
          </h2>
          <p className="mt-5 max-w-3xl text-brand-navy/80">
            A lead form that silently fails is worse than no form at all &mdash; it feels like it&apos;s
            working while every submission disappears into nothing. We found and fixed exactly that, then
            verified the business&apos;s domain for email sending so every quote request lands in a real
            inbox, from a real address, instead of routing through a workaround.
          </p>
        </Container>
      </section>

      <section className="bg-brand-cream py-16">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-red">The Results</p>
          <h2 className="mt-2 font-display text-3xl text-brand-navy md:text-4xl">
            What&apos;s Happening Since It Went Live
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((r) => (
              <div key={r.label} className="rounded-chunky bg-white p-6 text-center shadow-sm">
                <p className="font-display text-4xl text-brand-red">{r.value}</p>
                <p className="mt-2 text-sm text-brand-navy/70">{r.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-brand-navy/50">
            Figures pulled directly from Google Search Console and the business&apos;s Google Business
            Profile performance data.
          </p>
        </Container>
      </section>

      <section className="bg-brand-navy py-20 text-center text-white">
        <Container>
          <h2 className="font-display text-3xl text-white md:text-4xl">
            Need a Site That Actually Works This Hard?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-cream/80">
            Whether it&apos;s a full rebuild, an SEO foundation, or a lead system that doesn&apos;t quietly
            fail on you &mdash; this is the kind of work we do.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <CTAButton href="/#free-brand-review">Get Your Free Quote</CTAButton>
            <CTAButton href="/work" variant="secondary">
              See More of Our Work
            </CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
