import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Container } from '@/components/Container';
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = getPostBySlug(slug);
    return buildMetadata({
      title: meta.title,
      description: meta.description,
      path: `/blog/${meta.slug}`,
    });
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const { meta, content } = post!;

  return (
    <Container className="py-20">
      <article className="prose prose-headings:font-display prose-headings:text-brand-navy prose-a:text-brand-red max-w-3xl">
        <p className="text-xs uppercase tracking-wide text-brand-navy/50">{meta.date}</p>
        <h1>{meta.title}</h1>
        <MDXRemote source={content} />
      </article>
    </Container>
  );
}
