import { Reveal } from "./Reveal";
import { FileText, Stethoscope, Package } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: FileText,
      title: "Complete Assessment",
      desc: "Answer a brief clinical questionnaire about your symptoms, medical history, and treatment goals. Takes just 5 minutes."
    },
    {
      num: "02",
      icon: Stethoscope,
      title: "Physician Consultation",
      desc: "Meet with a board-certified physician via video call. Your doctor will create a personalized treatment plan tailored to your needs."
    },
    {
      num: "03",
      icon: Package,
      title: "Treatment Delivered",
      desc: "Your medical-grade ketamine is shipped discreetly to your door. Begin treatment at home with ongoing clinician support."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-[var(--sage-dark)] text-sm font-bold tracking-widest uppercase mb-4">How It Works</div>
          <h2 className="font-display text-4xl sm:text-5xl text-[var(--charcoal)] font-light mb-6">
            Three simple steps to <em className="italic text-[var(--sage-dark)]">healing</em>
          </h2>
          <p className="text-lg text-[var(--warm-gray)] font-light leading-relaxed">
            Our streamlined process ensures you receive the right care, safely and conveniently from home.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-px bg-[var(--charcoal)]/10 -z-10" />

          {steps.map((step, i) => (
            <Reveal key={i} delay={i * 0.15} className="relative bg-white/60 p-8 rounded-3xl border border-[var(--charcoal)]/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="absolute -top-5 -right-2 text-7xl font-display font-light text-[var(--charcoal)]/5 select-none pointer-events-none">
                {step.num}
              </div>
              <div className="w-16 h-16 rounded-2xl bg-[var(--cream)] border border-[var(--sage-light)]/30 flex items-center justify-center mb-8 shadow-sm">
                <step.icon size={28} strokeWidth={1.5} className="text-[var(--sage-dark)]" />
              </div>
              <h3 className="font-display text-2xl text-[var(--charcoal)] mb-4">{step.title}</h3>
              <p className="text-[var(--warm-gray)] font-light leading-relaxed text-sm sm:text-base">
                {step.desc}
              </p>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
