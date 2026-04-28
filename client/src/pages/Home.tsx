import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { useSeo } from "@/lib/useSeo";
import { Conditions } from "@/components/Conditions";
import { Treatments } from "@/components/Treatments";
import { MedicalStandards } from "@/components/MedicalStandards";
import { Science } from "@/components/Science";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  useSeo({
    title: "Lucid — Physician-guided ketamine therapy for depression, anxiety & PTSD",
    description:
      "Evidence-based, at-home ketamine therapy prescribed and monitored by board-certified physicians. Free 5-minute clinical assessment.",
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Conditions />
        <Treatments />
        <MedicalStandards />
        <Science />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
