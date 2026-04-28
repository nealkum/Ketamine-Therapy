import { Reveal } from "./Reveal";

export function Testimonials() {
  const testimonials = [
    {
      quote: "After years of therapy and medication, ketamine was the breakthrough I needed. Within two sessions I felt a weight lift that I'd been carrying for decades.",
      name: "Sarah",
      detail: "Depression Patient",
      initials: "S"
    },
    {
      quote: "The team at Lucid made the entire process feel safe and supported. The convenience of at-home treatment completely changed my healing journey.",
      name: "David",
      detail: "Anxiety Patient",
      initials: "D"
    },
    {
      quote: "I was skeptical at first, but the results speak for themselves. I have my life back. The clinician check-ins were invaluable.",
      name: "Emily",
      detail: "PTSD Patient",
      initials: "E"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-[var(--sage-dark)] text-sm font-bold tracking-widest uppercase mb-4">Patient Stories</div>
          <h2 className="font-display text-4xl sm:text-5xl text-[var(--charcoal)] font-light">
            Real experiences, <em className="italic text-[var(--sage-dark)]">real results</em>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.15} className="bg-[var(--cream)] p-8 lg:p-10 rounded-3xl border border-[var(--charcoal)]/5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="text-[var(--accent)] tracking-[2px] text-sm mb-6">★★★★★</div>
              <blockquote className="font-display text-xl lg:text-2xl text-[var(--charcoal)] font-light italic leading-snug mb-8">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-[var(--sage-light)] flex items-center justify-center font-display text-xl text-white">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm text-[var(--charcoal)]">{t.name}</div>
                  <div className="text-xs text-[var(--warm-gray)]">{t.detail}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
