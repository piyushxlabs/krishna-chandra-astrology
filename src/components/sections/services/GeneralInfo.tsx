"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { Globe, Clock, ShieldCheck, Banknote } from "lucide-react";

export function GeneralInfo() {
    return (
        <Section variant="alt" className="bg-[#F5EFE6]">
            <Container>
                <FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <Globe className="w-8 h-8 mx-auto text-primary mb-4" />
                            <h4 className="font-serif font-bold text-secondary mb-2">Languages</h4>
                            <p className="text-text-secondary text-sm">Hinglish, Hindi, English</p>
                        </div>
                        <div className="text-center">
                            <Clock className="w-8 h-8 mx-auto text-primary mb-4" />
                            <h4 className="font-serif font-bold text-secondary mb-2">Modes</h4>
                            <p className="text-text-secondary text-sm">Phone, In-Person (Raiwala), WhatsApp</p>
                        </div>
                        <div className="text-center">
                            <Banknote className="w-8 h-8 mx-auto text-primary mb-4" />
                            <h4 className="font-serif font-bold text-secondary mb-2">Pricing</h4>
                            <p className="text-text-secondary text-sm">Contact directly for customized pricing</p>
                        </div>
                        <div className="text-center">
                            <ShieldCheck className="w-8 h-8 mx-auto text-primary mb-4" />
                            <h4 className="font-serif font-bold text-secondary mb-2">Confidentiality</h4>
                            <p className="text-text-secondary text-sm">100% Private & Respectful</p>
                        </div>
                    </div>
                </FadeIn>
            </Container>
        </Section>
    );
}
