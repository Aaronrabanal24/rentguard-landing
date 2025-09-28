import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value?: number;
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(function Progress(
  { className, value = 0, children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn("relative h-2 w-full overflow-hidden rounded-full bg-slate-200", className)}
      {...props}
    >
      <div
        className="h-full rounded-full bg-gradient-to-r from-orange-400 to-amber-500 transition-[width] duration-500 ease-out"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
      {children}
    </div>
  );
});
