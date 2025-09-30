import { PageContainer } from "@/components/layout/PageContainer";

// Mock property data - in real app this would come from API
const SAMPLE_PROPERTY = {
  id: 'modern-2br-downtown-oakland',
  title: 'Modern 2BR Apartment in Downtown Oakland',
  location: 'Oakland, CA 94612 • Downtown',
  price: '$2,800/mo',
  featured: true,
  images: [
    '/api/placeholder/600/400', // Main property image
  ],
  features: [
    {
      icon: '🛡️',
      title: 'Deposit Protection',
      description: 'Security deposit held in neutral escrow',
      highlight: true
    },
    {
      icon: '📤',
      title: 'Easy Sharing',
      description: 'QR code and short link included',
      highlight: false
    },
    {
      icon: '🔍',
      title: 'SEO Optimized',
      description: 'Rich snippets and local search ready',
      highlight: false
    }
  ],
  trustBadges: [
    'Property profile with clean SEO and structured data',
    'Trust badges that show escrow and verification first',
    'Short link and QR for easy sharing across platforms',
    'Simple analytics for impressions and actions'
  ],
  stats: {
    profilesLive: 147,
    higherClickQuality: '2.4x'
  },
  landlord: {
    name: 'Fairvia Verified',
    verification: 'DFPI-licensed escrow partner'
  }
};

export default function PropertyListingPage() {
  // In real app, fetch property data based on ID
  const property = SAMPLE_PROPERTY;

  return (
    <PageContainer title={property.title} animateMain={false}>
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-sky-50 to-teal-50 py-8">
        <div className="container-tight">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">
                For California Landlords
              </span>
              {property.featured && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">
                  ⭐ Featured
                </span>
              )}
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              Search optimized profiles that attract qualified renters
            </h1>
            <p className="text-slate-600">
              A property profile that shows up for city and neighborhood searches with built-in trust signals. Works alongside your current marketplace listings.
            </p>
          </div>
        </div>
      </section>

      {/* Main Property Display */}
      <section className="bg-white py-16">
        <div className="container-tight">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
            {/* Property Details */}
            <div>
              {/* Property Image */}
              <div className="relative mb-6">
                <div className="aspect-[3/2] bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl overflow-hidden">
                  <div className="flex items-center justify-center h-full text-slate-500">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-slate-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        🏠
                      </div>
                      <p className="text-sm">Property Photo</p>
                    </div>
                  </div>
                </div>

                {/* Trust Badge Overlay */}
                <div className="absolute top-4 left-4">
                  <div className="bg-white/95 backdrop-blur rounded-lg px-3 py-2 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-xs font-semibold text-slate-900">Fairvia Verified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Property Info */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">{property.title}</h2>
                <p className="text-slate-600 mb-4">{property.location}</p>
                <div className="text-2xl font-bold text-slate-900 mb-6">{property.price}</div>
              </div>

              {/* Trust Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Trust & Verification</h3>
                <div className="grid gap-4 sm:grid-cols-3">
                  {property.features.map((feature, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl border ${
                        feature.highlight
                          ? 'border-emerald-200 bg-emerald-50'
                          : 'border-slate-200 bg-slate-50'
                      }`}
                    >
                      <div className="text-2xl mb-2">{feature.icon}</div>
                      <h4 className="font-semibold text-slate-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-slate-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badges List */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Professional Standards</h3>
                <div className="space-y-3">
                  {property.trustBadges.map((badge, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-emerald-500 mt-1">✓</span>
                      <span className="text-slate-700">{badge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-3">Performance</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-2xl font-bold text-sky-600">{property.stats.profilesLive}</div>
                    <div className="text-sm text-slate-600">profiles live</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-sky-600">{property.stats.higherClickQuality}</div>
                    <div className="text-sm text-slate-600">higher click quality</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Sidebar */}
            <div className="lg:sticky lg:top-8 lg:self-start">
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">{property.landlord.name}</h3>
                  <p className="text-sm text-slate-600">{property.landlord.verification}</p>
                </div>

                <div className="space-y-4">
                  <button className="w-full bg-teal-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-teal-600 transition-colors">
                    Ask a Question
                  </button>

                  <button className="w-full bg-sky-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-sky-600 transition-colors">
                    Start Application
                  </button>

                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Share this listing</h4>
                    <div className="flex gap-2">
                      <button className="flex-1 border border-slate-300 py-2 px-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                        Copy Link
                      </button>
                      <button className="flex-1 border border-slate-300 py-2 px-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                        QR Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicator */}
              <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-900 mb-1">Protected by Fairvia</h4>
                    <p className="text-sm text-emerald-800">
                      Deposits held by DFPI-licensed partners. 21-day compliance automation included.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works for This Property */}
      <section className="bg-slate-50 py-16">
        <div className="container-tight">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            How This Works
          </h2>
          <div className="grid gap-8 md:grid-cols-4 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Trust Profile Live</h3>
              <p className="text-sm text-slate-600">Schema-enhanced listing with verification badges</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Application Process</h3>
              <p className="text-sm text-slate-600">Identity verification and lease setup</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Neutral Escrow</h3>
              <p className="text-sm text-slate-600">Deposit protection via DFPI partners</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                4
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Move-in Ready</h3>
              <p className="text-sm text-slate-600">Complete documentation and timeline</p>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}

// Generate static paths for known property IDs
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'modern-2br-downtown-oakland' } }
    ],
    fallback: 'blocking'
  };
}

// Generate static props for each property
export async function getStaticProps() {
  // In real app, fetch property data from API
  return {
    props: {
      property: SAMPLE_PROPERTY
    },
    revalidate: 3600 // Revalidate every hour
  };
}