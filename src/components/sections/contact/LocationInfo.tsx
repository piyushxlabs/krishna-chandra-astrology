"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { MapPin, Clock } from "lucide-react";

export function LocationInfo() {
    return (
        <Section>
            <Container>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    <div className="w-full lg:w-1/2">
                        <FadeIn>
                            <h2 className="text-3xl font-serif font-bold text-secondary mb-6">
                                Visit our Office
                            </h2>
                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <MapPin className="w-6 h-6 text-primary mt-1 mr-4 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-lg text-secondary mb-2">Address</h3>
                                        <p className="text-text-secondary leading-relaxed">
                                            Pandit Krishna Chandra Jaguri<br />
                                            Near Main Market, Raiwala<br />
                                            Dehradun, Uttarakhand - 249205
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Clock className="w-6 h-6 text-primary mt-1 mr-4 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-lg text-secondary mb-2">Timings</h3>
                                        <p className="text-text-secondary leading-relaxed">
                                            Monday - Saturday: 10:00 AM - 7:00 PM<br />
                                            Sunday: By Appointment Only
                                        </p>
                                    </div>
                                </div>

                                <div className="p-6 bg-surface-alt rounded-xl border border-border">
                                    <p className="text-sm text-text-secondary italic">
                                        <strong>Note:</strong> Please call or WhatsApp before visiting to ensure Pandit Ji is available.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="w-full lg:w-1/2 h-[400px] rounded-2xl overflow-hidden shadow-md border border-border bg-surface-alt flex items-center justify-center">
                        {/* Placeholder for Google Maps Embed */}
                        <div className="text-center p-8">
                            <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-4" />
                            <p className="text-text-tertiary">Google Maps Embed will go here</p>
                            <p className="text-xs text-text-tertiary mt-2">(API Key required for live map)</p>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
