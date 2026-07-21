export const siteConfig = {
  name: 'Monsta Media & Design',
  shortName: 'Monsta Media',
  tagline: 'Branding that eats the competition.',
  url: 'https://www.monstamediaanddesign.com',
  description:
    'Monsta Media & Design is a branding and design agency in Northfield, Ohio, building bold logos, van wraps, uniforms, and brand systems for home service and trades businesses across Cleveland and Northeast Ohio.',
  phone: '+1-330-000-0000',
  phoneDisplay: '(330) 000-0000',
  email: 'hello@monstamediaanddesign.com',
  address: {
    locality: 'Northfield',
    region: 'OH',
    postalCode: '44067',
    country: 'US',
  },
  serviceArea: ['Northfield, OH', 'Cleveland, OH', 'Akron, OH', 'Northeast Ohio'],
  social: {
    facebook: 'https://www.facebook.com/monstamediaanddesign',
    instagram: 'https://www.instagram.com/monstamediaanddesign',
  },
  colors: {
    red: '#D62828',
    navy: '#0A1930',
  },
} as const;

export const primaryNav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Packages', href: '/packages' },
  { label: 'Branding for Trades', href: '/branding' },
  { label: 'Blog', href: '/blog' },
] as const;

export const footerNav = [
  { label: 'Legal', href: '/legal' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
] as const;
