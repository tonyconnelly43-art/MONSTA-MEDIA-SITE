import type { MetadataRoute } from 'next';
import { brandingPages } from '@/lib/branding-pages';
import { getAllPostSlugs } from '@/lib/blog';
import { siteConfig } from '@/lib/site-config';
import { getAvailableWorkTypes, workTypeSlugs } from '@/lib/work';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/services',
    '/packages',
    '/blog',
    '/branding',
    '/rebrand-ohio',
    '/legal',
    '/privacy',
    '/terms-and-conditions',
  ];

  const brandingRoutes = brandingPages.map((page) => `/branding/${page.slug}`);
  const blogRoutes = getAllPostSlugs().map((slug) => `/blog/${slug}`);
  const workRoutes = getAvailableWorkTypes().map((type) => `/work/${workTypeSlugs[type]}`);

  return [...staticRoutes, ...brandingRoutes, ...blogRoutes, ...workRoutes].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));
}
