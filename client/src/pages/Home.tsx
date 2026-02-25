import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { HowItWorks } from "@/components/HowItWorks";
import { Treatments } from "@/components/Treatments";
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
        <HowItWorks />
        <Treatments />
        <Science />
        <Testimonials />

        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
