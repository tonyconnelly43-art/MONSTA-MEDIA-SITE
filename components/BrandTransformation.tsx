import Image from 'next/image';
import { ArrowRight, Truck, X, Check } from 'lucide-react';
import { Container } from './Container';
import { BrandReviewForm } from './BrandReviewForm';
import { GoogleReviewsBadge } from './GoogleReviewsBadge';

const before = ['Looks generic', 'No trust', 'Competes on price', 'Gets overlooked'];
const after = ['Instant trust', 'Stands out', 'Charges more', 'Gets chosen'];

export function BrandTransformation() {
  return (
    <section id="free-brand-review" className="bg-brand-navy-light py-20 text-white">
      <Container>
        <div className="text-center">
          <h2 className="font-display text-3xl text-white md:text-4xl">Show Up Like The Obvious Choice</h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-cream/80">
            We help home service companies stand out, look professional, and win more jobs.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-chunky border-2 border-brand-red bg-brand-navy p-6">
            <p className="font-display text-xl uppercase tracking-wide text-brand-red">Before</p>
            <ul className="mt-4 space-y-2">
              {before.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-brand-cream/80">
                  <X className="h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex aspect-[16/10] items-center justify-center rounded-lg bg-white/5">
              <Truck className="h-16 w-16 text-white/20" aria-hidden="true" />
            </div>
          </div>

          <div className="flex flex-row items-center justify-center gap-2 py-2 text-brand-red md:flex-col md:py-0">
            <ArrowRight className="h-8 w-8 rotate-90 md:rotate-0" aria-hidden="true" />
            <p className="text-center text-xs font-bold uppercase tracking-widest">Brand Transformation</p>
          </div>

          <div className="rounded-chunky border-2 border-green-500 bg-brand-navy p-6">
            <p className="font-display text-xl uppercase tracking-wide text-green-500">After</p>
            <ul className="mt-4 space-y-2">
              {after.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-brand-cream/90">
                  <Check className="h-4 w-4 shrink-0 text-green-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="relative mt-5 aspect-[16/10] overflow-hidden rounded-lg">
              <Image
                src="/work/air-command.jpg"
                alt="Air Command HVAC branded van wrap by Monsta Media & Design"
                fill
                sizes="(min-width: 768px) 33vw, 90vw"
                className="object-cover object-[50%_62%]"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="font-display text-3xl text-white md:text-4xl">Free 10 Minute Brand Review</h3>
          <p className="mx-auto mt-4 max-w-md text-brand-cream/80">
            Get a custom review of your current brand and see exactly what&apos;s holding you back from
            winning more jobs.
          </p>
          <div className="mt-5 flex justify-center">
            <GoogleReviewsBadge />
          </div>
          <div className="mt-8">
            <BrandReviewForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
