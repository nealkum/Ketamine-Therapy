import { Reveal } from "./Reveal";
import { AssessmentDialog } from "./AssessmentDialog";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-16 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Content Side */}
        <div className="max-w-2xl">
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

        {/* Visual Side */}
        <Reveal delay={0.2} direction="left" className="relative lg:h-[600px] flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-square lg:aspect-auto lg:h-[500px] rounded-[40px] bg-gradient-nasal overflow-hidden shadow-2xl flex items-center justify-center p-8 border border-white/40">
            {/* Abstract representation of products */}
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div 
                animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-40 h-40 bg-white/30 backdrop-blur-xl border border-white/50 rounded-[40px] rotate-12 shadow-lg"
              />
              <motion.div 
                animate={{ y: [15, -15, 15], rotate: [5, -5, 5] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute w-32 h-32 bg-white/20 backdrop-blur-md border border-white/40 rounded-full -translate-x-12 translate-y-12 shadow-xl"
              />
            </div>
            
            {/* Trust Badge overlay */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
              className="absolute bottom-6 -left-6 sm:left-auto sm:-right-8 bg-[var(--charcoal)] text-white p-4 pr-6 rounded-2xl shadow-2xl flex items-center gap-4 border border-[var(--charcoal)]/80"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--sage-dark)] flex items-center justify-center shrink-0">
                <ShieldCheck size={24} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold tracking-wide">FDA-Compliant Care</div>
                <div className="text-xs text-white/70 font-light mt-0.5">Board-certified physicians</div>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative background blur */}
          <div className="absolute -z-10 w-96 h-96 bg-[var(--sage-light)]/30 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </Reveal>

      </div>
    </section>
  );
}
