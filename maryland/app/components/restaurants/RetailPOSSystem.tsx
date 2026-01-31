// components/Features.tsx
import Image from "next/image";

export default function RetailPOSSystem() {
  return (
    <>
      <section className="md:py-6 px-2 md:px-6 rounded-2xl overflow-hidden">
        <div className="container mx-auto space-y-24 rounded-xl relative">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 -right-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-230 left-120 w-120 h-120 bg-indigo-400/15 rounded-full blur-3xl animate-pulse delay-1000" />

          {/* Advanced Retail POS Section */}
          <div className="space-y-10 text-center max-w-4xl mx-auto lg:text-center mb-16 mt-8">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Advanced Retail POS System Features That Boost Retail Performance
            </h2>
          </div>

          {/* First Row - 2 Cards */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl rounded-3xl" />
                <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                  <Image
                    src="/images.jpeg"
                    alt="Complete retail credit card processing integration"
                    width={500}
                    height={500}
                    className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Complete Retail Credit Card Processing Integration
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  All retail POS systems include fully integrated retail payment processing with competitive merchant services rates. Add cash discount programs to eliminate retail processing fees entirely.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-6 bg-linear-to-r from-cyan-300 to-blue-300 opacity-20 blur-3xl rounded-3xl" />
                <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                  <Image
                    src="/kds.jpg"
                    alt="Kitchen display and order management system"
                    width={500}
                    height={500}
                    className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Kitchen Display and Order Management
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Real-time kitchen display systems, order routing, cooking time management, and kitchen performance analytics - all integrated with your restaurant credit card processing and merchant services platform.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl rounded-3xl" />
                <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                  <Image
                    src="/slider-1-restaurant-food-ordering-dashboard-design-portfolio-bmv-system-integration.webp"
                    alt="Restaurant online ordering integration"
                    width={500}
                    height={500}
                    className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Restaurant Online Ordering Integration
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Built-in restaurant online ordering capabilities with Novi Eats integration, delivery management, and customer communication tools connected to your restaurant merchant services.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-6 bg-linear-to-r from-cyan-300 to-blue-300 opacity-20 blur-3xl rounded-3xl" />
                <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                  <Image
                    src="/5ffdc91e-ef5f-48d0-bba0-a33ac3121705.jpeg"
                    alt="Table management and reservation system"
                    width={500}
                    height={500}
                    className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Table Management and Reservations
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Complete table management system with reservation booking, wait time management, server assignment, and customer seating optimization integrated with restaurant payment processing.
                </p>
              </div>
            </div>
            {/* Card 5 */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl rounded-3xl" />
                <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                  <Image
                    src="/494f8124f33090f0f62249dff718983e.jpg"
                    alt="Restaurant menu engineering and SEO"
                    width={500}
                    height={500}
                    className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Restaurant Menu Engineering and SEO
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Menu optimization tools, profit margin analysis, item performance tracking, and restaurant menu SEO capabilities to improve online visibility and profitability through integrated merchant services.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-6 bg-linear-to-r from-cyan-300 to-blue-300 opacity-20 blur-3xl rounded-3xl" />
                <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                  <Image
                    src="/What-Is-Payroll-Management-System-800x480.jpg"
                    alt="Staff management and payroll system"
                    width={500}
                    height={500}
                    className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Staff Management and Payroll
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Employee scheduling, time tracking, tip distribution, payroll integration, and performance monitoring - all connected to your restaurant POS system and payment processing.
                </p>
              </div>
            </div>
          </div>


          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-center">
            <a href="/getquote" className="bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 px-10 py-5 rounded-xl font-semibold shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300">
              Schedule restaurant consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}