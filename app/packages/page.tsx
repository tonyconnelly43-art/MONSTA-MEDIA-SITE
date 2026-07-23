import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Container } from '@/components/Container';
import { CTAButton } from '@/components/CTAButton';
import { GoogleReviewsBadge } from '@/components/GoogleReviewsBadge';
import { buildMetadata } from '@/lib/seo';
import { formatPrice, packages } from '@/lib/packages';

export const metadata: Metadata = buildMetadata({
  title: 'Branding Packages for Home Service Businesses',
  description:
    'Compare Monsta Media & Design branding packages: logo & brand identity, van wrap design, and full-service brand systems for trades and home service companies.',
  path: '/packages',
});

export default function PackagesPage() {
  return (
    <>
      <section className="bg-brand-navy text-white">
        <Container className="py-16 text-center md:py-20">
          <h1 className="font-display text-4xl text-white md:text-5xl">Packages</h1>
          <p className="mx-auto mt-4 max-w-2xl text-brand-cream/90">
            Every package is built for home service and trades businesses that want a brand as bold and
            reliable as their work. Pricing is customized to your business &mdash; reach out for a free
            quote.
          </p>
          <div className="mt-6 flex justify-center">
            <GoogleReviewsBadge />
          </div>
        </Container>
      </section>

      <Container className="py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-chunky border-2 p-8 ${
                pkg.featured ? 'border-brand-red shadow-xl md:-translate-y-3' : 'border-brand-navy/10'
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-brand-red px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                  Most Popular
                </span>
              )}
              <h2 className="font-display text-2xl text-brand-navy">{pkg.name}</h2>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand-red">
                {formatPrice(pkg.priceFrom)}
              </p>
              <p className="mt-4 text-sm text-brand-navy/80">{pkg.description}</p>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm text-brand-navy/80">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButton href={`/?package=${encodeURIComponent(pkg.name)}#free-brand-review`}>
                  Get Started
                </CTAButton>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-chunky border-2 border-brand-red/30 bg-brand-red/5 p-6 text-center">
          <p className="font-display text-lg text-brand-navy">Based in Ohio?</p>
          <p className="mt-1 text-sm text-brand-navy/80">
            Ohio home service and trades businesses save $500 on any package with our Rebrand Ohio offer.
          </p>
          <Link href="/rebrand-ohio" className="mt-3 inline-block font-semibold text-brand-red underline">
            See the Rebrand Ohio offer
          </Link>
        </div>
      </Container>
    </>
  );
}
