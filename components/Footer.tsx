import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { Container } from './Container';
import { MonsterMascot } from './MonsterMascot';
import { footerNav, primaryNav, siteConfig } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="border-t-4 border-brand-red bg-brand-navy text-brand-cream">
      <Container className="grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <MonsterMascot className="h-9 w-9" />
            <p className="font-display text-lg uppercase tracking-wide text-white">{siteConfig.name}</p>
          </div>
          <p className="mt-3 text-sm text-brand-cream/80">{siteConfig.tagline}</p>
          <p className="mt-4 text-sm">
            {siteConfig.address.locality}, {siteConfig.address.region} &mdash; Serving Cleveland &amp; Northeast Ohio
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-brand-red" aria-hidden="true" />
            <a href={`tel:${siteConfig.phone}`} className="hover:text-brand-red">
              {siteConfig.phoneDisplay}
            </a>
          </p>
          <p className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-brand-red" aria-hidden="true" />
            <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-red">
              {siteConfig.email}
            </a>
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={siteConfig.social.facebook}
              aria-label="Monsta Media & Design on Facebook"
              className="rounded-full border border-white/20 p-2 hover:border-brand-red hover:text-brand-red"
            >
              <Facebook className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.instagram}
              aria-label="Monsta Media & Design on Instagram"
              className="rounded-full border border-white/20 p-2 hover:border-brand-red hover:text-brand-red"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <nav aria-label="Site" className="flex flex-col gap-2 text-sm">
          <p className="mb-1 font-display text-xs uppercase tracking-widest text-brand-red">Site</p>
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-red">
              {item.label}
            </Link>
          ))}
        </nav>
        <nav aria-label="Legal" className="flex flex-col gap-2 text-sm">
          <p className="mb-1 font-display text-xs uppercase tracking-widest text-brand-red">Legal</p>
          {footerNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-red">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
      <div className="border-t border-white/10 py-4 text-center text-xs text-brand-cream/60">
        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
