import { Reveal } from "./Reveal";
import { AssessmentDialog } from "./AssessmentDialog";
import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Starter Protocol",
      desc: "Perfect for those new to ketamine therapy wanting to evaluate its effectiveness.",
      price: "129",
      period: "/month",
      features: [
        "Initial clinician consultation",
        "4 low-dose sublingual sessions",
        "Ongoing medical monitoring",
        "Integration journal access"
      ],
      featured: false
    },
    {
      name: "Therapeutic Plan",
      desc: "Our most effective protocol for sustained relief and deep neuroplasticity.",
      price: "199",
      period: "/month",
      features: [
        "Extended clinician consultation",
        "6 customized nasal or oral sessions",
        "Priority medical monitoring",
        "1:1 Integration coaching session",
        "Free shipping & expedited delivery"
      ],
      featured: true
    },
    {
      name: "Maintenance",
      desc: "For returning patients who have completed an initial therapeutic protocol.",
      price: "99",
      period: "/month",
      features: [
        "Quarterly clinician check-in",
        "2 maintenance sessions monthly",
        "Continued medical monitoring",
        "Community support access"
      ],
      featured: false
    }
  ];

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-[var(--sage-dark)] text-sm font-bold tracking-widest uppercase mb-4">Transparent Pricing</div>
          <h2 className="font-display text-4xl sm:text-5xl text-[var(--charcoal)] font-light">
            Invest in your <em className="italic text-[var(--sage-dark)]">wellbeing</em>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, i) => (
            <Reveal key={i} delay={i * 0.1} className={`bg-white rounded-[32px] p-8 lg:p-10 transition-all duration-300 relative ${plan.featured ? 'border-2 border-[var(--sage)] shadow-2xl scale-105 z-10' : 'border border-[var(--charcoal)]/5 hover:-translate-y-1 hover:shadow-xl'}`}>
              
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--sage)] text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-sm">
                  Most Popular
                </div>
              )}

              <h3 className="font-display text-2xl text-[var(--charcoal)] mb-3">{plan.name}</h3>
              <p className="text-[var(--warm-gray)] text-sm font-light leading-relaxed mb-8 h-10">
                {plan.desc}
              </p>
              
              <div className="font-display text-5xl text-[var(--charcoal)] font-light mb-1">
                ${plan.price}
                <span className="font-sans text-sm font-light text-[var(--warm-gray)]">{plan.period}</span>
              </div>
              <div className="text-xs text-[var(--warm-gray)] mb-8">Billed monthly. Cancel anytime.</div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-[var(--charcoal)] font-light">
                    <Check size={18} className="text-[var(--sage)] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <AssessmentDialog>
                <button className={`w-full py-4 rounded-full text-sm font-medium transition-all ${plan.featured ? 'bg-[var(--charcoal)] text-white hover:bg-[var(--sage-dark)] shadow-md' : 'bg-transparent border border-[var(--charcoal)]/20 text-[var(--charcoal)] hover:border-[var(--charcoal)]'}`}>
                  Get Started
                </button>
              </AssessmentDialog>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
