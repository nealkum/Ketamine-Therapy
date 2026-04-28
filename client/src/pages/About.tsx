import { PageLayout, Prose, SectionHeading, Card } from "@/components/PageLayout";
import { AssessmentDialog } from "@/components/AssessmentDialog";
import { Reveal } from "@/components/Reveal";
import { Check, X, Stethoscope, BookOpen, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <PageLayout
      seoTitle="About Lucid — Physician-led ketamine telehealth"
      seoDescription="Lucid is a clinician-led telehealth practice focused on treatment-resistant depression, anxiety, and PTSD. Learn how we built responsible at-home ketamine care."
      eyebrow="About Lucid"
      title={
        <>
          Responsible ketamine care, <em className="italic text-[var(--sage-dark)]">built by clinicians</em>.
        </>
      }
      lede="Lucid is a physician-led telehealth practice focused on three conditions: treatment-resistant depression, anxiety, and PTSD. We exist to make evidence-based ketamine therapy accessible."
    >
      {/* Mission / problem framing */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 mb-24">
        <Prose>
          <p>
            Roughly one in three patients with major depression does not respond to conventional antidepressants. For them, the next step is typically a long waitlist, an expensive in-clinic infusion, or no step at all. Meanwhile, a new category of telehealth ketamine providers has emerged — some responsible, some not.
          </p>
          <p>
            We started Lucid because we think patients deserve a third option: the accessibility of telehealth with the rigor of an academic clinic. Every clinical decision we make is anchored in peer-reviewed evidence and overseen by a licensed MD. Every patient is re-screened every month before a new prescription is issued. No exceptions.
          </p>
        </Prose>
      </div>

      {/* Principles */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-24">
        <SectionHeading eyebrow="What we believe" title="Principles that guide every decision" />
        <div className="grid md:grid-cols-3 gap-6">
          <Reveal>
            <Card title="Medicine first">
              Every protocol we offer is grounded in peer-reviewed evidence and overseen by a licensed physician. No wellness-speak, no shortcuts.
            </Card>
          </Reveal>
          <Reveal delay={0.05}>
            <Card title="Monthly check-ins, always">
              Ketamine is a controlled medication. Every patient is medically re-screened each month before a new prescription is issued — no exceptions.
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <Card title="Radical transparency">
              Clear criteria for who we can and cannot help. Clear side-effect profiles. Clear pricing disclosed before you pay. You should know exactly what you're signing up for.
            </Card>
          </Reveal>
        </div>
      </div>

      {/* Differentiation — what we do vs. typical telehealth ketamine */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <SectionHeading eyebrow="How we differ" title="What responsible telehealth ketamine looks like" />
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="bg-white rounded-[28px] p-8 border border-[var(--sage)]/30 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[var(--sage)]/15 flex items-center justify-center">
                  <Check className="text-[var(--sage-dark)]" size={20} />
                </div>
                <h3 className="font-display text-xl text-[var(--charcoal)]">The Lucid standard</h3>
              </div>
              <ul className="space-y-3 text-[15px] text-[var(--charcoal)]/80 font-light leading-relaxed">
                <li className="flex gap-3"><Check size={16} className="text-[var(--sage-dark)] shrink-0 mt-1" /><span>Board-certified MD reviews every submission personally</span></li>
                <li className="flex gap-3"><Check size={16} className="text-[var(--sage-dark)] shrink-0 mt-1" /><span>Mandatory 30-minute video consult before first prescription</span></li>
                <li className="flex gap-3"><Check size={16} className="text-[var(--sage-dark)] shrink-0 mt-1" /><span>Required monthly re-screening before any refill</span></li>
                <li className="flex gap-3"><Check size={16} className="text-[var(--sage-dark)] shrink-0 mt-1" /><span>Written protocols, dosing checklist, and 24/7 clinician line</span></li>
                <li className="flex gap-3"><Check size={16} className="text-[var(--sage-dark)] shrink-0 mt-1" /><span>Referral out when ketamine isn't the right fit</span></li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-white rounded-[28px] p-8 border border-[var(--charcoal)]/10 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[var(--charcoal)]/5 flex items-center justify-center">
                  <X className="text-[var(--charcoal)]/60" size={20} />
                </div>
                <h3 className="font-display text-xl text-[var(--charcoal)]">What we won't do</h3>
              </div>
              <ul className="space-y-3 text-[15px] text-[var(--charcoal)]/80 font-light leading-relaxed">
                <li className="flex gap-3"><X size={16} className="text-[var(--charcoal)]/40 shrink-0 mt-1" /><span>Algorithmic prescribing without a physician in the loop</span></li>
                <li className="flex gap-3"><X size={16} className="text-[var(--charcoal)]/40 shrink-0 mt-1" /><span>Auto-refill without a monthly clinical review</span></li>
                <li className="flex gap-3"><X size={16} className="text-[var(--charcoal)]/40 shrink-0 mt-1" /><span>Treating conditions outside our evidence base</span></li>
                <li className="flex gap-3"><X size={16} className="text-[var(--charcoal)]/40 shrink-0 mt-1" /><span>Marketing ketamine as a recreational or lifestyle product</span></li>
                <li className="flex gap-3"><X size={16} className="text-[var(--charcoal)]/40 shrink-0 mt-1" /><span>Prescribing to patients with clear contraindications</span></li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Medical leadership */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 mb-24">
        <SectionHeading eyebrow="Medical leadership" title="Physicians and researchers at the core" />
        <Reveal>
          <div className="bg-white rounded-[28px] p-8 border border-[var(--charcoal)]/5 shadow-sm text-center">
            <h3 className="font-display text-xl text-[var(--charcoal)] mb-3">Prescribing physicians</h3>
            <p className="text-[var(--warm-gray)] font-light leading-relaxed text-[15px]">
              Every physician on our panel is US-licensed, DEA-registered, and trained on our internal clinical guidelines before seeing their first Lucid patient.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Accreditation row */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <SectionHeading eyebrow="Accreditation & compliance" title="The credentials behind our practice" />
        <div className="grid sm:grid-cols-3 gap-6">
          <Reveal>
            <div className="bg-white rounded-[24px] p-6 border border-[var(--charcoal)]/5 text-center">
              <Stethoscope className="text-[var(--sage-dark)] mx-auto mb-3" size={24} strokeWidth={1.5} />
              <div className="text-[13px] font-semibold text-[var(--charcoal)] mb-1">Board-certified MDs</div>
              <div className="text-xs text-[var(--warm-gray)] font-light">US-licensed psychiatrists</div>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="bg-white rounded-[24px] p-6 border border-[var(--charcoal)]/5 text-center">
              <ShieldCheck className="text-[var(--sage-dark)] mx-auto mb-3" size={24} strokeWidth={1.5} />
              <div className="text-[13px] font-semibold text-[var(--charcoal)] mb-1">LegitScript · DEA · HIPAA</div>
              <div className="text-xs text-[var(--warm-gray)] font-light">Verified telehealth compliance</div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-white rounded-[24px] p-6 border border-[var(--charcoal)]/5 text-center">
              <BookOpen className="text-[var(--sage-dark)] mx-auto mb-3" size={24} strokeWidth={1.5} />
              <div className="text-[13px] font-semibold text-[var(--charcoal)] mb-1">Evidence-based</div>
              <div className="text-xs text-[var(--warm-gray)] font-light">Protocols from peer-reviewed trials</div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <AssessmentDialog>
          <button className="bg-[var(--charcoal)] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[var(--sage-dark)] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            See if Lucid is right for you
          </button>
        </AssessmentDialog>
        <p className="mt-4 text-xs text-[var(--warm-gray)]/80 font-light tracking-widest uppercase">
          5 minutes · HIPAA-protected · No credit card
        </p>
      </div>
    </PageLayout>
  );
}
