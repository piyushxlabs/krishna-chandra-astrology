"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { Award, BookOpen, Users, ShieldCheck } from "lucide-react";

const REASONS = [
    {
        icon: Award,
        title: "10 Years Dedicated Experience",
        description: "Vedic astrology mein ek decade ka proven track record. Accurate predictions aur trusted guidance."
    },
    {
        icon: BookOpen,
        title: "Ancient Wisdom, Modern Approach",
        description: "Traditional knowledge ko aaj ke time ke hisaab se samjhana. Practical solutions jo aapki life mein kaam karein."
    },
    {
        icon: Users,
        title: "Local Trust, Personal Care",
        description: "Raiwala aur Dehradun ke local community ka hissa. Har client ke saath ek personal relationship."
    },
    {
        icon: ShieldCheck,
        title: "Transparent Process",
        description: "No hidden fees, no confusing jargon. Sirf clear, honest guidance jo aap samajh sakein."
    }
];

export function WhyChoose() {
    return (
        <Section>
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <FadeIn>
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-secondary mb-4">
                            Kyu choose karein Pandit Krishna Chandra Jaguri ko?
                        </h2>
                        <p className="text-text-secondary text-lg">
                            Authentic Vedic knowledge delivered with personal care.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {REASONS.map((reason, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div className="flex items-start space-x-4 p-6 rounded-xl hover:bg-surface-alt transition-colors duration-300">
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                    <reason.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif font-semibold text-secondary mb-2">
                                        {reason.title}
                                    </h3>
                                    <p className="text-text-secondary leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
