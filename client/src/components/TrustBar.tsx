import { Reveal } from "./Reveal";
import { ShieldCheck, Stethoscope, Lock, FileCheck } from "lucide-react";

const badges = [
  {
    icon: Stethoscope,
    title: "Board-certified physicians",
    sub: "Every prescription written by a licensed MD",
  },
  {
    icon: ShieldCheck,
    title: "LegitScript & DEA compliant",
    sub: "Verified telehealth controlled-substance prescribing",
  },
  {
    icon: Lock,
    title: "HIPAA-protected",
    sub: "Your records are encrypted and confidential",
  },
  {
    icon: FileCheck,
    title: "Evidence-based protocols",
    sub: "Backed by 20+ years of clinical research",
  },
];

export function TrustBar() {
  return (
    <section className="py-14 border-y border-[var(--charcoal)]/5 bg-white/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {badges.map((b, i) => (
            <Reveal key={i} delay={i * 0.08} className="flex flex-col items-center text-center gap-3 px-4">
              <div className="w-11 h-11 rounded-full bg-[var(--sage)]/10 flex items-center justify-center">
                <b.icon size={20} strokeWidth={1.6} className="text-[var(--sage-dark)]" />
              </div>
              <div>
                <div className="text-[13px] font-semibold tracking-wide text-[var(--charcoal)] leading-snug">
                  {b.title}
                </div>
                <div className="text-[11px] sm:text-xs font-light text-[var(--warm-gray)] mt-1 leading-snug">
                  {b.sub}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
