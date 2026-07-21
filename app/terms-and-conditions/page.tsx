import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { LegalPagePlaceholderNotice } from '@/components/LegalPagePlaceholder';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: 'Terms & Conditions',
  description: `Terms and conditions for ${siteConfig.name}.`,
  path: '/terms-and-conditions',
});

export default function TermsPage() {
  return (
    <Container className="py-20">
      <h1 className="font-display text-4xl text-brand-navy md:text-5xl">Terms &amp; Conditions</h1>
      <LegalPagePlaceholderNotice pageName="Terms & Conditions" />
      <div className="max-w-2xl space-y-4 text-brand-navy/80">
        <h2 className="font-display text-2xl text-brand-red">Services</h2>
        <p>[Placeholder] Describe the terms under which design and branding services are provided.</p>
        <h2 className="font-display text-2xl text-brand-red">Payment &amp; Revisions</h2>
        <p>[Placeholder] Describe payment terms, deposits, and revision policy.</p>
        <h2 className="font-display text-2xl text-brand-red">Contact</h2>
        <p>
          Questions about these terms can be sent to{' '}
          <a href={`mailto:${siteConfig.email}`} className="font-semibold text-brand-red underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </Container>
  );
}
