import { useEffect } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";
import { useSeo } from "@/lib/useSeo";

interface PageLayoutProps {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: string;
  /** Page <title> shown in the browser tab. */
  seoTitle: string;
  /** Meta description for search engines + social cards. */
  seoDescription: string;
  children: React.ReactNode;
}

export function PageLayout({
  eyebrow,
  title,
  lede,
  seoTitle,
  seoDescription,
  children,
}: PageLayoutProps) {
  useSeo({ title: seoTitle, description: seoDescription });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--cream)]">
      <Navigation />
      <main className="flex-1">
        <section className="pt-16 pb-16 lg:pt-24 lg:pb-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            {eyebrow && (
              <Reveal>
                <div className="text-[var(--sage-dark)] text-sm font-bold tracking-widest uppercase mb-6">
                  {eyebrow}
                </div>
              </Reveal>
            )}
            <Reveal delay={0.05}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-[var(--charcoal)] leading-[1.1] mb-6 text-balance">
                {title}
              </h1>
            </Reveal>
            {lede && (
              <Reveal delay={0.1}>
                <p className="text-lg sm:text-xl text-[var(--warm-gray)] font-light leading-relaxed max-w-2xl mx-auto">
                  {lede}
                </p>
              </Reveal>
            )}
          </div>
        </section>

        <div className="pb-24 lg:pb-32">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

// Re-usable content primitives that preserve the existing visual language.

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-6 text-[var(--charcoal)]/80 font-light leading-relaxed text-base sm:text-lg">
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: React.ReactNode }) {
  return (
    <Reveal className="max-w-3xl mx-auto text-center mb-12">
      {eyebrow && (
        <div className="text-[var(--sage-dark)] text-sm font-bold tracking-widest uppercase mb-4">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl sm:text-4xl text-[var(--charcoal)] font-light">
        {title}
      </h2>
    </Reveal>
  );
}

export function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-[28px] p-8 border border-[var(--charcoal)]/5 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-display text-xl text-[var(--charcoal)] mb-3">{title}</h3>
      <div className="text-[var(--warm-gray)] font-light leading-relaxed text-[15px]">
        {children}
      </div>
    </div>
  );
}
