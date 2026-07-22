import { MessageCircle } from 'lucide-react';

// Your Facebook Page ID, from facebook.com/profile.php?id=...
const FACEBOOK_PAGE_ID = '61559049634674';

export function FacebookChatWidget() {
  return (
    <a
      href={`https://m.me/${FACEBOOK_PAGE_ID}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on Messenger"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-brand-red px-5 py-3 font-display text-sm uppercase tracking-wide text-white shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      Chat With Us
    </a>
  );
}
