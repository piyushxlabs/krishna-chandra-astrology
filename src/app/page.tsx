import { Hero } from "@/components/sections/home/Hero";
import { TrustSignals } from "@/components/sections/home/TrustSignals";
import { AboutIntro } from "@/components/sections/home/AboutIntro";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { WhyChoose } from "@/components/sections/home/WhyChoose";
import { TestimonialsPreview } from "@/components/sections/home/TestimonialsPreview";
import { CTABlock } from "@/components/sections/home/CTABlock";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <TrustSignals />
        <AboutIntro />
        <ServicesOverview />
        <WhyChoose />
        <TestimonialsPreview />
        <CTABlock />
      </main>
      <Footer />
    </>
  );
}
