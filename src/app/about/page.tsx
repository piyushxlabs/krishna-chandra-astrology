import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IntroHero } from "@/components/sections/about/IntroHero";
import { Journey } from "@/components/sections/about/Journey";
import { Approach } from "@/components/sections/about/Approach";
import { LocalTrust } from "@/components/sections/about/LocalTrust";
import { CTASection } from "@/components/sections/about/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Pandit Ji | Krishna Chandra Jaguri",
    description: "Learn about Pandit Krishna Chandra Jaguri's 10+ years of experience in Vedic Astrology.",
};

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-20">
                <IntroHero />
                <Journey />
                <Approach />
                <LocalTrust />
                <CTASection />
            </main>
            <Footer />
        </>
    );
}
