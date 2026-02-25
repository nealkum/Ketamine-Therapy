import { Reveal } from "./Reveal";
import { Brain, Zap, FlaskConical, Heart, Timer, RefreshCw } from "lucide-react";

export function Science() {
  const benefits = [
    {
      icon: Brain,
      title: "Neuroplasticity",
      desc: "Ketamine promotes the growth of new neural connections, helping the brain form healthier thought patterns and pathways."
    },
    {
      icon: Zap,
      title: "Rapid Relief",
      desc: "Unlike traditional antidepressants that take weeks, many patients experience significant improvement within hours of their first session."
    },
    {
      icon: FlaskConical,
      title: "Clinically Proven",
      desc: "Supported by peer-reviewed research and decades of safe clinical use. Ketamine is recognized as a breakthrough therapy."
    },
    {
      icon: Heart,
      title: "Emotional Healing",
      desc: "Creates a unique therapeutic window for processing trauma, reducing anxiety, and building emotional resilience."
    },
    {
      icon: Timer,
      title: "Lasting Results",
      desc: "Treatment effects compound over time. Integration protocols help cement new thought patterns for sustained improvement."
    },
    {
      icon: RefreshCw,
      title: "Treatment-Resistant",
      desc: "Effective for patients who haven't responded to traditional antidepressants. A new pathway when conventional treatments fall short."
    }
  ];

  return (
    <section id="science" className="py-24 lg:py-32 bg-[var(--deep)] relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[var(--sage-light)]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-[var(--sage-light)] text-sm font-bold tracking-widest uppercase mb-4">The Science</div>
          <h2 className="font-display text-4xl sm:text-5xl text-white font-light mb-6">
            Why ketamine <em className="italic text-[var(--sage-light)]">works</em>
          </h2>
          <p className="text-lg text-white/60 font-light leading-relaxed">
            Decades of clinical research support ketamine as a breakthrough treatment for mental health conditions.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, i) => (
            <Reveal key={i} delay={i * 0.1} className="bg-white/5 border border-white/10 backdrop-blur-md p-8 lg:p-10 rounded-3xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[var(--sage)]/20 flex items-center justify-center mb-6">
                <benefit.icon size={24} strokeWidth={1.5} className="text-[var(--sage-light)]" />
              </div>
              <h3 className="font-display text-2xl text-white mb-3">{benefit.title}</h3>
              <p className="text-white/60 font-light leading-relaxed text-sm sm:text-base">
                {benefit.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
