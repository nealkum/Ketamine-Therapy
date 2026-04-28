import { PageLayout, Prose } from "@/components/PageLayout";

export default function HIPAA() {
  return (
    <PageLayout
      seoTitle="Notice of Privacy Practices — Lucid"
      seoDescription="Lucid's HIPAA Notice of Privacy Practices: how your protected health information may be used and disclosed, and your rights."
      eyebrow="Legal"
      title={<>Notice of <em className="italic text-[var(--sage-dark)]">Privacy Practices</em></>}
      lede="Effective date: January 1, 2026. This notice describes how your medical information may be used and disclosed, and how you can access that information. Please review it carefully."
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8 mb-10">
        <div className="bg-[var(--sage)]/10 border border-[var(--sage)]/30 rounded-[20px] p-6 text-sm text-[var(--charcoal)]/80 font-light leading-relaxed">
          <strong className="text-[var(--charcoal)]">Prototype notice:</strong> This is placeholder HIPAA Notice of Privacy Practices content for a reference site. It must be reviewed and customized by qualified healthcare counsel before being provided to real patients.
        </div>
      </div>

      <Prose>
        <h2 className="font-display text-3xl text-[var(--charcoal)] !mt-0">Our commitment</h2>
        <p>
          Lucid-affiliated medical practices are required by law to maintain the privacy of your Protected Health Information ("PHI"), give you this notice of our legal duties and privacy practices regarding PHI, and follow the terms of this notice currently in effect.
        </p>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">How we may use and disclose your PHI</h2>
        <p><strong>Treatment.</strong> We use and share your PHI with physicians, pharmacists, labs, and other providers to coordinate your care — including assessing eligibility, prescribing medication, and following up on outcomes.</p>
        <p><strong>Payment.</strong> We may use and share PHI to bill and collect payment for services, including communicating with insurers for superbills and verifying eligibility for payment programs.</p>
        <p><strong>Health care operations.</strong> We may use PHI to review quality, train staff, manage our practice, and conduct business planning.</p>
        <p><strong>Appointment reminders and health information.</strong> We may contact you with reminders, refill notices, and information about treatment alternatives or other health-related services.</p>
        <p><strong>As required by law.</strong> We disclose PHI when required by federal, state, or local law, including mandatory reporting (e.g., suspected abuse, certain injuries, or public health risks).</p>
        <p><strong>Public health and safety.</strong> We may disclose PHI to public health authorities, to prevent serious threats to health or safety, and in response to lawful requests from health oversight agencies.</p>
        <p><strong>Law enforcement, judicial proceedings, and specialized government functions</strong>, subject to applicable legal requirements.</p>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">Uses that require your written authorization</h2>
        <p>
          The following uses and disclosures require your written authorization and can be revoked at any time in writing:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Most uses and disclosures of psychotherapy notes.</li>
          <li>Marketing communications (other than face-to-face communications or a promotional gift of nominal value).</li>
          <li>Any sale of PHI.</li>
        </ul>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">Your rights</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Access.</strong> You have the right to inspect and receive a copy of your PHI. We may charge a reasonable, cost-based fee.</li>
          <li><strong>Amendment.</strong> You have the right to request that we amend your PHI if you believe it is inaccurate or incomplete.</li>
          <li><strong>Accounting of disclosures.</strong> You have the right to request an accounting of certain disclosures we have made of your PHI.</li>
          <li><strong>Restrictions.</strong> You have the right to request restrictions on certain uses and disclosures. We are not required to agree, except where disclosure is to a health plan for payment or operations and you have paid out-of-pocket in full.</li>
          <li><strong>Confidential communications.</strong> You may request that we communicate with you in a certain way or at a certain location.</li>
          <li><strong>Paper copy.</strong> You may request a paper copy of this notice at any time.</li>
          <li><strong>Breach notification.</strong> You will be notified if a breach of your unsecured PHI occurs.</li>
        </ul>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">Complaints</h2>
        <p>
          If you believe your privacy rights have been violated, you may file a complaint with us in writing using the contact information below, or with the U.S. Department of Health and Human Services, Office for Civil Rights. We will not retaliate against you for filing a complaint.
        </p>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">Changes to this notice</h2>
        <p>
          We reserve the right to change this notice and make the new provisions effective for all PHI we maintain. The updated notice will be posted on this page with a new effective date.
        </p>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">Contact</h2>
        <p>
          Privacy Officer, Lucid Health Inc., [address placeholder].
        </p>
      </Prose>
    </PageLayout>
  );
}
