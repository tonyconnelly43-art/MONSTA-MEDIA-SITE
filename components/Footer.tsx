import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { Container } from './Container';
import { GoogleReviewsBadge } from './GoogleReviewsBadge';
import { footerNav, primaryNav, siteConfig } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="border-t-4 border-brand-red bg-brand-navy text-brand-cream">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <Image
            src="/logo-monsta-dark-bg.png"
            alt={siteConfig.name}
            width={800}
            height={242}
            className="h-9 w-auto"
          />
          <p className="mt-3 text-sm text-brand-cream/80">{siteConfig.tagline}</p>
          <div className="mt-4">
            <GoogleReviewsBadge />
          </div>
          <div className="mt-5 flex items-center gap-3">
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

        <div className="flex flex-col gap-3 text-sm">
          <p className="font-display text-xs uppercase tracking-widest text-brand-red">Contact</p>
          <p className="text-brand-cream/80">
            {siteConfig.address.locality}, {siteConfig.address.region}
            <br />
            Serving Cleveland &amp; Northeast Ohio
          </p>
          <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-brand-red">
            <Phone className="h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
            {siteConfig.phoneDisplay}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-brand-red">
            <Mail className="h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
            {siteConfig.email}
          </a>
        </div>

        <nav aria-label="Site" className="flex flex-col gap-3 text-sm">
          <p className="font-display text-xs uppercase tracking-widest text-brand-red">Site</p>
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-red">
              {item.label}
            </Link>
          ))}
        </nav>

        <nav aria-label="Legal" className="flex flex-col gap-3 text-sm">
          <p className="font-display text-xs uppercase tracking-widest text-brand-red">Legal</p>
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
