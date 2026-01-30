"use client";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutIntro() {
    return (
        <Section>
            <Container>
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    <FadeIn className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
                        <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                            <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110 animate-pulse" />
                            <div className="absolute inset-0 rounded-full border border-primary/40 scale-105" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#FAF6F1] shadow-2xl">
                                <img
                                    src="/assets/images/hero/about-hero.png"
                                    alt="Pandit Krishna Chandra Jaguri"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} className="w-full md:w-1/2 text-center md:text-left order-1 md:order-2">
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-secondary mb-2">
                            Pandit Krishna Chandra Jaguri
                        </h2>
                        <p className="text-primary font-medium tracking-wide uppercase text-sm mb-6">
                            Vedic Astrologer | 10+ Years Experience
                        </p>

                        <div className="space-y-4 text-text-primary leading-relaxed text-lg mb-8">
                            <p>
                                Namaste! Main Krishna Chandra Jaguri hoon, aur pichle 10 saalon se Vedic astrology ke madhyam se logon ki life ko behtar banane mein madad kar raha hoon.
                            </p>
                            <p>
                                Raiwala, Dehradun se hoon, aur mere liye astrology sirf ek service nahi, balki ek zimmedari hai — aapke bhavishya ko samajhne aur life ke important decisions mein guidance dene ki.
                            </p>
                        </div>

                        <Link href="/about">
                            <Button variant="secondary" className="group">
                                Know More About Me
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </FadeIn>
                </div>
            </Container>
        </Section>
    );
}
