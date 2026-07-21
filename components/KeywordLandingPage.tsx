import Link from 'next/link';
import { Container } from './Container';
import { CTAButton } from './CTAButton';
import { JsonLd } from './JsonLd';
import { breadcrumbJsonLd, serviceJsonLd } from '@/lib/seo';
import type { BrandingPage } from '@/lib/branding-pages';

export function KeywordLandingPage({ page }: { page: BrandingPage }) {
  const path = `/branding/${page.slug}`;

  return (
    <>
      <JsonLd data={serviceJsonLd({ name: page.keyword, description: page.metaDescription, path })} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Branding for Home Service Companies', path: '/branding' },
          { name: page.h1, path },
        ])}
      />

      <section className="bg-brand-navy text-white">
        <Container className="py-16 md:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-brand-cream/60">
            <Link href="/" className="hover:text-brand-red">
              Home
            </Link>{' '}
            /{' '}
            <Link href="/branding" className="hover:text-brand-red">
              Branding
            </Link>{' '}
            / <span className="text-brand-cream/90">{page.h1}</span>
          </nav>
          <h1 className="mt-4 max-w-3xl font-display text-4xl text-white md:text-5xl">{page.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg text-brand-cream/90">{page.intro}</p>
          <div className="mt-8">
            <CTAButton href="/#free-brand-review">Get a Free Quote</CTAButton>
          </div>
        </Container>
      </section>

      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-2">
          {page.sections.map((section) => (
            <div key={section.heading} className="rounded-chunky border-2 border-brand-navy/10 p-8">
              <h2 className="font-display text-2xl text-brand-red">{section.heading}</h2>
              <p className="mt-3 text-brand-navy/80">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl text-brand-navy">Frequently Asked Questions</h2>
          <dl className="mt-6 space-y-6">
            {page.faqs.map((faq) => (
              <div key={faq.question} className="border-b border-brand-navy/10 pb-6">
                <dt className="font-display text-lg text-brand-navy">{faq.question}</dt>
                <dd className="mt-2 max-w-2xl text-brand-navy/70">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      <section className="bg-brand-cream py-16">
        <Container className="text-center">
          <h2 className="font-display text-2xl text-brand-navy md:text-3xl">
            Ready to build a brand that matches your work?
          </h2>
          <div className="mt-6 flex justify-center">
            <CTAButton href="/#free-brand-review">Get Your Free Quote</CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
