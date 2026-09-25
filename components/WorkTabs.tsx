'use client';

import { useMemo, useState } from 'react';
import { WorkGallery } from './WorkGallery';
import { workTypeOrder, type WorkItem, type WorkType } from '@/lib/work';

const tabLabels: Record<WorkType, string> = {
  Website: 'Websites',
  'Van Wrap': 'Van Wraps',
  Uniform: 'Uniforms',
  Print: 'Print',
};

export function WorkTabs({ items }: { items: WorkItem[] }) {
  const availableTypes = workTypeOrder.filter((type) => items.some((item) => item.type === type));
  const [activeTab, setActiveTab] = useState<WorkType | 'All'>('All');

  const filteredItems = useMemo(
    () => (activeTab === 'All' ? items : items.filter((item) => item.type === activeTab)),
    [items, activeTab],
  );

  if (availableTypes.length <= 1) {
    return <WorkGallery items={items} />;
  }

  const tabs: (WorkType | 'All')[] = ['All', ...availableTypes];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`rounded-full border-2 px-5 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
              activeTab === tab
                ? 'border-brand-red bg-brand-red text-white'
                : 'border-brand-navy/10 text-brand-navy/70 hover:border-brand-red hover:text-brand-red'
            }`}
          >
            {tab === 'All' ? 'All' : tabLabels[tab]}
          </button>
        ))}
      </div>

      <div className="mt-10">
        <WorkGallery items={filteredItems} />
      </div>
    </div>
  );
}
