'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { primaryNav } from '@/lib/site-config';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="rounded-md p-2 text-white hover:bg-white/10"
      >
        {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
      </button>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="absolute inset-x-0 top-full z-20 flex flex-col gap-1 border-t border-white/10 bg-brand-navy px-6 py-4"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 font-body text-sm font-semibold text-white hover:bg-white/5 hover:text-brand-red"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#free-brand-review"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-chunky bg-brand-red px-4 py-3 text-center font-display uppercase tracking-wide text-white"
          >
            Get a Quote
          </Link>
        </nav>
      )}
    </div>
  );
}
