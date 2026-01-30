"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { MapPin } from "lucide-react";

export function LocalTrust() {
    return (
        <Section>
            <Container>
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full md:w-1/2 order-2 md:order-1">
                        <FadeIn>
                            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                                <img
                                    src="/assets/images/about/rishikesh-ganga.png"
                                    alt="Rishikesh Ganga View"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                    <div className="flex items-center text-white">
                                        <MapPin className="h-5 w-5 mr-2 text-primary" />
                                        <span className="font-medium">Serving Raiwala, Dehradun & Nearby Areas</span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="w-full md:w-1/2 order-1 md:order-2">
                        <FadeIn delay={0.2}>
                            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-secondary mb-6">
                                Local Connection, Personal Service
                            </h2>
                            <div className="prose prose-lg text-text-primary">
                                <p className="mb-4">
                                    Raiwala, Dehradun mein base hone ka faayda yeh hai ki main apne clients ko personally milta hoon. Phone consultation bhi karta hoon, lekin jo log in-person aana chahte hain, unke liye bhi available hoon.
                                </p>
                                <p className="mb-4">
                                    Uttarakhand ki local community aur culture ko main achhe se samajhta hoon. Yahaan ke festivals, traditions, aur local temples ka astrological significance bhi main clients ko batata hoon. Yeh personal touch ek online service se kabhi nahi mil sakta.
                                </p>
                                <p>
                                    Main sirf ek astrologer nahi, aapka local trusted advisor hoon. Nearby areas — Dehradun, Haridwar, Rishikesh — sab jagah se log mere paas aate hain.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
