import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type ImageWithFallbackProps = ImageProps & {
  fallbackLabel?: string;
  containerClassName?: string;
};

export function ImageWithFallback({
  className,
  fallbackLabel = "Image unavailable",
  containerClassName,
  onError,
  alt,
  ...props
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);

  const handleError: NonNullable<ImageProps["onError"]> = (event) => {
    setDidError(true);
    onError?.(event);
  };

  if (didError) {
    return (
      <div
        className={cn(
          props.fill ? "absolute inset-0" : undefined,
          "flex h-full w-full items-center justify-center bg-slate-100 text-xs font-medium text-slate-500",
          containerClassName,
          className
        )}
      >
        {fallbackLabel}
      </div>
    );
  }

  return <Image alt={alt} className={className} onError={handleError} {...props} />;
}
