import { PageLayout, Prose, SectionHeading, Card } from "@/components/PageLayout";
import { HowItWorks } from "@/components/HowItWorks";
import { AssessmentDialog } from "@/components/AssessmentDialog";
import { Reveal } from "@/components/Reveal";

export default function HowItWorksPage() {
  return (
    <PageLayout
      eyebrow="How It Works"
      title={<>From first question to <em className="italic text-[var(--sage-dark)]">first session</em>.</>}
      lede="A clear, clinician-led process designed to get you the right care — without the usual friction of the mental healthcare system."
    >
      <HowItWorks />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-12 mb-24">
        <SectionHeading eyebrow="What to expect" title="Your first 30 days" />
        <Prose>
          <p><strong className="text-[var(--charcoal)]">Day 1 — Assessment.</strong> Complete our five-minute clinical questionnaire. Our team reviews within one business day.</p>
          <p><strong className="text-[var(--charcoal)]">Day 2–4 — Consultation.</strong> If you're a fit, we schedule a 30-minute video visit with a licensed physician to confirm the diagnosis and design your protocol.</p>
          <p><strong className="text-[var(--charcoal)]">Day 5–7 — Delivery.</strong> Your medication ships in discreet packaging with written guidance, a session checklist, and a clinician direct line.</p>
          <p><strong className="text-[var(--charcoal)]">Week 2–4 — First sessions.</strong> You complete supervised at-home sessions at your own pace with optional integration coaching.</p>
          <p><strong className="text-[var(--charcoal)]">Day 30 — Medical check-in.</strong> Every patient meets with a clinician before any refill is issued. No check-in, no refill.</p>
        </Prose>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-24">
        <SectionHeading eyebrow="Inside a session" title="Calm, structured, supported" />
        <div className="grid md:grid-cols-3 gap-6">
          <Reveal><Card title="Before">
            Light food, quiet space, trusted person nearby, phone on Do Not Disturb. Our pre-session checklist walks you through it.
          </Card></Reveal>
          <Reveal delay={0.05}><Card title="During">
            Take your prescribed dose, settle in with an eye mask and calming music, and let the medicine work for 45–90 minutes.
          </Card></Reveal>
          <Reveal delay={0.1}><Card title="After">
            Rest, hydrate, and optionally journal. Many patients meet with an integration coach the day after a session.
          </Card></Reveal>
        </div>
      </div>

      <div className="text-center">
        <AssessmentDialog>
          <button className="bg-[var(--charcoal)] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[var(--sage-dark)] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Start my assessment
          </button>
        </AssessmentDialog>
      </div>
    </PageLayout>
  );
}
