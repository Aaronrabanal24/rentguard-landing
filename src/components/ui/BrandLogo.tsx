import { cn } from "@/lib/utils";

const LOGO_SIZES = {
  sm: "text-2xl",
  md: "text-3xl",
  lg: "text-4xl",
} as const;

export type BrandLogoSize = keyof typeof LOGO_SIZES;

interface BrandLogoProps {
  size?: BrandLogoSize;
  className?: string;
  animated?: boolean;
}

export function BrandLogo({ size = "md", className, animated = true }: BrandLogoProps) {
  const sizeClass = LOGO_SIZES[size];

  return (
    <div
      className={cn(
        "relative inline-flex items-center gap-2 group",
        className
      )}
    >
      {/* 3D Logo Icon */}
      <div className={cn(
        "relative",
        animated && "transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
      )}>
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg blur-md opacity-60 group-hover:opacity-80 transition-opacity" />
        <div className={cn(
          "relative bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 rounded-lg p-2 shadow-3d",
          sizeClass
        )}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full text-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* House/Shield hybrid icon representing security and home */}
            <path
              d="M12 3L4 7v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V7l-8-4z"
              fill="currentColor"
              fillOpacity="0.9"
            />
            <path
              d="M12 8v8M8 12h8"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Text Logo with 3D effect */}
      <div className="relative">
        {/* Shadow layer for 3D depth */}
        <span
          className={cn(
            "absolute top-0.5 left-0.5 font-bold bg-gradient-to-br from-slate-400 to-slate-500 bg-clip-text text-transparent blur-[1px]",
            sizeClass
          )}
          aria-hidden="true"
        >
          Fairvia
        </span>

        {/* Main text */}
        <span
          className={cn(
            "relative font-bold bg-gradient-to-br from-slate-800 to-slate-900 bg-clip-text text-transparent",
            sizeClass,
            animated && "transition-all duration-300 group-hover:from-sky-600 group-hover:to-blue-700"
          )}
        >
          Fairvia
        </span>

        {/* Shimmer effect */}
        {animated && (
          <span
            className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-30"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Tagline for larger sizes */}
      {size === "lg" && (
        <span className="absolute -bottom-6 left-0 text-xs font-medium text-slate-500 tracking-wide">
          Secure Deposit Management
        </span>
      )}
    </div>
  );
}

export default BrandLogo;
