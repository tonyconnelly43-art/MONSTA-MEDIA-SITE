import Link from 'next/link';
import { Container } from './Container';
import { CTAButton } from './CTAButton';
import { MonsterMascot } from './MonsterMascot';
import { primaryNav, siteConfig } from '@/lib/site-config';

export function Header() {
  return (
    <header className="bg-brand-navy text-white">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 font-display text-xl font-bold">
          <MonsterMascot className="h-10 w-10" />
          <span>{siteConfig.shortName}</span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="font-body text-sm font-semibold hover:text-brand-red">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <CTAButton href="/packages">Get a Quote</CTAButton>
        </div>
      </Container>
    </header>
  );
}
