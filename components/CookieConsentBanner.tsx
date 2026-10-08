'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { getConsent, setConsent, OPEN_PREFERENCES_EVENT } from '@/lib/consent';

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (getConsent() === null) setVisible(true);
    const openHandler = () => setVisible(true);
    window.addEventListener(OPEN_PREFERENCES_EVENT, openHandler);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, openHandler);
  }, []);

  // Reserve space at the bottom of the page equal to the banner's height so it
  // never permanently covers the footer once a visitor scrolls all the way down.
  useEffect(() => {
    if (!visible) {
      document.body.style.paddingBottom = '';
      return;
    }

    function updatePadding() {
      if (bannerRef.current) {
        document.body.style.paddingBottom = `${bannerRef.current.offsetHeight}px`;
      }
    }

    updatePadding();
    window.addEventListener('resize', updatePadding);
    return () => {
      window.removeEventListener('resize', updatePadding);
      document.body.style.paddingBottom = '';
    };
  }, [visible]);

  if (!visible) return null;

  function choose(value: 'granted' | 'denied') {
    setConsent(value);
    setVisible(false);
  }

  return (
    <div
      ref={bannerRef}
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[100] border-t-4 border-brand-red bg-brand-navy px-4 py-5 text-brand-cream shadow-2xl sm:px-6"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-brand-cream/85">
          We use cookies and analytics tools (like Google Analytics and Meta Pixel) to understand how
          visitors use this site and measure ad performance. We don&apos;t turn these on until you say
          it&apos;s okay. See our{' '}
          <Link href="/privacy" className="font-bold text-brand-red hover:underline">
            Privacy Policy
          </Link>{' '}
          for details.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose('denied')}
            className="rounded-chunky border-2 border-white/25 px-4 py-2 text-sm font-semibold uppercase text-brand-cream hover:border-white"
          >
            Necessary Only
          </button>
          <button
            type="button"
            onClick={() => choose('granted')}
            className="rounded-chunky bg-brand-red px-5 py-2 text-sm font-bold uppercase text-white transition-colors hover:bg-brand-red-dark"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
