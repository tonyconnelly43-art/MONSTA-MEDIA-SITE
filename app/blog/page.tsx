import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { getAllPosts } from '@/lib/blog';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Branding & Design Blog',
  description:
    'Tips on logo design, van wrap design, and branding for home service and trades businesses in Cleveland and Northeast Ohio.',
  path: '/blog',
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <Container className="py-20">
      <h1 className="font-display text-4xl text-brand-navy md:text-5xl">Blog</h1>
      <p className="mt-4 max-w-2xl text-brand-navy/80">
        Branding, van wrap, and marketing advice for home service and trades businesses.
      </p>
      <div className="mt-12 space-y-10">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-brand-navy/10 pb-10 last:border-0">
            <h2 className="font-display text-2xl text-brand-red">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="mt-1 text-xs uppercase tracking-wide text-brand-navy/50">{post.date}</p>
            <p className="mt-3 max-w-2xl text-brand-navy/80">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="mt-3 inline-block font-semibold text-brand-red underline">
              Read more
            </Link>
          </article>
        ))}
      </div>
    </Container>
  );
}
