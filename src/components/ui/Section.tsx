import type { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const BACKGROUNDS = {
  white: "bg-white",
  slate: "bg-slate-50",
  gray: "bg-gray-50",
  gradient: "bg-gradient-to-b from-white via-slate-50 to-white",
  "gradient-dark": "bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white",
  "gradient-primary": "bg-gradient-to-br from-sky-50 via-white to-teal-50",
  "gradient-secondary": "bg-gradient-to-br from-emerald-50 via-white to-sky-50",
  dark: "bg-slate-900 text-white",
} as const;

const PADDING = {
  none: "",
  sm: "py-8",
  md: "py-12",
  lg: "py-16",
  xl: "py-20",
  "2xl": "py-24",
} as const;

const CONTAINER = {
  none: "",
  full: "container-wide",
  tight: "container-tight",
  narrow: "container-narrow",
} as const;

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  background?: keyof typeof BACKGROUNDS;
  padding?: keyof typeof PADDING;
  container?: keyof typeof CONTAINER;
  children: ReactNode;
}

export function Section({
  background = "white",
  padding = "lg",
  container = "tight",
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        BACKGROUNDS[background],
        PADDING[padding],
        className
      )}
      {...props}
    >
      <div className={cn(CONTAINER[container])}>
        {children}
      </div>
    </section>
  );
}

export interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  centered?: boolean;
}

export function SectionHeader({
  children,
  centered = true,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12",
        centered && "text-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  level?: 1 | 2 | 3;
  size?: "sm" | "md" | "lg" | "xl";
}

export function SectionTitle({
  children,
  level = 2,
  size = "lg",
  className,
  ...props
}: SectionTitleProps) {
  const Tag = `h${level}` as "h1" | "h2" | "h3";

  const sizeClasses = {
    sm: "text-2xl font-bold",
    md: "text-3xl font-bold",
    lg: "text-3xl font-bold sm:text-4xl",
    xl: "text-4xl font-bold sm:text-5xl",
  };

  return (
    <Tag
      className={cn(
        "text-slate-900 mb-4",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export interface SectionSubtitleProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

export function SectionSubtitle({
  children,
  size = "md",
  className,
  ...props
}: SectionSubtitleProps) {
  const sizeClasses = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
  };

  return (
    <p
      className={cn(
        "text-slate-600 max-w-3xl mx-auto",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export interface SectionBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "success" | "warning";
}

export function SectionBadge({
  children,
  variant = "primary",
  className,
  ...props
}: SectionBadgeProps) {
  const variantClasses = {
    primary: "bg-sky-100 text-sky-600",
    secondary: "bg-slate-100 text-slate-600",
    success: "bg-emerald-100 text-emerald-600",
    warning: "bg-amber-100 text-amber-600",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] mb-4",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}