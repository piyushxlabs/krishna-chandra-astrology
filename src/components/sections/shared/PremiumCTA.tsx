"use client";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/utils/constants";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Sparkles } from "lucide-react";

interface PremiumCTAProps {
    title: string;
    subtitle: string;
    primaryLabel?: string;
    secondaryLabel?: string;
    showSecondaryButton?: boolean;
}

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
};

const floatVariants = {
    animate: {
        y: [-5, 5, -5],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut" as const,
        },
    },
};

export function PremiumCTA({
    title,
    subtitle,
    primaryLabel = "WhatsApp Karein",
    secondaryLabel = "Call Karein",
    showSecondaryButton = true,
}: PremiumCTAProps) {
    return (
        <section className="py-16 md:py-24">
            <Container>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                    className="max-w-4xl mx-auto"
                >
                    {/* Premium Card Container - Now holds all the background logic */}
                    <div
                        className="relative p-10 md:p-16 rounded-3xl overflow-hidden shadow-2xl"
                        style={{
                            background: `linear-gradient(135deg, #6B3A3A 0%, #5C2828 25%, #4A3B2F 75%, #3D2F25 100%)`,
                        }}
                    >
                        {/* Celestial Pattern Overlay - INSIDE CARD */}
                        <div
                            className="absolute inset-0 opacity-[0.06] pointer-events-none"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9954D' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            }}
                        />

                        {/* Animated Glow Orbs - INSIDE CARD */}
                        <motion.div
                            className="absolute top-[-50px] left-[-50px] w-64 h-64 rounded-full pointer-events-none"
                            style={{
                                background: `radial-gradient(circle, rgba(201,149,77,0.2) 0%, transparent 70%)`,
                            }}
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute bottom-[-50px] right-[-50px] w-48 h-48 rounded-full pointer-events-none"
                            style={{
                                background: `radial-gradient(circle, rgba(201,149,77,0.15) 0%, transparent 70%)`,
                            }}
                            animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* Inner Glass Layer for Depth */}
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm pointer-events-none" />

                        {/* Content Wrapper */}
                        <div className="relative z-10">
                            {/* Metallic Gold Corner Accents */}
                            <motion.div
                                variants={floatVariants}
                                animate="animate"
                                className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-[#C9954D]/60 rounded-tl-xl opacity-60"
                            />
                            <motion.div
                                variants={floatVariants}
                                animate="animate"
                                className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-[#C9954D]/60 rounded-tr-xl opacity-60"
                            />
                            <motion.div
                                variants={floatVariants}
                                animate="animate"
                                className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-[#C9954D]/60 rounded-bl-xl opacity-60"
                            />
                            <motion.div
                                variants={floatVariants}
                                animate="animate"
                                className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-[#C9954D]/60 rounded-br-xl opacity-60"
                            />

                            {/* Sparkle Icon */}
                            <motion.div
                                variants={itemVariants}
                                className="flex justify-center mb-6"
                            >
                                <div className="p-3 rounded-full bg-gradient-to-br from-[#C9954D]/30 to-[#C9954D]/10 border border-[#C9954D]/30 shadow-lg shadow-[#C9954D]/10">
                                    <Sparkles className="w-6 h-6 text-[#FABE59]" />
                                </div>
                            </motion.div>

                            {/* Headline */}
                            <motion.h2
                                variants={itemVariants}
                                className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center text-[#FFFDF9] mb-6 leading-tight drop-shadow-md"
                            >
                                {title}
                            </motion.h2>

                            {/* Subtitle */}
                            <motion.p
                                variants={itemVariants}
                                className="text-lg md:text-xl text-center text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
                            >
                                {subtitle}
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <Button
                                        size="lg"
                                        onClick={() =>
                                            window.open(
                                                `https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/\D/g, "")}`,
                                                "_blank"
                                            )
                                        }
                                        className="min-w-[200px] h-14 text-base font-semibold bg-gradient-to-r from-[#C9954D] to-[#B8843C] hover:from-[#D4A563] hover:to-[#C9954D] text-white shadow-[0_4px_20px_rgba(201,149,77,0.4)] hover:shadow-[0_6px_30px_rgba(201,149,77,0.6)] transition-all duration-300 border-none"
                                    >
                                        <MessageCircle className="mr-2 h-5 w-5" />
                                        {primaryLabel}
                                    </Button>
                                </motion.div>

                                {showSecondaryButton && (
                                    <motion.div
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    >
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            onClick={() =>
                                                window.open(
                                                    `tel:${SITE_CONFIG.contact.phone.replace(/\D/g, "")}`,
                                                    "_self"
                                                )
                                            }
                                            className="min-w-[200px] h-14 text-base font-semibold border-[#C9954D]/50 text-[#FAF6F1] bg-white/5 hover:bg-[#C9954D]/20 hover:border-[#C9954D] hover:text-white transition-all duration-300 backdrop-blur-sm"
                                        >
                                            <Phone className="mr-2 h-5 w-5" />
                                            {secondaryLabel}
                                        </Button>
                                    </motion.div>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
