"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  className?: string;
  poster?: string;          // e.g. "/hero-poster.jpg"
  webmSrc?: string;         // e.g. "/hero-bg.webm"
  mp4Src: string;           // e.g. "/hero-bg.mp4"
  reduceMotionFallback?: boolean; // default true
};

export default function HeroVideoBg({
  className = "min-h-[70vh]",
  poster,
  webmSrc,
  mp4Src,
  reduceMotionFallback = true,
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldRenderVideo, setShouldRenderVideo] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // Respect prefers-reduced-motion (don't render video at all)
  useEffect(() => {
    if (!reduceMotionFallback) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setShouldRenderVideo(!mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [reduceMotionFallback]);

  // Lazy load video when container is near viewport
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Autoplay coercion with iOS/Safari quirks
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !shouldRenderVideo || !isVisible) return;

    // iOS needs attributes stamped before source is parsed
    el.setAttribute("muted", ""); // ensures muted=true at parse-time
    el.muted = true;
    el.defaultMuted = true;
    el.setAttribute("playsinline", "");
    el.setAttribute("webkit-playsinline", ""); // iOS Safari alias

    // Track loading state
    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);

    el.addEventListener("loadstart", handleLoadStart);
    el.addEventListener("canplay", handleCanPlay);

    // Don't call .play() until we have enough data
    const tryPlay = async () => {
      try {
        // If source changed before we got here, wait for canplay
        if (el.readyState < 2) await new Promise<void>(res => {
          const onCanPlay = () => { el.removeEventListener("canplay", onCanPlay); res(); };
          el.addEventListener("canplay", onCanPlay, { once: true });
        });
        await el.play();
      } catch (err) {
        // Soft failure logging; avoid throwing inside effects
        console.debug("[HeroVideoBg] autoplay blocked:", err);
      }
    };

    // iOS sometimes needs a microtask before play()
    const t = setTimeout(tryPlay, 0);

    // Pause when scrolled off-screen to save CPU
    const io = new IntersectionObserver(([entry]) => {
      if (!el) return;
      if (entry.isIntersecting) { el.play().catch(() => {}); }
      else { el.pause(); }
    }, { threshold: 0.05 });
    io.observe(el);

    return () => {
      clearTimeout(t);
      io.disconnect();
      el.removeEventListener("loadstart", handleLoadStart);
      el.removeEventListener("canplay", handleCanPlay);
    };
  }, [shouldRenderVideo, isVisible]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      {/* Loading skeleton */}
      {isLoading && shouldRenderVideo && (
        <div className="absolute inset-0 bg-slate-800/50 animate-pulse" aria-hidden="true" />
      )}

      {/* Video layer */}
      {shouldRenderVideo && isVisible ? (
        <video
          ref={videoRef}
          // Order matters: keep muted first, then autoplay, etc.
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
          poster={poster}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className={`absolute inset-0 h-full w-full object-cover opacity-20 transition-opacity duration-700 ${
            isLoading ? "opacity-0" : "opacity-20"
          } ${className}`}
          aria-label="Background video showcasing Fairvia platform"
        >
          {/* Prefer WebM when available, then MP4 */}
          {webmSrc ? <source src={webmSrc} type="video/webm" /> : null}
          <source src={mp4Src} type="video/mp4" />
        </video>
      ) : poster ? (
        // Fallback poster for reduced motion users
        <img
          src={poster}
          alt="Fairvia platform preview"
          className={`absolute inset-0 h-full w-full object-cover opacity-20 ${className}`}
          loading="eager"
          decoding="async"
        />
      ) : null}
    </div>
  );
}
