import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { CTAButton } from '@/components/CTAButton';
import { MonsterMascot } from '@/components/MonsterMascot';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Branding, Web & Design Agency in Cleveland & Northfield, OH',
  description:
    'Monsta Media & Design builds bold logos, websites, van wraps, and uniform designs for home service and trades businesses in Cleveland, Northfield, and Northeast Ohio.',
  path: '/',
});

const services = [
  {
    title: 'Logo & Brand Identity',
    body: 'A monster-tough logo, color system, and brand guide that makes your trucks, uniforms, and signage instantly recognizable.',
  },
  {
    title: 'Van & Fleet Wraps',
    body: 'Full and partial van wrap design built for HVAC, plumbing, electrical, and contractor fleets that need to turn heads on every job.',
  },
  {
    title: 'Websites & SEO',
    body: 'Fast, mobile-first websites built to rank for the home service searches your customers are already typing into Google.',
  },
  {
    title: 'Uniforms & Print',
    body: 'Uniform design, business cards, yard signs, and print collateral that keep your brand consistent from the truck to the doorstep.',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-brand-navy text-white">
        <Container className="grid items-center gap-10 py-20 md:grid-cols-2">
          <div>
            <h1 className="font-display text-5xl leading-tight text-white md:text-6xl">
              Branding That Eats The Competition
            </h1>
            <p className="mt-6 text-lg text-brand-cream/90">
              Monsta Media &amp; Design is a branding and design agency in Northfield, Ohio, helping home
              service and trades businesses across Cleveland and Northeast Ohio look as good as the work
              they do &mdash; logos, van wraps, uniforms, and websites that get you noticed and get you hired.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton href="/packages">See Packages</CTAButton>
              <CTAButton href="/services" variant="secondary">
                Explore Services
              </CTAButton>
            </div>
          </div>
          <div className="flex justify-center">
            <MonsterMascot className="h-56 w-56 drop-shadow-2xl" />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="font-display text-3xl text-brand-navy md:text-4xl">What We Do</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="rounded-chunky border-2 border-brand-navy/10 p-6">
                <h3 className="font-display text-xl text-brand-red">{service.title}</h3>
                <p className="mt-3 text-sm text-brand-navy/80">{service.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-cream py-20">
        <Container className="text-center">
          <h2 className="font-display text-3xl text-brand-navy md:text-4xl">
            Serving Home Service Companies Across Cleveland &amp; Northfield, OH
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-navy/80">
            HVAC, plumbing, electrical, roofing, and trades businesses trust Monsta Media &amp; Design to
            build a brand that matches the quality of their work. See how we do it for your industry on our{' '}
            <Link href="/branding" className="font-semibold text-brand-red underline">
              branding for home service companies
            </Link>{' '}
            page.
          </p>
          <div className="mt-8">
            <CTAButton href="/packages">Get Your Free Quote</CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
