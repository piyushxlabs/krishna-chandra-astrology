"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/utils/constants";
import { Phone, MessageCircle } from "lucide-react";

export function CTABlock() {
    return (
        <Section variant="dark" className="relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <Container className="relative z-10 text-center">
                <FadeIn>
                    <h2 className="text-3xl lg:text-5xl font-serif font-bold text-[#FAF6F1] mb-6">
                        Ready hain apni janampatri samajhne ke liye?
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        Aaj hi contact karein aur apne life ke important questions ka jawab paayein.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            size="lg"
                            onClick={() => window.open(`https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/\D/g, '')}`, '_blank')}
                            className="w-full sm:w-auto min-w-[200px]"
                        >
                            <MessageCircle className="mr-2 h-5 w-5" />
                            WhatsApp Karein
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => window.open(`tel:${SITE_CONFIG.contact.phone.replace(/\D/g, '')}`, '_self')}
                            className="w-full sm:w-auto min-w-[200px] border-white/20 text-white hover:bg-white/10"
                        >
                            <Phone className="mr-2 h-5 w-5" />
                            Call Karein
                        </Button>
                    </div>
                </FadeIn>
            </Container>
        </Section>
    );
}
