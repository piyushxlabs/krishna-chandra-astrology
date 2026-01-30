"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils/constants";

export function ServicesCTA() {
    return (
        <Section variant="dark" className="text-center">
            <Container>
                <FadeIn>
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#FAF6F1] mb-6">
                        Confused kaunsi service choose karein?
                    </h2>
                    <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                        Humein message karein, hum aapki situation samajh kar sahi guidance denge.
                    </p>
                    <Button
                        size="lg"
                        onClick={() => window.open(`https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/\D/g, '')}`, '_blank')}
                    >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Message on WhatsApp
                    </Button>
                </FadeIn>
            </Container>
        </Section>
    );
}
