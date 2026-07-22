'use client';

import Script from 'next/script';

// Your Facebook Page ID, from facebook.com/profile.php?id=...
const FACEBOOK_PAGE_ID = '61559049634674';

export function FacebookChatWidget() {
  return (
    <>
      <div id="fb-root" />
      <div
        // Meta's SDK reads plain HTML attributes (page_id, attribution) on this div,
        // which aren't valid typed JSX props -- rendered as raw HTML to match their docs exactly.
        dangerouslySetInnerHTML={{
          __html: `<div class="fb-customerchat" attribution="biz_inbox" page_id="${FACEBOOK_PAGE_ID}"></div>`,
        }}
      />
      <Script id="fb-chat-init" strategy="afterInteractive">
        {`
          window.fbAsyncInit = function () {
            FB.init({ xfbml: true, version: 'v20.0' });
          };
        `}
      </Script>
      <Script
        id="fb-chat-sdk"
        strategy="afterInteractive"
        src="https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js"
      />
    </>
  );
}
