import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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
    <>
      <section className="bg-brand-navy text-white">
        <Container className="py-16 md:py-20">
          <h1 className="font-display text-4xl text-white md:text-5xl">
            Branding &amp; Van Wrap Design for Home Service Companies
          </h1>
          <p className="mt-4 max-w-2xl text-brand-cream/90">
            Monsta Media &amp; Design builds brands for HVAC, plumbing, electrical, roofing, and other home
            service and trades businesses across Cleveland and Northfield, Ohio. Explore how we approach
            branding for your specific need below.
          </p>
        </Container>
      </section>

      <Container className="py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {brandingPages.map((page) => (
            <Link
              key={page.slug}
              href={`/branding/${page.slug}`}
              className="group rounded-chunky border-2 border-brand-navy/10 p-6 transition-colors hover:border-brand-red"
            >
              <h2 className="font-display text-xl text-brand-navy group-hover:text-brand-red">{page.h1}</h2>
              <p className="mt-2 text-sm text-brand-navy/70">{page.intro}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-red">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
