import { Metadata } from "next";
import { IntroHero } from "@/components/sections/about/IntroHero";
import { Journey } from "@/components/sections/about/Journey";
import { Approach } from "@/components/sections/about/Approach";
import { LocalTrust } from "@/components/sections/about/LocalTrust";
import { PremiumCTA } from "@/components/sections/shared/PremiumCTA";

export const metadata: Metadata = {
    title: "About Pandit Krishna Chandra Jaguri | Vedic Astrologer Dehradun",
    description: "Meet Pandit Krishna Chandra Jaguri — 10 years experience in Vedic astrology, serving Raiwala, Dehradun and nearby areas with trusted guidance.",
    openGraph: {
        title: "About Pandit Krishna Chandra Jaguri | Vedic Astrologer Dehradun",
        description: "Meet Pandit Krishna Chandra Jaguri — 10 years experience in Vedic astrology, serving Raiwala, Dehradun and nearby areas with trusted guidance.",
        url: "/about",
    },
    alternates: {
        canonical: "/about",
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <IntroHero />
            <Journey />
            <Approach />
            <LocalTrust />
            <PremiumCTA
                title="Chaliye discuss karein aapki janampatri"
                subtitle="Ek consultation se shuru karte hain. Aapke sawalon ke liye main yahan hoon."
            />
        </main>
    );
}
