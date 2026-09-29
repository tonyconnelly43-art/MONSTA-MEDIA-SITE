import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/Container';
import { CTAButton } from '@/components/CTAButton';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'About Monsta Media & Design',
  description:
    "Meet Tony Connelly, founder of Monsta Media & Design — a branding agency built for home service and trades businesses.",
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-navy text-white">
        <Container className="py-16 text-center md:py-20">
          <h1 className="font-display text-4xl text-white md:text-5xl">About Monsta Media &amp; Design</h1>
          <p className="mx-auto mt-4 max-w-2xl text-brand-cream/90">
            A branding agency built specifically for home service and trades businesses.
          </p>
        </Container>
      </section>

      <Container className="py-16">
        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div className="overflow-hidden rounded-chunky border-2 border-brand-navy/10 shadow-lg">
            <Image
              src="/tony-connelly-founder.png"
              alt="Tony Connelly, founder of Monsta Media & Design"
              width={779}
              height={440}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">Founder</p>
            <h2 className="mt-1 font-display text-3xl text-brand-navy">Tony Connelly</h2>
            <p className="mt-4 text-brand-navy/80">
              I&apos;ve been into art and creating for as long as I can remember, but it turned into
              something serious in 2014, during an internship at a branding agency in Charlotte, NC. That
              was the first time I saw up close what a real brand system could do for a business, and I
              spent the years after chasing that same work.
            </p>
            <p className="mt-4 text-brand-navy/80">
              About five years ago, I started working for a branding agency built specifically for home
              service companies, and that&apos;s where it all clicked. Since then I&apos;ve helped create
              and collaborate on thousands of brands &mdash; logos, van wraps, uniforms, full identity
              systems, all of it.
            </p>
            <p className="mt-4 text-brand-navy/80">
              My favorite part of the work hasn&apos;t changed: helping home service business owners scale
              with a brand that lets them focus on what they actually do best, while Monsta Media handles
              the rest.
            </p>
            <div className="mt-8">
              <CTAButton href="/#free-brand-review">Get a Free Quote</CTAButton>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
