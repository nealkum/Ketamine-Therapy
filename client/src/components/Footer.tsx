import { AssessmentDialog } from "./AssessmentDialog";

export function Footer() {
  return (
    <footer className="bg-[var(--deep)] pt-24 pb-12">
      {/* Pre-Footer CTA */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center mb-24 relative z-10">
        <div className="text-[var(--sage-light)] text-sm font-bold tracking-widest uppercase mb-6">Take Action</div>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-light mb-8 text-balance">
          Ready to begin your <br className="hidden sm:block"/>
          <em className="italic text-[var(--cream)]">healing journey?</em>
        </h2>
        <p className="text-white/60 font-light text-lg mb-10 max-w-xl mx-auto">
          Start with our free 5-minute clinical assessment to see if ketamine therapy is right for you.
        </p>
        <AssessmentDialog>
          <button className="bg-white text-[var(--charcoal)] px-8 py-4 rounded-full text-base font-medium hover:bg-[var(--cream)] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
            Start Free Assessment
          </button>
        </AssessmentDialog>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 border-t border-white/10 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-2">
            <a href="#" className="font-display text-3xl font-medium tracking-tight text-white mb-6 inline-block">
              Lucid
            </a>
            <p className="text-white/50 text-sm font-light leading-relaxed max-w-sm">
              Providing safe, effective, physician-guided ketamine therapy from the comfort of your home. Reclaim your mind and rediscover yourself.
            </p>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-6">Treatments</h4>
            <ul className="space-y-4 text-sm font-light text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Nasal Spray</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sublingual Lozenges</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integration Coaching</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-light text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Medical Team</a></li>
              <li><a href="#science" className="hover:text-white transition-colors">The Science</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-6">Support</h4>
            <ul className="space-y-4 text-sm font-light text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Patient Portal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Crisis Resources</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40 font-light">
          <p>&copy; {new Date().getFullYear()} Lucid Health Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">HIPAA Notice</a>
          </div>
        </div>

        <div className="mt-12 text-[10px] text-white/20 font-light leading-relaxed max-w-4xl text-center mx-auto md:text-left md:mx-0">
          Disclaimer: Ketamine is a Schedule III controlled substance. Treatment is subject to medical evaluation and prescription by a licensed physician. Ketamine therapy is not suitable for everyone and may have side effects. If you are experiencing a mental health emergency, please call 988 or go to the nearest emergency room.
        </div>
      </div>
    </footer>
  );
}
