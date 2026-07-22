import Image from 'next/image';
import Link from 'next/link';
import { Container } from './Container';
import { CTAButton } from './CTAButton';
import { MobileNav } from './MobileNav';
import { primaryNav, siteConfig } from '@/lib/site-config';

export function Header() {
  return (
    <header className="relative border-b-4 border-brand-red bg-brand-navy text-white">
      <Container className="relative flex items-center justify-between py-5">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-monsta-dark-bg.png"
            alt={siteConfig.name}
            width={800}
            height={242}
            priority
            className="h-12 w-auto md:h-16"
          />
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
          <CTAButton href="/#free-brand-review">Get a Quote</CTAButton>
        </div>
        <MobileNav />
      </Container>
    </header>
  );
}
