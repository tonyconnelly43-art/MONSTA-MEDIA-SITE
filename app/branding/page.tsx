import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { brandingPages } from '@/lib/branding-pages';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Branding & Van Wrap Design for Home Service Companies',
  description:
    'Logo design, van wrap design, uniform design, and brand strategy for HVAC, plumbing, electrical, and trades businesses in Cleveland and Northfield, Ohio.',
  path: '/branding',
});

export default function BrandingHubPage() {
  return (
    <Container className="py-20">
      <h1 className="font-display text-4xl text-brand-navy md:text-5xl">
        Branding &amp; Van Wrap Design for Home Service Companies
      </h1>
      <p className="mt-4 max-w-2xl text-brand-navy/80">
        Monsta Media &amp; Design builds brands for HVAC, plumbing, electrical, roofing, and other home
        service and trades businesses across Cleveland and Northfield, Ohio. Explore how we approach
        branding for your specific need below.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {brandingPages.map((page) => (
          <Link
            key={page.slug}
            href={`/branding/${page.slug}`}
            className="rounded-chunky border-2 border-brand-navy/10 p-6 transition-colors hover:border-brand-red"
          >
            <h2 className="font-display text-xl text-brand-red">{page.h1}</h2>
            <p className="mt-2 text-sm text-brand-navy/80">{page.intro}</p>
          </Link>
        ))}
      </div>
    </Container>
  );
}
