import { Reveal } from "./Reveal";

const stats = [
  { num: "2,000+", label: "Sessions Completed" },
  { num: "89%", label: "Report Improvement" },
  { num: "48", label: "States Available" },
  { num: "4.8★", label: "Average Rating" },
];

export function TrustBar() {
  return (
    <section className="py-16 border-y border-[var(--charcoal)]/5 bg-white/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-[var(--charcoal)]/5">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.1} className="text-center px-4">
              <div className="font-display text-4xl sm:text-5xl text-[var(--sage-dark)] font-light mb-2">
                {stat.num}
              </div>
              <div className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[var(--warm-gray)]">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
