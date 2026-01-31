import { Metadata } from "next";
import { ScrollCinematicHero } from "@/components/sections/home/ScrollCinematicHero";
import { TrustSignals } from "@/components/sections/home/TrustSignals";
import { AboutIntro } from "@/components/sections/home/AboutIntro";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { WhyChoose } from "@/components/sections/home/WhyChoose";
import { TestimonialsPreview } from "@/components/sections/home/TestimonialsPreview";
import { PremiumCTA } from "@/components/sections/shared/PremiumCTA";
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
      <ScrollCinematicHero />
      <TrustSignals />
      <AboutIntro />
      <ServicesOverview />
      <WhyChoose />
      <TestimonialsPreview />
      <PremiumCTA
        title="Ready hain apni janampatri samajhne ke liye?"
        subtitle="Aaj hi contact karein aur apne life ke important questions ka jawab paayein."
      />
      <BlogPreview />
    </main>
  );
}
