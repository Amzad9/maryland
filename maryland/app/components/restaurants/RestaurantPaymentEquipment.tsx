import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function MarylandBusiness() {
  return (
    <section className="mx-auto px-3 md:px-4 py-6 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto rounded-4xl relative">
        {/* Glow effect on top corners - Hidden on mobile */}
        <div className="hidden md:block absolute top-0 left-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="hidden md:block absolute top-0 right-0 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="hidden md:block absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <h2 className="text-2xl md:text-5xl font-serif max-w-5xl mx-auto text-center font-bold text-black mb-6 leading-snug md:leading-tight px-2">
          Professional Restaurant Payment Processing Equipment
        </h2>

        <div className="space-y-8 md:space-y-12 mt-5">
          {/* FIRST CARD: Restaurant POS System Terminals */}
          <div className="card overflow-hidden rounded-3xl md:rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[300px] md:min-h-auto">
                  <Image
                    src="/diner.png"
                    alt="Restaurant POS System Terminals"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-3xl md:rounded-4xl object-cover"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Right */}
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">
                Restaurant POS System Terminals
              </h3>

              <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                Complete restaurant POS system stations with integrated restaurant credit card processing, receipt printing, kitchen ticket printing, and cash drawer connectivity. Available in countertop, mobile, and tablet configurations for all restaurant types.
              </p>

              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 text-sm md:text-base">
                      <span className="font-semibold text-gray-900 block md:inline">Configurations:</span>
                      Countertop, mobile, and tablet systems
                    </span>
                  </li>
                  <li className="flex">
                    <div className="text-gray-700 text-sm md:text-base">
                      <span className="font-semibold text-gray-900 block md:inline">Features:</span>
                      Integrated credit card processing, Receipt printing, Kitchen ticket printing, Cash drawer connectivity
                    </div>
                  </li>
                  <li className="flex">
                    <div className="text-gray-700 text-sm md:text-base">
                      <span className="font-semibold text-gray-900 block md:inline">Designed For:</span>
                      All restaurant types - fine dining, casual, quick service, and cafes
                    </div>
                  </li>
                </ul>
              </div>

              <div className="text-left mt-4">
                <a href="#" className="w-full inline-flex items-center justify-center rounded-full px-6 md:px-10 py-3 md:py-4 text-sm md:text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn about Restaurant POS Systems">
                  Learn about POS Systems
                  <ArrowRight className="ml-3 h-4 w-4 md:h-5 md:w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Kitchen Display Systems */}
          <div className="card overflow-hidden rounded-3xl md:rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[300px] md:min-h-[500px]">
                  <Image
                    src="/kds.jpg"
                    alt="Kitchen Display Systems"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-3xl md:rounded-4xl object-cover"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Left */}
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Kitchen Display Systems</h3>
              <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                Digital kitchen display monitors replacing paper tickets with order management, cooking timers, item modifications, and kitchen performance analytics integrated with restaurant payment processing.
              </p>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 text-sm md:text-base">
                      <span className="font-semibold text-gray-900 block md:inline">Best for:</span>
                      Modern kitchens replacing paper ticket systems
                    </span>
                  </li>
                  <li className="flex">
                    <div className="text-gray-700 text-sm md:text-base">
                      <span className="font-semibold text-gray-900 block md:inline">Features:</span>
                      Order management, Cooking timers, Item modifications, Kitchen performance analytics
                    </div>
                  </li>
                  <li className="flex">
                    <div className="text-gray-700 text-sm md:text-base">
                      <span className="font-semibold text-gray-900 block md:inline">Benefits:</span>
                      Eliminates paper waste, Reduces errors, Improves kitchen efficiency, Tracks performance
                    </div>
                  </li>
                </ul>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full inline-flex items-center justify-center rounded-full px-6 md:px-10 py-3 md:py-4 text-sm md:text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn more about Kitchen Display Systems">
                  Learn more about Kitchen Displays
                  <ArrowRight className="ml-3 h-4 w-4 md:h-5 md:w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Handheld Restaurant Payment Devices */}
          <div className="card overflow-hidden rounded-3xl md:rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[300px] md:min-h-[500px]">
                  <Image
                    src="/63b888dae89e7a450e23ed24_产品图1.png"
                    alt="Handheld Restaurant Payment Devices"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-3xl md:rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Right */}
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Handheld Restaurant Payment Devices</h3>
              <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                Wireless handheld terminals for tableside restaurant payment processing, reducing card handling time and improving customer security. Perfect for full-service restaurants and outdoor dining.
              </p>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 text-sm md:text-base">
                      <span className="font-semibold text-gray-900 block md:inline">Best for:</span>
                      Full-service restaurants and outdoor dining areas
                    </span>
                  </li>
                  <li className="flex">
                    <div className="text-gray-700 text-sm md:text-base">
                      <span className="font-semibold text-gray-900 block md:inline">Features:</span>
                      Wireless operation, Tableside payment processing, Secure card handling, Portable design
                    </div>
                  </li>
                  <li className="flex">
                    <div className="text-gray-700 text-sm md:text-base">
                      <span className="font-semibold text-gray-900 block md:inline">Benefits:</span>
                      Faster table turnover, Enhanced customer security, Reduced card handling, Improved service
                    </div>
                  </li>
                </ul>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full inline-flex items-center justify-center rounded-full px-6 md:px-10 py-3 md:py-4 text-sm md:text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn more about Handheld Payment Devices">
                  Learn more about Handheld Devices
                  <ArrowRight className="ml-3 h-4 w-4 md:h-5 md:w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Restaurant-Specific Peripherals */}
          <div className="card overflow-hidden rounded-3xl md:rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[300px] md:min-h-[500px]">
                  <Image
                    src="/restaurant-pos-588x436.jpg"
                    alt="Restaurant-Specific Peripherals"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-3xl md:rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Left */}
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Restaurant-Specific Peripherals</h3>
              <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                Kitchen printers, bump bars, cash drawers, barcode scanners, scale integration, and customer-facing displays designed specifically for restaurant environments with merchant services integration.
              </p>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 text-sm md:text-base">
                      <span className="font-semibold text-gray-900 block md:inline">Best for:</span>
                      Complete restaurant hardware ecosystems
                    </span>
                  </li>
                  <li className="flex">
                    <div className="text-gray-700 text-sm md:text-base">
                      <span className="font-semibold text-gray-900 block md:inline">Features:</span>
                      Kitchen printers, Bump bars, Cash drawers, Barcode scanners, Scale integration, Customer displays
                    </div>
                  </li>
                  <li className="flex">
                    <div className="text-gray-700 text-sm md:text-base">
                      <span className="font-semibold text-gray-900 block md:inline">Benefits:</span>
                      Seamless integration, Restaurant-optimized hardware, Enhanced operational efficiency
                    </div>
                  </li>
                </ul>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full inline-flex items-center justify-center rounded-full px-6 md:px-10 py-3 md:py-4 text-sm md:text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn more about Restaurant Peripherals">
                  Learn more about Peripherals
                  <ArrowRight className="ml-3 h-4 w-4 md:h-5 md:w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Restaurant Processing Equipment */}
          <div className="card overflow-hidden rounded-3xl md:rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[300px] md:min-h-[500px]">
                  <Image
                    src="/fast-food-equipment-500x500.webp"
                    alt="Mobile Restaurant Processing Equipment"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-3xl md:rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Right */}
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Mobile Restaurant Processing Equipment</h3>
              <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                Portable restaurant POS systems, wireless terminals, and smartphone card readers for food trucks, catering, farmers markets, and outdoor events with full restaurant credit card processing.
              </p>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 text-sm md:text-base">
                      <span className="font-semibold text-gray-900 block md:inline">Best for:</span>
                      Mobile food businesses and outdoor events
                    </span>
                  </li>
                  <li className="flex">
                    <div className="text-gray-700 text-sm md:text-base">
                      <span className="font-semibold text-gray-900 block md:inline">Features:</span>
                      Portable POS systems, Wireless terminals, Smartphone card readers, Battery operation
                    </div>
                  </li>
                  <li className="flex">
                    <div className="text-gray-700 text-sm md:text-base">
                      <span className="font-semibold text-gray-900 block md:inline">Benefits:</span>
                      Process payments anywhere, Ideal for mobile operations, Full credit card processing capabilities
                    </div>
                  </li>
                </ul>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full inline-flex items-center justify-center rounded-full px-6 md:px-10 py-3 md:py-4 text-sm md:text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn more about Mobile Processing Equipment">
                  Learn more about Mobile Equipment
                  <ArrowRight className="ml-3 h-4 w-4 md:h-5 md:w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Professional Installation and Training */}
          <div className="card overflow-hidden rounded-3xl md:rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[300px] md:min-h-[500px]">
                  <Image
                    src="/pro.avif"
                    alt="Professional Installation and Training"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-3xl md:rounded-4xl object-cover"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Left */}
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Professional Installation and Training</h3>
              <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                Complete restaurant equipment installation, staff training, and ongoing support included with all restaurant merchant services. Our Maryland-based technicians specialize in restaurant payment processing setup.
              </p>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 text-sm md:text-base">
                      <span className="font-semibold text-gray-900 block md:inline">Services Include:</span>
                      Equipment installation, Staff training, Ongoing technical support
                    </span>
                  </li>
                  <li className="flex">
                    <div className="text-gray-700 text-sm md:text-base">
                      <span className="font-semibold text-gray-900 block md:inline">Features:</span>
                      Maryland-based technicians, Restaurant-specialized setup, Comprehensive staff training
                    </div>
                  </li>
                  <li className="flex">
                    <div className="text-gray-700 text-sm md:text-base">
                      <span className="font-semibold text-gray-900 block md:inline">Benefits:</span>
                      Expert installation, Reduced downtime, Maximized system utilization, Local support
                    </div>
                  </li>
                </ul>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full inline-flex items-center justify-center rounded-full px-6 md:px-10 py-3 md:py-4 text-sm md:text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn about Installation and Training">
                  Learn about Installation Services
                  <ArrowRight className="ml-3 h-4 w-4 md:h-5 md:w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA Buttons Section */}
          <div className="text-center mt-12 md:mt-16 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/getquote"
                className="group flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-linear-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl shadow-2xl shadow-emerald-500/30 hover:shadow-3xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
              >
                <span className="text-base md:text-lg">Get restaurant hardware quote</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 hover:translate-x-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}