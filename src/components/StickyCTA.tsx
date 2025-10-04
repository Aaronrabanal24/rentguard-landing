import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past 50% of hero
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      setIsVisible(scrollPosition > heroHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Desktop: Sticky header bar */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="hidden sm:block fixed top-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-xl"
          >
            <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-sm font-medium text-white">Start your free unit today</div>
                <div className="text-xs text-gray-400">No credit card • 5 min setup</div>
              </div>
              <button
                className="bg-teal-500 hover:bg-teal-600 active:bg-teal-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-teal-500/20"
                onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Free Unit
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Mobile: Floating bottom button */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="sm:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent backdrop-blur-sm"
          >
            <button
              className="w-full bg-teal-500 hover:bg-teal-600 active:bg-teal-700 text-white font-semibold px-6 py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-2xl shadow-teal-500/30 touch-manipulation"
              onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Free Unit
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
