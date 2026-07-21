import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { LegalPagePlaceholderNotice } from '@/components/LegalPagePlaceholder';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: 'Legal Notice',
  description: `Legal information for ${siteConfig.name}.`,
  path: '/legal',
});

export default function LegalPage() {
  return (
    <Container className="py-20">
      <h1 className="font-display text-4xl text-brand-navy md:text-5xl">Legal Notice</h1>
      <LegalPagePlaceholderNotice pageName="Legal Notice" />
      <div className="max-w-2xl space-y-4 text-brand-navy/80">
        <p>
          {siteConfig.name} is based in {siteConfig.address.locality}, {siteConfig.address.region}, and
          provides branding and design services to clients throughout Cleveland and Northeast Ohio.
        </p>
        <p>
          For legal inquiries, contact us at{' '}
          <a href={`mailto:${siteConfig.email}`} className="font-semibold text-brand-red underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </Container>
  );
}
