import { useRouter } from "next/router";
import { motion } from "@/lib/motion";
import { Button } from "@/components/ui";
import { track } from "@/lib/tracking";

export default function HomeCTA() {
  const router = useRouter();

  const handleClick = () => {
    track("click_cta", { role: "landlord", location: "cta_section", label: "apply_pilot" });
    router.push("/get-started").catch(() => {
      /* noop */
    });
  };

  return (
    <motion.section
      className="bg-transparent py-16 sm:py-20 lg:py-24"
      id="get-started"
      style={{ zIndex: 1 }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative rounded-3xl border-2 border-sky-500/40 bg-gradient-to-br from-sky-500/15 via-slate-800/60 to-purple-500/15 backdrop-blur-sm px-6 py-12 text-center shadow-2xl shadow-sky-500/30 sm:px-10 sm:py-16 overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 via-purple-500/10 to-teal-500/10 animate-pulse" aria-hidden="true" />

          <div className="relative z-10">
            <p className="text-sm font-bold uppercase tracking-widest text-sky-300 mb-4">Get Started Today</p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-white via-sky-100 to-purple-200 bg-clip-text text-transparent leading-tight">
              Ready to run deposits the Fairvia way?
            </h2>
            <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-slate-200 max-w-2xl mx-auto font-medium">
              Share a current or upcoming move-in. We&apos;ll map it through Fairvia, enable Listing Assist, and leave you with the compliance checklist.
            </p>

            {/* Enhanced CTA with multiple benefits */}
            <div className="mt-8 sm:mt-10 flex flex-col items-center gap-6">
              <Button
                onClick={handleClick}
                size="lg"
                className="px-10 py-5 text-xl font-black shadow-2xl hover:shadow-[0_0_50px_rgba(56,189,248,0.6)] hover:scale-110 transition-all duration-300"
              >
                Start with One Free Unit →
              </Button>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  No credit card required
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Setup in 5 minutes
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Cancel anytime
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
