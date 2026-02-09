import Image from "next/image";
export default function ReviewsSection() {
    return (
        <section id="reviews" className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white" aria-labelledby="testimonials-heading">
            <h2 id="testimonials-heading" className="sr-only">Customer Testimonials</h2>
            <div className="container mx-auto">
                <div className="grid md:grid-cols-1 xl:grid-cols-12 gap-8">
                    <div
                        className="
    relative
    col-span-12 md:col-span-5
    w-full
    overflow-hidden
    rounded-3xl
    shadow-2xl
    aspect-4/5
    sm:aspect-video
    md:aspect-auto
    md:h-full
    min-h-[260px]
  "
                    >
                        <Image
                            src="/industry/ins5.png"
                            alt="Business team"
                            fill
                            priority
                            sizes="
      (max-width: 640px) 100vw,
      (max-width: 1024px) 100vw,
      40vw
    "
                            className="object-cover"
                        />
                    </div>
                    <div className="bg-linear-to-br col-span-12 md:col-span-7 bg-[#10284D] backdrop-blur-xl rounded-3xl px-8 py-24 border border-slate-700/30 shadow-2xl">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 md:gap-6 gap-24 lg:gap-6 text-center">
                            <article className="relative rounded-3xl p-3 border border-slate-700/30 shadow-2xl bg-[linear-gradient(45deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.15)_8%,rgba(16,40,77,0.95)_22%,rgba(16,40,77,1)_100%)]">
                                <div className="relative inline-block mb-4 -mt-16">
                                    <div className="w-24 h-24 rounded-full bg-linear-to-br from-yellow-400 to-yellow-600 p-1 shadow-[0_0_30px_rgba(255,215,100,0.65),0_0_60px_rgba(255,255,255,0.25)]">
                                        <Image src="/test1.png" height={96} width={96} className="w-full h-full object-cover rounded-full" alt="Sarah J." />
                                    </div>
                                </div>
                                <blockquote>
                                    <p className="text-slate-300 text-xs leading-relaxed mb-4">
                                        "Eta Card Processing has streamlined our operations! Their local assistance meets our critical needs. Their local expertise is unmatched."
                                    </p>
                                </blockquote>
                                <div>
                                    <p className="text-white font-semibold text-sm">Michael B.</p>

                                    <p className="text-slate-400 text-xs">Restaurant Owner</p>
                                </div>
                            </article>

                            <article className="relative rounded-3xl p-3 border border-slate-700/30 shadow-2xl bg-[linear-gradient(45deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.15)_8%,rgba(16,40,77,0.95)_22%,rgba(16,40,77,1)_100%)]">
                                <div className="relative inline-block mb-4 -mt-16">
                                    <div className="w-24 h-24 rounded-full bg-linear-to-br from-yellow-400 to-yellow-600 p-1 shadow-[0_0_30px_rgba(255,215,100,0.65),0_0_60px_rgba(255,255,255,0.25)]">
                                        <Image src="/test2.png" height={96} width={96} className="w-full h-full object-cover rounded-full" alt="Michael B." />
                                    </div>
                                </div>
                                <blockquote>
                                    <p className="text-slate-300 text-xs leading-relaxed mb-4">
                                        "Moving to Eta was the best decision. The POS system is excellent, and the zero-fee program is a game changer for many companies."
                                    </p>
                                </blockquote>
                                <div>
                                    <p className="text-white font-semibold text-sm">Sarah J.</p>

                                    <p className="text-slate-400 text-xs">Retail Manager</p>
                                </div>
                            </article>

                            <article className="relative rounded-3xl p-3 border border-slate-700/30 shadow-2xl bg-[linear-gradient(45deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.15)_8%,rgba(16,40,77,0.95)_22%,rgba(16,40,77,1)_100%)]">
                                <div className="relative inline-block mb-4 -mt-16">
                                    <div className="w-24 h-24 rounded-full bg-linear-to-br from-yellow-400 to-yellow-600 p-1 shadow-[0_0_30px_rgba(255,215,100,0.65),0_0_60px_rgba(255,255,255,0.25)]">
                                        <Image src="/test3.png" height={96} width={96} className="w-full h-full object-cover rounded-full" alt="David L." />
                                    </div>
                                </div>
                                <blockquote>
                                    <p className="text-slate-300 text-xs leading-relaxed mb-4">
                                        "Their Level II processing solutions and compliance steps for one account. for the business, highly recommend site."
                                    </p>
                                </blockquote>
                                <div>
                                    <p className="text-white font-semibold text-sm">David L.</p>
                                    <p className="text-slate-400 text-xs">Government Contractor</p>
                                </div>
                            </article>

                        </div>

                      
                    </div>
                </div>
            </div>
        </section>
    );
}
