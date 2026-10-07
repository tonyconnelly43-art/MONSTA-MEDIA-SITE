'use client';

import { openConsentPreferences } from '@/lib/consent';

export function CookiePreferencesButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={openConsentPreferences} className={className}>
      Cookie Preferences
    </button>
  );
}
