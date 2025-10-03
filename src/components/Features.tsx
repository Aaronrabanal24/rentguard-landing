import { ScrollReveal } from "./ScrollReveal";
import { DollarSign, AlertCircle } from "lucide-react";

export function Features() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold mb-2 text-white">Your Properties</h2>
            <p className="text-gray-400 mb-8">Manage your units, track timelines, and monitor performance</p>

            <div className="grid gap-4 md:grid-cols-3 mb-8">
              <div className="bg-white rounded-xl p-6 text-gray-900">
                <div className="text-sm text-gray-500 mb-1">Units</div>
                <div className="text-4xl font-bold mb-1">4</div>
                <div className="text-sm text-gray-600">3 active</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-gray-900">
                <div className="text-sm text-gray-500 mb-1">Avg days</div>
                <div className="text-4xl font-bold mb-1">6</div>
                <div className="text-sm text-gray-600">Vacant</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-gray-900">
                <div className="text-sm text-gray-500 mb-1">Monthly rent</div>
                <div className="text-4xl font-bold mb-1">$12k</div>
                <div className="text-sm text-gray-600">Total value</div>
              </div>
            </div>

            {/* Deposit Overview */}
            <div className="bg-white rounded-xl p-6 text-gray-900">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-bold">Deposit Overview</h3>
                  <p className="text-sm text-gray-500">Security deposits across all units</p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="font-semibold text-red-900">1 deposit requires attention</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-3xl font-bold mb-1">$6,700 <span className="text-lg text-gray-500">held</span></div>
                <div className="text-sm text-gray-500">Across 3 units</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-amber-50 rounded-lg p-3">
                  <div className="text-sm text-gray-600 mb-1">Pending</div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">1</span>
                    <span className="text-xs text-gray-500">Awaiting action</span>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-sm text-gray-600 mb-1">Held</div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">3</span>
                    <span className="text-xs text-gray-500">In account</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
