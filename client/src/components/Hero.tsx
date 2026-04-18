import { Reveal } from "./Reveal";
import { AssessmentDialog } from "./AssessmentDialog";
import { ArrowRight } from "lucide-react";


export function Hero() {
  return (
    <section className="relative pt-16 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-center">
        
        {/* Content */}
        <div className="max-w-2xl text-center">
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-[var(--charcoal)] leading-[1.1] mb-6 text-balance">
              Relief from depression — <span className="italic text-[var(--sage-dark)]">in weeks</span>, not years.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg sm:text-xl text-[var(--warm-gray)] font-light leading-relaxed mb-10 max-w-lg mx-auto">
              Physician-prescribed ketamine for depression, anxiety, and PTSD — delivered to your door and reviewed by a real clinician every month. Evidence-based. Responsible. Actually supportive.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="flex justify-center">
            <AssessmentDialog>
              <button className="bg-[var(--charcoal)] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[var(--sage-dark)] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group">
                Check if you qualify — 5 min
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </AssessmentDialog>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-8 text-xs tracking-widest uppercase text-[var(--warm-gray)]/70 font-medium">
              HIPAA-protected · Board-certified physicians
            </p>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
