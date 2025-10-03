import * as React from "react";
import { cn } from "@/lib/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-fairvia-teal text-white hover:bg-primary-600 focus-visible:ring-fairvia-teal":
              variant === "default",
            "border-2 border-fairvia-teal text-fairvia-teal hover:bg-fairvia-teal-light":
              variant === "outline",
            "hover:bg-gray-100 text-gray-700": variant === "ghost",
          },
          {
            "h-10 px-6 py-2": size === "default",
            "h-8 px-4 text-sm": size === "sm",
            "h-12 px-8 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
