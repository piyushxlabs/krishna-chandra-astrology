"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { SITE_CONFIG } from "@/lib/utils/constants";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-secondary text-[#FAF6F1]">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#4A3B2F]/80 mix-blend-multiply z-10" />
                <img
                    src="/assets/images/hero/pandit-ji-hero-portrait.png"
                    alt="Pandit Krishna Chandra Jaguri"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            <Container className="relative z-20 flex flex-col items-center text-center space-y-6 md:space-y-8 pt-20">
                <FadeIn>
                    <div className="inline-block px-4 py-1.5 mb-4 border border-[#C9954D]/30 rounded-full bg-[#C9954D]/10 backdrop-blur-sm">
                        <span className="text-[#C9954D] font-medium tracking-wide text-sm uppercase">
                            Vedic Astrologer in Dehradun
                        </span>
                    </div>
                </FadeIn>

                <FadeIn delay={0.1} className="max-w-4xl mx-auto">
                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        Aapki janampatri mein chhipe raaz, <span className="text-primary italic">10 saal</span> ke experience ke saath
                    </h1>
                </FadeIn>

                <FadeIn delay={0.2} className="max-w-2xl mx-auto">
                    <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
                        Vedic astrology ki ancient wisdom se apne future ko samjhein aur life decisions ko confident banayein.
                    </p>
                </FadeIn>

                <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                    <Button
                        size="lg"
                        onClick={() => window.open(`https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/\D/g, '')}`, '_blank')}
                        className="w-full sm:w-auto"
                    >
                        WhatsApp Karein
                    </Button>
                    <Link href="/services" className="w-full sm:w-auto">
                        <Button variant="outline" size="lg" className="w-full sm:w-auto text-[#FAF6F1] border-[#FAF6F1]/30 hover:bg-[#FAF6F1]/10">
                            Services Dekhein
                        </Button>
                    </Link>
                </FadeIn>
            </Container>
        </section>
    );
}
