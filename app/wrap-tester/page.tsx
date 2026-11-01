import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { CTAButton } from '@/components/CTAButton';
import { WrapTester } from '@/components/WrapTester';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Wrap Reality Check — Free Tool',
  description:
    'Upload your van wrap and see how it actually reads from a distance, in a mirror, at dusk, or to a colorblind driver — not just how it looks on your screen.',
  path: '/wrap-tester',
});

const checks = [
  {
    title: 'Stop',
    body: 'Does it grab attention in the two seconds someone actually has to notice it?',
  },
  {
    title: 'Read',
    body: 'Can they tell who you are and what you do without squinting or getting close?',
  },
  {
    title: 'Call',
    body: 'Is the phone number or website actually legible, or lost in the noise?',
  },
];

export default function WrapTesterPage() {
  return (
    <>
      <section className="bg-brand-navy py-16 text-white md:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-red">
            A Free Tool From Monsta Media
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] text-white md:text-6xl">
            Wrap Reality Check
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-brand-cream/80">
            A driver gives your van about two seconds. Upload your wrap and see what actually survives
            distance, motion, bad light, and a quick glance &mdash; not just how it looks zoomed in on your
            screen.
          </p>
        </Container>
      </section>

      <section className="bg-brand-navy-light py-12 md:py-16">
        <Container>
          <WrapTester />
        </Container>
      </section>

      <section className="bg-brand-cream py-16">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-red">
            What Every Test Is Really Checking
          </p>
          <h2 className="mt-2 font-display text-3xl text-brand-navy md:text-4xl">
            Three Questions a Wrap Has to Answer
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {checks.map((c) => (
              <div key={c.title} className="rounded-chunky bg-white p-6 shadow-sm">
                <p className="font-display text-2xl text-brand-red">{c.title}</p>
                <p className="mt-2 text-sm text-brand-navy/70">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm text-brand-navy/60">
            A wrap that still answers all three after being blurred, flipped, drained of color, and hit with
            glare is one that actually works on the road &mdash; not just in a mockup.
          </p>
        </Container>
      </section>

      <section className="bg-brand-navy py-20 text-center text-white">
        <Container>
          <h2 className="font-display text-3xl text-white md:text-4xl">Not Passing Its Own Tests?</h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-cream/80">
            If your wrap is losing the message under real road conditions, that&apos;s a design problem, not
            a vinyl problem &mdash; and it&apos;s fixable.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <CTAButton href="/#free-brand-review">Get a Free Wrap Review</CTAButton>
            <CTAButton href="/work/van-wraps" variant="secondary">
              See Our Van Wrap Work
            </CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
