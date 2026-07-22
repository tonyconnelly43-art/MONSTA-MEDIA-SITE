import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function ChatWidget() {
  return (
    <a
      href={`sms:${siteConfig.phone}`}
      aria-label={`Text us at ${siteConfig.phoneDisplay}`}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-brand-red px-5 py-3 font-display text-sm uppercase tracking-wide text-white shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      Text Us
    </a>
  );
}
