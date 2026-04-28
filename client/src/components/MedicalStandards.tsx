import { Reveal } from "./Reveal";
import { Link } from "wouter";
import { Stethoscope, ShieldCheck, ClipboardCheck, Users } from "lucide-react";

const pillars = [
  {
    icon: Stethoscope,
    title: "A licensed physician on every case",
    desc: "Every assessment is personally reviewed by a board-certified MD with training in psychedelic medicine. Prescriptions are never issued algorithmically.",
  },
  {
    icon: ClipboardCheck,
    title: "Mandatory monthly re-screening",
    desc: "Ketamine is a Schedule III controlled medication. Every patient completes a monthly clinical check-in before a new prescription is written — no check-in, no refill.",
  },
  {
    icon: ShieldCheck,
    title: "Written protocols for every session",
    desc: "You receive clear dosing instructions, a preparation checklist, adverse-event guidance, and a 24/7 clinician line. No guesswork at home.",
  },
  {
    icon: Users,
    title: "Referral over overprescription",
    desc: "If ketamine isn't right for you — or isn't working — our clinicians will help you transition to a more appropriate form of care. We'd rather lose you as a patient than harm you.",
  },
];

export function MedicalStandards() {
  return (
    <section id="medical-standards" className="py-24 lg:py-32 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[var(--sage-dark)] text-sm font-bold tracking-widest uppercase mb-4">
            Our clinical standards
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-[var(--charcoal)] font-light">
            The guardrails <em className="italic text-[var(--sage-dark)]">behind every prescription</em>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className="bg-white rounded-[28px] p-8 border border-[var(--charcoal)]/5 shadow-sm">
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-2xl bg-[var(--sage)]/10 flex items-center justify-center shrink-0">
                  <p.icon size={22} strokeWidth={1.5} className="text-[var(--sage-dark)]" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-[var(--charcoal)] mb-2">{p.title}</h3>
                  <p className="text-[var(--warm-gray)] font-light leading-relaxed text-[15px]">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-14">
          <Link
            href="/safety"
            className="inline-block px-8 py-4 rounded-full text-base font-medium text-[var(--charcoal)] border-2 border-[var(--charcoal)]/15 hover:border-[var(--charcoal)] transition-all"
          >
            Read our full safety standards
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
