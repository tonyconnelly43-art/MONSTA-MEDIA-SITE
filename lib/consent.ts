const STORAGE_KEY = 'monsta-cookie-consent';
const CHANGE_EVENT = 'monsta-cookie-consent-change';
export const OPEN_PREFERENCES_EVENT = 'monsta-cookie-consent-open-preferences';

export type ConsentValue = 'granted' | 'denied';

export function getConsent(): ConsentValue | null {
  if (typeof window === 'undefined') return null;
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
}

export function setConsent(value: ConsentValue): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Private browsing / storage disabled — consent just won't persist across visits.
  }
  window.dispatchEvent(new CustomEvent<ConsentValue>(CHANGE_EVENT, { detail: value }));
}

export function onConsentChange(callback: (value: ConsentValue | null) => void): () => void {
  const handler = (event: Event) => callback((event as CustomEvent<ConsentValue>).detail ?? null);
  window.addEventListener(CHANGE_EVENT, handler);
  return () => window.removeEventListener(CHANGE_EVENT, handler);
}

export function openConsentPreferences(): void {
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}
