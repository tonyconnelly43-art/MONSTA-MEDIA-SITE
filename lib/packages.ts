export type Package = {
  name: string;
  priceFrom: number;
  description: string;
  features: string[];
  featured: boolean;
};

export const packages: Package[] = [
  {
    name: 'Starter Brand',
    priceFrom: 2250,
    description: 'A clean, professional logo and brand starter kit for new or rebranding trades businesses.',
    features: ['Custom brand design', 'Color palette & fonts', 'Business card design', '2 rounds of revisions'],
    featured: false,
  },
  {
    name: 'Fleet & Brand',
    priceFrom: 4250,
    description: 'Everything in Starter Brand, plus van wrap design and uniform artwork built to match.',
    features: ['Everything in Starter Brand', 'Van/fleet wrap design', 'Uniform & apparel design', 'Brand style guide'],
    featured: true,
  },
  {
    name: 'Full Monster',
    priceFrom: 7250,
    description: 'Our complete package: brand identity, fleet wraps, uniforms, and a custom SEO-ready website.',
    features: [
      'Everything in Fleet & Brand',
      'Custom SEO-optimized website',
      'Google Business Profile setup',
      'Ongoing brand support',
    ],
    featured: false,
  },
];

export function formatPrice(amount: number): string {
  return `Starting at $${amount.toLocaleString()}`;
}
