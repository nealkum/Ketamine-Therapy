import { PageLayout, Prose } from "@/components/PageLayout";

export default function Privacy() {
  return (
    <PageLayout
      eyebrow="Legal"
      title={<>Privacy <em className="italic text-[var(--sage-dark)]">Policy</em></>}
      lede="Last updated: January 1, 2026. This policy explains what personal information Lucid collects, how we use it, and your rights. It is written to be readable — the full legal terms are below."
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8 mb-10">
        <div className="bg-[var(--sage)]/10 border border-[var(--sage)]/30 rounded-[20px] p-6 text-sm text-[var(--charcoal)]/80 font-light leading-relaxed">
          <strong className="text-[var(--charcoal)]">Prototype notice:</strong> This is placeholder content for a reference site. It should be reviewed and customized by qualified healthcare counsel before use with real patients.
        </div>
      </div>

      <Prose>
        <h2 className="font-display text-3xl text-[var(--charcoal)] !mt-0">1. Who we are</h2>
        <p>
          Lucid Health Inc. ("Lucid," "we," "our") operates this website and provides telehealth services in partnership with independently licensed physicians and affiliated medical practices. This policy applies to information collected through our website, mobile applications, and any other services that reference it.
        </p>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">2. Information we collect</h2>
        <p>We collect information you provide directly, information collected automatically, and information from third parties.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Information you provide:</strong> name, email, phone number, date of birth, address, medical history, symptoms, treatment goals, payment information, and any communications you send us.</li>
          <li><strong>Protected health information (PHI):</strong> when you become a patient, your care is documented in records governed by the Health Insurance Portability and Accountability Act ("HIPAA"). See our <a href="/hipaa" className="text-[var(--sage-dark)] underline">HIPAA Notice</a> for details.</li>
          <li><strong>Automatically collected:</strong> IP address, device and browser information, pages viewed, referring URLs, and other analytics data.</li>
          <li><strong>From third parties:</strong> identity verification services, pharmacy partners, laboratories, and payment processors may share limited information necessary to provide your care.</li>
        </ul>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">3. How we use your information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To evaluate your clinical eligibility and provide care.</li>
          <li>To process payments and coordinate with pharmacies and laboratories.</li>
          <li>To communicate appointment reminders, refill approvals, and safety information.</li>
          <li>To improve our services, detect fraud, and comply with legal obligations.</li>
          <li>For research or analytics, only using de-identified data unless you have provided explicit authorization.</li>
        </ul>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">4. How we share your information</h2>
        <p>We do not sell your personal information. We share information only in the following circumstances:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>With your care team</strong> — physicians, pharmacies, and labs involved in your treatment.</li>
          <li><strong>With service providers</strong> bound by written agreements (HIPAA business associate agreements where applicable).</li>
          <li><strong>As required by law</strong> — in response to subpoenas, court orders, or to prevent imminent harm.</li>
          <li><strong>In the event of a corporate transaction</strong> (merger, acquisition, or asset sale), subject to the same protections described here.</li>
        </ul>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">5. Cookies and tracking</h2>
        <p>
          We use cookies and similar technologies for authentication, security, preferences, and analytics. You can control cookies through your browser settings. Disabling them may limit some functionality. We honor Global Privacy Control (GPC) signals where applicable law requires it.
        </p>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">6. Your rights</h2>
        <p>Depending on where you live, you may have the right to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access the personal information we hold about you.</li>
          <li>Request correction of inaccurate information.</li>
          <li>Request deletion of your information, subject to legal and medical record-retention requirements.</li>
          <li>Object to or restrict certain processing.</li>
          <li>Obtain a portable copy of your information.</li>
          <li>Opt out of sales or targeted advertising (we do not engage in either).</li>
        </ul>
        <p>To exercise any of these rights, email <a href="mailto:privacy@lucid.example" className="text-[var(--sage-dark)] underline">privacy@lucid.example</a>.</p>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">7. Security</h2>
        <p>
          We use administrative, technical, and physical safeguards designed to protect your information, including encryption in transit and at rest, access controls, and routine security reviews. No system is perfectly secure, and we cannot guarantee absolute protection of your data.
        </p>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">8. Retention</h2>
        <p>
          Medical records are retained for the period required by applicable state and federal law (typically seven to ten years after your last date of service). Non-clinical information is retained only as long as needed to provide services and comply with legal obligations.
        </p>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">9. Children</h2>
        <p>
          Lucid does not knowingly collect information from children under 18. Our services are intended for adults only.
        </p>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">10. Changes to this policy</h2>
        <p>
          We may update this policy periodically. Material changes will be posted here with an updated effective date, and — for patients — by email where appropriate.
        </p>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">11. Contact</h2>
        <p>
          Questions or complaints: <a href="mailto:privacy@lucid.example" className="text-[var(--sage-dark)] underline">privacy@lucid.example</a>. Lucid Health Inc., [address placeholder], Attn: Privacy Officer.
        </p>
      </Prose>
    </PageLayout>
  );
}
