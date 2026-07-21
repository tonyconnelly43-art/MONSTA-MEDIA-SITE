import type { MetadataRoute } from 'next';
import { brandingPages } from '@/lib/branding-pages';
import { getAllPostSlugs } from '@/lib/blog';
import { siteConfig } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/services',
    '/packages',
    '/blog',
    '/branding',
    '/legal',
    '/privacy',
    '/terms-and-conditions',
  ];

  const brandingRoutes = brandingPages.map((page) => `/branding/${page.slug}`);
  const blogRoutes = getAllPostSlugs().map((slug) => `/blog/${slug}`);

  return [...staticRoutes, ...brandingRoutes, ...blogRoutes].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));
}
