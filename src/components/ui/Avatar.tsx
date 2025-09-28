import Image, { type ImageProps } from "next/image";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Avatar({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-slate-100 text-slate-600",
        className
      )}
      {...props}
    />
  );
}

type AvatarImageProps = ImageProps;

export function AvatarImage({ className, alt, ...props }: AvatarImageProps) {
  return <Image alt={alt} className={cn("h-full w-full object-cover", className)} {...props} />;
}

export function AvatarFallback({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "flex h-full w-full items-center justify-center bg-slate-200 text-xs font-medium uppercase text-slate-600",
        className
      )}
      {...props}
    />
  );
}
