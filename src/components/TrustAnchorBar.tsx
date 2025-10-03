import { Shield, Lock, CheckCircle } from "lucide-react";

export function TrustAnchorBar() {
  return (
    <div className="bg-slate-800/80 border-t border-b border-slate-700/50 backdrop-blur-sm py-3 sm:py-4">
      <div className="mx-auto max-w-6xl px-4">
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
      </div>
    </div>
  );
}
