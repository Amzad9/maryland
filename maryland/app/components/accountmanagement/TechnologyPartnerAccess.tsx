// components/TechnologyPartnerAccess.tsx
export default function TechnologyPartnerAccess() {
  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-teal-500/10 via-emerald-500/5 to-transparent rounded-full blur-[300px]" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Technology Partner Account Access and Support
          </h1>
        </div>

        {/* Three Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Valor PayTech Equipment Portal */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Valor PayTech Equipment Portal</h2>
            </div>
            
            <p className="text-gray-700 mb-8">
              Access your Valor PayTech equipment account for terminal management, software updates, and equipment support through our primary equipment partner.
            </p>

            <div className="bg-linear-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Valor PayTech Portal:</h3>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Valor PayTech Account Access</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Accept.Blue Processing Portal */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Accept.Blue Processing Portal</h2>
            </div>
            
            <p className="text-gray-700 mb-8">
              For merchants utilizing Accept.Blue processing services, access your processing account, transaction reports, and gateway management tools.
            </p>

            <div className="bg-linear-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Accept.Blue Portal:</h3>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Accept.Blue Account Access</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Technology Partner Support */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Technology Partner Support</h2>
            </div>
            
            <p className="text-gray-700 mb-8">
              Professional support for all technology partner accounts including equipment assistance, processing support, and technical guidance through Elite Card Processing's local support team.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-linear-to-r from-amber-50 to-yellow-50 border border-amber-100">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 text-sm">Equipment assistance and support</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-linear-to-r from-blue-50 to-cyan-50 border border-blue-100">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 text-sm">Processing support and guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Buttons */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <a href="#" className="p-4 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-200 border border-blue-600 hover:border-blue-700">
            <div className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span>Get Technology Support</span>
            </div>
          </a>
          
          <a href="#" className="p-4 rounded-xl bg-linear-to-r from-gray-100 to-gray-200 text-gray-700 font-bold text-center border border-gray-300 hover:border-gray-400 hover:from-gray-200 hover:to-gray-300 transition-all duration-200">
            <div className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              <span>Equipment Assistance</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}