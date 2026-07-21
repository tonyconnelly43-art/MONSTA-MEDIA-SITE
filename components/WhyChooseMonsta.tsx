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
            Most companies settle for looking &ldquo;good enough.&rdquo; That&apos;s not what we do. At
            Monsta Media &amp; Design, we help home service businesses become the obvious choice in their
            area. We build bold, high-impact brands backed by marketing strategies designed to get
            attention, generate leads, and drive real growth.
          </p>
          <p className="mt-5">
            Our goal isn&apos;t just to deliver design &mdash; it&apos;s to create a clear vision of where
            your business can go, and then help you get there. The result? A brand that stands out, wins
            more jobs, and delivers a return far greater than the investment.
          </p>
          <p className="mt-5">
            When you work with us, you&apos;re not just another client &mdash; you&apos;re becoming a
            Monsta in your market.
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
