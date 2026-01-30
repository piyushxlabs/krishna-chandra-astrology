"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";

export function ServicesIntro() {
    return (
        <Section variant="dark" className="min-h-[500px] flex items-center pt-20">
            <Container className="text-center text-[#FAF6F1]">
                <FadeIn>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                        Hamare Services
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        Har service aapki specific zaroorat ke hisaab se designed hai. Chahe aap pehli baar janampatri banwa rahe hon, ya existing kundli ka detailed analysis chahiye — sab kuch yahan available hai.
                    </p>
                </FadeIn>
            </Container>
        </Section>
    );
}
