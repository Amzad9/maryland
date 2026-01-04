export default function ReviewsSection() {
    return (
        <section id="reviews" className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white" aria-labelledby="testimonials-heading">
            <h2 id="testimonials-heading" className="sr-only">Customer Testimonials</h2>
            <div className="container mx-auto">
                <div className="grid md:grid-cols-1 xl:grid-cols-12 gap-8">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl lg:h-full col-span-12 md:col-span-5">
                        <img src="https://plus.unsplash.com/premium_photo-1711051475117-f3a4d3ff6778?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="max-w-full" alt="Business team" />
                    </div>

                    <div className="bg-linear-to-br col-span-12 md:col-span-7 bg-[#10284D] backdrop-blur-xl rounded-3xl px-8 py-24 border border-slate-700/30 shadow-2xl">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 md:gap-6 gap-24 lg:gap-6 text-center">
                            <article className="relative rounded-3xl p-3 border border-slate-700/30 shadow-2xl bg-[linear-gradient(45deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.15)_8%,rgba(16,40,77,0.95)_22%,rgba(16,40,77,1)_100%)]">
                                <div className="relative inline-block mb-4 -mt-16">
                                    <div className="w-24 h-24 rounded-full bg-linear-to-br from-yellow-400 to-yellow-600 p-1 shadow-[0_0_30px_rgba(255,215,100,0.65),0_0_60px_rgba(255,255,255,0.25)]">
                                        <img src="https://media.istockphoto.com/id/1410862476/photo/closeup-face-of-young-attractive-girl-looking-at-camera-isolated-on-orange-color-background.webp?a=1&s=612x612&w=0&k=20&c=IASXuVO7CRN3ifDpQlrSxkVkNMXwSXSULsjlYTQAol4=" height={96} width={96} className="w-full h-full object-cover rounded-full" alt="Sarah J." />
                                    </div>
                                </div>
                                <blockquote>
                                    <p className="text-slate-300 text-xs leading-relaxed mb-4">
                                        "Eta Card Processing has streamlined our operations! Their local assistance means no significant needs. Their local expertise is unmatched."
                                    </p>
                                </blockquote>
                                <div>
                                    <p className="text-white font-semibold text-sm">Sarah J.</p>
                                    <p className="text-slate-400 text-xs">Restaurant Owner</p>
                                </div>
                            </article>

                            <article className="relative rounded-3xl p-3 border border-slate-700/30 shadow-2xl bg-[linear-gradient(45deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.15)_8%,rgba(16,40,77,0.95)_22%,rgba(16,40,77,1)_100%)]">
                                <div className="relative inline-block mb-4 -mt-16">
                                    <div className="w-24 h-24 rounded-full bg-linear-to-br from-yellow-400 to-yellow-600 p-1 shadow-[0_0_30px_rgba(255,215,100,0.65),0_0_60px_rgba(255,255,255,0.25)]">
                                        <img src="https://media.istockphoto.com/id/2057786344/photo/portrait-of-beautiful-elegant-young-woman-with-curly-hair-posing-with-smile-against-black.webp?a=1&s=612x612&w=0&k=20&c=D1DzhcJvEepBC_SgyS7cO3fe0nc7lvTrQqZ5helsMwc=" height={96} width={96} className="w-full h-full object-cover rounded-full" alt="Michael B." />
                                    </div>
                                </div>
                                <blockquote>
                                    <p className="text-slate-300 text-xs leading-relaxed mb-4">
                                        "Moving to Eta was the best decision. The POS system is another, and the zero-fee program is a game changer."
                                    </p>
                                </blockquote>
                                <div>
                                    <p className="text-white font-semibold text-sm">Michael B.</p>
                                    <p className="text-slate-400 text-xs">Retail Manager</p>
                                </div>
                            </article>

                            <article className="relative rounded-3xl p-3 border border-slate-700/30 shadow-2xl bg-[linear-gradient(45deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.15)_8%,rgba(16,40,77,0.95)_22%,rgba(16,40,77,1)_100%)]">
                                <div className="relative inline-block mb-4 -mt-16">
                                    <div className="w-24 h-24 rounded-full bg-linear-to-br from-yellow-400 to-yellow-600 p-1 shadow-[0_0_30px_rgba(255,215,100,0.65),0_0_60px_rgba(255,255,255,0.25)]">
                                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={96} width={96} className="w-full h-full object-cover rounded-full" alt="David L." />
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

                        {/* <nav className="mt-8 pt-6 border-b border-slate-700/50" aria-label="Footer navigation">
                            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-md text-[#f4e28f] mb-4">
                                <a href="#solutions" className="hover:text-white transition">Solutions</a>
                                <a href="#merchants" className="hover:text-white transition">Merchants</a>
                                <a href="#about" className="hover:text-white transition">About Us</a>
                                <a href="#contact" className="hover:text-white transition">Contact</a>
                                <a href="#privacy" className="hover:text-white transition">Privacy Policy</a>
                                <a href="#terms" className="hover:text-white transition">Terms of Service</a>
                            </div>
                        </nav> */}
                        {/* <footer className="py-8 border-t border-slate-800" role="contentinfo">
                            <div className="w-full">
                                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-sm text-slate-400">
                                    <address className="flex flex-col text-[12px] sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-1 not-italic">
                                        <a href="tel:1-877-418-0827" className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded px-2 py-1 text-[12px]"><span className="text-[#f4e28f]">Toll Free:</span> 1-877-418-0827</a>
                                        <a href="tel:240-328-4424" className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded px-2 py-1 text-[12px]"><span className="text-[#f4e28f]">Local:</span> 240-328-4424</a>
                                        <span><span className="text-[#f4e28f]">Address:</span> Maryland, USA</span>
                                    </address>
                                    <div className="flex items-center gap-4" role="list" aria-label="Social media links">
                                        <a href="#facebook" className="w-10 h-10 bg-[#f4e28f] rounded-full flex items-center justify-center hover:bg-yellow-600 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg" aria-label="Facebook" role="listitem">
                                            <span className="text-slate-900 text-lg font-bold" aria-hidden="true">f</span>
                                        </a>
                                        <a href="#twitter" className="w-10 h-10 bg-[#f4e28f] rounded-full flex items-center justify-center hover:bg-yellow-600 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg" aria-label="Twitter" role="listitem">
                                            <span className="text-slate-900 text-lg font-bold" aria-hidden="true">t</span>
                                        </a>
                                        <a href="#linkedin" className="w-10 h-10 bg-[#f4e28f] rounded-full flex items-center justify-center hover:bg-yellow-600 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg" aria-label="LinkedIn" role="listitem">
                                            <span className="text-slate-900 text-lg font-bold" aria-hidden="true">in</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </footer> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
