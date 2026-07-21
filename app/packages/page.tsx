import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { CTAButton } from '@/components/CTAButton';
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
  },
  {
    name: 'Fleet & Brand',
    price: 'Custom Quote',
    description: 'Everything in Starter Brand, plus van wrap design and uniform artwork built to match.',
    features: ['Everything in Starter Brand', 'Van/fleet wrap design', 'Uniform & apparel design', 'Brand style guide'],
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
  },
];

export default function PackagesPage() {
  return (
    <Container className="py-20">
      <h1 className="font-display text-4xl text-brand-navy md:text-5xl">Packages</h1>
      <p className="mt-4 max-w-2xl text-brand-navy/80">
        Every package is built for home service and trades businesses that want a brand as bold and
        reliable as their work. Pricing is customized to your business &mdash; reach out for a free quote.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {packages.map((pkg) => (
          <div key={pkg.name} className="flex flex-col rounded-chunky border-2 border-brand-navy/10 p-8">
            <h2 className="font-display text-2xl text-brand-red">{pkg.name}</h2>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand-navy/60">{pkg.price}</p>
            <p className="mt-4 text-sm text-brand-navy/80">{pkg.description}</p>
            <ul className="mt-6 flex-1 space-y-2 text-sm text-brand-navy/80">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-1 text-brand-red">
                    &#9642;
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CTAButton href="/services">Get Started</CTAButton>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
