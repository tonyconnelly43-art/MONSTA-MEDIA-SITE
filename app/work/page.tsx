import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { WorkGallery } from '@/components/WorkGallery';
import { workItems } from '@/lib/work';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Our Work | Brand & Van Wrap Portfolio',
  description:
    'A gallery of brand identities and van wrap designs Monsta Media & Design has built for HVAC, plumbing, electrical, and other home service businesses.',
  path: '/work',
});

export default function WorkPage() {
  return (
    <>
      <section className="bg-brand-navy text-white">
        <Container className="py-16 md:py-20">
          <h1 className="font-display text-4xl text-white md:text-5xl">Our Work</h1>
          <p className="mt-4 max-w-2xl text-brand-cream/90">
            A look at brand identities and van wrap designs we&apos;ve built for home service and trades
            businesses. Every brand gets its own logo, color system, and van wrap designed to work together.
          </p>
        </Container>
      </section>

      <Container className="py-16">
        <WorkGallery items={workItems} />
      </Container>
    </>
  );
}
