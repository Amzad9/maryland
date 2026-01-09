// components/Features.tsx
import Image from "next/image";

export default function Features() {
  return (
    <>
          <section className="py-6 p-3 md:px-6 rounded-2xl">

 
      <div className="container mx-auto space-y-24 p-0  md:p-12 rounded-xl relative">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-230 left-120 w-120 h-120 bg-indigo-400/15 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="space-y-10 text-center max-w-4xl mx-auto lg:text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif max-w-4xl mx-auto text-center font-bold text-black mb-6 leading-tight">
            Advanced Merchant Services Features That Boost Business Performance            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Complete Credit Card Processing Integration</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
              All POS systems include fully integrated credit card processing with competitive merchant services rates. Add cash discount programs to eliminate processing fees entirely while maintaining seamless payment processing.
              </p>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1729009106410-9d37259015e0?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Tablet POS system on restaurant counter"
                  width={800}
                  height={450}
                  className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center ">
            <div className="relative group">
              <div className="absolute -inset-6 bg-linear-to-r from-cyan-300 to-blue-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="https://www.shutterstock.com/image-photo/wireless-payment-transaction-being-made-260nw-2517212071.jpg"
                  alt="Modern retail payment terminals comparison"
                  width={1080}
                  height={675}
                  className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">All-in-One Payment Management</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Real-time inventory tracking, automatic reorder alerts, product performance analytics, and multi-location synchronization - all integrated with your credit card processing and merchant account services.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">	Customer Management and Payment Processing</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
              Built-in customer database with purchase history, loyalty program integration, and targeted marketing capabilities, all connected to your merchant services platform for comprehensive business management.
              </p>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="https://images.unsplash.com/photo-1594025742030-8702f7ec0fe1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="iPad POS system for service businesses"
                  width={1400}
                  height={1050}
                  className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-6 bg-linear-to-r from-cyan-300 to-blue-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1667518228939-5d897e4fce81?q=80&w=2657&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Multi-location warehouse and inventory management dashboard"
                  width={1600}
                  height={1200}
                  className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Comprehensive Merchant Services Reporting</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
              Advanced business reporting including sales analytics, employee performance tracking, profit margin analysis, tax reporting, and detailed credit card processing statements from your merchant account provider.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Integrated Payment Solutions</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Connect your POS system with e-commerce platforms, online food ordering, social media marketing tools, and complete merchant services for omnichannel payment processing.
              </p>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="https://www.shutterstock.com/image-photo/wireless-payment-transaction-being-made-260nw-2517212071.jpg"
                  alt="iPad POS system for service businesses"
                  width={1400}
                  height={1050}
                  className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-6 bg-linear-to-r from-cyan-300 to-blue-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="https://images.unsplash.com/photo-1726607288637-a646ddd3814a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Multi-location warehouse and inventory management dashboard"
                  width={1600}
                  height={1200}
                  className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Mobile Payment Processing</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Accept payments anywhere with mobile POS apps, wireless terminals, and tablet-based solutions perfect for food trucks, farmers markets, and off-site events - all with integrated credit card processing.
              </p>
            </div>
          </div>

          
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-center">
              <button className="bg-linear-to-r from-blue-600 to-cyan-600 text-white px-10 py-5 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-300/50 hover:scale-105 transition-all duration-300">
              Learn about integrated payment features
              </button>
              <button className="bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 px-10 py-5 rounded-xl font-semibold shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300">
              Get merchant services quote
              </button>
            </div>
        </div>
        </section>

    </>
  );
}