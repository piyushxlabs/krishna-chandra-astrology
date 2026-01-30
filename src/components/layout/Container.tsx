import * as React from "react";
import { cn } from "@/lib/utils/cn";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
    ({ className, as: Component = "div", children, ...props }, ref) => {
        return (
            <Component
                ref={ref}
                className={cn(
                    "mx-auto w-full max-w-[1200px] px-6 md:px-12 lg:px-20",
                    className
                )}
                {...props}
            >
                {children}
            </Component>
        );
    }
);
Container.displayName = "Container";

export { Container };
