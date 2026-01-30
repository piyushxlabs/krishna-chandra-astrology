import * as React from "react";
import { cn } from "@/lib/utils/cn";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    id?: string;
    variant?: "default" | "alt" | "dark";
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
    ({ className, variant = "default", children, ...props }, ref) => {
        const variants = {
            default: "bg-background text-text-primary",
            alt: "bg-surface-alt text-text-primary",
            dark: "bg-secondary text-[#FAF6F1]",
        };

        return (
            <section
                ref={ref}
                className={cn(
                    "py-16 md:py-20 lg:py-24 relative overflow-hidden",
                    variants[variant],
                    className
                )}
                {...props}
            >
                {children}
            </section>
        );
    }
);
Section.displayName = "Section";

export { Section };
