import type { Metadata } from 'next';
import { Check, MapPin } from 'lucide-react';
import { Container } from '@/components/Container';
import { CTAButton } from '@/components/CTAButton';
import { GoogleReviewsBadge } from '@/components/GoogleReviewsBadge';
import { buildMetadata } from '@/lib/seo';
import { formatPrice, packages } from '@/lib/packages';

const PROMO_CODE = 'rebrand-ohio';
const DISCOUNT = 500;

export const metadata: Metadata = buildMetadata({
  title: 'Rebrand Ohio | $500 Off Branding for Ohio Home Service Businesses',
  description:
    '$500 off any branding package for Ohio home service and trades businesses. Logos, van wraps, uniforms, and websites built for HVAC, plumbing, electrical, and contractors across Ohio.',
  path: '/rebrand-ohio',
});

export default function RebrandOhioPage() {
  return (
    <>
      <section className="bg-brand-navy text-white">
        <Container className="py-16 text-center md:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-red/60 bg-brand-red/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-red">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Ohio Home Service Businesses Only
          </span>
          <h1 className="mx-auto mt-5 max-w-2xl font-display text-4xl text-white md:text-5xl">
            Rebrand Ohio: $500 Off Your New Brand
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-brand-cream/90">
            We&apos;re giving Ohio HVAC, plumbing, electrical, and trades businesses $500 off any branding
            package &mdash; logos, van wraps, uniforms, and websites built to help you stand out and win
            more jobs in your local market.
          </p>
          <div className="mt-6 flex justify-center">
            <GoogleReviewsBadge />
          </div>
        </Container>
      </section>

      <Container className="py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {packages.map((pkg) => {
            const discounted = pkg.priceFrom - DISCOUNT;
            return (
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
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide">
                  <span className="text-brand-navy/40 line-through">{formatPrice(pkg.priceFrom)}</span>{' '}
                  <span className="text-brand-red">{formatPrice(discounted)}</span>
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
                  <CTAButton
                    href={`/?package=${encodeURIComponent(pkg.name)}&promo=${PROMO_CODE}#free-brand-review`}
                  >
                    Claim My $500 Off
                  </CTAButton>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-brand-navy/60">
          This offer is available to home service and trades businesses based in Ohio. Mention Rebrand Ohio
          when you reach out, or just use the buttons above &mdash; the discount is applied automatically.
        </p>
      </Container>
    </>
  );
}
