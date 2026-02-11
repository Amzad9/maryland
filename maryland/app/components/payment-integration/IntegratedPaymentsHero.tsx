import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IntegratedPaymentsHero() {
  return (
    <>
      {/* Hero section */}
      <section className="relative flex items-center py-16 md:py-24 justify-center overflow-hidden bg-white">
        {/* Subtle background accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#10284D]/5 blur-3xl" />
          <div className="absolute right-[-80px] bottom-[-40px] h-80 w-80 rounded-full bg-[#d4af37]/10 blur-3xl" />
          <div className="absolute inset-y-0 right-0 w-1/3 max-w-xs bg-[radial-gradient(circle_at_top,rgba(16,40,77,0.08),transparent_60%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-center mx-auto">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10284D]/5 text-[#10284D] text-xs font-semibold uppercase tracking-[0.18em] mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                Integrated Payments for Software Vendors
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-5">
                Integrated payments
                <span className="block text-[#10284D]">to supercharge your software</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Integrate and monetize payments within your platform to create a seamless user experience,
                unlock recurring revenue, and give your customers one trusted partner for software and payments.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-900 bg-[linear-gradient(90deg,#f4e28f,#f1d86a,#d4af37,#c9a227,#f4e28f)] bg-[length:300%_100%] animate-[gradientMove_4s_ease_infinite] shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:shadow-[0_0_28px_rgba(212,175,55,0.45)] transition-all"
                >
                  Talk to our team
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-xs md:text-sm text-gray-500">
                  Go live in weeks, not months.
                </span>
              </div>
              <div className="mt-8 grid grid-cols-2 sm:flex sm:flex-row gap-4 text-left sm:text-left">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-[#10284D]">30%+</p>
                  <p className="text-xs md:text-sm text-gray-500">
                    Average increase in payments revenue for platforms.
                  </p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-[#10284D]">1 integration</p>
                  <p className="text-xs md:text-sm text-gray-500">
                    Powering online, in‑person, and recurring payments.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#10284D]/8 to-[#d4af37]/10 blur-xl" />
                <div className="relative rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
                  <img
                    src="/payment-integration/payment.png"
                    alt="Customer completing a seamless payment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb / title bar */}
      <section className="bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <p className="text-gray-700 font-medium">Integrated Payments for Software Vendors</p>
        </div>
      </section>
    </>
  );
}
