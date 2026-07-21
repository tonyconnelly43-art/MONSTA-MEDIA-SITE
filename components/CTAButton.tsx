import Link from 'next/link';
import type { ReactNode } from 'react';

export function CTAButton({
  href,
  children,
  variant = 'primary',
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'inverse';
}) {
  const base =
    'inline-flex items-center justify-center rounded-chunky px-7 py-3.5 font-display uppercase tracking-wide transition-all duration-150 hover:-translate-y-0.5';
  const styles = {
    primary: 'bg-brand-red text-white shadow-[0_6px_0_0_#7a1414] hover:shadow-[0_4px_0_0_#7a1414]',
    secondary:
      'border-2 border-white/70 text-white hover:border-brand-red hover:bg-brand-red hover:text-white',
    inverse:
      'border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white',
  } as const;

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  );
}
