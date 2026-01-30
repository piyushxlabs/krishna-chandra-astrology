"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { Card, CardContent, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SERVICE_LIST } from "@/lib/utils/constants";
import { ScrollText, Search, Phone, Compass, Sparkles } from "lucide-react";
import Link from "next/link";

const ICONS = {
    scroll: ScrollText,
    search: Search,
    users: Phone,
    compass: Compass,
    sparkles: Sparkles,
};

export function ServicesOverview() {
    return (
        <Section variant="alt" className="bg-[#F5EFE6]">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <FadeIn>
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-secondary mb-4">
                            Hamari Services
                        </h2>
                        <p className="text-text-secondary text-lg">
                            Aapki zaroorat ke hisaab se tailored guidance aur solutions.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
                    {SERVICE_LIST.map((service, idx) => {
                        const Icon = ICONS[service.icon as keyof typeof ICONS];
                        return (
                            <FadeIn key={service.id} delay={idx * 0.1}>
                                <Card className="h-full flex flex-col items-center text-center hover:border-primary/50 transition-colors group">
                                    <CardContent className="pt-8 flex flex-col items-center flex-grow">
                                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <Icon size={32} />
                                        </div>
                                        <CardTitle className="mb-3">{service.title}</CardTitle>
                                        <p className="text-text-secondary text-sm mb-6 flex-grow">
                                            {service.description}
                                        </p>
                                        <Link href={service.href} className="mt-auto">
                                            <Button variant="outline" size="sm" className="w-full">
                                                Baat Karein
                                            </Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            </FadeIn>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}
