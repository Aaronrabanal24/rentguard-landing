import { motion } from "framer-motion";
import { Shield, CheckCircle } from "lucide-react";
import { Button } from "./ui/Button";

export function PlatformHero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden pt-24 pb-12">
      <div className="relative z-10 px-4 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Transparent Leasing Platform</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
        >
          Transparency and trust between owners and property managers
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Fairvia makes deposits clear, compliant, and dispute-ready. One smart unit link shows the same record to
          everyone.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button size="lg" variant="primary" className="min-w-[200px]">
            Join the Pilot →
          </Button>
          <Button size="lg" variant="secondary" className="min-w-[200px]">
            Watch Demo
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-teal-400" />
            <span>Deposit tracking</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-teal-400" />
            <span>Audit-ready</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-teal-400" />
            <span>No heavy PMS</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
