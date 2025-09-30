import type { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const VARIANTS = {
  default: "bg-white border-slate-200",
  elevated: "bg-white border-slate-200 shadow-lg shadow-slate-200/50",
  glass: "bg-white/80 backdrop-blur-sm border-white/50",
  gradient: "bg-gradient-to-br from-white via-slate-50 to-white border-slate-200",
  dark: "bg-slate-900 border-slate-700 text-white",
} as const;

const PADDING = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-10",
} as const;

const RADIUS = {
  none: "",
  sm: "rounded-lg",
  md: "rounded-xl",
  lg: "rounded-2xl",
  xl: "rounded-3xl",
} as const;

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof VARIANTS;
  padding?: keyof typeof PADDING;
  radius?: keyof typeof RADIUS;
  children: ReactNode;
  hover?: boolean;
}

export function Card({
  variant = "default",
  padding = "md",
  radius = "xl",
  hover = false,
  children,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "border transition-all duration-200",
        VARIANTS[variant],
        PADDING[padding],
        RADIUS[radius],
        hover && "hover:shadow-xl hover:-translate-y-1 cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function CardHeader({ children, className, ...props }: CardHeaderProps) {
  return (
    <div className={cn("space-y-1.5", className)} {...props}>
      {children}
    </div>
  );
}

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function CardTitle({ children, className, level = 3, ...props }: CardTitleProps) {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  return (
    <Tag
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export function CardDescription({ children, className, ...props }: CardDescriptionProps) {
  return (
    <p className={cn("text-sm text-slate-600", className)} {...props}>
      {children}
    </p>
  );
}

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function CardContent({ children, className, ...props }: CardContentProps) {
  return (
    <div className={cn("pt-6", className)} {...props}>
      {children}
    </div>
  );
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function CardFooter({ children, className, ...props }: CardFooterProps) {
  return (
    <div className={cn("pt-6 flex items-center", className)} {...props}>
      {children}
    </div>
  );
}