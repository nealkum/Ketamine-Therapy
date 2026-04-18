import { Reveal } from "./Reveal";
import { AssessmentDialog } from "./AssessmentDialog";
import { ClipboardList, UserCheck, Video, Package, CalendarClock } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    time: "Now · 5 min",
    title: "You start your assessment",
    desc: "Answer a short clinical questionnaire about your symptoms, history, and goals. Nothing is billed at this step.",
  },
  {
    icon: UserCheck,
    time: "Within 1 business day",
    title: "A physician reviews your case",
    desc: "A board-certified MD reads every submission personally — no algorithm. If you're a fit, you'll be invited to book a consult.",
  },
  {
    icon: Video,
    time: "Days 2–4",
    title: "You meet your clinician by video",
    desc: "A 30-minute visit to confirm your diagnosis, review contraindications, and design a protocol that fits your life.",
  },
  {
    icon: Package,
    time: "Days 5–7",
    title: "Medication arrives discreetly",
    desc: "Your prescription ships in plain packaging with written session guidance and a direct line to our care team.",
  },
  {
    icon: CalendarClock,
    time: "Every 30 days",
    title: "You check in with your clinician",
    desc: "Monthly medical re-screening is required before any refill. This protects you and keeps care responsible.",
  },
];

export function NextSteps() {
  return (
    <section id="next-steps" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[var(--sage-dark)] text-sm font-bold tracking-widest uppercase mb-4">
            What happens next
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-[var(--charcoal)] font-light mb-6">
            Exactly what to expect <em className="italic text-[var(--sage-dark)]">after you click</em>
          </h2>
          <p className="text-lg text-[var(--warm-gray)] font-light leading-relaxed">
            No black box. Here's the whole journey from first click to first session — and beyond.
          </p>
        </Reveal>

        <div className="max-w-3xl mx-auto">
          <ol className="relative border-l border-[var(--charcoal)]/10 pl-8 space-y-10">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <li className="relative">
                  <div className="absolute -left-[46px] w-10 h-10 rounded-full bg-[var(--cream)] border border-[var(--sage-light)]/40 flex items-center justify-center shadow-sm">
                    <s.icon size={18} strokeWidth={1.6} className="text-[var(--sage-dark)]" />
                  </div>
                  <div className="text-[11px] tracking-widest uppercase text-[var(--sage-dark)] font-semibold mb-2">
                    {s.time}
                  </div>
                  <h3 className="font-display text-2xl text-[var(--charcoal)] mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-[var(--warm-gray)] font-light leading-relaxed">{s.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className="text-center mt-16">
          <AssessmentDialog>
            <button className="bg-[var(--charcoal)] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[var(--sage-dark)] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Begin step one — free assessment
            </button>
          </AssessmentDialog>
          <p className="text-xs text-[var(--warm-gray)]/80 mt-4 font-light">
            You can stop at any point. Nothing is billed before your clinical consult.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
