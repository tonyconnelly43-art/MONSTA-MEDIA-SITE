const STORAGE_KEY = 'monsta_attribution';

export interface StoredAttribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

/**
 * Reads utm_source/utm_medium/utm_campaign off the current URL and saves them
 * to sessionStorage, so whichever page a paid-ad click lands on, the value
 * survives if the visitor browses elsewhere before actually submitting the
 * quote form. sessionStorage (not localStorage) is deliberate: a much later
 * return visit with no ad params should read as organic, not get credited to
 * an ad click from weeks ago.
 */
export function captureAttributionFromUrl(): void {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  const utm_source = params.get('utm_source');
  const utm_medium = params.get('utm_medium');
  const utm_campaign = params.get('utm_campaign');
  if (!utm_source && !utm_medium && !utm_campaign) return;

  const next: StoredAttribution = {};
  if (utm_source) next.utm_source = utm_source;
  if (utm_medium) next.utm_medium = utm_medium;
  if (utm_campaign) next.utm_campaign = utm_campaign;

  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Private browsing / storage disabled — attribution just won't persist across pages.
  }
}

export function getStoredAttribution(): StoredAttribution {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredAttribution) : {};
  } catch {
    return {};
  }
}
