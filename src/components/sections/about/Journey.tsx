"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";

export function Journey() {
    return (
        <Section>
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full lg:w-1/2">
                        <FadeIn>
                            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-secondary mb-6">
                                Mera Safar
                            </h2>
                            <div className="prose prose-lg text-text-primary">
                                <p className="mb-4">
                                    Mera astrology mein interest bachpan se tha, lekin seriously seekhna 10 saal pehle shuru kiya. Vedic astrology ki ancient wisdom aur uske modern applications ko samajhne mein maine bahut waqt diya.
                                </p>
                                <p className="mb-4">
                                    Kisi formal degree se zyada, maine practical experience aur clients ke saath kaam karke seekha hai. Har consultation mein maine yeh dekha ki kaise janampatri ek insaan ki life ka blueprint hoti hai.
                                </p>
                                <p>
                                    Raiwala mein rehta hoon, aur yahan ke log mujhe personally jaante hain. Yeh trust mere liye sabse badi achievement hai. Main chahta hoon ki har client ko lagta rahe ki wo sirf ek customer nahi, balki ek extended family member ki tarah treat ho raha hai.
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <FadeIn delay={0.2}>
                            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                                <img
                                    src="/assets/images/about/ancient-texts.png"
                                    alt="Ancient Vedic Texts"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
