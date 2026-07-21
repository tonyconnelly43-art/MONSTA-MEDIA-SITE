import { Container } from './Container';
import { CTAButton } from './CTAButton';
import { JsonLd } from './JsonLd';
import { breadcrumbJsonLd, serviceJsonLd } from '@/lib/seo';
import type { BrandingPage } from '@/lib/branding-pages';

export function KeywordLandingPage({ page }: { page: BrandingPage }) {
  const path = `/branding/${page.slug}`;

  return (
    <Container className="py-20">
      <JsonLd data={serviceJsonLd({ name: page.keyword, description: page.metaDescription, path })} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Branding for Home Service Companies', path: '/branding' },
          { name: page.h1, path },
        ])}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-brand-navy/60">
        <a href="/" className="hover:text-brand-red">
          Home
        </a>{' '}
        /{' '}
        <a href="/branding" className="hover:text-brand-red">
          Branding
        </a>{' '}
        / <span>{page.h1}</span>
      </nav>
      <h1 className="mt-4 font-display text-4xl text-brand-navy md:text-5xl">{page.h1}</h1>
      <p className="mt-6 max-w-2xl text-lg text-brand-navy/80">{page.intro}</p>
      <div className="mt-6">
        <CTAButton href="/packages">Get a Free Quote</CTAButton>
      </div>

      <div className="mt-16 space-y-10">
        {page.sections.map((section) => (
          <div key={section.heading}>
            <h2 className="font-display text-2xl text-brand-red">{section.heading}</h2>
            <p className="mt-3 max-w-2xl text-brand-navy/80">{section.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="font-display text-2xl text-brand-red">Frequently Asked Questions</h2>
        <dl className="mt-6 space-y-6">
          {page.faqs.map((faq) => (
            <div key={faq.question}>
              <dt className="font-semibold text-brand-navy">{faq.question}</dt>
              <dd className="mt-1 max-w-2xl text-brand-navy/80">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Container>
  );
}
