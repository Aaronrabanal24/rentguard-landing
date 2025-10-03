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
  const [shouldRenderVideo, setShouldRenderVideo] = useState(true);

  // Respect prefers-reduced-motion (don't render video at all)
  useEffect(() => {
    if (!reduceMotionFallback) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setShouldRenderVideo(!mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [reduceMotionFallback]);

  // Autoplay coercion with iOS/Safari quirks
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !shouldRenderVideo) return;

    // iOS needs attributes stamped before source is parsed
    el.setAttribute("muted", ""); // ensures muted=true at parse-time
    el.muted = true;
    el.defaultMuted = true;
    el.setAttribute("playsinline", "");
    el.setAttribute("webkit-playsinline", ""); // iOS Safari alias

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

    return () => { clearTimeout(t); io.disconnect(); };
  }, [shouldRenderVideo]);

  return (
    <>
      {/* Video layer */}
      {shouldRenderVideo ? (
        <video
          ref={videoRef}
          // Order matters: keep muted first, then autoplay, etc.
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
          poster={poster}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className={`absolute inset-0 h-full w-full object-cover opacity-20 ${className}`}
        >
          {/* Prefer WebM when available, then MP4 */}
          {webmSrc ? <source src={webmSrc} type="video/webm" /> : null}
          <source src={mp4Src} type="video/mp4" />
        </video>
      ) : poster ? (
        // Fallback poster for reduced motion users
        <img
          src={poster}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover opacity-20 ${className}`}
          loading="eager"
          decoding="async"
        />
      ) : null}
    </>
  );
}
