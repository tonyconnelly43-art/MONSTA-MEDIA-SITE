import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: `Privacy policy for ${siteConfig.name}.`,
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <Container className="py-20">
      <h1 className="text-center font-display text-4xl text-brand-navy md:text-5xl">Privacy Policy</h1>
      <p className="mx-auto mt-6 max-w-2xl text-center text-brand-navy/80">
        Your privacy matters to us. This Privacy Policy explains how {siteConfig.name} collects, uses, and
        protects your personal information when you visit our website, interact with our content, or use
        our services.
      </p>

      <div className="mt-10 max-w-2xl space-y-8 text-brand-navy/80">
        <div>
          <h2 className="font-display text-xl text-brand-red">1. Information We Collect</h2>
          <p className="mt-3 font-semibold text-brand-navy">Personal Information:</p>
          <ul className="mt-1 list-inside list-disc space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
          </ul>
          <p className="mt-1 text-sm text-brand-navy/60">(Provided when you fill out forms or contact us)</p>

          <p className="mt-4 font-semibold text-brand-navy">Website &amp; Usage Data:</p>
          <ul className="mt-1 list-inside list-disc space-y-1">
            <li>Pages you visit</li>
            <li>Time spent on the website</li>
            <li>Browser type and device</li>
            <li>IP address</li>
          </ul>

          <p className="mt-4 font-semibold text-brand-navy">Cookies &amp; Tracking Technologies:</p>
          <p className="mt-1">
            Used for improving performance, analytics, personalization, and ad optimization.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-brand-red">2. How We Use Your Information</h2>
          <p className="mt-2">We use the information we collect to:</p>
          <ul className="mt-1 list-inside list-disc space-y-1">
            <li>Respond to messages, form submissions, and inquiries</li>
            <li>Improve website speed, performance, and user experience</li>
            <li>Deliver requested services, graphics, or design work</li>
            <li>Analyze website traffic and optimize SEO, content, and ads</li>
            <li>Enhance marketing efforts through analytics tools</li>
          </ul>
          <p className="mt-3">
            These practices help us maintain a user-friendly, high-performing website.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-brand-red">3. Sharing Your Information</h2>
          <p className="mt-2">We do not sell or trade your personal information.</p>
          <p className="mt-2">
            We may share limited data with trusted third-party services strictly for:
          </p>
          <ul className="mt-1 list-inside list-disc space-y-1">
            <li>Analytics</li>
            <li>Advertising performance</li>
            <li>Website optimization</li>
          </ul>
          <p className="mt-3">Examples include Google Analytics, Facebook Pixel, and similar tools.</p>
        </div>

        <div>
          <h2 className="font-display text-xl text-brand-red">4. Cookies &amp; Tracking</h2>
          <p className="mt-2">Our website uses cookies to:</p>
          <ul className="mt-1 list-inside list-disc space-y-1">
            <li>Analyze traffic</li>
            <li>Improve SEO performance</li>
            <li>Personalize your browsing experience</li>
          </ul>
          <p className="mt-3">You can disable cookies anytime via your browser settings.</p>
        </div>

        <div>
          <h2 className="font-display text-xl text-brand-red">5. Data Security</h2>
          <p className="mt-2">We take reasonable and industry-standard steps to protect your data.</p>
          <p className="mt-2">
            However, please remember that no method of online transmission is fully guaranteed.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-brand-red">6. Your Rights</h2>
          <p className="mt-2">You can request to:</p>
          <ul className="mt-1 list-inside list-disc space-y-1">
            <li>View the personal data we hold on you</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your information (when applicable)</li>
          </ul>
          <p className="mt-3">
            To do so, contact us directly at{' '}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-brand-red underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-brand-red">7. Changes to This Policy</h2>
          <p className="mt-2">
            We may update this Privacy Policy from time to time to reflect new regulations, improvements,
            or changes in our services.
          </p>
          <p className="mt-2">The most recent version will always be available on this page.</p>
        </div>

        <div>
          <h2 className="font-display text-xl text-brand-red">8. Contact Us</h2>
          <p className="mt-2">
            If you have any questions regarding this policy or your data, please contact:{' '}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-brand-red underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </div>
    </Container>
  );
}
