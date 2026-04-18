import { Reveal } from "./Reveal";
import { AssessmentDialog } from "./AssessmentDialog";
import { Brain, CloudRain, HeartPulse } from "lucide-react";

const conditions = [
  {
    icon: CloudRain,
    name: "Treatment-resistant depression",
    who:
      "Adults who haven't responded to two or more conventional antidepressants, or who need faster relief than SSRIs can offer.",
    evidence:
      "Peer-reviewed trials show 50–70% response rates in TRD populations, with onset within 24–72 hours.",
    signals: ["Persistent low mood", "Loss of interest", "Fatigue & sleep disruption", "Hopelessness"],
  },
  {
    icon: Brain,
    name: "Generalized & social anxiety",
    who:
      "Patients with chronic worry, intrusive thoughts, or physical anxiety symptoms that limit daily functioning.",
    evidence:
      "Ketamine's NMDA-modulating action is associated with rapid, sustained reductions in anxiety scales in multiple controlled studies.",
    signals: ["Racing thoughts", "Chronic worry", "Panic symptoms", "Avoidance"],
  },
  {
    icon: HeartPulse,
    name: "PTSD",
    who:
      "Adults with trauma-related symptoms — from combat, assault, or medical events — seeking an adjunct to talk therapy.",
    evidence:
      "Emerging evidence supports ketamine-assisted therapy as a meaningful adjunct for PTSD, particularly when paired with integration work.",
    signals: ["Flashbacks", "Hypervigilance", "Emotional numbness", "Sleep disturbance"],
  },
];

export function Conditions() {
  return (
    <section id="conditions" className="py-24 lg:py-32 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[var(--sage-dark)] text-sm font-bold tracking-widest uppercase mb-4">
            Conditions we treat
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-[var(--charcoal)] font-light mb-6">
            Built specifically for <em className="italic text-[var(--sage-dark)]">three conditions</em>
          </h2>
          <p className="text-lg text-[var(--warm-gray)] font-light leading-relaxed">
            We don't treat everything. Our clinical model is focused on the three conditions with the strongest evidence base for ketamine-assisted care: depression, anxiety, and PTSD.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {conditions.map((c, i) => (
            <Reveal
              key={c.name}
              delay={i * 0.08}
              className="bg-white rounded-[28px] p-8 border border-[var(--charcoal)]/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col"
            >
              <div className="w-12 h-12 rounded-2xl bg-[var(--sage)]/10 flex items-center justify-center mb-6">
                <c.icon size={22} strokeWidth={1.5} className="text-[var(--sage-dark)]" />
              </div>
              <h3 className="font-display text-2xl text-[var(--charcoal)] mb-3 leading-snug">{c.name}</h3>
              <p className="text-[var(--warm-gray)] font-light leading-relaxed text-[15px] mb-5">{c.who}</p>

              <div className="text-[11px] tracking-widest uppercase text-[var(--sage-dark)] font-semibold mb-2">
                Common signals
              </div>
              <ul className="flex flex-wrap gap-2 mb-6">
                {c.signals.map((s) => (
                  <li
                    key={s}
                    className="text-[12px] text-[var(--charcoal)]/70 bg-[var(--cream)] border border-[var(--charcoal)]/5 rounded-full px-3 py-1"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <p className="text-[13px] text-[var(--charcoal)]/60 font-light leading-relaxed border-t border-[var(--charcoal)]/5 pt-5 mt-auto italic">
                {c.evidence}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-14">
          <AssessmentDialog>
            <button className="bg-[var(--charcoal)] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[var(--sage-dark)] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              See if you qualify — 5 min
            </button>
          </AssessmentDialog>
          <p className="text-xs text-[var(--warm-gray)] mt-4 font-light">
            If your condition isn't listed, our clinicians will help you find appropriate care elsewhere.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
