"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { SITE_CONFIG } from "@/lib/utils/constants";

interface ServiceDetailProps {
    title: string;
    description: string;
    scenarios: string[];
    includes: string[];
    process: string[];
    pricing?: string;
    imageSrc?: string;
    align?: "left" | "right";
    id?: string;
}

export function ServiceDetail({
    title,
    description,
    scenarios,
    includes,
    process,
    pricing = "Contact for Pricing",
    imageSrc,
    align = "left",
    id,
}: ServiceDetailProps) {
    return (
        <Section id={id} className={cn("py-20", align === "right" ? "bg-[#FAF6F1]" : "bg-white")}>
            <Container>
                <div className={cn("flex flex-col lg:gap-20 gap-12", align === "right" ? "lg:flex-row" : "lg:flex-row-reverse")}>
                    {/* Visual Side (Placeholder for now until images generated) */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                        <FadeIn delay={0.2} className="w-full">
                            <div className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden bg-secondary/5 border border-border shadow-lg flex items-center justify-center">
                                {imageSrc ? (
                                    <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="text-center p-8">
                                        <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 animate-pulse" />
                                        <p className="text-text-tertiary">Image coming soon</p>
                                    </div>
                                )}
                            </div>
                        </FadeIn>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <FadeIn>
                            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-secondary mb-4">
                                {title}
                            </h2>
                            <p className="text-lg text-text-primary mb-8 leading-relaxed">
                                {description}
                            </p>

                            <div className="space-y-8">
                                {/* When to choose */}
                                <div>
                                    <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                                        Yeh Service Kab Chahiye?
                                    </h3>
                                    <ul className="space-y-2">
                                        {scenarios.map((item, i) => (
                                            <li key={i} className="flex items-start text-text-secondary">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* What's included */}
                                <div>
                                    <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                                        Kya Milta Hai?
                                    </h3>
                                    <ul className="space-y-2">
                                        {includes.map((item, i) => (
                                            <li key={i} className="flex items-start text-text-secondary">
                                                <CheckCircle2 className="w-5 h-5 text-success mr-3 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Process */}
                                <div className="bg-surface-alt p-6 rounded-xl border border-border">
                                    <h3 className="text-lg font-serif font-semibold text-secondary mb-3">
                                        Kaise Kaam Karta Hai?
                                    </h3>
                                    <div className="space-y-2 text-sm text-text-secondary">
                                        {process.map((step, i) => (
                                            <div key={i} className="flex items-center">
                                                <span className="font-bold text-primary mr-2">{i + 1}.</span>
                                                {step}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4 flex justify-center">
                                    <p className="text-sm text-text-tertiary mb-4 font-medium uppercase tracking-wide hidden">
                                        {pricing}
                                    </p>
                                    <Button
                                        onClick={() => window.open(`https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/\D/g, '')}`, '_blank')}
                                    >
                                        Book This Service <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
