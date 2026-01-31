"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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

// Frame configuration
const getFrameConfig = (isMobile: boolean) => ({
    frameCount: 160,
    framePath: isMobile
        ? "/assets/images/hero/cinematic_mobile/ezgif-frame-{frame}.jpg"
        : "/assets/images/hero/cinematic/ezgif-frame-{frame}.jpg",
    padDigits: 3,
    preloadCount: isMobile ? 20 : 30, // Load fewer frames initially on mobile
});

export function ScrollCinematicHero() {
    const [isMounted, setIsMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Refs
    const sectionRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
    const currentFrameRef = useRef(0);

    // States
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadProgress, setLoadProgress] = useState(0);
    const [heroOpacity, setHeroOpacity] = useState(1);
    const [animationOpacity, setAnimationOpacity] = useState(0);

    useEffect(() => {
        setIsMounted(true);
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Generate frame path
    const getFramePath = useCallback((index: number) => {
        const config = getFrameConfig(isMobile);
        const frameNumber = (index + 1).toString().padStart(config.padDigits, "0");
        return config.framePath.replace("{frame}", frameNumber);
    }, [isMobile]);

    // Draw frame to canvas
    const drawFrame = useCallback((frameIndex: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        const image = imagesRef.current[frameIndex];

        if (!canvas || !ctx || !image || !image.complete) return;

        // Set canvas to full window size
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        ctx.scale(dpr, dpr);

        // Draw image to cover canvas
        const scale = Math.max(
            window.innerWidth / image.naturalWidth,
            window.innerHeight / image.naturalHeight
        );
        const x = (window.innerWidth - image.naturalWidth * scale) / 2;
        const y = (window.innerHeight - image.naturalHeight * scale) / 2;

        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.drawImage(image, x, y, image.naturalWidth * scale, image.naturalHeight * scale);
    }, []);

    // Scroll handler
    useEffect(() => {
        if (!isMounted || typeof window === "undefined") return;

        const handleScroll = () => {
            const section = sectionRef.current;
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const sectionHeight = section.offsetHeight;
            const viewportHeight = window.innerHeight;

            const scrolled = -rect.top;
            const scrollableDistance = sectionHeight - viewportHeight;
            const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

            // Adjusted phases:
            // Phase 1 (0-5%): Hero visible
            // Phase 2 (5-15%): Hero fades, animation appears
            // Phase 3 (15-95%): Animation plays (stays visible longer)
            // Phase 4 (95-100%): Scroll to next section (animation STAYS visible)

            // Hero opacity
            if (progress <= 0.05) {
                setHeroOpacity(1);
            } else if (progress <= 0.15) {
                setHeroOpacity(1 - ((progress - 0.05) / 0.1));
            } else {
                setHeroOpacity(0);
            }

            // Animation opacity (STAYS at 1 after appearing, no fade out)
            if (progress <= 0.05) {
                setAnimationOpacity(0);
            } else if (progress <= 0.15) {
                setAnimationOpacity((progress - 0.05) / 0.1);
            } else {
                setAnimationOpacity(1); // Stays visible!
            }

            // Update frame (15% to 95% = more scroll distance for animation)
            if (progress >= 0.15 && progress <= 0.95 && isLoaded) {
                const config = getFrameConfig(isMobile);
                const animProgress = (progress - 0.15) / 0.8; // 0.8 = 0.95 - 0.15
                const targetFrame = Math.floor(animProgress * (config.frameCount - 1));
                const frame = Math.max(0, Math.min(config.frameCount - 1, targetFrame));

                if (frame !== currentFrameRef.current) {
                    currentFrameRef.current = frame;
                    drawFrame(frame);
                }
            }
        };

        // Handle resize
        const handleResize = () => {
            if (currentFrameRef.current !== undefined && isLoaded) {
                drawFrame(currentFrameRef.current);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleResize, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [isMounted, isLoaded, isMobile, drawFrame]);

    // ===== PREMIUM CINEMATIC EXIT ANIMATIONS =====
    // These create layered, luxury animations for different content elements
    // Based on heroOpacity (1 → 0 during 5-15% scroll progress)
    const exitProgress = 1 - heroOpacity; // 0 → 1 as hero exits

    // Text rising and dissolving into soft light energy
    const textY = -50 * exitProgress; // Gentle rise upward
    const textBlur = 12 * exitProgress; // Soft blur as it evaporates
    const textScale = 1 - (0.08 * exitProgress); // Subtle shrink
    const textOpacity = Math.pow(heroOpacity, 1.5); // Accelerated fade for ethereal feel

    // Portrait card - shrinking with divine golden glow
    const cardScale = 1 - (0.12 * exitProgress); // Graceful shrink
    const cardY = -30 * exitProgress; // Gentle upward float
    const cardGlow = 35 * exitProgress; // Golden aura intensity (px)
    const cardOpacity = Math.pow(heroOpacity, 1.3); // Softer fade than text

    // Buttons - delayed graceful exit (starts after 30% of hero exit)
    const btnProgress = Math.max(0, (exitProgress - 0.3) / 0.7);
    const btnY = 20 * btnProgress; // Subtle downward drift
    const btnOpacity = 1 - Math.pow(btnProgress, 0.8); // Smooth fade

    // Preload images
    useEffect(() => {
        if (!isMounted || typeof window === "undefined") return;

        const config = getFrameConfig(isMobile);
        const images: (HTMLImageElement | null)[] = new Array(config.frameCount).fill(null);
        let loadedCount = 0;
        let priorityLoaded = 0;

        const loadImage = (index: number, isPriority: boolean) => {
            const img = new globalThis.Image();
            img.onload = () => {
                images[index] = img;
                loadedCount++;
                setLoadProgress(Math.round((loadedCount / config.frameCount) * 100));

                if (isPriority) {
                    priorityLoaded++;
                    if (priorityLoaded >= config.preloadCount) {
                        imagesRef.current = images;
                        setIsLoaded(true);
                        drawFrame(0);
                    }
                }
            };
            img.onerror = () => {
                loadedCount++;
                if (isPriority) priorityLoaded++;
            };
            img.src = getFramePath(index);
        };

        // Load priority frames first
        for (let i = 0; i < config.preloadCount; i++) {
            loadImage(i, true);
        }

        // Load remaining
        setTimeout(() => {
            for (let i = config.preloadCount; i < config.frameCount; i++) {
                loadImage(i, false);
            }
        }, 1000);

        return () => {
            images.forEach(img => { if (img) img.src = ""; });
        };
    }, [isMounted, isMobile, getFramePath, drawFrame]);

    const handleWhatsAppClick = () => {
        window.open(
            `https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/\D/g, "")}`,
            "_blank"
        );
    };

    if (!isMounted) {
        return <section className="relative min-h-screen bg-gradient-to-b from-[#F5EFE6] via-[#FAF6F1] to-[#FAF6F1]" />;
    }

    return (
        <div
            ref={sectionRef}
            className="relative bg-gradient-to-b from-[#F5EFE6] via-[#FAF6F1] to-[#FAF6F1]"
            style={{ height: "300vh" }}
        >
            {/* Sticky viewport container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* Background gradient */}
                <div
                    className="absolute inset-0 pointer-events-none z-[1]"
                    style={{
                        background: "radial-gradient(circle at 70% 30%, rgba(201,149,77,0.06) 0%, transparent 50%)",
                    }}
                />

                {/* HERO CONTENT LAYER */}
                <div
                    className="absolute inset-0 z-20 transition-opacity duration-500"
                    style={{ opacity: heroOpacity, pointerEvents: heroOpacity > 0 ? "auto" : "none" }}
                >
                    <div className="h-full flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center px-6 md:px-12 lg:px-20 pt-24 pb-12 lg:py-32">

                        {/* Left: Content */}
                        <motion.div
                            className="order-2 lg:order-1 w-full max-w-[600px] lg:justify-self-end lg:pr-8 text-center lg:text-left"
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div
                                variants={itemVariants}
                                className="hidden lg:inline-flex items-center px-6 py-2.5 mb-6 rounded-full border border-[rgba(201,149,77,0.25)] bg-[rgba(201,149,77,0.12)]"
                            >
                                <span className="text-[#C9954D] font-semibold text-[13px] uppercase tracking-[0.08em]">
                                    Vedic Astrologer in Dehradun
                                </span>
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className="font-serif text-[32px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-[1.15] tracking-[-0.02em] text-[#4A3B2F] mb-5 lg:mb-6"
                                style={{
                                    transform: `translateY(${textY}px) scale(${textScale})`,
                                    filter: `blur(${textBlur}px)`,
                                    opacity: textOpacity,
                                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), filter 0.6s ease-out, opacity 0.5s ease-out'
                                }}
                            >
                                Aapki janampatri mein chhipe raaz,{" "}
                                <span className="text-[#C9954D] italic">10 saal</span> ke
                                experience ke saath
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-[16px] sm:text-[17px] lg:text-[20px] leading-[1.6] text-[#6B5E54] max-w-[540px] mb-8 lg:mb-10 mx-auto lg:mx-0"
                                style={{
                                    transform: `translateY(${textY}px) scale(${textScale})`,
                                    filter: `blur(${textBlur}px)`,
                                    opacity: textOpacity,
                                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), filter 0.6s ease-out, opacity 0.5s ease-out'
                                }}
                            >
                                Vedic astrology ki ancient wisdom se apne future ko samjhein
                                aur life decisions ko confident banayein.
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5"
                                style={{
                                    transform: `translateY(${btnY}px)`,
                                    opacity: btnOpacity,
                                    transition: 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease-in-out'
                                }}
                            >
                                <motion.button
                                    whileHover={{ y: -3, scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleWhatsAppClick}
                                    className="relative overflow-hidden w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-br from-[#C9954D] via-[#D4A563] to-[#C9954D] text-[#FAF6F1] font-semibold text-[15px] sm:text-[16px] uppercase tracking-[0.05em] rounded-xl shadow-[0_6px_24px_rgba(201,149,77,0.35)] hover:shadow-[0_8px_32px_rgba(201,149,77,0.45)] transition-all duration-300"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shine_3s_infinite]" />
                                    <span className="relative z-10 flex items-center gap-2">
                                        WhatsApp Karein
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </motion.button>

                                <Link href="/services" className="w-full sm:w-auto">
                                    <motion.button
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full flex items-center justify-center gap-2 px-8 py-[14px] bg-transparent text-[#4A3B2F] font-semibold text-[15px] sm:text-[16px] uppercase tracking-[0.05em] rounded-xl border-2 border-[#C67C5C] hover:bg-[rgba(201,149,77,0.08)] hover:border-[#C9954D] hover:text-[#C9954D] transition-all duration-300"
                                    >
                                        Services Dekhein
                                    </motion.button>
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Right: Photo Frame */}
                        <div className="order-1 lg:order-2 relative flex items-center justify-center w-full py-4 lg:py-0">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="lg:hidden absolute -top-2 left-1/2 -translate-x-1/2 z-20 px-5 py-2 rounded-full border border-[rgba(201,149,77,0.3)] bg-white/95 backdrop-blur-sm shadow-md"
                            >
                                <span className="text-[#C9954D] font-semibold text-[11px] uppercase tracking-[0.1em] whitespace-nowrap">
                                    Vedic Astrologer in Dehradun
                                </span>
                            </motion.div>

                            <motion.div
                                variants={frameVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover={{ y: -12, scale: 1.02 }}
                                className="relative w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[520px] group"
                                style={{
                                    transform: `translateY(${cardY}px) scale(${cardScale})`,
                                    opacity: cardOpacity,
                                    filter: `drop-shadow(0 0 ${cardGlow}px rgba(201,149,77,0.6)) drop-shadow(0 0 ${cardGlow / 2}px rgba(212,165,99,0.4))`,
                                    transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.7s ease-out, filter 0.7s ease-out'
                                }}
                            >
                                <div
                                    className="absolute inset-0 rounded-[20px] lg:rounded-[24px] p-[2.5px] lg:p-[3px] z-10"
                                    style={{
                                        background: "linear-gradient(135deg, #D4A563 0%, #C9954D 25%, #E8D5B7 50%, #C9954D 75%, #B8843C 100%)",
                                        backgroundSize: "200% 200%",
                                        animation: "shimmer 6s ease-in-out infinite",
                                        boxShadow: "0 0 0 1px rgba(201,149,77,0.5), 0 8px 32px rgba(201,149,77,0.15)",
                                    }}
                                >
                                    <div className="w-full h-full bg-white rounded-[17.5px] lg:rounded-[21px] p-3 lg:p-4 shadow-[inset_0_2px_8px_rgba(74,59,47,0.08),0_20px_60px_rgba(74,59,47,0.18),0_8px_24px_rgba(74,59,47,0.12)]">
                                        <div className="relative w-full aspect-[3/4] lg:aspect-[4/5] rounded-[14px] lg:rounded-[16px] overflow-hidden">
                                            <Image
                                                src="/assets/images/hero/pandit-ji-hero-portrait.png"
                                                alt="Pandit Krishna Chandra Jaguri"
                                                fill
                                                priority
                                                className="object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-700"
                                                sizes="(max-width: 640px) 300px, (max-width: 1024px) 360px, 520px"
                                            />
                                            <div className="absolute top-3 right-3 lg:top-5 lg:right-5 w-10 h-10 lg:w-14 lg:h-14 opacity-20">
                                                <svg viewBox="0 0 100 100" className="w-full h-full text-[#C9954D]" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                    <circle cx="50" cy="50" r="45" />
                                                    <circle cx="50" cy="50" r="32" />
                                                    <circle cx="50" cy="50" r="18" />
                                                    <line x1="50" y1="5" x2="50" y2="95" />
                                                    <line x1="5" y1="50" x2="95" y2="50" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full aspect-[3/4] lg:aspect-[4/5]" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    >
                        <span className="text-[#6B5E54] text-xs uppercase tracking-widest font-medium">
                            Scroll to explore
                        </span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-6 h-10 rounded-full border-2 border-[#C9954D]/40 flex items-start justify-center p-1"
                        >
                            <motion.div
                                animate={{ opacity: [1, 0.3, 1], y: [0, 12, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-1.5 h-3 bg-[#C9954D] rounded-full"
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* ANIMATION LAYER */}
                <div
                    className="absolute inset-0 z-10 bg-[#0a0a0a] transition-opacity duration-500"
                    style={{ opacity: animationOpacity, pointerEvents: animationOpacity > 0 ? "auto" : "none" }}
                >
                    {/* Loading */}
                    {!isLoaded && animationOpacity > 0 && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                            <div className="relative w-20 h-20 mb-6">
                                <div className="absolute inset-0 rounded-full border-2 border-[rgba(201,149,77,0.3)]" />
                                <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#C9954D] animate-spin" />
                            </div>
                            <p className="text-[#C9954D] text-lg font-medium mb-2">Loading cosmic journey...</p>
                            <p className="text-[#8B7355] text-sm">{loadProgress}%</p>
                        </div>
                    )}

                    {/* Canvas */}
                    <canvas
                        ref={canvasRef}
                        className="absolute inset-0 w-full h-full"
                        style={{ display: isLoaded ? "block" : "none" }}
                    />

                    {/* Vignette */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.4) 100%)",
                        }}
                    />
                </div>
            </div>

            {/* CSS */}
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
        </div>
    );
}
