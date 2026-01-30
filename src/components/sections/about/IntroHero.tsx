"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";

export function IntroHero() {
    return (
        <Section variant="dark" className="relative overflow-hidden py-24 md:py-32">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#4A3B2F]/90 mix-blend-multiply z-10" />
                <img
                    src="/assets/images/hero/pandit-ji-hero-portrait.png"
                    alt="Pandit Ji Background"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            <Container className="relative z-20 text-center text-[#FAF6F1]">
                <FadeIn>
                    <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-[#C9954D] mx-auto mb-8 overflow-hidden shadow-2xl">
                        <img
                            src="/assets/images/hero/about-hero.png"
                            alt="Pandit Krishna Chandra Jaguri"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
                        Krishna Chandra Jaguri
                    </h1>
                    <p className="text-xl md:text-2xl text-[#C9954D] font-medium mb-8">
                        Vedic Astrologer | 10 Years Experience
                    </p>
                    <div className="max-w-3xl mx-auto text-lg leading-relaxed text-white/90 space-y-4">
                        <p>
                            Namaste! Main Krishna Chandra Jaguri, ek Vedic astrologer jo pichle 10 saalon se Raiwala, Dehradun mein astrology ke zariye logon ki zindagi mein positive change la raha hoon.
                        </p>
                        <p>
                            Mere liye astrology ek passion hai, ek seva hai — aur sabse zaroori, ek zimmedari hai jo main bahut seriously leta hoon.
                        </p>
                    </div>
                </FadeIn>
            </Container>
        </Section>
    );
}
