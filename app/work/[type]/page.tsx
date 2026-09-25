import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/Container';
import { WorkCategoryNav } from '@/components/WorkCategoryNav';
import { WorkGallery } from '@/components/WorkGallery';
import { buildMetadata } from '@/lib/seo';
import { getAvailableWorkTypes, getWorkTypeBySlug, workItems, workTypeContent, workTypeSlugs } from '@/lib/work';

export function generateStaticParams() {
  return getAvailableWorkTypes().map((type) => ({ type: workTypeSlugs[type] }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type: slug } = await params;
  const type = getWorkTypeBySlug(slug);
  if (!type) return {};

  const content = workTypeContent[type];
  return buildMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    path: `/work/${slug}`,
  });
}

export default async function WorkCategoryPage({ params }: { params: Promise<{ type: string }> }) {
  const { type: slug } = await params;
  const type = getWorkTypeBySlug(slug);
  if (!type) notFound();

  const content = workTypeContent[type];
  const items = workItems.filter((item) => item.type === type);

  return (
    <>
      <section className="bg-brand-navy text-white">
        <Container className="py-16 text-center md:py-20">
          <h1 className="font-display text-4xl text-white md:text-5xl">{content.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-brand-cream/90">{content.blurb}</p>
        </Container>
      </section>

      <Container className="py-16">
        <WorkCategoryNav activeType={type} />
        <div className="mt-10">
          <WorkGallery items={items} />
        </div>
      </Container>
    </>
  );
}
