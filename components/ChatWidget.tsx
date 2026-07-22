'use client';

import { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex w-56 flex-col overflow-hidden rounded-chunky border border-brand-navy/10 bg-white shadow-xl">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-cream"
          >
            <Phone className="h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
            Call {siteConfig.phoneDisplay}
          </a>
          <a
            href={`sms:${siteConfig.phone}`}
            className="flex items-center gap-3 border-t border-brand-navy/10 px-4 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-cream"
          >
            <MessageCircle className="h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
            Text {siteConfig.phoneDisplay}
          </a>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close contact options' : 'Call or text us'}
        className="flex items-center gap-2 rounded-full bg-brand-red px-5 py-3 font-display text-sm uppercase tracking-wide text-white shadow-lg transition-transform hover:scale-105"
      >
        {open ? (
          <X className="h-5 w-5" aria-hidden="true" />
        ) : (
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        )}
        {open ? 'Close' : 'Call or Text Us'}
      </button>
    </div>
  );
}
