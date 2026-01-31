// components/TechnologyPartnerAccess.tsx
export default function TechnologyPartnerAccess() {
  const SUPPORT_PHONE = "1-877-415-8627";
  const SUPPORT_EMAIL = "info@elitecardprocessing.com";
  const SALES_EMAIL = "sales@elitecardprocessing.com";

  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden bg-linear-to-b from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-linear-to-tr from-teal-500/10 via-emerald-500/5 to-transparent rounded-full blur-[300px]" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Technology Partner Account Access and Support
          </h1>
        </div>

        {/* Three Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Valor PayTech Technology Solutions */}
          <div className="bg-white rounded-2xl p-4 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Valor PayTech Technology Solutions</h2>
            </div>
            
            <p className="text-gray-700 mb-8">
              We proudly install Valor PayTech to almost all of our merchants. The product is great, and being able to support it is even better! Easy to use products and our fully trained staff are able to help you with any question or concern.
            </p>

            <div className="bg-linear-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Need support for your Valor PayTech device?</h3>
              <div className="bg-white rounded-lg p-4 border border-gray-200 space-y-2">
                <a href={`tel:${SUPPORT_PHONE.replace(/-/g, '')}`} className="block text-blue-600 hover:text-blue-700 font-medium">
                  {SUPPORT_PHONE}
                </a>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="block text-blue-600 hover:text-blue-700 font-medium">
                  {SUPPORT_EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Virtual Terminal Solutions */}
          <div className="bg-white rounded-2xl p-4 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Virtual Terminal Solutions</h2>
            </div>
            
            <p className="text-gray-700 mb-8">
              For merchants that utilize virtual terminals or gateways, such as Accept Blue, Authorize.Net, we have knowledge and expertise in helping our merchants be successful. If you need support with any of the ones we work with, our support team is ready to help.
            </p>

            <div className="bg-linear-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Need Support for Your Virtual Terminal?</h3>
              <div className="bg-white rounded-lg p-4 border border-gray-200 space-y-2">
                <a href={`tel:${SUPPORT_PHONE.replace(/-/g, '')}`} className="block text-emerald-600 hover:text-emerald-700 font-medium">
                  {SUPPORT_PHONE}
                </a>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="block text-emerald-600 hover:text-emerald-700 font-medium">
                  {SUPPORT_EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Technology Support Partner */}
          <div className="bg-white rounded-2xl p-4 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Technology Support Partner</h2>
            </div>
            
            <p className="text-gray-700 mb-8">
              As your technology support partner, we have hired the best to help with our client needs. Whether you need support for a credit card terminal on the counter, or your virtual terminal, our experienced staff is ready to help.
            </p>
            
            <div className="space-y-4">
              <div className="bg-linear-to-r from-amber-50 to-yellow-50 rounded-xl p-4 border border-amber-100">
                <h3 className="text-base font-bold text-gray-900 mb-3">Need Support for your Credit Card Processing Technology?</h3>
                <div className="bg-white rounded-lg p-3 border border-gray-200 space-y-2">
                  <a href={`tel:${SUPPORT_PHONE.replace(/-/g, '')}`} className="block text-amber-700 hover:text-amber-800 font-medium text-sm">
                    {SUPPORT_PHONE}
                  </a>
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="block text-amber-700 hover:text-amber-800 font-medium text-sm">
                    {SUPPORT_EMAIL}
                  </a>
                </div>
              </div>
              
              <div className="bg-linear-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
                <h3 className="text-base font-bold text-gray-900 mb-3">Have Questions About Your Processing Setup?</h3>
                <div className="bg-white rounded-lg p-3 border border-gray-200 space-y-2">
                  <a href={`tel:${SUPPORT_PHONE.replace(/-/g, '')}`} className="block text-blue-700 hover:text-blue-800 font-medium text-sm">
                    {SUPPORT_PHONE}
                  </a>
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="block text-blue-700 hover:text-blue-800 font-medium text-sm">
                    {SUPPORT_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Buttons */}
        <div className="flex justify-center items-center">
          <a href="mailto:sales@elitecardprocessing.com" className="p-4 inline-block w-auto rounded-xl bg-linear-to-r from-gray-100 to-gray-200 text-gray-700 font-bold text-center border border-gray-300 hover:border-gray-400 hover:from-gray-200 hover:to-gray-300 transition-all duration-200">
            <div className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              <span>Have questions about replacing old technology, let us help you.</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
