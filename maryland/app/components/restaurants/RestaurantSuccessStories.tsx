import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function OrderingPricing() {
  return (
    <section className="mx-auto py-6 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:p-6 rounded-4xl relative">
        {/* Glow effect on top corners - Hidden on mobile */}
        <div className="hidden md:block absolute top-0 left-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="hidden md:block absolute top-0 right-0 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="hidden md:block absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <h2 className="text-2xl md:text-5xl font-serif max-w-5xl mx-auto text-center font-bold text-black mb-6 leading-snug md:leading-tight px-2">
          Maryland Restaurants Thriving with Elite Card Processing
        </h2>

        <div className="space-y-8 md:space-y-12 mt-5">
          <div className="card overflow-hidden rounded-3xl md:rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[300px] md:min-h-[500px]">
                  <Image 
                    src="/caption.jpg" 
                    alt="Frederick County Family Restaurant" 
                    width={500} 
                    height={500}
                    className="w-full h-full rounded-3xl md:rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Frederick County Family Restaurant</h3>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 md:pr-2">
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  "Our DinerDaddy restaurant POS system with integrated payment processing transformed our operations. Kitchen orders are faster, staff scheduling is automated, and the cash discount program eliminated our $2,400 monthly processing fees."
                </p>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>50% reduction in order processing time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Restaurant processing fees eliminated with cash discount</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Staff efficiency improved with integrated restaurant POS system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Customer satisfaction increased with faster service</span>
                  </li>
                </ul>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full inline-flex items-center justify-center rounded-full px-6 md:px-10 py-3 md:py-4 text-sm md:text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn about our restaurant solutions">
                  Learn about our restaurant solutions
                  <ArrowRight className="ml-3 h-4 w-4 md:h-5 md:w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Hagerstown Pizza Restaurant - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden rounded-3xl md:rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[300px] md:min-h-[500px]">
                  <Image 
                    src="/20200126-144209-largejpg.jpg" 
                    alt="Hagerstown Pizza Restaurant" 
                    width={500} 
                    height={500}
                    className="w-full h-full rounded-3xl md:rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Hagerstown Pizza Restaurant</h3>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 md:pr-2">
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  "The restaurant online ordering integration doubled our delivery business. The kitchen display system eliminated order errors, and the local restaurant SEO services brought in new customers every week."
                </p>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Online ordering revenue increased 200%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Order accuracy improved 95% with kitchen displays</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>New customer acquisition through local restaurant SEO</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Integrated restaurant payment processing streamlined operations</span>
                  </li>
                </ul>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full inline-flex items-center justify-center rounded-full px-6 md:px-10 py-3 md:py-4 text-sm md:text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Get a free consultation">
                  Get a free consultation
                  <ArrowRight className="ml-3 h-4 w-4 md:h-5 md:w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Washington County Food Truck - Image Left, Content Right */}
          <div className="card overflow-hidden rounded-3xl md:rounded-4xl group h-full flex flex-col md:flex-row">
            {/* Image Section - Left */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[300px] md:min-h-[500px]">
                  <Image 
                    src="/6650aa2a89108.image.jpg" 
                    alt="Washington County Food Truck" 
                    width={500} 
                    height={500}
                    className="w-full h-full rounded-3xl md:rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Washington County Food Truck</h3>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 md:pr-2">
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  "The mobile restaurant POS system lets us accept payments anywhere. The restaurant marketing strategy features help customers find us at different locations, and the payment processing is reliable even at outdoor events."
                </p>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Mobile restaurant payment processing capability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Location-based restaurant marketing integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Weather-resistant equipment for outdoor events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Real-time sales reporting and inventory management</span>
                  </li>
                </ul>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full inline-flex items-center justify-center rounded-full px-6 md:px-10 py-3 md:py-4 text-sm md:text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn about mobile solutions">
                  Learn about mobile solutions
                  <ArrowRight className="ml-3 h-4 w-4 md:h-5 md:w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Baltimore County Sports Bar - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden rounded-3xl md:rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[300px] md:min-h-[500px]">
                  <Image 
                    src="/bar.jpg" 
                    alt="Baltimore County Sports Bar" 
                    width={500} 
                    height={500}
                    className="w-full h-full rounded-3xl md:rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Baltimore County Sports Bar</h3>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 md:pr-2">
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  "The restaurant POS system handles our complex bar operations perfectly. Age verification is built-in, tip management is automated, and the restaurant merchant services team provides amazing local support."
                </p>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Automated age verification and compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Streamlined tip distribution and payroll integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>High-volume restaurant payment processing during events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Local Maryland support for equipment and training</span>
                  </li>
                </ul>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full inline-flex items-center justify-center rounded-full px-6 md:px-10 py-3 md:py-4 text-sm md:text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Get bar & restaurant consultation">
                  Get bar & restaurant consultation
                  <ArrowRight className="ml-3 h-4 w-4 md:h-5 md:w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}