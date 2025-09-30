import type { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const COLUMNS = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  6: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
} as const;

const GAPS = {
  none: "gap-0",
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-10",
  "2xl": "gap-12",
} as const;

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: keyof typeof COLUMNS;
  gap?: keyof typeof GAPS;
  children: ReactNode;
}

export function Grid({
  cols = 3,
  gap = "lg",
  children,
  className,
  ...props
}: GridProps) {
  return (
    <div
      className={cn(
        "grid",
        COLUMNS[cols],
        GAPS[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "col";
  wrap?: boolean;
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  gap?: keyof typeof GAPS;
  children: ReactNode;
}

export function Flex({
  direction = "row",
  wrap = false,
  align = "center",
  justify = "start",
  gap = "md",
  children,
  className,
  ...props
}: FlexProps) {
  const directionClass = direction === "col" ? "flex-col" : "flex-row";
  const wrapClass = wrap ? "flex-wrap" : "";
  const alignClass = `items-${align}`;
  const justifyClass = `justify-${justify}`;

  return (
    <div
      className={cn(
        "flex",
        directionClass,
        wrapClass,
        alignClass,
        justifyClass,
        GAPS[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  space?: keyof typeof GAPS;
  align?: "start" | "center" | "end" | "stretch";
  children: ReactNode;
}

export function Stack({
  space = "md",
  align = "stretch",
  children,
  className,
  ...props
}: StackProps) {
  const alignClass = `items-${align}`;

  return (
    <div
      className={cn(
        "flex flex-col",
        alignClass,
        GAPS[space],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}