import { Reveal } from "./Reveal";
import { AssessmentDialog } from "./AssessmentDialog";
import { ArrowRight } from "lucide-react";


export function Hero() {
  return (
    <section className="relative pt-16 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-center">
        
        {/* Content */}
        <div className="max-w-2xl text-center">
          <Reveal>
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--sage-light)] bg-[var(--sage)]/5 text-[var(--sage-dark)] text-xs font-semibold tracking-widest uppercase mb-8">
              Medical-grade ketamine therapy
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-[var(--charcoal)] leading-[1.1] mb-6 text-balance">
              Reclaim your mind. <br/>
              <span className="italic text-[var(--sage-dark)]">Rediscover</span> yourself.
            </h1>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="text-lg sm:text-xl text-[var(--warm-gray)] font-light leading-relaxed mb-10 max-w-lg">
              Clinician-prescribed ketamine nasal spray and lozenges delivered to your door. Evidence-based treatment for depression, anxiety, and PTSD — guided by board-certified physicians.
            </p>
          </Reveal>
          
          <Reveal delay={0.3} className="flex flex-col sm:flex-row gap-4">
            <AssessmentDialog>
              <button className="bg-[var(--charcoal)] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[var(--sage-dark)] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group">
                Start Free Assessment
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </AssessmentDialog>
            <a 
              href="#how-it-works" 
              className="px-8 py-4 rounded-full text-base font-medium text-[var(--charcoal)] border-2 border-[var(--charcoal)]/10 hover:border-[var(--charcoal)] transition-all text-center"
            >
              Learn More
            </a>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
