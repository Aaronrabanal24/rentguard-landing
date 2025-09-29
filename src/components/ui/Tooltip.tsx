"use client";

import { useState, type ReactNode } from "react";

interface TooltipProps {
  content: string;
  children: ReactNode;
}

export function Tooltip({ content, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span className="relative inline-block">
      <button
        type="button"
        className="cursor-help border-b border-dotted border-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        aria-label={content}
      >
        {children}
      </button>
      {isVisible ? (
        <span
          role="tooltip"
          className="absolute bottom-full left-1/2 z-50 mb-2 max-w-xs -translate-x-1/2 whitespace-normal rounded-lg bg-slate-900 px-3 py-2 text-xs text-white shadow-lg"
        >
          {content}
          <span className="absolute top-full left-1/2 -mt-1 -translate-x-1/2 border-4 border-transparent border-t-slate-900" aria-hidden />
        </span>
      ) : null}
    </span>
  );
}
