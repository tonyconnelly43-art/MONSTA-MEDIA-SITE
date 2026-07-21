import { Container } from './Container';
import { CTAButton } from './CTAButton';

const steps = [
  {
    number: '01',
    title: 'The Problem',
    body: "Have a call with us to figure out your brand's pain points and get turned in the right direction.",
  },
  {
    number: '02',
    title: 'The Solution',
    body: 'We work with you to come up with the perfect brand identity for your market. On approval, we design your brand and all assets.',
  },
  {
    number: '03',
    title: 'Delivery',
    body: 'We deliver all the brand files you need to start your new brand.',
  },
];

export function ProcessSteps() {
  return (
    <section className="bg-brand-navy py-20 text-white">
      <Container>
        <div className="text-center">
          <h2 className="font-display text-3xl text-white md:text-4xl">What A Simple Process!</h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-cream/80">
            Just a simple 3 step process is all it takes to get your new brand launched.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number}>
              <p className="font-display text-6xl text-white/20 md:text-7xl">{step.number}</p>
              <h3 className="mt-2 font-display text-2xl text-brand-red">{step.title}</h3>
              <p className="mt-3 text-brand-cream/80">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <CTAButton href="/#free-brand-review">Let&apos;s Build My Brand</CTAButton>
        </div>
      </Container>
    </section>
  );
}
