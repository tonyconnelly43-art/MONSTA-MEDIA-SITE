import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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
    <>
      <section className="bg-brand-navy text-white">
        <Container className="py-16 text-center md:py-20">
          <h1 className="font-display text-4xl text-white md:text-5xl">Blog</h1>
          <p className="mx-auto mt-4 max-w-2xl text-brand-cream/90">
            Branding, van wrap, and marketing advice for home service and trades businesses.
          </p>
        </Container>
      </section>

      <Container className="py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-chunky border-2 border-brand-navy/10 p-6 transition-colors hover:border-brand-red"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-navy/50">{post.date}</p>
              <h2 className="mt-2 font-display text-xl text-brand-navy group-hover:text-brand-red">
                {post.title}
              </h2>
              <p className="mt-3 text-sm text-brand-navy/70">{post.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-red">
                Read more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
