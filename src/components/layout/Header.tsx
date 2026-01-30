"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { Container } from "@/components/layout/Container";
import { NAVIGATION_LINKS, SITE_CONFIG } from "@/lib/utils/constants";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

// SVG Kundli Wheel Icon
const KundliIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1" />
        {/* Cross lines */}
        <line x1="24" y1="2" x2="24" y2="46" stroke="currentColor" strokeWidth="1.5" />
        <line x1="2" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="1.5" />
        {/* Diagonal lines */}
        <line x1="8.5" y1="8.5" x2="39.5" y2="39.5" stroke="currentColor" strokeWidth="1" />
        <line x1="39.5" y1="8.5" x2="8.5" y2="39.5" stroke="currentColor" strokeWidth="1" />
    </svg>
);

export function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(true);
    const { scrollY } = useScroll();
    const lastScrollY = React.useRef(0);

    // Scroll detection for glass morphism and hide/reveal
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = lastScrollY.current;

        // Update scrolled state for styling
        setIsScrolled(latest > 100);

        // Hide on scroll down, show on scroll up (after 200px threshold)
        if (latest > 200) {
            setIsVisible(latest < previous);
        } else {
            setIsVisible(true);
        }

        lastScrollY.current = latest;
    });

    // Prevent body scroll when mobile menu is open
    React.useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    // Close mobile menu on route change
    React.useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const navVariants = {
        hidden: { y: "-100%" },
        visible: { y: 0 },
    };

    const linkVariants = {
        initial: { opacity: 0, x: 20 },
        animate: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" as const },
        }),
        exit: { opacity: 0, x: 20 },
    };

    return (
        <>

            <motion.header
                variants={navVariants}
                initial="visible"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ duration: 0.4, ease: "easeOut" as const }}
                className="fixed top-0 left-0 right-0 z-[1000] px-4 lg:px-8 py-4"
            >
                {/* Floating Pill Container */}
                <div
                    className={cn(
                        "mx-auto max-w-7xl rounded-full transition-all duration-500",
                        // Enhanced glass morphism styles with better visibility
                        isScrolled
                            ? "bg-[rgba(250,246,241,0.98)] backdrop-blur-[16px] shadow-[0_4px_24px_rgba(74,59,47,0.12)] border border-[rgba(201,149,77,0.25)]"
                            : "bg-[rgba(250,246,241,0.92)] backdrop-blur-[12px] shadow-[0_2px_16px_rgba(74,59,47,0.06)] border border-[rgba(232,213,183,0.4)]",
                        // Padding transition
                        isScrolled ? "px-6 py-2" : "px-8 py-3"
                    )}
                >
                    <div className="flex items-center justify-between">
                        {/* Logo - Left with golden glow */}
                        <Link href="/" className="group flex items-center gap-2.5 flex-shrink-0" aria-label="Go to homepage">
                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                                className="group-hover:rotate-[15deg] transition-all duration-300"
                                style={{ filter: "drop-shadow(0 0 8px rgba(201,149,77,0.3))" }}
                            >
                                <KundliIcon className="w-8 h-8 text-primary group-hover:text-[#D4A563] transition-colors" />
                            </motion.div>
                            <span className="font-serif text-lg lg:text-xl font-bold text-secondary tracking-[-0.01em]">
                                Pandit Krishna
                            </span>
                        </Link>

                        {/* Desktop Navigation - Center with proper spacing */}
                        <nav
                            className="hidden lg:flex items-center gap-6 xl:gap-8 mx-8"
                            aria-label="Main navigation"
                        >
                            {NAVIGATION_LINKS.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={cn(
                                            "relative py-1 text-[14px] font-medium tracking-[0.01em] transition-all duration-200 group whitespace-nowrap",
                                            isActive
                                                ? "text-primary font-semibold"
                                                : "text-[#2D2520] hover:text-primary"
                                        )}
                                        aria-current={isActive ? "page" : undefined}
                                    >
                                        {link.label}
                                        {/* Animated dot indicator */}
                                        <span
                                            className={cn(
                                                "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary transition-all duration-300",
                                                isActive
                                                    ? "opacity-100 scale-100"
                                                    : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                                            )}
                                        />
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* CTA Button - Right */}
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            onClick={() =>
                                window.open(
                                    `https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/\D/g, "")}`,
                                    "_blank"
                                )
                            }
                            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold uppercase tracking-[0.06em] text-[#FAF6F1] bg-gradient-to-br from-[#C9954D] to-[#B8843C] shadow-[0_4px_16px_rgba(201,149,77,0.3)] hover:shadow-[0_6px_20px_rgba(201,149,77,0.4)] transition-all duration-300"
                        >
                            <Phone size={16} />
                            Consult Now
                        </motion.button>

                        {/* Mobile Hamburger Button */}
                        <button
                            className="lg:hidden z-[1001] p-2 -mr-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#FAF6F1] rounded-md"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMobileMenuOpen}
                        >
                            <div className="w-6 h-5 flex flex-col justify-between relative">
                                <motion.span
                                    animate={
                                        isMobileMenuOpen
                                            ? { rotate: 45, y: 8 }
                                            : { rotate: 0, y: 0 }
                                    }
                                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                    className="w-full h-[3px] bg-secondary rounded-full origin-center"
                                />
                                <motion.span
                                    animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-full h-[3px] bg-secondary rounded-full"
                                />
                                <motion.span
                                    animate={
                                        isMobileMenuOpen
                                            ? { rotate: -45, y: -8 }
                                            : { rotate: 0, y: 0 }
                                    }
                                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                    className="w-full h-[3px] bg-secondary rounded-full origin-center"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.4, ease: "easeOut" as const }}
                        className="fixed inset-0 z-[999] bg-[rgba(250,246,241,0.98)] backdrop-blur-[16px] lg:hidden"
                    >
                        <nav
                            className="flex flex-col items-center justify-center h-full gap-8 px-6"
                            aria-label="Mobile navigation"
                        >
                            {NAVIGATION_LINKS.map((link, index) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" as const }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={cn(
                                                "text-2xl font-serif transition-colors",
                                                isActive
                                                    ? "text-primary font-semibold"
                                                    : "text-secondary hover:text-primary"
                                            )}
                                            aria-current={isActive ? "page" : undefined}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            {/* Mobile CTA */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ delay: NAVIGATION_LINKS.length * 0.1, duration: 0.4, ease: "easeOut" as const }}
                                className="w-full max-w-xs mt-8"
                            >
                                <button
                                    onClick={() => {
                                        window.open(
                                            `https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/\D/g, "")}`,
                                            "_blank"
                                        );
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-[16px] font-semibold uppercase tracking-[0.08em] text-[#FAF6F1] bg-gradient-to-br from-[#C9954D] to-[#B8843C] shadow-[0_4px_16px_rgba(201,149,77,0.25)]"
                                >
                                    <Phone size={20} />
                                    Get Consultation
                                </button>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
