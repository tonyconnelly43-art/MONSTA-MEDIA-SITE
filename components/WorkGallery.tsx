import Image from 'next/image';
import type { WorkItem } from '@/lib/work';

const altSuffix: Record<WorkItem['type'], string> = {
  Website: 'website design',
  'Van Wrap': 'van wrap design',
  Uniform: 'uniform design',
  Print: 'print design',
};

// Website and van wrap renders are wide, full-bleed shots; uniforms and
// print pieces are product-style photos on a transparent background, so
// they get a taller frame and object-contain instead of cropping into them.
const frameByType: Record<WorkItem['type'], { aspect: string; fit: string; padded?: boolean }> = {
  Website: { aspect: 'aspect-[1440/900]', fit: 'object-cover object-top' },
  'Van Wrap': { aspect: 'aspect-[4500/3972]', fit: 'object-cover' },
  Uniform: { aspect: 'aspect-[4/5]', fit: 'object-contain', padded: true },
  Print: { aspect: 'aspect-[4/5]', fit: 'object-contain', padded: true },
};

export function WorkGallery({ items }: { items: WorkItem[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const frame = frameByType[item.type];
        return (
          <div
            key={item.slug}
            className="group overflow-hidden rounded-chunky border-2 border-brand-navy/10 bg-white transition-colors hover:border-brand-red"
          >
            <div className={`relative overflow-hidden ${frame.aspect} ${frame.padded ? 'p-6' : ''}`}>
              <Image
                src={item.image}
                alt={`${item.name} ${altSuffix[item.type]} by Monsta Media & Design`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className={`transition-transform duration-300 group-hover:scale-105 ${frame.fit}`}
              />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">{item.category}</p>
              <h3 className="mt-1 font-display text-lg text-brand-navy">{item.name}</h3>
              <p className="mt-1 text-sm text-brand-navy/60">{item.tagline}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
