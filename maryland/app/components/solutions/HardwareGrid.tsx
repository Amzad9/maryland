import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function PaymentProcessingHardware() {
  return (
    <section className="mx-auto py-8 md:py-16 bg-white">
      <div className="container mx-auto p-3 md:p-6 rounded-4xl relative">
        {/* Glow effect on top corners */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <h2 className="text-3xl md:text-5xl font-serif max-w-5xl mx-auto text-center font-bold text-black mb-6 leading-tight">
          Professional Payment Processing Hardware and All-in-One Payment Systems
        </h2>

        <div className="space-y-12 mt-5">
          <div className="card overflow-hidden  rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[500px]">
                  <Image 
                    src="/mobilepayment.jpg" 
                    alt="Complete Merchant Services Terminals" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Complete Merchant Services Terminals</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  All-in-one payment systems with integrated credit card processing, receipt printing, and cash drawer connectivity.
                </p>
              </div>
              <div className="text-left mt-4">
                    <button className="w-full lg:w-auto inline-flex items-center justify-center rounded-full  px-4 py-4 text-base font-bold text-black  transition-transform hover:-translate-y-1  focus:outline-none focus:ring-2 px-10 focus:ring-blue-400 ring-2 px-10 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Get Your Free Quote Today">
                    View Terminal Options
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </button>
                </div>
            </div>
          </div>

          {/* Tablet-Based Payment Processing Systems - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[500px]">
                  <Image 
                    src="/tablet.jpg" 
                    alt="Tablet-Based Payment Processing Systems" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-12 flex flex-col justify-center  text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Tablet-Based Payment Processing Systems</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  iPad and Android tablet POS solutions with secure payment attachments and integrated merchant services.
                </p>
              </div>
              <div className="text-left mt-4">
                    <button className="w-full lg:w-auto inline-flex items-center justify-center rounded-full  px-4 py-4 text-base font-bold text-black  transition-transform hover:-translate-y-1  focus:outline-none focus:ring-2 px-10 focus:ring-blue-400 ring-2 px-10 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Get Your Free Quote Today">
                    View Tablet Solutions
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </button>
                </div>
            
            </div>
          </div>

          {/* Integrated Payment Terminals - Image Left, Content Right */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            {/* Image Section - Left */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[500px]">
                  <Image 
                    src="/terminals.webp" 
                    alt="Integrated Payment Terminals" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Integrated Payment Terminals</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  EMV chip card terminals, contactless payment readers, and mobile card processing devices fully integrated with your merchant services.
                </p>
              </div>
              <div className="text-left mt-4">
                    <button className="w-full lg:w-auto inline-flex items-center justify-center rounded-full  px-4 py-4 text-base font-bold text-black  transition-transform hover:-translate-y-1  focus:outline-none focus:ring-2 px-10 focus:ring-blue-400 ring-2 px-10 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Get Your Free Quote Today">
                    View Terminal Features
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </button>
                </div>
             
            </div>
          </div>

          {/* Complete Payment Processing Peripherals - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[500px]">
                  <Image 
                    src="/Cloverpayments.webp" 
                    alt="Complete Payment Processing Peripherals" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Complete Payment Processing Peripherals</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Receipt printers, cash drawers, barcode scanners, kitchen display monitors, and customer-facing displays to complete your payment system.
                </p>
              </div>
              <div className="text-left mt-4">
                    <button className="w-full lg:w-auto inline-flex items-center justify-center rounded-full  px-4 py-4 text-base font-bold text-black  transition-transform hover:-translate-y-1  focus:outline-none focus:ring-2 px-10 focus:ring-blue-400 ring-2 px-10 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Get Your Free Quote Today">
                    View Peripherals
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </button>
                </div>
            
            </div>
          </div>

          {/* Mobile Merchant Services Solutions - Image Left, Content Right */}
          <div className="card overflow-hidden group rounded-4xl h-full flex flex-col md:flex-row">
            {/* Image Section - Left */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[500px]">
                  <Image 
                    src="/payment.png" 
                    alt="Mobile Merchant Services Solutions" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Mobile Merchant Services Solutions</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Wireless terminals, smartphone card readers, and portable payment processing systems for businesses on the go.
                </p>
              </div>
              
            
              <div className="text-left mt-4">
                    <button className="w-full lg:w-auto inline-flex items-center justify-center rounded-full py-4 text-base font-bold text-black  transition-transform hover:-translate-y-1  focus:outline-none focus:ring-2 px-10 focus:ring-blue-400 ring-2 cursor-pointer ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Get Your Free Quote Today">
                    View Mobile Solutions
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </button>
                </div>
            </div>
          </div>

          {/* Professional Installation and Merchant Services Setup - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden group h-full rounded-4xl flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[500px]">
                  <Image 
                    src="/IntegratedTerminal.jpg" 
                    alt="Professional Installation and Setup" 
                    fill
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-12 flex flex-col justify-center  text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Professional Installation and Setup</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Professional installation and setup included with all payment processing systems. Our Maryland-based merchant services technicians handle everything.
                </p>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row gap-4">
              
            
                <div className="text-left mt-4">
                    <button className="w-full lg:w-auto inline-flex items-center justify-center rounded-full  px-4 py-4 text-base font-bold text-black  transition-transform hover:-translate-y-1  focus:outline-none focus:ring-2 px-10 focus:ring-blue-400 ring-2 px-10 ring-blue-400  focus:ring-offset-2 focus:ring-offset-white" aria-label="Get Your Free Quote Today">
                    Get Equipment Quote
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}