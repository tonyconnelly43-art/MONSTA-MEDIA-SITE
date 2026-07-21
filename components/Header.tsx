import Link from 'next/link';
import { Container } from './Container';
import { CTAButton } from './CTAButton';
import { MonsterMascot } from './MonsterMascot';
import { MobileNav } from './MobileNav';
import { primaryNav, siteConfig } from '@/lib/site-config';

export function Header() {
  return (
    <header className="relative border-b-4 border-brand-red bg-brand-navy text-white">
      <Container className="relative flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3 font-display text-2xl uppercase tracking-wide">
          <MonsterMascot className="h-11 w-11" />
          <span>{siteConfig.shortName}</span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-sm font-semibold text-white/90 transition-colors hover:text-brand-red"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <CTAButton href="/packages">Get a Quote</CTAButton>
        </div>
        <MobileNav />
      </Container>
    </header>
  );
}
