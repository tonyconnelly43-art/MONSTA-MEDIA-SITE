import Image from 'next/image';
import { CTAButton } from './CTAButton';
import { Container } from './Container';

export function RecentWork() {
  return (
    <section className="bg-brand-cream py-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="overflow-hidden rounded-chunky border-2 border-brand-navy/10 bg-white shadow-lg">
            <div className="flex items-center gap-1.5 border-b border-brand-navy/10 bg-brand-navy/5 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-red/60" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-navy/20" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-navy/20" aria-hidden="true" />
            </div>
            <div className="relative aspect-[1440/900]">
              <Image
                src="/work-good-hope-hvac.png"
                alt="Good Hope Air Conditioning & Heating website homepage, designed and built by Monsta Media & Design"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">Recent Work</p>
            <h2 className="mt-2 font-display text-3xl text-brand-navy md:text-4xl">
              Good Hope Air Conditioning &amp; Heating Website
            </h2>
            <p className="mt-4 text-brand-navy/70">
              A full custom website built for a Hemet, CA HVAC company &mdash; complete with service area
              pages, real customer videos, and a lead-capture system built to turn visitors into booked
              jobs.
            </p>
            <div className="mt-6">
              <CTAButton href="#" variant="inverse">
                Visit Site
              </CTAButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
