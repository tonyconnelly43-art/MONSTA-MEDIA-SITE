import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Palette, Shirt, Truck, Zap, Globe } from 'lucide-react';
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
    icon: Palette,
    title: 'Logo & Brand Identity',
    body: 'A monster-tough logo, color system, and brand guide that makes your trucks, uniforms, and signage instantly recognizable.',
  },
  {
    icon: Truck,
    title: 'Van & Fleet Wraps',
    body: 'Full and partial van wrap design built for HVAC, plumbing, electrical, and contractor fleets that need to turn heads on every job.',
  },
  {
    icon: Globe,
    title: 'Websites & SEO',
    body: 'Fast, mobile-first websites built to rank for the home service searches your customers are already typing into Google.',
  },
  {
    icon: Shirt,
    title: 'Uniforms & Print',
    body: 'Uniform design, business cards, yard signs, and print collateral that keep your brand consistent from the truck to the doorstep.',
  },
];

const valueProps = [
  { icon: MapPin, label: 'Local to Cleveland & Northfield, OH' },
  { icon: Zap, label: 'Built for HVAC, Plumbing & Trades' },
  { icon: Palette, label: 'One Brand, Every Touchpoint' },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 text-brand-red/10 bg-monster-dots"
        />
        <Container className="relative grid items-center gap-10 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-red/60 bg-brand-red/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-red">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Cleveland &amp; Northfield, Ohio
            </span>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-white md:text-6xl">
              Branding That Eats The Competition
            </h1>
            <p className="mt-6 max-w-xl text-lg text-brand-cream/90">
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
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-lg overflow-hidden rounded-chunky border-2 border-brand-red/40 shadow-2xl">
              <Image
                src="/van-wrap-true-north.png"
                alt="True North Heating & Cooling service van with a full custom wrap design by Monsta Media & Design, featuring a bold polar bear mascot and bright teal and navy branding"
                width={1683}
                height={934}
                priority
                sizes="(min-width: 768px) 32rem, 90vw"
                className="h-auto w-full"
              />
              <div className="absolute -bottom-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full border-4 border-brand-navy bg-brand-red shadow-lg">
                <MonsterMascot className="h-10 w-10" />
              </div>
            </div>
            <p className="mt-6 text-center text-xs font-semibold uppercase tracking-widest text-brand-cream/60">
              Real Client Work &mdash; Van Wrap Design by Monsta Media &amp; Design
            </p>
          </div>
        </Container>
        <div className="relative border-t border-white/10 bg-brand-navy-light/60">
          <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-sm font-semibold text-brand-cream/90 md:justify-between">
            {valueProps.map((item) => (
              <span key={item.label} className="flex items-center gap-2">
                <item.icon className="h-4 w-4 text-brand-red" aria-hidden="true" />
                {item.label}
              </span>
            ))}
          </Container>
        </div>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="font-display text-3xl text-brand-navy md:text-4xl">What We Do</h2>
          <p className="mt-3 max-w-xl text-brand-navy/70">
            Everything your brand needs, built as one connected system.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-chunky border-2 border-brand-navy/10 p-6 transition-colors hover:border-brand-red"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <service.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-xl text-brand-navy">{service.title}</h3>
                <p className="mt-3 text-sm text-brand-navy/70">{service.body}</p>
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
          <div className="mt-8 flex justify-center">
            <CTAButton href="/packages">Get Your Free Quote</CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
