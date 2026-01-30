"use strict";

import * as React from "react";
import { cn } from "@/lib/utils/cn";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
        const variants = {
            primary:
                "bg-primary text-primary-text shadow-md hover:bg-primary-hover hover:scale-[1.03] hover:shadow-[0_4px_12px_rgba(201,149,77,0.3)] border-transparent",
            secondary:
                "bg-secondary text-[#FAF6F1] shadow-md hover:bg-secondary-hover hover:scale-[1.03] border-transparent",
            outline:
                "bg-transparent border border-accent text-text-primary hover:border-primary hover:bg-[rgba(201,149,77,0.08)]",
            ghost:
                "bg-transparent text-text-primary hover:bg-black/5 hover:text-primary",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-12 px-8 text-base",
            lg: "h-14 px-10 text-lg",
        };

        return (
            <button
                ref={ref}
                disabled={isLoading || props.disabled}
                className={cn(
                    "inline-flex items-center justify-center rounded-lg font-semibold uppercase tracking-wider transition-all duration-300 ease-out active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ring-offset-background select-none",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button };
