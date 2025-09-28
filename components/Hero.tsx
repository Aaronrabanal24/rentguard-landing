import { useState, useEffect } from "react";
import { track } from "../lib/track";

const HEADLINE_VARIANTS: Record<"A" | "B" | "C", string> = {
  A: "Transform Your Rental Experience",
  B: "Skip the Rental Hassles Forever",
  C: "Find Your Perfect Match Instantly",
};

const SUBHEADLINE_VARIANTS: Record<"A" | "B" | "C", string> = {
  A: "Connect directly with verified renters and landlords. No fees, no middlemen, just seamless rental experiences.",
  B: "Our AI powered platform eliminates the stress of finding rentals. Get matched with your ideal property or tenant in minutes.",
  C: "Revolutionary rental platform that uses smart matching to connect the right people with the right properties.",
};

export default function Hero() {
  const [variant, setVariant] = useState<"A" | "B" | "C">("A");

  useEffect(() => {
    const variants = ["A", "B", "C"] as const;
    const selectedVariant = variants[Math.floor(Math.random() * variants.length)];
    setVariant(selectedVariant);
    track("headline_variant_shown", { variant: selectedVariant });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex flex-col">
      {/* Credibility Strip */}
      <div className="bg-indigo-600 text-white py-2">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm">
          <span className="font-medium">Trusted by early users</span>
          <span className="mx-2">•</span>
          <span>Escrow and verification focused</span>
          <span className="mx-2">•</span>
          <span>Simple and clear onboarding</span>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 md:text-7xl">
            {HEADLINE_VARIANTS[variant]}
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl">
            {SUBHEADLINE_VARIANTS[variant]}
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => {
                track("hero_cta_clicked", { variant, button: "primary" });
                document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="transform rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl"
            >
              Join the Waitlist
            </button>
            <button
              onClick={() => {
                track("hero_cta_clicked", { variant, button: "secondary" });
                document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-lg border-2 border-indigo-600 bg-white px-8 py-4 text-lg font-semibold text-indigo-600 transition-colors hover:bg-indigo-50"
            >
              Learn More
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-8 text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-r from-blue-400 to-indigo-500"
                  />
                ))}
              </div>
              <span className="text-sm font-medium">Early community interest is growing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
