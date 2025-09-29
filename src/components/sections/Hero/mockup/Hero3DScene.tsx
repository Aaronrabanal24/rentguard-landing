import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Hero3DLayer {
  content: ReactNode;
  wrapperClassName?: string;
  tileClassName?: string;
  style?: CSSProperties;
}

interface Hero3DSceneProps {
  className?: string;
  spotlightClassName?: string;
  layers: Hero3DLayer[];
}

export function Hero3DScene({ className, spotlightClassName, layers }: Hero3DSceneProps) {
  return (
    <div className={cn("relative h-44 w-full overflow-visible sm:h-48", className)}>
      <div
        className={cn(
          "pointer-events-none absolute inset-x-6 bottom-0 -z-10 h-16 rounded-full bg-slate-900/10 blur-2xl sm:inset-x-12",
          spotlightClassName
        )}
        aria-hidden
      />
      {layers.map((layer, index) => (
        <div
          key={index}
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform-gpu transition-transform duration-500",
            layer.wrapperClassName
          )}
          style={layer.style}
        >
          <div
            className={cn(
              "relative min-h-[120px] min-w-[180px] rounded-3xl border border-white/50 bg-white/90 p-4 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.65)] backdrop-blur",
              layer.tileClassName
            )}
          >
            {layer.content}
          </div>
        </div>
      ))}
    </div>
  );
}
