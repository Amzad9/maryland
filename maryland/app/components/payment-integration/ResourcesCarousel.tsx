"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const RESOURCES = [
  {
    title: "Tokenization for secure, seamless payments",
    description:
      "Protect payment data with tokenization. Learn how to simplify PCI compliance and integrate secure payments.",
    type: "ARTICLE",
    image: "/payment-integration/e1.png",
  },
  {
    title: "Building a payment strategy for your platform",
    description:
      "Best practices for embedding payments into your product and scaling revenue with integrated solutions.",
    type: "GUIDE",
    image: "/payment-integration/e2.png",
  },
  {
    title: "Omni-channel payments: one integration, every channel",
    description:
      "Unify in-person, online, and mobile payments with a single API and one partner for your platform.",
    type: "ARTICLE",
    image: "/payment-integration/e3.png",
  },
  {
    title: "PCI compliance made simple for integrated payments",
    description:
      "Reduce scope and simplify security with the right payment integration approach for software vendors.",
    type: "GUIDE",
    image: "/payment-integration/e4.png",
  },
  {
    title: "Recurring billing and subscriptions for platforms",
    description:
      "Enable subscription and recurring revenue models with flexible billing tools built for software and SaaS.",
    type: "ARTICLE",
    image: "/payment-integration/e5.png",
  },
];

export default function ResourcesCarousel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Explore related solutions and resources
          </h2>
          <div className="h-80 bg-gray-100 rounded-2xl animate-pulse" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Explore related solutions and resources
        </h2>
        <div className="relative mx-auto">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={4}
            slidesPerGroup={1}
            breakpoints={{
              640: { slidesPerView: 2, slidesPerGroup: 2 },
              1024: { slidesPerView: 4, slidesPerGroup: 4 },
            }}
            navigation={{
              prevEl: ".resources-carousel-prev",
              nextEl: ".resources-carousel-next",
            }}
            pagination={{ clickable: true }}
            className="pb-14"
          >
            {RESOURCES.map((item, i) => (
              <SwiperSlide key={i} className="h-auto">
                <Link href="/contact" className="block group h-full">
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                    <div className="aspect-video bg-gray-200 relative shrink-0">
                      <img src={item.image} alt="" className="object-cover w-full h-full" />
                      <span className="absolute bottom-3 left-3 px-3 py-1.5 bg-gray-900/80 text-white text-xs font-semibold uppercase flex items-center gap-2 rounded">
                        <BookOpen className="w-3.5 h-3.5" />
                        {item.type}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1 min-h-[140px]">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#10284D] transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            type="button"
            className="resources-carousel-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#d4af37] hover:bg-gray-50 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            className="resources-carousel-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#d4af37] hover:bg-gray-50 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          {/* <div className="swiper-pagination flex justify-center gap-2 mt-12" /> */}
        </div>
        <style jsx global>{`
          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: #d1d5db;
            opacity: 0;
          }
          .swiper-pagination-bullet-active {
            background: #d4af37;
            width: 24px;
            border-radius: 4px;
          }
        `}</style>
      </div>
    </section>
  );
}
