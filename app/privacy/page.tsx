import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { LegalPagePlaceholderNotice } from '@/components/LegalPagePlaceholder';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: `Privacy policy for ${siteConfig.name}.`,
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <Container className="py-20">
      <h1 className="font-display text-4xl text-brand-navy md:text-5xl">Privacy Policy</h1>
      <LegalPagePlaceholderNotice pageName="Privacy Policy" />
      <div className="max-w-2xl space-y-4 text-brand-navy/80">
        <h2 className="font-display text-2xl text-brand-red">Information We Collect</h2>
        <p>
          [Placeholder] Describe what information is collected via contact forms, quote requests, and site
          analytics.
        </p>
        <h2 className="font-display text-2xl text-brand-red">How We Use Information</h2>
        <p>[Placeholder] Describe how submitted information is used to respond to inquiries and quotes.</p>
        <h2 className="font-display text-2xl text-brand-red">Contact</h2>
        <p>
          Questions about this policy can be sent to{' '}
          <a href={`mailto:${siteConfig.email}`} className="font-semibold text-brand-red underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </Container>
  );
}
