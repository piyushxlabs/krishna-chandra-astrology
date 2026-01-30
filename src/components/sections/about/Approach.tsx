"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { UserCheck, Lightbulb, Shield, MessageCircle } from "lucide-react";

const PRINCIPLES = [
    {
        icon: UserCheck,
        title: "Personal Attention",
        desc: "Main har kundli ko deeply study karta hoon. Koi rushed consultation nahi."
    },
    {
        icon: Lightbulb,
        title: "Modern Guidance",
        desc: "Vedic principles ko aaj ke time ke hisaab se apply karta hoon. Practical solutions."
    },
    {
        icon: Shield,
        title: "100% Confidential",
        desc: "Aapki personal details aur consultation completely private. Respectful process."
    },
    {
        icon: MessageCircle,
        title: "Simple Language",
        desc: "No confusing jargon. Complicated terms ko simple Hinglish mein explain karta hoon."
    }
];

export function Approach() {
    return (
        <Section variant="alt" className="bg-[#FAF6F1]">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <FadeIn>
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-secondary mb-4">
                            Hamara Approach
                        </h2>
                        <p className="text-text-secondary text-lg">
                            Transparency, respect, aur clarity ke saath guidance.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PRINCIPLES.map((p, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-lg bg-secondary/5 text-secondary flex items-center justify-center mb-4">
                                    <p.icon size={24} />
                                </div>
                                <h3 className="text-xl font-serif font-semibold text-secondary mb-2">
                                    {p.title}
                                </h3>
                                <p className="text-text-secondary text-sm">
                                    {p.desc}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
