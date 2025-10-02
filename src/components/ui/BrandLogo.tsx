import { cn } from "@/lib/utils";

const LOGO_SIZES = {
  xs: { text: "text-xl", icon: "w-7 h-7", gap: "gap-2" },
  sm: { text: "text-2xl", icon: "w-8 h-8", gap: "gap-2.5" },
  md: { text: "text-3xl", icon: "w-10 h-10", gap: "gap-3" },
  lg: { text: "text-4xl", icon: "w-12 h-12", gap: "gap-3.5" },
  xl: { text: "text-5xl", icon: "w-14 h-14", gap: "gap-4" },
} as const;

export type BrandLogoSize = keyof typeof LOGO_SIZES;

interface BrandLogoProps {
  size?: BrandLogoSize;
  className?: string;
  animated?: boolean;
  variant?: "default" | "light" | "dark";
}

export function BrandLogo({ size = "md", className, animated = true, variant = "default" }: BrandLogoProps) {
  const sizeConfig = LOGO_SIZES[size];

  // Variant-specific colors
  const variantStyles = {
    default: {
      iconGradient: "from-sky-400 via-blue-500 to-indigo-600",
      iconGlow: "from-sky-400 to-blue-600",
      textGradient: "from-white via-sky-50 to-blue-100",
      textShadow: "from-sky-200/50 to-blue-200/50",
      hoverText: "group-hover:from-sky-300 group-hover:to-blue-200",
    },
    light: {
      iconGradient: "from-sky-500 via-blue-600 to-indigo-700",
      iconGlow: "from-sky-500 to-blue-700",
      textGradient: "from-slate-800 to-slate-900",
      textShadow: "from-slate-400 to-slate-500",
      hoverText: "group-hover:from-sky-600 group-hover:to-blue-700",
    },
    dark: {
      iconGradient: "from-sky-400 via-cyan-400 to-blue-500",
      iconGlow: "from-sky-400/80 to-cyan-500/80",
      textGradient: "from-white via-sky-100 to-cyan-100",
      textShadow: "from-sky-300/60 to-cyan-300/60",
      hoverText: "group-hover:from-sky-200 group-hover:to-cyan-200",
    },
  };

  const styles = variantStyles[variant];

  return (
    <div
      className={cn(
        "relative inline-flex items-center group select-none",
        sizeConfig.gap,
        className
      )}
    >
      {/* Enhanced 3D Logo Icon with improved depth */}
      <div className={cn(
        "relative flex items-center justify-center",
        animated && "transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-[8deg]"
      )}>
        {/* Layered glow effects for depth */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br rounded-xl blur-xl opacity-40 transition-opacity duration-500",
          styles.iconGlow,
          animated && "group-hover:opacity-70 group-hover:blur-2xl"
        )} />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br rounded-xl blur-md opacity-50 transition-opacity duration-500",
          styles.iconGlow,
          animated && "group-hover:opacity-80"
        )} />

        {/* Icon container with enhanced gradient and depth */}
        <div className={cn(
          "relative bg-gradient-to-br rounded-xl shadow-2xl transition-all duration-500",
          "ring-2 ring-white/10 ring-offset-2 ring-offset-transparent",
          styles.iconGradient,
          sizeConfig.icon,
          "p-1.5 sm:p-2",
          animated && "group-hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] group-hover:ring-white/20"
        )}>
          {/* Inner shadow for 3D effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent opacity-50" />

          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="relative w-full h-full text-white drop-shadow-lg"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Enhanced shield/house icon with better proportions */}
            <path
              d="M12 2.5L3 7v7c0 5.5 3.8 10 9 11.5 5.2-1.5 9-6 9-11.5V7l-9-4.5z"
              fill="currentColor"
              fillOpacity="0.95"
              className="transition-opacity duration-500 group-hover:fill-opacity-100"
            />
            {/* Check mark for trust/verification */}
            <path
              d="M9 12l2 2 4-4"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-500 group-hover:stroke-[3]"
            />
          </svg>
        </div>
      </div>

      {/* Enhanced Text Logo with improved typography */}
      <div className="relative flex flex-col">
        {/* Outer glow for depth */}
        <span
          className={cn(
            "absolute inset-0 font-black tracking-tight bg-gradient-to-br bg-clip-text text-transparent blur-sm opacity-60",
            styles.textShadow,
            sizeConfig.text
          )}
          aria-hidden="true"
        >
          Fairvia
        </span>

        {/* Main text with enhanced gradient */}
        <span
          className={cn(
            "relative font-black tracking-tight bg-gradient-to-br bg-clip-text text-transparent drop-shadow-sm",
            styles.textGradient,
            sizeConfig.text,
            animated && cn("transition-all duration-500", styles.hoverText)
          )}
        >
          Fairvia
        </span>

        {/* Animated shimmer overlay */}
        {animated && (
          <span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent bg-[length:200%_100%] bg-clip-text text-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_2s_ease-in-out_infinite]"
            aria-hidden="true"
          >
            Fairvia
          </span>
        )}

        {/* Subtle underline accent */}
        {animated && (
          <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-500 group-hover:w-full rounded-full" />
        )}
      </div>

      {/* Enhanced tagline for larger sizes */}
      {(size === "lg" || size === "xl") && (
        <span className={cn(
          "absolute -bottom-7 left-0 font-semibold text-slate-400 tracking-wide uppercase transition-colors duration-300",
          size === "xl" ? "text-xs" : "text-[10px]",
          animated && "group-hover:text-sky-400"
        )}>
          Secure • Transparent • Fast
        </span>
      )}
    </div>
  );
}

export default BrandLogo;
