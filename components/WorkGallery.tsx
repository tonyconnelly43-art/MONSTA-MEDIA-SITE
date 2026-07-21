import Image from 'next/image';
import type { WorkItem } from '@/lib/work';

export function WorkGallery({ items }: { items: WorkItem[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.slug}
          className="group overflow-hidden rounded-chunky border-2 border-brand-navy/10 bg-white transition-colors hover:border-brand-red"
        >
          <div className="relative aspect-[11/6] overflow-hidden">
            <Image
              src={item.image}
              alt={`${item.name} van wrap design by Monsta Media & Design`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">{item.category}</p>
            <h3 className="mt-1 font-display text-lg text-brand-navy">{item.name}</h3>
            <p className="mt-1 text-sm text-brand-navy/60">{item.tagline}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
