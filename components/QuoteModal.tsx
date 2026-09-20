'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useQuoteModal } from './QuoteModalContext';
import { BrandReviewForm } from './BrandReviewForm';

export function QuoteModal() {
  const { isOpen, selectedPackage, promo, promoLabel, closeQuoteModal } = useQuoteModal();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') closeQuoteModal();
    }
    document.addEventListener('keydown', handleKeyDown);
    panelRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeQuoteModal]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-brand-navy/80 p-4 py-10 backdrop-blur-sm sm:items-center"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeQuoteModal();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Get a free brand review"
        tabIndex={-1}
        className="relative w-full max-w-3xl outline-none"
      >
        <button
          type="button"
          onClick={closeQuoteModal}
          aria-label="Close"
          className="absolute -top-3 -right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-navy shadow-lg transition-transform hover:scale-105"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
        <BrandReviewForm selectedPackage={selectedPackage} promo={promo} promoLabel={promoLabel} />
      </div>
    </div>
  );
}
