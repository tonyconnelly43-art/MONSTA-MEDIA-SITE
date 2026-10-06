export type RecentWorkItem =
  | {
      type: 'website';
      slug: string;
      title: string;
      description: string;
      desktopImage: string;
      mobileImage: string;
      visitUrl: string;
    }
  | {
      type: 'video';
      slug: string;
      title: string;
      description: string;
      videoSrc: string;
    };

export const recentWorkItems: RecentWorkItem[] = [
  {
    type: 'website',
    slug: 'good-hope-website',
    title: 'Good Hope Air Conditioning & Heating Website',
    description:
      'A full custom website built for a Hemet, CA HVAC company — complete with service area pages, real customer videos, and a lead-capture system built to turn visitors into booked jobs.',
    desktopImage: '/work-good-hope-hvac.png',
    mobileImage: '/work-good-hope-hvac-mobile.png',
    visitUrl: 'https://www.goodhopecomfort.com',
  },
  {
    type: 'video',
    slug: 'monsta-demo-reel',
    title: 'Monsta Media Demo Reel',
    description:
      'A quick look at the brand systems, van wraps, and websites we build for home service and trades businesses.',
    videoSrc: '/monsta-demo-reel.mp4',
  },
];
