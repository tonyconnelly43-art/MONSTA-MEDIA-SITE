import type { Metadata } from 'next';
import { siteConfig } from './site-config';

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
};

export function buildMetadata({ title, description, path, ogImage }: PageMetaInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const image = ogImage ?? '/og-default.svg';

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: image }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    areaServed: siteConfig.serviceArea,
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
  };
}

export function serviceJsonLd(opts: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: opts.name,
    provider: {
      '@type': 'ProfessionalService',
      name: siteConfig.name,
      telephone: siteConfig.phone,
    },
    areaServed: siteConfig.serviceArea,
    description: opts.description,
    url: `${siteConfig.url}${opts.path}`,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
