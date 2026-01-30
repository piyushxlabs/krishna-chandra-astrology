"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/utils/constants";

export function CTASection() {
    return (
        <Section variant="alt" className="bg-[#FAF6F1] text-center border-t border-border/50">
            <Container>
                <FadeIn>
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-secondary mb-4">
                        Chaliye discuss karein aapki janampatri
                    </h2>
                    <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
                        Ek consultation se shuru karte hain. Aapke sawalon ke liye main yahan hoon.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button
                            size="lg"
                            onClick={() => window.open(`https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/\D/g, '')}`, '_blank')}
                        >
                            WhatsApp Karein
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => window.open(`tel:${SITE_CONFIG.contact.phone.replace(/\D/g, '')}`, '_self')}
                        >
                            Call Karein
                        </Button>
                    </div>
                </FadeIn>
            </Container>
        </Section>
    );
}
