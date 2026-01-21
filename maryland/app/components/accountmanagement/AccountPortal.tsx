export default function AccountPortalLoginThreeCards() {
  const features = [
    "Monthly statement access and download",
    "Real-time batch reporting and transaction viewing",
    "Payment history and settlement tracking",
    "Account information and contact details",
  ];

  const securityFeatures = [
    "Secure login credentials",
    "Encrypted data transmission",
    "Comprehensive account protection"
  ];

  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden bg-linear-to-b from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-blue-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-linear-to-tr from-emerald-500/10 via-teal-500/5 to-transparent rounded-full blur-[300px]" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Secure Merchant Services Account Portal Login
          </h2>
        </div>

        {/* Three Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Primary Account Portal Access */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Primary Account Portal Access</h2>
            </div>
            
            <p className="text-gray-700 mb-8">
              Access your Elite Card Processing merchant services account through our secure Iris CRM portal for comprehensive account management, statements, and transaction reporting.
            </p>

            <a href="#" className="p-4 block rounded-xl bg-linear-to-r from-gray-100 to-gray-200 text-gray-700 font-bold text-center border border-gray-300 hover:border-gray-400 hover:from-gray-200 hover:to-gray-300 transition-all duration-200">
            <div className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Need Login Assistance?</span>
            </div>
          </a>
          </div>

          {/* Card 2: Account Portal Features */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Account Portal Features</h2>
            </div>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-linear-to-r from-gray-50 to-gray-100/50 border border-gray-100 hover:bg-linear-to-r hover:from-gray-100 hover:to-gray-200 transition-all duration-200">
                  <div className="w-8 h-8 rounded-lg bg-linear-to-br from-emerald-100 to-emerald-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Account Security */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Account Security</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Advanced security measures including secure login credentials, encrypted data transmission, and comprehensive account protection to safeguard your merchant services information.
            </p>
            
            <div className="space-y-3">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-linear-to-r from-amber-50 to-yellow-50 border border-amber-100">
                  <div className="w-6 h-6 rounded-full bg-linear-to-br from-amber-100 to-amber-200 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Buttons */}
        <div className="grid sm:grid-cols-1 gap-4 max-w-2xl mx-auto">
          <a href="#" className="p-4 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 text-white font-bold text-center hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 border border-blue-600 hover:border-blue-700">
            <div className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              <span>Access Your Account Portal</span>
            </div>
          </a>
       
        </div>
      </div>
    </section>
  );
}