import { PageLayout, Prose } from "@/components/PageLayout";

export default function Terms() {
  return (
    <PageLayout
      eyebrow="Legal"
      title={<>Terms of <em className="italic text-[var(--sage-dark)]">Service</em></>}
      lede="Last updated: January 1, 2026. These terms govern your use of the Lucid website and services. By using Lucid, you agree to be bound by them."
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8 mb-10">
        <div className="bg-[var(--sage)]/10 border border-[var(--sage)]/30 rounded-[20px] p-6 text-sm text-[var(--charcoal)]/80 font-light leading-relaxed">
          <strong className="text-[var(--charcoal)]">Prototype notice:</strong> This is placeholder content for a reference site. It should be reviewed and customized by qualified healthcare counsel before use with real patients.
        </div>
      </div>

      <Prose>
        <h2 className="font-display text-3xl text-[var(--charcoal)] !mt-0">1. Acceptance of terms</h2>
        <p>
          By accessing or using the Lucid website, mobile app, or any services ("Services"), you agree to these Terms of Service ("Terms") and our <a href="/privacy" className="text-[var(--sage-dark)] underline">Privacy Policy</a>. If you do not agree, do not use the Services.
        </p>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">2. Who can use Lucid</h2>
        <p>
          You must be at least 18 years old and reside in a U.S. state where Lucid operates. By using the Services, you represent that the information you provide is accurate and that you are not prohibited from receiving telehealth care in your jurisdiction.
        </p>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">3. Nature of the services</h2>
        <p>
          Lucid operates a technology platform that facilitates telehealth consultations with independently licensed physicians and coordinates prescription fulfillment through licensed pharmacies. Medical services are provided by the physicians themselves — not by Lucid — and are subject to the clinical judgment of the treating physician.
        </p>
        <p>
          The Services are not appropriate for medical emergencies. If you are in crisis or in danger of harming yourself or someone else, call or text <strong>988</strong> or dial 911 immediately.
        </p>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">4. No guarantee of treatment</h2>
        <p>
          Submitting an assessment does not guarantee that you will receive a prescription or be accepted as a patient. A licensed physician may decline to treat any individual based on clinical judgment, and Lucid may decline service at its discretion.
        </p>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">5. Your responsibilities</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide accurate and complete information during your assessment and consultations.</li>
          <li>Follow the written dosing and safety guidance provided by your physician.</li>
          <li>Complete the required monthly medical check-in before any refill.</li>
          <li>Store medication securely out of reach of minors, pets, or anyone to whom it was not prescribed.</li>
          <li>Do not drive, operate machinery, or make major decisions on session days.</li>
          <li>Do not share, sell, or transfer your medication under any circumstances.</li>
        </ul>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">6. Payments and refunds</h2>
        <p>
          Fees for consultations and medications are disclosed before you are charged. All clinical services rendered are non-refundable. Unfilled or undelivered prescriptions may be eligible for refund on a case-by-case basis. Insurance is generally not accepted; we may provide superbills for out-of-network submission.
        </p>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">7. Controlled substance acknowledgment</h2>
        <p>
          Ketamine is a Schedule III controlled substance under federal law. You acknowledge that misuse, diversion, or distribution of prescribed medication is illegal and grounds for immediate termination of services and, where applicable, reporting to law enforcement.
        </p>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">8. Intellectual property</h2>
        <p>
          The Lucid name, logo, website, content, and software are owned by Lucid Health Inc. and are protected by copyright, trademark, and other laws. You may not copy, modify, reproduce, or create derivative works without written permission.
        </p>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">9. Termination</h2>
        <p>
          You may stop using the Services at any time. We may suspend or terminate your access for violations of these Terms, clinical safety concerns, or non-payment. Sections intended to survive termination (including disclaimers, liability limitations, and governing law) will continue to apply.
        </p>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">10. Disclaimers</h2>
        <p>
          The Services are provided "as is" and "as available." To the fullest extent permitted by law, Lucid disclaims all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement. Information on the Lucid website is for general educational purposes and does not constitute medical advice.
        </p>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">11. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, Lucid's aggregate liability arising from or relating to these Terms or your use of the Services is limited to the amount you paid to Lucid in the twelve months preceding the claim. Lucid is not liable for indirect, incidental, special, or consequential damages. Nothing in these Terms limits liability for fraud, willful misconduct, or any liability that cannot be limited by law.
        </p>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">12. Dispute resolution</h2>
        <p>
          Any dispute arising under these Terms will be resolved by binding individual arbitration administered by the American Arbitration Association, except that either party may bring claims in small-claims court. You waive any right to participate in a class action or class arbitration.
        </p>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">13. Governing law</h2>
        <p>
          These Terms are governed by the laws of the State of [placeholder], without regard to conflict-of-laws principles.
        </p>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">14. Changes</h2>
        <p>
          We may update these Terms from time to time. Material changes will be posted on this page with an updated effective date. Your continued use of the Services constitutes acceptance of the revised Terms.
        </p>

        <h2 className="font-display text-3xl text-[var(--charcoal)] mt-12">15. Contact</h2>
        <p>
          Lucid Health Inc., [address placeholder]. Questions: <a href="mailto:legal@lucid.example" className="text-[var(--sage-dark)] underline">legal@lucid.example</a>.
        </p>
      </Prose>
    </PageLayout>
  );
}
