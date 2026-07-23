import { Container } from './Container';
import { CTAButton } from './CTAButton';
import { MonsterMascot } from './MonsterMascot';

export function WhyChooseMonsta() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 text-brand-navy/5 bg-monster-dots" />
      <Container className="relative">
        <h2 className="text-center font-display text-3xl text-brand-navy md:text-4xl">
          Why Choose <span className="text-brand-red">Monsta</span>
        </h2>

        <div className="mx-auto mt-10 max-w-3xl rounded-chunky bg-brand-navy p-8 text-center text-brand-cream/90 md:p-12">
          <p>
            Most companies settle for looking &ldquo;good enough.&rdquo; We don&apos;t. Monsta Media &amp;
            Design builds bold brands, van wraps, uniforms, and websites for HVAC, plumbing, electrical, and
            other home service companies across Cleveland and Northfield, Ohio.
          </p>
          <p className="mt-5">
            Our goal isn&apos;t just design &mdash; it&apos;s a brand that gets you noticed, wins more jobs,
            and turns your work van into your best sales tool. When you work with us, you&apos;re not just
            another client &mdash; you&apos;re becoming a Monsta in your market.
          </p>
          <MonsterMascot className="mx-auto mt-6 h-16 w-16" />
        </div>

        <div className="mt-10 flex justify-center">
          <CTAButton href="/#free-brand-review">Let&apos;s Build My Brand</CTAButton>
        </div>
      </Container>
    </section>
  );
}
