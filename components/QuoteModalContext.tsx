'use client';

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { promos } from '@/lib/promos';

type QuoteModalOptions = {
  selectedPackage?: string;
  promo?: string;
};

type QuoteModalState = {
  isOpen: boolean;
  selectedPackage?: string;
  promo?: string;
  promoLabel?: string;
};

type QuoteModalContextValue = QuoteModalState & {
  openQuoteModal: (options?: QuoteModalOptions) => void;
  closeQuoteModal: () => void;
};

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<QuoteModalState>({ isOpen: false });

  const openQuoteModal = useCallback((options?: QuoteModalOptions) => {
    setState({
      isOpen: true,
      selectedPackage: options?.selectedPackage,
      promo: options?.promo,
      promoLabel: options?.promo ? promos[options.promo] : undefined,
    });
  }, []);

  const closeQuoteModal = useCallback(() => {
    setState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const value = useMemo(
    () => ({ ...state, openQuoteModal, closeQuoteModal }),
    [state, openQuoteModal, closeQuoteModal],
  );

  return <QuoteModalContext.Provider value={value}>{children}</QuoteModalContext.Provider>;
}

export function useQuoteModal() {
  const ctx = useContext(QuoteModalContext);
  if (!ctx) throw new Error('useQuoteModal must be used within a QuoteModalProvider');
  return ctx;
}

/** Parses `package`/`promo` query params off a "/?package=...&promo=...#free-brand-review" style href. */
export function parseQuoteHref(href: string): QuoteModalOptions | null {
  const hashIndex = href.indexOf('#free-brand-review');
  if (hashIndex === -1) return null;
  const query = href.slice(0, hashIndex).split('?')[1] ?? '';
  const params = new URLSearchParams(query);
  return {
    selectedPackage: params.get('package') ?? undefined,
    promo: params.get('promo') ?? undefined,
  };
}
