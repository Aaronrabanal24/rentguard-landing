import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const VARIANTS = {
  primary: "bg-gradient-to-r from-sky-500 to-teal-500 text-white shadow-md shadow-sky-200/70 hover:shadow-xl hover:shadow-sky-300/50 hover:from-sky-600 hover:to-teal-600 active:shadow-sm",
  secondary: "border-2 border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:bg-slate-50 active:bg-slate-100",
  outline: "border-2 border-sky-500 bg-transparent text-sky-600 hover:bg-sky-50 hover:border-sky-600 active:bg-sky-100",
  ghost: "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200",
  success: "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-200/70 hover:shadow-xl hover:shadow-emerald-300/50 hover:from-emerald-600 hover:to-teal-600 active:shadow-sm",
  warning: "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-amber-200/70 hover:shadow-xl hover:shadow-amber-300/50 hover:from-amber-600 hover:to-orange-600 active:shadow-sm",
  dark: "bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-xl active:bg-slate-950",
} as const;

const SIZES = {
  sm: "px-4 py-2 text-sm min-h-[40px]",
  md: "px-6 py-2.5 text-base min-h-[44px]",
  lg: "px-7 py-3 text-base min-h-[48px] sm:px-8 sm:py-3.5",
  xl: "px-9 py-3.5 text-lg min-h-[52px] sm:px-10 sm:py-4",
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
        "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 ease-out",
        "hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-100",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400 focus-visible:ring-4 focus-visible:ring-sky-200/50",
        "disabled:translate-y-0 disabled:scale-100 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:shadow-none",
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
