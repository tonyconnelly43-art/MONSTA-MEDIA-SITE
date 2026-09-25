import Link from 'next/link';
import { getAvailableWorkTypes, workTypeContent, workTypeSlugs, type WorkType } from '@/lib/work';

export function WorkCategoryNav({ activeType }: { activeType: WorkType }) {
  const availableTypes = getAvailableWorkTypes();

  if (availableTypes.length <= 1) return null;

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {availableTypes.map((type) => (
        <Link
          key={type}
          href={`/work/${workTypeSlugs[type]}`}
          className={`rounded-full border-2 px-5 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
            type === activeType
              ? 'border-brand-red bg-brand-red text-white'
              : 'border-brand-navy/10 text-brand-navy/70 hover:border-brand-red hover:text-brand-red'
          }`}
        >
          {workTypeContent[type].navLabel}
        </Link>
      ))}
    </div>
  );
}
