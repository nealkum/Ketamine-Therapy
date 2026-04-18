import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Conditions } from "@/components/Conditions";
import { HowItWorks } from "@/components/HowItWorks";
import { NextSteps } from "@/components/NextSteps";
import { Treatments } from "@/components/Treatments";
import { MedicalStandards } from "@/components/MedicalStandards";
import { Science } from "@/components/Science";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Conditions />
        <HowItWorks />
        <NextSteps />
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
