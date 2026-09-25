import type { WorkItem } from '@/lib/work';
import { WorkCard } from './WorkCard';

export function WorkGallery({ items }: { items: WorkItem[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <WorkCard key={item.slug} item={item} />
      ))}
    </div>
  );
}
