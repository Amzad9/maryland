import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CompleteRestaurant() {
  return (
    <section className="mx-auto py-8 md:py-16 bg-white">
      <div className="container mx-auto p-3 md:p-6 rounded-4xl relative">
        {/* Glow effect on top corners */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <h2 className="text-3xl md:text-5xl font-serif max-w-5xl mx-auto text-center font-bold text-black mb-6 leading-tight">
          Simple and Fast Business Financing Application Process
        </h2>

        <div className="space-y-12 mt-5">
          <div className="card overflow-hidden  rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/mobilepayment.jpg" 
                    alt="Quick Application Submission" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <Link href="/about" className="card-title text-2xl font-bold mb-6 text-gray-900 hover:text-blue-600 hover:underline transition-colors cursor-pointer block">
                Step 1: Quick Application Submission
              </Link>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Complete our streamlined online application with basic business information, processing history, and funding requirements. The application takes just minutes and requires minimal documentation.
                </p>
              </div>
              <div className="text-left mt-4">
                    <a href="/about" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-4 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Start application process">
                    Start application process
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </a>
                </div>
            </div>
          </div>

          {/* Step 2: Processing History Review - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/tablet.jpg" 
                    alt="Processing History Review" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <Link href="/getquote" className="card-title text-2xl font-bold mb-6 text-gray-900 hover:text-blue-600 hover:underline transition-colors cursor-pointer block">
                Step 2: Processing History Review
              </Link>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Our funding partner reviews your credit card processing history, monthly volume, and business performance to determine your qualification and funding amount without extensive financial documentation.
                </p>
              </div>
              <div className="text-left mt-4">
                    <a href="/getquote" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-4 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn About Review Process">
                    Get funding consultation
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </a>
                </div>
            
            </div>
          </div>

          {/* Step 3: Rapid Approval Decision - Image Left, Content Right */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            {/* Image Section - Left */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/terminals.webp" 
                    alt="Rapid Approval Decision" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <Link href="/about" className="card-title text-2xl font-bold mb-6 text-gray-900 hover:text-blue-600 hover:underline transition-colors cursor-pointer block">
                Step 3: Rapid Approval Decision
              </Link>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Receive approval decisions within hours, not weeks, with funding amounts up to $250,000 based on your monthly processing volume and business performance history.
                </p>
              </div>
              <div className="text-left mt-4">
                    <a href="/about" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-4 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn About Fast Approval">
                    Learn About Fast Approval
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </a>
                </div>
             
            </div>
          </div>

          {/* Step 4: Fast Funding Deposit - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/Cloverpayments.webp" 
                    alt="Fast Funding Deposit" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <Link href="/getquote" className="card-title text-2xl font-bold mb-6 text-gray-900 hover:text-blue-600 hover:underline transition-colors cursor-pointer block">
                Step 4: Fast Funding Deposit
              </Link>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Once approved, funds are deposited directly into your business bank account within 1-3 business days, with same-day funding available for qualifying applications.
                </p>
              </div>
              <div className="text-left mt-4">
                    <a href="/getquote" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-4 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="View Funding Speed">
                    View Funding Speed Options
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </a>
                </div>
            
            </div>
          </div>

          {/* Step 5: Automated Repayment Setup - Image Left, Content Right */}
          <div className="card overflow-hidden group rounded-4xl h-full flex flex-col md:flex-row">
            {/* Image Section - Left */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/mobilepayment.jpg" 
                    alt="Automated Repayment Setup" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <Link href="/about" className="card-title text-2xl font-bold mb-6 text-gray-900 hover:text-blue-600 hover:underline transition-colors cursor-pointer block">
                Step 5: Automated Repayment Setup
              </Link>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Automated daily repayment begins immediately, with a small percentage of your daily credit card sales automatically applied to your advance balance until paid in full.
                </p>
              </div>
              
            
              <div className="text-left mt-4">
                    <a href="/about" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-4 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn About Repayment">
                    Learn About Repayment Terms
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </a>
                </div>
            </div>
          </div>

          {/* Step 6: Ongoing Support and Future Funding - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden group h-full rounded-4xl flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/IntegratedTerminal.jpg" 
                    alt="Ongoing Support and Future Funding" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <Link href="/getquote" className="card-title text-2xl font-bold mb-6 text-gray-900 hover:text-blue-600 hover:underline transition-colors cursor-pointer block">
                Step 6: Ongoing Support and Future Funding
              </Link>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Access to ongoing support, account management, and future funding opportunities as your business grows and processing volume increases.
                </p>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row gap-4">
                <div className="text-left mt-4">
                    <a href="/getquote" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-4 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="View Support Options">
                    View Support Options
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </a>
                </div>
              </div>
            </div>
          </div>    
        </div>
      </div>
    </section>
  );
}