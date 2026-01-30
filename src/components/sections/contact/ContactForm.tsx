"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSent(true);
        }, 1500);
    };

    return (
        <Section variant="alt" className="bg-[#FAF6F1]">
            <Container>
                <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border">
                    <FadeIn>
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-serif font-bold text-secondary mb-2">
                                Send a Message
                            </h2>
                            <p className="text-text-secondary">
                                Details bharein, hum aapse jaldi contact karenge.
                            </p>
                        </div>

                        {isSent ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle2 size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-2">Message Sent!</h3>
                                <p className="text-text-secondary mb-6">Thank you for contacting us. We will get back to you shortly.</p>
                                <Button variant="outline" onClick={() => setIsSent(false)}>
                                    Send Another Message
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-secondary">
                                            Full Name
                                        </label>
                                        <Input id="name" placeholder="Rahul Kumar" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-secondary">
                                            Phone Number
                                        </label>
                                        <Input id="phone" type="tel" placeholder="+91 98765..." required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-sm font-medium text-secondary">
                                        Service Interested In
                                    </label>
                                    <select
                                        id="service"
                                        className="flex h-12 w-full rounded-lg border border-border bg-white px-4 py-2 text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select a service</option>
                                        <option value="janampatri">Janampatri Creation</option>
                                        <option value="analysis">Janampatri Analysis</option>
                                        <option value="consultation">Personal Consultation</option>
                                        <option value="other">Other Inquiry</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-secondary">
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        placeholder="Apna sawal ya requirement yahan likhein..."
                                        className="min-h-[150px]"
                                    />
                                </div>

                                <Button type="submit" className="w-full" size="lg" isLoading={isSubmitting}>
                                    <Send className="w-4 h-4 mr-2" />
                                    Send Message
                                </Button>
                            </form>
                        )}
                    </FadeIn>
                </div>
            </Container>
        </Section>
    );
}
