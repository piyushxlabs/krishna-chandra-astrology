import { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { TrustSignals } from "@/components/sections/home/TrustSignals";
import { AboutIntro } from "@/components/sections/home/AboutIntro";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { WhyChoose } from "@/components/sections/home/WhyChoose";
import { TestimonialsPreview } from "@/components/sections/home/TestimonialsPreview";
import { CTABlock } from "@/components/sections/home/CTABlock";
import BlogPreview from "../components/sections/home/BlogPreview";

export const metadata: Metadata = {
  title: "Pandit Krishna Chandra Jaguri | Vedic Astrologer Dehradun | Janampatri Services",
  description: "10+ years experience in Vedic astrology. Janampatri banana, analysis, personal consultations in Raiwala, Dehradun. Trusted local guidance.",
  openGraph: {
    title: "Pandit Krishna Chandra Jaguri | Vedic Astrologer Dehradun | Janampatri Services",
    description: "10+ years experience in Vedic astrology. Janampatri banana, analysis, personal consultations in Raiwala, Dehradun. Trusted local guidance.",
    url: "/",
    images: [{ url: "/og-image-home.jpg", width: 1200, height: 630, alt: "Pandit Krishna Chandra Jaguri - Vedic Astrologer" }],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustSignals />
      <AboutIntro />
      <ServicesOverview />
      <WhyChoose />
      <TestimonialsPreview />
      <CTABlock />
      <BlogPreview />
    </main>
  );
}
