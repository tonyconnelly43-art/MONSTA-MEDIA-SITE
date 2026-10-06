'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CTAButton } from './CTAButton';
import { Container } from './Container';
import { recentWorkItems } from '@/lib/recent-work';

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-chunky border-2 border-brand-navy/10 bg-white shadow-lg">
      <div className="flex items-center gap-1.5 border-b border-brand-navy/10 bg-brand-navy/5 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-brand-red/60" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand-navy/20" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand-navy/20" aria-hidden="true" />
      </div>
      {children}
    </div>
  );
}

export function RecentWork() {
  const [index, setIndex] = useState(0);
  const item = recentWorkItems[index];

  function goTo(next: number) {
    setIndex((next + recentWorkItems.length) % recentWorkItems.length);
  }

  return (
    <section className="bg-brand-cream py-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className={`relative ${item.type === 'website' ? 'pb-10 pl-8 sm:pb-14 sm:pl-12' : ''}`}>
            {item.type === 'website' ? (
              <>
                <BrowserFrame>
                  <div className="relative aspect-[1440/900]">
                    <Image
                      src={item.desktopImage}
                      alt={`${item.title}, designed and built by Monsta Media & Design`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                </BrowserFrame>

                <div className="absolute bottom-0 left-0 w-28 overflow-hidden rounded-[1.5rem] border-[5px] border-brand-navy bg-brand-navy shadow-2xl sm:w-36">
                  <div className="relative aspect-[390/844]">
                    <Image
                      src={item.mobileImage}
                      alt={`${item.title} on mobile`}
                      fill
                      sizes="144px"
                      className="object-cover object-top"
                    />
                    <span
                      className="absolute left-1/2 top-1.5 h-1 w-8 -translate-x-1/2 rounded-full bg-white/30"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </>
            ) : (
              <BrowserFrame>
                <div className="relative aspect-video bg-brand-navy">
                  <video
                    key={item.videoSrc}
                    src={item.videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                </div>
              </BrowserFrame>
            )}
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">Recent Work</p>
            <h2 className="mt-2 font-display text-3xl text-brand-navy md:text-4xl">{item.title}</h2>
            <p className="mt-4 text-brand-navy/70">{item.description}</p>
            {item.type === 'website' && (
              <div className="mt-6">
                <CTAButton href={item.visitUrl} variant="inverse" external>
                  Visit Site
                </CTAButton>
              </div>
            )}
          </div>
        </div>

        {recentWorkItems.length > 1 && (
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous project"
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-navy/20 text-brand-navy transition-colors hover:border-brand-red hover:text-brand-red"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2">
              {recentWorkItems.map((workItem, i) => (
                <button
                  key={workItem.slug}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to ${workItem.title}`}
                  aria-current={i === index}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    i === index ? 'bg-brand-red' : 'bg-brand-navy/20'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next project"
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-navy/20 text-brand-navy transition-colors hover:border-brand-red hover:text-brand-red"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
