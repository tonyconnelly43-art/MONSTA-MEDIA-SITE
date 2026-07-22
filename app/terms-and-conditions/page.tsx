import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: 'Terms & Conditions',
  description: `Terms and conditions for ${siteConfig.name}.`,
  path: '/terms-and-conditions',
});

export default function TermsPage() {
  return (
    <Container className="py-20">
      <h1 className="font-display text-4xl text-brand-navy md:text-5xl">Terms &amp; Conditions</h1>

      <div className="mt-10 max-w-2xl space-y-8 text-brand-navy/80">
        <div>
          <h2 className="font-display text-xl text-brand-red">1. Introduction</h2>
          <p className="mt-2">
            Welcome to {siteConfig.name}. These Terms &amp; Conditions govern your use of our website and
            creative services. By accessing or using our site, you agree to comply with these terms. Please
            read them carefully, as they outline the rules, responsibilities, and limitations associated
            with our branding, graphic design, and marketing services.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-brand-red">2. Services</h2>
          <p className="mt-2">
            {siteConfig.name} provides professional branding, graphic design, and creative services tailored
            to meet your business needs. Our services include, but are not limited to:
          </p>
          <ul className="mt-1 list-inside list-disc space-y-1">
            <li>Logo design and brand identity creation</li>
            <li>Print materials, such as brochures, business cards, and flyers</li>
            <li>Social media graphics, banners, and marketing visuals</li>
            <li>Vehicle wrap and signage design</li>
            <li>Custom website and digital design solutions</li>
          </ul>
          <p className="mt-3">
            All services are customized and subject to availability. We strive to deliver high-quality work,
            and our team works closely with clients to understand their goals, vision, and requirements
            before beginning any project.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-brand-red">3. Payment Terms</h2>
          <p className="mt-2">
            All projects require a deposit before work begins. The remaining balance is due upon final
            delivery of the completed work. Specific payment terms, including project milestones or
            installment payments, are outlined in your invoice or service agreement. Payments must be made
            via the methods specified, and any late payments may result in delays or suspension of services
            until payment is received.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-brand-red">4. Intellectual Property</h2>
          <p className="mt-2">
            All design work, content, and creative assets remain the intellectual property of{' '}
            {siteConfig.name} until full payment is received. Upon full payment, clients are granted the
            rights to use the final approved designs for business purposes, including marketing,
            advertising, and online or offline use. We retain the right to showcase completed work in our
            portfolio or marketing materials, unless specifically requested otherwise by the client.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-brand-red">5. Client Responsibilities</h2>
          <p className="mt-2">
            Clients agree to provide accurate and complete information, materials, and feedback required for
            the successful completion of a project. This includes:
          </p>
          <ul className="mt-1 list-inside list-disc space-y-1">
            <li>Supplying content, images, logos, or other resources needed for the project</li>
            <li>Providing timely feedback and approvals during each stage of the project</li>
            <li>Responding to communications and project requests promptly</li>
          </ul>
          <p className="mt-3">
            Delays in communication or incomplete information may impact the project timeline and final
            delivery date.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-brand-red">6. Revisions &amp; Refunds</h2>
          <p className="mt-2">
            Most projects include a limited number of revisions, which are outlined in the service package.
            Additional revisions beyond the agreed number may incur extra charges. Refunds are not issued
            once work has begun, unless otherwise agreed upon in writing. Clients are encouraged to review
            materials thoroughly during each stage of the process to ensure satisfaction with the final
            result.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-brand-red">7. Limitation of Liability</h2>
          <p className="mt-2">
            {siteConfig.name} is not liable for any indirect, incidental, or consequential damages arising
            from the use of our services or deliverables. All creative work is provided &ldquo;as is,&rdquo;
            and we do not guarantee specific business results, including financial or marketing outcomes.
            Clients use our services at their own risk, and we are not responsible for external factors that
            may affect the performance or outcome of delivered materials.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-brand-red">8. Changes to Terms</h2>
          <p className="mt-2">
            {siteConfig.name} reserves the right to update these Terms &amp; Conditions at any time. Any
            changes will be posted on this page, and continued use of our website or services indicates your
            acceptance of the updated terms. We recommend reviewing this page periodically to stay informed
            of any updates.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-brand-red">9. Contact</h2>
          <p className="mt-2">
            If you have any questions about these Terms &amp; Conditions, our services, or your project,
            please contact us at:{' '}
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
