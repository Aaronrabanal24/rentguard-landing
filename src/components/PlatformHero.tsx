"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle, Lock } from "lucide-react";
import { Button } from "./ui/Button";
import HeroVideoBg from "./HeroVideoBg";

export function PlatformHero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 lg:pb-16 px-4">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <HeroVideoBg
          mp4Src="https://res.cloudinary.com/dmbzcxknh/video/upload/v1738627009/fairvia-demo_r0uo2t.mp4"
          reduceMotionFallback={true}
        />
        {/* Enhanced gradient overlay for better text readability and depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 via-slate-800/70 to-slate-900"></div>
        {/* Subtle vignette for focus */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-900/40"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
            <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            <span>Transparent Leasing Platform</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight px-4"
        >
          Transparency and trust between owners and property managers
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-gray-300 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4"
        >
          Fairvia makes deposits clear, compliant, and dispute-ready. One smart unit link shows the same record to everyone.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-4 mb-10 sm:mb-12 px-4"
        >
          <Button size="lg" variant="primary" className="w-full sm:w-auto sm:min-w-[220px] text-base sm:text-lg font-semibold shadow-xl shadow-teal-500/20 hover:shadow-2xl hover:shadow-teal-500/30 transition-shadow">
            Start Free Unit →
          </Button>
          <button className="text-sm text-gray-400 hover:text-teal-300 transition-colors underline underline-offset-4">
            See how it works
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-5 sm:gap-8 text-xs sm:text-sm text-gray-400 px-4 mb-8 sm:mb-10"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-400 flex-shrink-0" />
            <span>Zero-training interface</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-400 flex-shrink-0" />
            <span>Built-in compliance</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-400 flex-shrink-0" />
            <span>Owner proof ready</span>
          </div>
        </motion.div>

        {/* Trust Anchor Bar - Integrated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-slate-800/80 border border-slate-700/50 backdrop-blur-sm rounded-xl py-4 px-4 sm:px-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-gray-300">
              <Shield className="w-4 h-4 text-teal-400 flex-shrink-0" />
              <span className="font-medium">DFPI Licensed</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
              <span className="font-medium">AB 2801 Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Lock className="w-4 h-4 text-teal-400 flex-shrink-0" />
              <span className="font-medium">SOC 2 Type II</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
