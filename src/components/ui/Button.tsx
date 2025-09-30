import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const VARIANTS = {
  primary: "bg-gradient-to-r from-sky-500 to-teal-500 text-white shadow-sm shadow-sky-200/80 hover:shadow-lg hover:shadow-sky-200/60",
  secondary: "border border-slate-300 text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:bg-slate-50",
  outline: "border-2 border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white",
  ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
  success: "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-sm shadow-emerald-200/80 hover:shadow-lg hover:shadow-emerald-200/60",
  warning: "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm shadow-amber-200/80 hover:shadow-lg hover:shadow-amber-200/60",
  dark: "bg-slate-900 text-white hover:bg-slate-800 shadow-sm hover:shadow-lg",
} as const;

const SIZES = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-5 py-3 text-base",
  lg: "px-6 py-3.5 text-base sm:px-7 sm:py-4",
  xl: "px-8 py-4 text-lg sm:px-10 sm:py-5",
} as const;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-[44px] items-center justify-center rounded-full font-semibold transition-all duration-200 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60",
        VARIANTS[variant],
        SIZES[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
