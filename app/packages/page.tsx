import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import { Container } from '@/components/Container';
import { CTAButton } from '@/components/CTAButton';
import { GoogleReviewsBadge } from '@/components/GoogleReviewsBadge';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Branding Packages for Home Service Businesses',
  description:
    'Compare Monsta Media & Design branding packages: logo & brand identity, van wrap design, and full-service brand systems for trades and home service companies.',
  path: '/packages',
});

const packages = [
  {
    name: 'Starter Brand',
    price: 'Custom Quote',
    description: 'A clean, professional logo and brand starter kit for new or rebranding trades businesses.',
    features: ['Custom logo design', 'Color palette & fonts', 'Business card design', '2 rounds of revisions'],
    featured: false,
  },
  {
    name: 'Fleet & Brand',
    price: 'Custom Quote',
    description: 'Everything in Starter Brand, plus van wrap design and uniform artwork built to match.',
    features: ['Everything in Starter Brand', 'Van/fleet wrap design', 'Uniform & apparel design', 'Brand style guide'],
    featured: true,
  },
  {
    name: 'Full Monster',
    price: 'Custom Quote',
    description: 'Our complete package: brand identity, fleet wraps, uniforms, and a custom SEO-ready website.',
    features: [
      'Everything in Fleet & Brand',
      'Custom SEO-optimized website',
      'Google Business Profile setup',
      'Ongoing brand support',
    ],
    featured: false,
  },
];

export default function PackagesPage() {
  return (
    <>
      <section className="bg-brand-navy text-white">
        <Container className="py-16 md:py-20">
          <h1 className="font-display text-4xl text-white md:text-5xl">Packages</h1>
          <p className="mt-4 max-w-2xl text-brand-cream/90">
            Every package is built for home service and trades businesses that want a brand as bold and
            reliable as their work. Pricing is customized to your business &mdash; reach out for a free
            quote.
          </p>
          <div className="mt-6">
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
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand-red">{pkg.price}</p>
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
      </Container>
    </>
  );
}
