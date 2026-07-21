import type { Metadata } from 'next';
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
  },
  {
    icon: Truck,
    title: 'Van & Fleet Wrap Design',
    body: 'Full and partial van wrap layouts designed to be legible at 40 mph and consistent across every vehicle in your fleet.',
  },
  {
    icon: Shirt,
    title: 'Uniform & Apparel Design',
    body: 'Shirt, jacket, and hat artwork that keeps your crew looking sharp and your brand consistent on every job site.',
  },
  {
    icon: Globe,
    title: 'Website Design & SEO',
    body: 'Mobile-first websites built on modern, fast frameworks and optimized to rank for the local searches your customers use.',
  },
  {
    icon: Printer,
    title: 'Print & Signage',
    body: 'Business cards, yard signs, door hangers, and vehicle signage designed to match your full brand system.',
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
        <Container className="py-16 md:py-20">
          <h1 className="font-display text-4xl text-white md:text-5xl">Services</h1>
          <p className="mt-4 max-w-2xl text-brand-cream/90">
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
              className="flex flex-col gap-4 rounded-chunky border-2 border-brand-navy/10 p-8 sm:flex-row sm:items-start"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h2 className="font-display text-2xl text-brand-navy">{service.title}</h2>
                <p className="mt-2 max-w-2xl text-brand-navy/70">{service.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <CTAButton href="/packages">View Packages</CTAButton>
        </div>
      </Container>
    </>
  );
}
