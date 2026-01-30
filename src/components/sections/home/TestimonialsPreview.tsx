"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Star, User } from "lucide-react";

const TESTIMONIALS = [
    {
        name: "Rajesh K.",
        quote: "Pandit ji ne meri career confusion door ki. Consultation ke baad sab clear ho gaya. Highly recommend!",
        rating: 5,
    },
    {
        name: "Priya S.",
        quote: "Marriage kundli matching mein unka guidance bahut helpful tha. Accurate aur respectful consultation.",
        rating: 5,
    },
    {
        name: "Amit D.",
        quote: "10 saal se janampatri nahi dekhi thi. Pandit ji ne itni detail se explain kiya, bahut acha laga.",
        rating: 5,
    },
];

export function TestimonialsPreview() {
    return (
        <Section variant="alt" className="bg-[#FAF6F1]">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
                    <FadeIn className="max-w-2xl text-center md:text-left">
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-secondary mb-4">
                            Kya kehte hain hamare clients
                        </h2>
                        <p className="text-text-secondary text-lg">
                            Real stories from people who found clarity and guidance.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.2} className="hidden md:block">
                        <Link href="/testimonials">
                            <Button variant="outline">Aur Reviews Padhein</Button>
                        </Link>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {TESTIMONIALS.map((t, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 h-full flex flex-col">
                                <div className="flex gap-1 text-[#D9A566] mb-4">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                <blockquote className="text-secondary text-lg leading-relaxed flex-grow mb-6 italic">
                                    "{t.quote}"
                                </blockquote>
                                <div className="flex items-center mt-auto">
                                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mr-3">
                                        <span className="font-serif font-bold">{t.name[0]}</span>
                                    </div>
                                    <span className="font-medium text-secondary">{t.name}</span>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Mobile Button - Only visible on mobile */}
                <FadeIn delay={0.4} className="flex justify-center md:hidden">
                    <Link href="/testimonials">
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                            Aur Reviews Padhein
                        </Button>
                    </Link>
                </FadeIn>
            </Container>
        </Section>
    );
}
