"use client";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";

export function BlogHero() {
    return (
        <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background with celestial theme */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary to-[#4A3B2F] z-0">
                {/* Abstract Stars/Constellations Overlay - using CSS/SVG patterns could be added here */}
                <div className="absolute inset-0 bg-[url('/assets/images/blog/planets-2026.png')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent"></div>
            </div>

            <Container className="relative z-10 text-center text-[#FAF6F1]">
                <FadeIn>
                    <span className="block text-primary font-medium tracking-widest uppercase mb-4 text-sm md:text-base">
                        Pandit Krishna Chandra Jaguri
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white drop-shadow-md">
                        Astrology Insights
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
                        Explore the mysteries of the cosmos, ancient wisdom, and practical guidance for your life's journey.
                    </p>
                </FadeIn>
            </Container>
        </section>
    );
}
