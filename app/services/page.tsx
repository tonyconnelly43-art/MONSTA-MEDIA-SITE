import type { Metadata } from 'next';
import Image from 'next/image';
import { Globe, Palette, Printer, Shirt, Truck } from 'lucide-react';
import { Container } from '@/components/Container';
import { CTAButton } from '@/components/CTAButton';
import { JsonLd } from '@/components/JsonLd';
import { buildMetadata, serviceJsonLd } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Design & Branding Services for Trades Businesses',
  description:
    'Logo design, van wrap design, uniform design, and websites for HVAC, plumbing, electrical, and other home service businesses in Cleveland and Northeast Ohio.',
  path: '/services',
});

const services = [
  {
    icon: Palette,
    title: 'Logo & Brand Identity Design',
    body: 'We design logos and full brand identity systems built to work everywhere your business shows up: trucks, signage, uniforms, and your website.',
    image: '/logo-monsta-dark-bg.png',
    imageMode: 'logo' as const,
  },
  {
    icon: Truck,
    title: 'Van & Fleet Wrap Design',
    body: 'Full and partial van wrap layouts designed to be legible at 40 mph and consistent across every vehicle in your fleet.',
    image: '/services-van-wrap.jpg',
    imageMode: 'photo' as const,
  },
  {
    icon: Shirt,
    title: 'Uniform & Apparel Design',
    body: 'Shirt, jacket, and hat artwork that keeps your crew looking sharp and your brand consistent on every job site.',
    image: null,
    imageMode: null,
  },
  {
    icon: Globe,
    title: 'Website Design & SEO',
    body: 'Mobile-first websites built on modern, fast frameworks and optimized to rank for the local searches your customers use.',
    image: '/services-website-design.jpg',
    imageMode: 'photo' as const,
  },
  {
    icon: Printer,
    title: 'Print & Signage',
    body: 'Business cards, yard signs, door hangers, and vehicle signage designed to match your full brand system.',
    image: '/services-print-signage.jpg',
    imageMode: 'photo' as const,
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: 'Branding & Design Services for Home Service Businesses',
          description:
            'Logo design, van wrap design, uniform design, and website design for trades and home service companies.',
          path: '/services',
        })}
      />
      <section className="bg-brand-navy text-white">
        <Container className="py-16 text-center md:py-20">
          <h1 className="font-display text-4xl text-white md:text-5xl">Services</h1>
          <p className="mx-auto mt-4 max-w-2xl text-brand-cream/90">
            From the logo on your invoice to the wrap on your work van, we design every piece of your brand
            so it works together &mdash; and works for you.
          </p>
        </Container>
      </section>

      <Container className="py-16">
        <div className="space-y-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative flex flex-col gap-4 overflow-hidden rounded-chunky border-2 border-brand-navy/10 p-8 sm:flex-row sm:items-center"
            >
              <div className="relative z-10 flex flex-1 flex-col gap-4 sm:flex-row sm:items-center sm:pr-32 md:pr-44">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-display text-2xl text-brand-navy">{service.title}</h2>
                  <p className="mt-2 max-w-2xl text-brand-navy/70">{service.body}</p>
                </div>
              </div>

              {service.imageMode === 'photo' && service.image && (
                <div className="absolute inset-y-0 right-0 hidden w-40 sm:block md:w-56">
                  <Image
                    src={service.image}
                    alt={`${service.title} example by Monsta Media & Design`}
                    fill
                    sizes="(min-width: 768px) 224px, 160px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 via-20% to-transparent to-55%" />
                </div>
              )}

              {service.imageMode === 'logo' && service.image && (
                <div className="absolute inset-y-0 right-0 hidden w-40 items-center justify-center bg-brand-navy sm:flex md:w-56">
                  <Image
                    src={service.image}
                    alt="Monsta Media & Design logo"
                    width={800}
                    height={242}
                    className="relative h-10 w-auto md:h-12"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent to-40%" />
                </div>
              )}

              {service.imageMode === null && (
                <div className="absolute inset-y-0 right-0 hidden w-40 items-center justify-center sm:flex md:w-56">
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/15 via-25% to-brand-red/10" />
                  <service.icon className="relative h-16 w-16 text-brand-red/25 md:h-20 md:w-20" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <CTAButton href="/#free-brand-review">Get a Free Quote</CTAButton>
          <CTAButton href="/packages" variant="inverse">
            View Packages
          </CTAButton>
        </div>
      </Container>
    </>
  );
}
