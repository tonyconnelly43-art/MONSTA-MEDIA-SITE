import { AlertTriangle } from 'lucide-react';
import { Container } from './Container';

const risks = [
  {
    label: 'Lost Jobs',
    body: 'A forgettable brand blends into the noise, and homeowners scroll right past you to the competitor who looks more established.',
  },
  {
    label: 'Race to the Bottom',
    body: 'When nothing sets you apart, price becomes the only thing left to compete on, and your margins take the hit.',
  },
  {
    label: 'Mixed Signals',
    body: "A van, uniform, and website that don't match each other reads as unfinished, and unfinished doesn't earn trust.",
  },
];

export function CostOfInaction() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-brand-navy md:text-4xl">What Waiting Actually Costs</h2>
          <p className="mt-3 text-brand-navy/70">
            Every month without a real brand system is a month these keep happening:
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl space-y-4">
          {risks.map((risk) => (
            <div
              key={risk.label}
              className="flex items-start gap-4 rounded-chunky border-2 border-brand-navy/10 p-5"
            >
              <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-brand-red" aria-hidden="true" />
              <p className="text-brand-navy/80">
                <span className="font-display text-brand-navy">{risk.label}: </span>
                {risk.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
