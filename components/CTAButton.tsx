import Link from 'next/link';
import type { ReactNode } from 'react';

export function CTAButton({
  href,
  children,
  variant = 'primary',
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  const base =
    'inline-flex items-center justify-center rounded-chunky px-6 py-3 font-display font-bold uppercase tracking-wide transition-colors';
  const styles =
    variant === 'primary'
      ? 'bg-brand-red text-white hover:bg-brand-red-dark'
      : 'border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white';

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
