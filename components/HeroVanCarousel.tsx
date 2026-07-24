'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { heroVans } from '@/lib/hero-vans';

const ROTATE_MS = 4000;

export function HeroVanCarousel({
  className,
  sizes,
  priority,
}: {
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroVans.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {heroVans.map((van, i) => (
        <Image
          key={van.src}
          src={van.src}
          alt={van.alt}
          fill
          priority={priority && i === 0}
          sizes={sizes}
          className={`object-contain object-center transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          } ${className ?? ''}`}
        />
      ))}
    </>
  );
}
