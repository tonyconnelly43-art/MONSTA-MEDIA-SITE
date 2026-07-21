import type { Metadata } from 'next';
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
    title: 'Logo & Brand Identity Design',
    body: 'We design logos and full brand identity systems built to work everywhere your business shows up: trucks, signage, uniforms, and your website.',
  },
  {
    title: 'Van & Fleet Wrap Design',
    body: 'Full and partial van wrap layouts designed to be legible at 40 mph and consistent across every vehicle in your fleet.',
  },
  {
    title: 'Uniform & Apparel Design',
    body: 'Shirt, jacket, and hat artwork that keeps your crew looking sharp and your brand consistent on every job site.',
  },
  {
    title: 'Website Design & SEO',
    body: 'Mobile-first websites built on modern, fast frameworks and optimized to rank for the local searches your customers use.',
  },
  {
    title: 'Print & Signage',
    body: 'Business cards, yard signs, door hangers, and vehicle signage designed to match your full brand system.',
  },
];

export default function ServicesPage() {
  return (
    <Container className="py-20">
      <JsonLd
        data={serviceJsonLd({
          name: 'Branding & Design Services for Home Service Businesses',
          description:
            'Logo design, van wrap design, uniform design, and website design for trades and home service companies.',
          path: '/services',
        })}
      />
      <h1 className="font-display text-4xl text-brand-navy md:text-5xl">Services</h1>
      <p className="mt-4 max-w-2xl text-brand-navy/80">
        From the logo on your invoice to the wrap on your work van, we design every piece of your brand so
        it works together &mdash; and works for you.
      </p>
      <div className="mt-12 space-y-10">
        {services.map((service) => (
          <div key={service.title} className="border-b border-brand-navy/10 pb-10 last:border-0">
            <h2 className="font-display text-2xl text-brand-red">{service.title}</h2>
            <p className="mt-3 max-w-2xl text-brand-navy/80">{service.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <CTAButton href="/packages">View Packages</CTAButton>
      </div>
    </Container>
  );
}
