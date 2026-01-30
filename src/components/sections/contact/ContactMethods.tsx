"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils/constants";
import { Button } from "@/components/ui/Button";

const METHODS = [
    {
        icon: Phone,
        title: "Call Us",
        value: SITE_CONFIG.contact.phone,
        action: "Call Now",
        href: `tel:${SITE_CONFIG.contact.phone.replace(/\D/g, '')}`,
        primary: false
    },
    {
        icon: MessageCircle,
        title: "WhatsApp",
        value: SITE_CONFIG.contact.whatsapp,
        action: "Chat Now",
        href: `https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/\D/g, '')}`,
        primary: true
    },
    {
        icon: MapPin,
        title: "Visit Us",
        value: SITE_CONFIG.contact.address,
        action: "Get Directions",
        href: "https://maps.google.com", // Placeholder
        primary: false
    },
    {
        icon: Mail,
        title: "Email",
        value: SITE_CONFIG.contact.email,
        action: "Send Email",
        href: `mailto:${SITE_CONFIG.contact.email}`,
        primary: false
    }
];

export function ContactMethods() {
    return (
        <Section>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {METHODS.map((method, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-border h-full">
                                <div className="w-12 h-12 rounded-full bg-secondary/5 text-secondary flex items-center justify-center mb-4">
                                    <method.icon size={24} />
                                </div>
                                <h3 className="text-xl font-serif font-semibold text-secondary mb-2">
                                    {method.title}
                                </h3>
                                <p className="text-text-secondary text-sm mb-6 flex-grow">
                                    {method.value}
                                </p>
                                <Button
                                    variant={method.primary ? "primary" : "outline"}
                                    size="sm"
                                    className="w-full"
                                    onClick={() => window.open(method.href, method.primary ? '_blank' : '_self')}
                                >
                                    {method.action}
                                </Button>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
