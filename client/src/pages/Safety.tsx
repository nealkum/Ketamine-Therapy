import { PageLayout, Prose, SectionHeading, Card } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import { ShieldCheck, AlertTriangle, Stethoscope, PhoneCall } from "lucide-react";

export default function Safety() {
  return (
    <PageLayout
      seoTitle="Safety standards — Lucid"
      seoDescription="How Lucid keeps patients safe: physician-led prescribing, monthly medical re-screening, written protocols, and 24/7 clinician support."
      eyebrow="Safety"
      title={<>
        Responsible care, <em className="italic text-[var(--sage-dark)]">built in</em>.
      </>}
      lede="Ketamine is a powerful, FDA-approved anesthetic with a well-established safety profile when prescribed correctly. Here's exactly how we keep our patients safe at every step."
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal><Card title="Physician-led prescribing">
            Every prescription is written by a licensed physician following a full clinical review. No algorithms writing scripts.
          </Card></Reveal>
          <Reveal delay={0.05}><Card title="Monthly medical re-screening">
            Before any refill, you complete a monthly check-in with your clinician to reassess response, side effects, and suitability. This is non-negotiable.
          </Card></Reveal>
          <Reveal delay={0.1}><Card title="Low-dose protocols">
            Our take-home doses are a fraction of anesthetic levels — calibrated for sustained therapeutic benefit, not dissociation-seeking.
          </Card></Reveal>
          <Reveal delay={0.15}><Card title="24/7 clinical support">
            Patients have round-the-clock access to a clinician-staffed line for questions, concerns, or adverse effects.
          </Card></Reveal>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <SectionHeading eyebrow="Know before you start" title="Common side effects" />
        <Prose>
          <p>
            Most side effects are mild, short-lived, and resolve within hours of a session. Expect to plan a quiet, supervised window of 1–2 hours around each dose.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Transient dissociation or &ldquo;floating&rdquo; sensation</li>
            <li>Mild nausea (we prescribe antiemetics when needed)</li>
            <li>Temporary increase in heart rate or blood pressure</li>
            <li>Drowsiness — do not drive or operate machinery on session days</li>
            <li>Mild headache or dizziness</li>
          </ul>
          <p>
            Serious adverse events are rare in our population but require immediate clinician contact. Our intake covers the full risk profile and you'll receive written guidance for every protocol.
          </p>
        </Prose>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <SectionHeading eyebrow="Who we cannot treat" title="Exclusion criteria" />
        <Prose>
          <p>
            Ketamine is not appropriate for everyone. We will not prescribe for patients with any of the following without specialist clearance:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Active or recent psychosis, mania, or schizophrenia spectrum disorders</li>
            <li>Uncontrolled hypertension or significant cardiovascular disease</li>
            <li>Active substance use disorder involving ketamine or dissociatives</li>
            <li>Pregnancy or breastfeeding</li>
            <li>History of increased intracranial or intraocular pressure</li>
            <li>Severe liver disease</li>
          </ul>
          <p>
            If any of these apply, our clinicians can help you find an appropriate next step — including in-clinic referrals where at-home therapy is not suitable.
          </p>
        </Prose>
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="bg-[var(--sage)]/10 border border-[var(--sage)]/30 rounded-[28px] p-8 flex gap-5 items-start">
          <PhoneCall className="text-[var(--sage-dark)] shrink-0 mt-1" size={28} />
          <div>
            <h3 className="font-display text-xl text-[var(--charcoal)] mb-2">In a mental health crisis?</h3>
            <p className="text-[var(--charcoal)]/70 font-light leading-relaxed">
              If you are in danger of harming yourself or someone else, please call or text <strong>988</strong> (Suicide and Crisis Lifeline) or go to your nearest emergency room. Lucid is not an emergency service.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
