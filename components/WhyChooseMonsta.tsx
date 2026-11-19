import { BrandMark } from './BrandMark';
import { Container } from './Container';
import { CTAButton } from './CTAButton';

export function WhyChooseMonsta() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 text-brand-navy/5 bg-monster-dots" />
      <Container className="relative">
        <h2 className="text-center font-display text-3xl text-brand-navy md:text-4xl">
          Why Choose <span className="text-brand-red">Monsta</span>
        </h2>

        <div className="relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-chunky bg-brand-navy p-8 text-brand-cream/90 md:p-12">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 text-white/[0.06] bg-monster-dots" />
          <div className="relative flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
            <BrandMark
              className="shrink-0"
              emblemClassName="h-28 w-auto md:h-44"
              mascotClassName="-ml-5 h-24 w-auto md:-ml-8 md:h-40"
            />
            <div>
              <p>
                Most companies settle for looking &ldquo;good enough.&rdquo; We don&apos;t. Monsta Media
                &amp; Design builds bold brands, van wraps, uniforms, and websites for HVAC, plumbing,
                electrical, and other home service companies across Cleveland and Northfield, Ohio.
              </p>
              <p className="mt-5">
                Our goal isn&apos;t just design &mdash; it&apos;s a brand that gets you noticed, wins more
                jobs, and turns your work van into your best sales tool. When you work with us, you&apos;re
                not just another client &mdash; you&apos;re becoming a Monsta in your market.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <CTAButton href="/#free-brand-review">Let&apos;s Build My Brand</CTAButton>
        </div>
      </Container>
    </section>
  );
}
