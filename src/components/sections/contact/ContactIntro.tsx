"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";

export function ContactIntro() {
    return (
        <Section variant="dark" className="min-h-[500px] flex items-center pt-20">
            <Container className="text-center text-[#FAF6F1]">
                <FadeIn>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                        Ready to understand your janampatri? Call us, WhatsApp us, or visit us in Raiwala.
                    </p>
                </FadeIn>
            </Container>
        </Section>
    );
}
