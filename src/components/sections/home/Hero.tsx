"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/utils/constants";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Animation variants
const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.4, 0.0, 0.2, 1] as [number, number, number, number],
        },
    },
};

const frameVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1,
            ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
            delay: 0.5,
        },
    },
};

const imageVariants = {
    hidden: { scale: 1.1 },
    visible: {
        scale: 1,
        transition: {
            duration: 1.2,
            ease: [0.4, 0.0, 0.2, 1] as [number, number, number, number],
        },
    },
};

export function Hero() {
    const handleWhatsAppClick = () => {
        window.open(
            `https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/\D/g, "")}`,
            "_blank"
        );
    };

    return (
        <section className="relative min-h-screen bg-gradient-to-b from-[#F5EFE6] via-[#FAF6F1] to-[#FAF6F1] overflow-hidden">
            {/* Subtle radial gradient background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(circle at 70% 30%, rgba(201,149,77,0.06) 0%, transparent 50%)",
                }}
            />

            {/* Main Container */}
            <div className="relative min-h-screen flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center px-6 md:px-12 lg:px-20 pt-24 pb-12 lg:py-32">

                {/* ===== LEFT COLUMN: CONTENT (Desktop) / BOTTOM (Mobile) ===== */}
                <motion.div
                    className="order-2 lg:order-1 w-full max-w-[600px] lg:justify-self-end lg:pr-8 text-center lg:text-left"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Badge - Desktop only */}
                    <motion.div
                        variants={itemVariants}
                        className="hidden lg:inline-flex items-center px-6 py-2.5 mb-6 rounded-full border border-[rgba(201,149,77,0.25)] bg-[rgba(201,149,77,0.12)]"
                    >
                        <span className="text-[#C9954D] font-semibold text-[13px] uppercase tracking-[0.08em]">
                            Vedic Astrologer in Dehradun
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={itemVariants}
                        className="font-serif text-[32px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-[1.15] tracking-[-0.02em] text-[#4A3B2F] mb-5 lg:mb-6"
                    >
                        Aapki janampatri mein chhipe raaz,{" "}
                        <span className="text-[#C9954D] italic">10 saal</span> ke
                        experience ke saath
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        variants={itemVariants}
                        className="text-[16px] sm:text-[17px] lg:text-[20px] leading-[1.6] text-[#6B5E54] max-w-[540px] mb-8 lg:mb-10 mx-auto lg:mx-0"
                    >
                        Vedic astrology ki ancient wisdom se apne future ko samjhein
                        aur life decisions ko confident banayein.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5"
                    >
                        {/* Primary Button with shine effect */}
                        <motion.button
                            whileHover={{ y: -3, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            onClick={handleWhatsAppClick}
                            className="relative overflow-hidden w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-br from-[#C9954D] via-[#D4A563] to-[#C9954D] text-[#FAF6F1] font-semibold text-[15px] sm:text-[16px] uppercase tracking-[0.05em] rounded-xl shadow-[0_6px_24px_rgba(201,149,77,0.35)] hover:shadow-[0_8px_32px_rgba(201,149,77,0.45)] transition-all duration-300"
                        >
                            {/* Shine effect overlay */}
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shine_3s_infinite]" />
                            <span className="relative z-10 flex items-center gap-2">
                                WhatsApp Karein
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </motion.button>

                        {/* Secondary Button */}
                        <Link href="/services" className="w-full sm:w-auto">
                            <motion.button
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                className="w-full flex items-center justify-center gap-2 px-8 py-[14px] bg-transparent text-[#4A3B2F] font-semibold text-[15px] sm:text-[16px] uppercase tracking-[0.05em] rounded-xl border-2 border-[#C67C5C] hover:bg-[rgba(201,149,77,0.08)] hover:border-[#C9954D] hover:text-[#C9954D] transition-all duration-300"
                            >
                                Services Dekhein
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* ===== RIGHT COLUMN: LUXURY FRAMED PORTRAIT ===== */}
                <div className="order-1 lg:order-2 relative flex items-center justify-center w-full py-4 lg:py-0">

                    {/* Mobile Badge - Floating above frame */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="lg:hidden absolute -top-2 left-1/2 -translate-x-1/2 z-20 px-5 py-2 rounded-full border border-[rgba(201,149,77,0.3)] bg-white/95 backdrop-blur-sm shadow-[0_4px_16px_rgba(74,59,47,0.12),0_0_0_1px_rgba(201,149,77,0.2)]"
                    >
                        <span className="text-[#C9954D] font-semibold text-[11px] uppercase tracking-[0.1em] whitespace-nowrap">
                            Vedic Astrologer in Dehradun
                        </span>
                    </motion.div>

                    {/* Luxury Frame Container */}
                    <motion.div
                        variants={frameVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ y: -12, scale: 1.02 }}
                        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                        className="relative w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[520px] group"
                    >
                        {/* Outer Metallic Gold Border */}
                        <div
                            className="absolute inset-0 rounded-[20px] lg:rounded-[24px] p-[2.5px] lg:p-[3px] z-10"
                            style={{
                                background: "linear-gradient(135deg, #D4A563 0%, #C9954D 25%, #E8D5B7 50%, #C9954D 75%, #B8843C 100%)",
                                backgroundSize: "200% 200%",
                                animation: "shimmer 6s ease-in-out infinite",
                                boxShadow: "0 0 0 1px rgba(201,149,77,0.5), 0 8px 32px rgba(201,149,77,0.15)",
                            }}
                        >
                            {/* White Inner Frame (Mat Board) */}
                            <div className="w-full h-full bg-white rounded-[17.5px] lg:rounded-[21px] p-3 lg:p-4 shadow-[inset_0_2px_8px_rgba(74,59,47,0.08),0_20px_60px_rgba(74,59,47,0.18),0_8px_24px_rgba(74,59,47,0.12)] group-hover:shadow-[inset_0_2px_8px_rgba(74,59,47,0.08),0_28px_80px_rgba(74,59,47,0.22),0_12px_32px_rgba(74,59,47,0.15)] transition-shadow duration-600">
                                {/* Image Container */}
                                <div className="relative w-full aspect-[3/4] lg:aspect-[4/5] rounded-[14px] lg:rounded-[16px] overflow-hidden">
                                    <motion.div
                                        variants={imageVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="w-full h-full"
                                    >
                                        <Image
                                            src="/assets/images/hero/pandit-ji-hero-portrait.png"
                                            alt="Pandit Krishna Chandra Jaguri, Vedic astrologer with 10 years experience"
                                            fill
                                            priority
                                            className="object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-700 brightness-[1.02] contrast-[1.05] saturate-[1.05]"
                                            sizes="(max-width: 640px) 300px, (max-width: 1024px) 360px, 520px"
                                        />
                                    </motion.div>

                                    {/* Decorative Kundli Wheel Accent */}
                                    <div className="absolute top-3 right-3 lg:top-5 lg:right-5 w-10 h-10 lg:w-14 lg:h-14 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                                        <svg viewBox="0 0 100 100" className="w-full h-full text-[#C9954D]" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <circle cx="50" cy="50" r="45" />
                                            <circle cx="50" cy="50" r="32" />
                                            <circle cx="50" cy="50" r="18" />
                                            <line x1="50" y1="5" x2="50" y2="95" />
                                            <line x1="5" y1="50" x2="95" y2="50" />
                                            <line x1="18" y1="18" x2="82" y2="82" />
                                            <line x1="82" y1="18" x2="18" y2="82" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Invisible aspect ratio holder */}
                        <div className="w-full aspect-[3/4] lg:aspect-[4/5]" />
                    </motion.div>
                </div>
            </div>

            {/* CSS Keyframes for animations */}
            <style jsx>{`
                @keyframes shimmer {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @keyframes shine {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(200%); }
                }
            `}</style>
        </section>
    );
}
