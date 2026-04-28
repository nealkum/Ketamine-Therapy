import { PageLayout, Prose, SectionHeading } from "@/components/PageLayout";
import { AssessmentDialog } from "@/components/AssessmentDialog";
import { Check, X } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const qualifies = [
  "Adults 18–65 residing in a state where we operate",
  "Diagnosed or suspected depression, anxiety, or PTSD",
  "Previously tried (or assessed for) at least one conventional therapy",
  "Able to have a sober monitor present for at-home sessions",
  "Willing to complete monthly medical check-ins",
];

const doesNotQualify = [
  "Active or past psychotic, manic, or schizoaffective conditions (without specialist clearance)",
  "Uncontrolled cardiovascular disease or hypertension",
  "Pregnancy or breastfeeding",
  "Active ketamine or dissociative substance use disorder",
  "Currently under 18",
];

export default function Eligibility() {
  return (
    <PageLayout
      seoTitle="Eligibility — Is ketamine therapy right for you?"
      seoDescription="Plain-English criteria for who qualifies for Lucid's at-home ketamine therapy and who we cannot treat. Find out in five minutes."
      eyebrow="Eligibility"
      title={<>Is ketamine therapy <em className="italic text-[var(--sage-dark)]">right for you?</em></>}
      lede="Our clinicians evaluate every applicant against a clear set of medical criteria. Here's a plain-English look at what we screen for — the assessment takes about five minutes."
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="bg-white rounded-[28px] p-8 border border-[var(--sage)]/30 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[var(--sage)]/15 flex items-center justify-center">
                  <Check className="text-[var(--sage-dark)]" size={20} />
                </div>
                <h3 className="font-display text-2xl text-[var(--charcoal)]">You may qualify if</h3>
              </div>
              <ul className="space-y-4">
                {qualifies.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-[var(--charcoal)]/80 font-light leading-relaxed">
                    <Check size={18} className="text-[var(--sage-dark)] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-white rounded-[28px] p-8 border border-[var(--charcoal)]/10 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[var(--charcoal)]/5 flex items-center justify-center">
                  <X className="text-[var(--charcoal)]/60" size={20} />
                </div>
                <h3 className="font-display text-2xl text-[var(--charcoal)]">We cannot treat</h3>
              </div>
              <ul className="space-y-4">
                {doesNotQualify.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-[var(--charcoal)]/80 font-light leading-relaxed">
                    <X size={18} className="text-[var(--charcoal)]/40 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 mb-20">
        <SectionHeading eyebrow="Where we operate" title="State availability" />
        <Prose>
          <p>
            Lucid currently provides care in select U.S. states. Your assessment will confirm availability in your region.
            <em> [Placeholder — developer to populate with supported states list and a lookup.]</em>
          </p>
        </Prose>
      </div>

      <div className="text-center">
        <AssessmentDialog>
          <button className="bg-[var(--charcoal)] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[var(--sage-dark)] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Check my eligibility — 5 min
          </button>
        </AssessmentDialog>
      </div>
    </PageLayout>
  );
}
