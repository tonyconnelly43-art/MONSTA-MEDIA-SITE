import Link from 'next/link';
import { Container } from '@/components/Container';
import { MonsterMascot } from '@/components/MonsterMascot';

export default function NotFound() {
  return (
    <section className="bg-brand-navy text-white">
      <Container className="py-20 text-center md:py-24">
        <MonsterMascot className="mx-auto h-24 w-24" />
        <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-brand-red">404 Error</p>
        <h1 className="mt-2 font-display text-4xl text-white md:text-5xl">This Page Got Eaten</h1>
        <p className="mx-auto mt-4 max-w-xl text-brand-cream/90">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-chunky bg-brand-red px-7 py-3.5 font-display uppercase tracking-wide text-white shadow-[0_6px_0_0_#7a1414] transition-all duration-150 hover:-translate-y-0.5"
          >
            Back to Home
          </Link>
          <Link
            href="/work/van-wraps"
            className="inline-flex items-center justify-center rounded-chunky border-2 border-white/70 px-7 py-3.5 font-display uppercase tracking-wide text-white transition-all duration-150 hover:-translate-y-0.5 hover:border-brand-red hover:bg-brand-red"
          >
            See Our Work
          </Link>
        </div>
      </Container>
    </section>
  );
}
