'use client';

import { useEffect, useState } from 'react';
import { getConsent, onConsentChange } from '@/lib/consent';

/** Keeps analytics/tracking scripts out of the page entirely until the visitor opts in. */
export function AnalyticsGate({ children }: { children: React.ReactNode }) {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    setGranted(getConsent() === 'granted');
    return onConsentChange((value) => setGranted(value === 'granted'));
  }, []);

  if (!granted) return null;
  return <>{children}</>;
}
