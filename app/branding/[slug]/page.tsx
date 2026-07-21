import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { KeywordLandingPage } from '@/components/KeywordLandingPage';
import { brandingPages, getBrandingPage } from '@/lib/branding-pages';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return brandingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getBrandingPage(slug);
  if (!page) return {};

  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/branding/${page.slug}`,
  });
}

export default async function BrandingKeywordPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getBrandingPage(slug);
  if (!page) notFound();

  return <KeywordLandingPage page={page!} />;
}
