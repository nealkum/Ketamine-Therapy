import { Reveal } from "./Reveal";
import { AssessmentDialog } from "./AssessmentDialog";
import { Droplet, Circle } from "lucide-react";

export function Treatments() {
  return (
    <section id="treatments" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-[var(--sage-dark)] text-sm font-bold tracking-widest uppercase mb-4">Treatment Options</div>
          <h2 className="font-display text-4xl sm:text-5xl text-[var(--charcoal)] font-light mb-6">
            Personalized <em className="italic text-[var(--sage-dark)]">treatment</em>, your way
          </h2>
          <p className="text-lg text-[var(--warm-gray)] font-light leading-relaxed">
            Two clinically-proven delivery methods — prescribed by physicians and customized to your needs.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Nasal Spray */}
          <Reveal className="group bg-[var(--cream)] rounded-[32px] overflow-hidden border border-[var(--charcoal)]/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)] flex flex-col">
            <div className="aspect-[4/3] relative overflow-hidden bg-gradient-nasal flex items-center justify-center p-8">
              <div className="absolute top-6 left-6 bg-white px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[var(--sage-dark)] shadow-sm">
                Nasal Spray
              </div>
              <div className="w-32 h-32 rounded-full bg-white/40 backdrop-blur-xl border border-white/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
                <Droplet size={48} strokeWidth={1.2} className="text-[var(--sage-dark)]" />
              </div>
            </div>
            <div className="p-8 lg:p-10 flex-1 flex flex-col">
              <h3 className="font-display text-3xl text-[var(--charcoal)] mb-2">Ketamine Nasal Spray</h3>
              <div className="text-sm font-semibold tracking-wide text-[var(--sage-dark)] mb-6">Esketamine · Custom Dosing Protocol</div>
              <p className="text-[var(--warm-gray)] font-light leading-relaxed mb-10 flex-1">
                Fast-acting intranasal delivery for rapid relief. Physician-calibrated dosing with precise metered-dose spray device. Ideal for acute symptom management.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="font-display text-3xl text-[var(--charcoal)] font-light">
                  $149 <span className="font-sans text-sm font-light text-[var(--warm-gray)]">/month</span>
                </div>
                <AssessmentDialog>
                  <button className="bg-[var(--charcoal)] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[var(--sage-dark)] transition-colors">
                    Get Started
                  </button>
                </AssessmentDialog>
              </div>
            </div>
          </Reveal>

          {/* Lozenges */}
          <Reveal delay={0.2} className="group bg-[var(--cream)] rounded-[32px] overflow-hidden border border-[var(--charcoal)]/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)] flex flex-col">
            <div className="aspect-[4/3] relative overflow-hidden bg-gradient-lozenge flex items-center justify-center p-8">
              <div className="absolute top-6 left-6 bg-white px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[var(--sage-dark)] shadow-sm">
                Sublingual
              </div>
              <div className="w-32 h-32 rounded-[28px] bg-white/40 backdrop-blur-xl border border-white/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl rotate-12 group-hover:rotate-0">
                <Circle size={48} strokeWidth={1.2} className="text-[var(--accent)]" />
              </div>
            </div>
            <div className="p-8 lg:p-10 flex-1 flex flex-col">
              <h3 className="font-display text-3xl text-[var(--charcoal)] mb-2">Ketamine Lozenges</h3>
              <div className="text-sm font-semibold tracking-wide text-[var(--sage-dark)] mb-6">Sublingual Troche · Graduated Dosing</div>
              <p className="text-[var(--warm-gray)] font-light leading-relaxed mb-10 flex-1">
                Sublingual lozenges for deeper, sustained therapeutic sessions. Gradual absorption promotes extended neuroplasticity windows. Perfect for integration-focused protocols.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="font-display text-3xl text-[var(--charcoal)] font-light">
                  $129 <span className="font-sans text-sm font-light text-[var(--warm-gray)]">/month</span>
                </div>
                <AssessmentDialog>
                  <button className="bg-[var(--charcoal)] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[var(--sage-dark)] transition-colors">
                    Get Started
                  </button>
                </AssessmentDialog>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
