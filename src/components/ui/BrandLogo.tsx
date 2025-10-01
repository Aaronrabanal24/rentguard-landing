import Image from "next/image";
import { cn } from "@/lib/utils";

const LOGO_SIZES = {
  sm: { width: 132, height: 40 },
  md: { width: 152, height: 46 },
  lg: { width: 180, height: 54 },
} as const;

export type BrandLogoSize = keyof typeof LOGO_SIZES;

interface BrandLogoProps {
  size?: BrandLogoSize;
  priority?: boolean;
  className?: string;
}

export function BrandLogo({ size = "md", priority = false, className }: BrandLogoProps) {
  const { width, height } = LOGO_SIZES[size];

  return (
    <Image
      src="/fairvia-logo.svg"
      alt="Fairvia - Professional deposit management for California landlords"
      width={width}
      height={height}
      priority={priority}
      className={cn("h-auto w-auto", className)}
      sizes="(max-width: 640px) 120px, (max-width: 1024px) 150px, 180px"
    />
  );
}

export default BrandLogo;
