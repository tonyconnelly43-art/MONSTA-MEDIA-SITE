import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: 'Legal Disclaimer',
  description: `Legal disclaimer for ${siteConfig.name}.`,
  path: '/legal',
});

const sections = [
  {
    heading: '1. General Information',
    body: `The information provided by ${siteConfig.name} ("we," "our," or "us") is for general informational and educational purposes only. While we aim to provide accurate content, we make no warranties regarding its completeness, reliability, or accuracy.`,
  },
  {
    heading: '2. Professional Disclaimer',
    body: `${siteConfig.name} offers creative services including branding, graphic design, web design, and marketing content creation. All materials on this site are for informational purposes only. Any use of these materials is at your own risk.

We do not provide legal, financial, tax, or business strategy advice. Please consult a qualified professional for matters outside the scope of our design and marketing services.`,
  },
  {
    heading: '3. External Links Disclaimer',
    body: 'Our website may include links to third-party websites or tools. These links are provided for convenience and do not indicate endorsement. We are not responsible for the content or reliability of external websites.',
  },
  {
    heading: '4. Testimonials & Results',
    body: 'Client results and testimonials reflect individual experiences. Results may vary, and no guarantees are made that your business will achieve similar outcomes by using our services.',
  },
  {
    heading: '5. Copyright & Intellectual Property',
    body: `All content, graphics, images, and design assets on this website are the property of ${siteConfig.name} unless otherwise stated. You may not reproduce, copy, or distribute materials without prior written permission.`,
  },
  {
    heading: '6. Limitation of Liability',
    body: `${siteConfig.name} is not liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or our services.`,
  },
];

export default function LegalPage() {
  return (
    <Container className="py-20">
      <h1 className="font-display text-4xl text-brand-navy md:text-5xl">Legal Disclaimer</h1>
      <div className="mt-10 max-w-2xl space-y-8 text-brand-navy/80">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="font-display text-xl text-brand-red">{section.heading}</h2>
            <p className="mt-2 whitespace-pre-line">{section.body}</p>
          </div>
        ))}
        <div>
          <h2 className="font-display text-xl text-brand-red">7. Contact Us</h2>
          <p className="mt-2">
            For questions about this Legal Disclaimer or your use of our website and services, please
            contact us at{' '}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-brand-red underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </div>
    </Container>
  );
}
