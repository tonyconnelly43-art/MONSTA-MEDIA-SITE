import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Anton, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ChatWidget } from '@/components/ChatWidget';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { JsonLd } from '@/components/JsonLd';
import { MetaPixel } from '@/components/MetaPixel';
import { localBusinessJsonLd } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

const display = Anton({ subsets: ['latin'], weight: '400', variable: '--font-display' });
const body = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  verification: {
    google: '4bDatAoxI_5tKGO8wdsPUCFagJnb9OwigfQ2LjPI3GM',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body">
        <MetaPixel />
        <GoogleAnalytics />
        <JsonLd data={localBusinessJsonLd()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
