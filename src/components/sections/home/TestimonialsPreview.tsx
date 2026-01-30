"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { TESTIMONIALS } from "@/data/testimonials";
import { motion } from "framer-motion";
import { Star, Check, ArrowRight, Quote } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

// Animation Variants
const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.4, 0.0, 0.2, 1] as const },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: [0.34, 1.56, 0.64, 1] as const,
        },
    },
};

const floatingVariants = {
    animate: {
        y: [-8, 8, -8],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut" as const,
        },
    },
};

export function TestimonialsPreview() {
    return (
        <Section className="relative bg-[#FAF6F1] py-20 lg:py-32 overflow-hidden">
            {/* Celestial Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A3B2F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
            />

            <Container className="max-w-[1400px] relative z-10">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                    className="text-center mb-16 lg:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#4A3B2F] mb-4 relative inline-block">
                        Kya kehte hain hamare clients
                        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#C9954D] to-transparent" />
                    </h2>
                    <p className="text-[#6B5E54] text-lg md:text-xl max-w-2xl mx-auto mt-6 font-medium">
                        Real stories from people who found clarity and guidance.
                    </p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
                >
                    {TESTIMONIALS.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            custom={idx}
                            whileHover={{
                                y: -16,
                                scale: 1.03,
                                transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const }
                            }}
                            className="group relative"
                        >
                            {/* Floating Wrapper */}
                            <motion.div
                                variants={floatingVariants}
                                animate="animate"
                                custom={idx} // Use distinct delays if needed, here standardized
                                className="h-full"
                            >
                                <div className="relative h-full bg-white/70 backdrop-blur-2xl border border-[#C9954D]/20 rounded-3xl p-8 lg:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.06)] group-hover:shadow-[0_24px_64px_rgba(0,0,0,0.12),0_8px_16px_rgba(201,149,77,0.25)] group-hover:border-[#C9954D]/50 transition-all duration-500">

                                    {/* Metallic Corner Accents */}
                                    <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#C9954D]/40 rounded-tl-lg group-hover:border-[#C9954D] transition-colors duration-500" />
                                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#C9954D]/40 rounded-br-lg group-hover:border-[#C9954D] transition-colors duration-500" />

                                    {/* Quote Mark */}
                                    <Quote className="absolute top-8 left-8 w-16 h-16 text-[#C9954D]/10 rotate-180 group-hover:text-[#C9954D]/20 transition-colors duration-500" />

                                    {/* Stars */}
                                    <div className="relative mb-8 flex gap-2">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <div key={i} className="relative">
                                                <Star className="w-6 h-6 fill-[url(#starGradient)] text-transparent" stroke="none" />
                                                <svg width="0" height="0">
                                                    <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stopColor="#D4A563" />
                                                        <stop offset="50%" stopColor="#C9954D" />
                                                        <stop offset="100%" stopColor="#B8843C" />
                                                    </linearGradient>
                                                </svg>
                                                {/* Shimmer effect overlay could go here */}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Content */}
                                    <blockquote className="relative z-10 text-[#2D2520] text-lg leading-relaxed italic mb-8 font-medium">
                                        "{testimonial.quote}"
                                    </blockquote>

                                    {/* Author */}
                                    <div className="flex items-center gap-4 mt-auto border-t border-[#C9954D]/10 pt-6">
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FAF6F1] to-[#E8DAC3] border-2 border-[#C9954D]/30 flex items-center justify-center text-[#C9954D] font-serif font-bold text-xl shadow-inner">
                                            {testimonial.name[0]}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h4 className="text-[#4A3B2F] font-semibold font-inter">{testimonial.name}</h4>
                                                <Check className="w-3 h-3 bg-[#C9954D] text-white rounded-full p-0.5" />
                                            </div>
                                            {testimonial.location && (
                                                <p className="text-sm text-[#6B5E54]">{testimonial.location}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <Link href="/contact" className="inline-block"> {/* Changed href to contact as testimonials page is deleted */}
                        <div className="group relative px-8 py-3 bg-transparent border-2 border-[#C9954D] text-[#C9954D] rounded-full overflow-hidden hover:text-white transition-colors duration-300 font-medium tracking-wide flex items-center gap-2">
                            <span className="relative z-10">Start Your Journey</span>
                            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-[#C9954D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                        </div>
                    </Link>
                </motion.div>
            </Container>
        </Section>
    );
}
