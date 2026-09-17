'use client';

import { useEffect } from 'react';
import { captureAttributionFromUrl } from '@/lib/attribution';

/** Mounted once in the root layout — captures ?utm_source=... etc. on every page load. */
export function AttributionCapture() {
  useEffect(() => {
    captureAttributionFromUrl();
  }, []);
  return null;
}
