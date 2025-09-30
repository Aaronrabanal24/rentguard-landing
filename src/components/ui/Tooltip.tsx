"use client";

import { useEffect, useState, type ReactNode } from "react";

interface TooltipProps {
  content: string;
  children: ReactNode;
}

export function Tooltip({ content, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

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
        isMobile ? (
          <div className="mt-3 w-64 max-w-[75vw] rounded-2xl border border-slate-200 bg-white p-4 text-left text-sm text-slate-700 shadow-lg">
            <p>{content}</p>
            <button
              type="button"
              onClick={() => setIsVisible(false)}
              className="tap mt-3 inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
            >
              Close
            </button>
          </div>
        ) : (
          <span
            role="tooltip"
            className="absolute bottom-full left-1/2 z-50 mb-2 max-w-xs -translate-x-1/2 whitespace-normal rounded-lg bg-slate-900 px-4 py-3 text-sm text-white shadow-lg"
          >
            {content}
            <span className="absolute top-full left-1/2 -mt-1 -translate-x-1/2 border-4 border-transparent border-t-slate-900" aria-hidden />
          </span>
        )
      ) : null}
    </span>
  );
}
