import Link from 'next/link';
import { Container } from './Container';
import { footerNav, primaryNav, siteConfig } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="bg-brand-navy text-brand-cream">
      <Container className="grid gap-8 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold text-white">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-brand-cream/80">{siteConfig.tagline}</p>
          <p className="mt-4 text-sm">
            {siteConfig.address.locality}, {siteConfig.address.region} &mdash; Serving Cleveland &amp; Northeast Ohio
          </p>
          <p className="mt-1 text-sm">
            <a href={`tel:${siteConfig.phone}`} className="hover:text-brand-red">
              {siteConfig.phoneDisplay}
            </a>
          </p>
          <p className="text-sm">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-red">
              {siteConfig.email}
            </a>
          </p>
        </div>
        <nav aria-label="Site" className="flex flex-col gap-2 text-sm">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-red">
              {item.label}
            </Link>
          ))}
        </nav>
        <nav aria-label="Legal" className="flex flex-col gap-2 text-sm">
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
