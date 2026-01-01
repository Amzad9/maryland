'use client';
import { useState } from 'react';
import { CreditCard, Monitor, DollarSign, Building2, Smartphone, Handshake, ArrowRight, Menu, X } from 'lucide-react';

export default function MerchantServicesWebsite() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen ">
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-yellow-400 focus:text-slate-900 focus:rounded">
                Skip to main content
            </a>

            {/* ===================== NAVBAR ===================== */}
            <nav className="sticky  bg-[#10284D]/97 top-0 z-50  backdrop-blur-md border-b border-slate-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between  py-5">
                        {/* Logo */}
                        <div className="flex items-center gap-2 select-none">
                            {/* Logo Mark */}
                            <div
                                className="flex h-10 w-10 items-center justify-center rounded-lg
    bg-[linear-gradient(135deg,#f4e28f,#d4af37,#b8962e)]
    shadow-[0_0_15px_rgba(212,175,55,0.6)]"
                            >
                                <span className="text-slate-900 font-extrabold text-lg leading-none">
                                    MD
                                </span>
                            </div>

                            {/* Logo Text */}
                            <div className="flex flex-col leading-none">
                                <span className="text-white font-extrabold text-sm sm:text-base tracking-wide">
                                    Maryland
                                </span>
                                <span className="text-slate-300 text-[10px] sm:text-xs tracking-wider uppercase">
                                    Merchant Services
                                </span>
                            </div>
                        </div>
                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center space-x-6">
                            {[
                                'Solutions',
                                'Merchants',
                                'About Us',
                                'How To Videos',
                                'Reviews',
                                'Careers',
                                'Contact Us',
                            ].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                                    className="text-md text-slate-300 font-body hover:text-white px-2 py-1 rounded
                  focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                >
                                    {item}
                                </a>
                            ))}


                            <button
                                className="px-5 py-2.5 text-sm font-semibold rounded-full text-slate-900
                bg-[linear-gradient(90deg,#f4e28f_0%,#f1d86a_30%,#d4af37_60%,#f4e28f_100%)]
                shadow-[0_0_20px_#d4af3744] hover:shadow-[0_0_30px_#d4af3766]
                transition-all"
                            >
                                Get A Quote Now
                            </button>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen((v) => !v)}
                            className="lg:hidden p-2 text-white rounded focus:outline-none
              focus:ring-2 focus:ring-yellow-400 z-50"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* ===================== MOBILE MENU (OUTSIDE NAV) ===================== */}
            <div
                className={`lg:hidden fixed inset-y-0 right-0 w-80 bg-slate-900/95
        backdrop-blur-xl border-l border-slate-800 shadow-2xl
        transform transition-transform duration-300 ease-in-out
        z-100 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="h-full overflow-y-auto px-6 py-20 space-y-4">
                    {[
                        'Solutions',
                        'Merchants',
                        'About Us',
                        'How To Videos',
                        'Reviews',
                        'Careers',
                        'Contact Us',
                    ].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-lg text-slate-300 hover:text-white
              px-4 py-3 rounded hover:bg-slate-800/60
              focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        >
                            {item}
                        </a>
                    ))}

                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-5 py-2.5 text-sm font-semibold rounded-full text-slate-900
                bg-[linear-gradient(90deg,#f4e28f_0%,#f1d86a_30%,#d4af37_60%,#f4e28f_100%)]
                shadow-[0_0_20px_#d4af3744] hover:shadow-[0_0_30px_#d4af3766]
                transition-all"
                    >
                        Get A Quote Now
                    </button>
                </div>
            </div>

            {/* ===================== OVERLAY ===================== */}
            {mobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            <main id="main-content">
                <section className="text-center bg-[#10284D] px-4 relative sm:h-[800px] md:h-auto sm:px-6 lg:px-8 py-12 md:pb-40 sm:py-16 lg:pt-32 lg:pb-60 overflow-hidden" aria-labelledby="hero-heading">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[80%] rounded-full bg-blue-500/20 blur-[120px]"></div>

                        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#112240]/50 to-[#0a192f]"></div>

                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    </div>
                    <div className='relative z-40'>
                        <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            Maryland Merchant Services<br />
                            <span className="text-white">& Credit Card Processing</span>
                        </h1>
                        <p className="text-base sm:text-lg text-slate-300 max-w-4xl mx-auto mb-10 px-4 leading-relaxed">
                            Complete payment processing solutions for Maryland businesses. From restaurants to retail,
                            government to firearms dealers - we provide the technology and local support to grow your business.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
                            <button
                                className="px-5 py-4 text-sm font-semibold rounded-full text-slate-900
  bg-[linear-gradient(90deg,#f4e28f,#f1d86a,#d4af37,#c9a227,#f4e28f)]
  bg-size-[300%_100%] animate-[gradientMove_4s_ease_infinite]
  shadow-[0_0_20px_#d4af3744] hover:shadow-[0_0_30px_#d4af3766]
  transition-all duration-300 cursor-pointer
  focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-slate-900"
                                aria-label="Get free quote now"
                            >
                                Get Free Quote Now Here
                            </button>

                            <button className="w-full sm:w-auto px-8 py-3.5 border-2 border-slate-400 text-white font-semibold rounded-full hover:bg-slate-700/50 hover:border-white transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 text-base" aria-label="Call us now">
                                Call Here
                            </button>
                        </div>
                    </div>
                </section>

                <section
                    id="solutions"
                    className="w-full bg-linear-to-br bg-white px-4 sm:px-6 lg:px-8 lg:py-2 sm:py-12"
                    aria-labelledby="services-heading"
                >
                    <h2 id="services-heading" className="sr-only">
                        Our Services
                    </h2>

                    <div className="container mx-auto mt-0 lg:-mt-32">
                        {/* GRID 1 */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8 auto-rows-fr">

                            {/* CARD 1 */}
                            <article className="relative flex flex-col h-full rounded-3xl p-4 bg-white/20 border border-white/40 shadow-xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl overflow-hidden">
                                <div className="absolute inset-0 -rotate-[5deg] bg-[radial-gradient(circle_at_center,rgba(255,255,25,0.9)_0%,rgba(255,255,255,0.1)_20%,rgba(206,216,227,0.80)_55%,rgba(206,216,227,0.35)_100%)] blur-3xl opacity-70"></div>

                                <div className="relative z-10 flex flex-col h-full items-start">
                                    <div className="w-16 h-16 mb-6">
                                        <CreditCard className="w-full h-full text-yellow-600 stroke-[1.5]" />
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-800 mb-4">
                                        Merchant Accounts & Processing
                                    </h3>

                                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                                        Accept all major credit and debit cards with competitive rates and reliable processing. We specialize in merchant credit card services and merchant cash advance programs. We also provide 2A friendly merchant accounts for firearms businesses when others won't.
                                    </p>

                                    <button className="mt-auto px-6 py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-full transition border border-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm">
                                        Get Government Processing Quote
                                    </button>
                                </div>
                            </article>

                            {/* CARD 2 */}
                            <article className="relative flex flex-col h-full rounded-3xl p-4 bg-white/20 border border-white/40 shadow-xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl overflow-hidden">
                                <div className="absolute inset-0 -rotate-[5deg] bg-[radial-gradient(circle_at_center,rgba(255,255,25,0.9)_0%,rgba(255,255,255,0.1)_20%,rgba(206,216,227,0.80)_55%,rgba(206,216,227,0.35)_100%)] blur-3xl opacity-70"></div>

                                <div className="relative z-10 flex flex-col h-full items-start">
                                    <div className="w-16 h-16 mb-6">
                                        <Monitor className="w-full h-full text-yellow-600 stroke-[1.5]" />
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-800 mb-4">
                                        POS Systems & Terminals
                                    </h3>

                                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                                        Complete hardware solutions including Clover POS systems, Aloha POS for restaurants, and EMV credit card terminals. Our POS hardware solutions help on any business type and card brand and processing available for government contracts.
                                    </p>

                                    <button className="mt-auto px-6 py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-full transition border border-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm">
                                        Explore Technology Options - Get Quote
                                    </button>
                                </div>
                            </article>

                            {/* CARD 3 */}
                            <article className="relative flex flex-col h-full rounded-3xl p-4 bg-white/20 border border-white/40 shadow-xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl overflow-hidden">
                                <div className="absolute inset-0 -rotate-[5deg] bg-[radial-gradient(circle_at_center,rgba(255,255,25,0.9)_0%,rgba(255,255,255,0.1)_20%,rgba(206,216,227,0.80)_55%,rgba(206,216,227,0.35)_100%)] blur-3xl opacity-70"></div>

                                <div className="relative z-10 flex flex-col h-full items-start">
                                    <div className="w-16 h-16 mb-6">
                                        <DollarSign className="w-full h-full text-yellow-600 stroke-[1.5]" />
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-800 mb-4">
                                        Eliminate Processing Fees
                                    </h3>

                                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                                        Save thousands monthly with our cash pricing and dual pricing compliance programs. Just like gas stations, compliant cash discount programs eliminate processing costs.
                                    </p>

                                    <button className="mt-auto px-6 py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-full transition border border-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm">
                                        Eliminate Processing Fees
                                    </button>
                                </div>
                            </article>
                            {/* CARD 4 */}
                            <article className="relative flex flex-col h-full rounded-3xl p-4 bg-white/20 border border-white/40 shadow-xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl overflow-hidden">
                                <div className="absolute inset-0 -rotate-[5deg] bg-[radial-gradient(circle_at_center,rgba(255,255,25,0.9)_0%,rgba(255,255,255,0.1)_20%,rgba(206,216,227,0.80)_55%,rgba(206,216,227,0.35)_100%)] blur-3xl opacity-70"></div>

                                <div className="relative z-10 flex flex-col h-full items-start">
                                    <div className="w-16 h-16 mb-6">
                                        <Building2 className="w-full h-full text-yellow-600 stroke-[1.5]" />
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-800 mb-4">
                                        Government & Utility Processing
                                    </h3>

                                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                                        Specialized government and utility processing with Level III reporting and compliance. Perfect for municipalities, utilities, and B2B transactions.
                                    </p>

                                    <button className="mt-auto px-6 py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-full transition border border-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm">
                                        Get Government Processing Quote
                                    </button>
                                </div>
                            </article>

                            {/* CARD 5 */}
                            <article className="relative flex flex-col h-full rounded-3xl p-4 bg-white/20 border border-white/40 shadow-xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl overflow-hidden">
                                <div className="absolute inset-0 -rotate-[5deg] bg-[radial-gradient(circle_at_center,rgba(255,255,25,0.9)_0%,rgba(255,255,255,0.1)_20%,rgba(206,216,227,0.80)_55%,rgba(206,216,227,0.35)_100%)] blur-3xl opacity-70"></div>

                                <div className="relative z-10 flex flex-col h-full items-start">
                                    <div className="w-16 h-16 mb-6">
                                        <Smartphone className="w-full h-full text-yellow-600 stroke-[1.5]" />
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-800 mb-4">
                                        Modern Payment Technology
                                    </h3>

                                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                                        Accept payments anywhere with mobile processing, online gateways, contactless solutions, and ATM revenue programs.
                                    </p>

                                    <button className="mt-auto px-6 py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-full transition border border-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm">
                                        Explore Technology Options - Get Quote
                                    </button>
                                </div>
                            </article>

                            {/* CARD 6 */}
                            <article className="relative flex flex-col h-full rounded-3xl p-4 bg-white/20 border border-white/40 shadow-xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl overflow-hidden">
                                <div className="absolute inset-0 -rotate-[5deg] bg-[radial-gradient(circle_at_center,rgba(255,255,25,0.9)_0%,rgba(255,255,255,0.1)_20%,rgba(206,216,227,0.80)_55%,rgba(206,216,227,0.35)_100%)] blur-3xl opacity-70"></div>

                                <div className="relative z-10 flex flex-col h-full items-start">
                                    <div className="w-16 h-16 mb-6">
                                        <Handshake className="w-full h-full text-yellow-600 stroke-[1.5]" />
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-800 mb-4">
                                        Business Funding Solutions
                                    </h3>

                                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                                        Fast working capital through merchant cash advance programs based on your processing history.
                                    </p>

                                    <button className="mt-auto px-6 py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-full transition border border-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm">
                                        Get Funding Options
                                    </button>
                                </div>
                            </article>
                        </div>

                    </div>
                </section>

                <section
                    className="bg-linear-to-b from-blue-50 to-white px-4 py-12 sm:px-6 lg:px-8"
                    aria-labelledby="pos-cta-heading"
                >
                    <div className="mx-auto max-w-7xl">
                        {/* Glassmorphic Card */}
                        <div className="relative bg-white/70 backdrop-blur-md rounded-3xl shadow-2xs p-8 lg:p-12 grid gap-6 grid-cols-1 md:grid-cols-12 lg:grid-cols-12 items-center">

                            {/* CTA BUTTON – Left on desktop, bottom on mobile */}
                            <div className="col-span-12 lg:col-span-4 order-2 lg:order-1 flex justify-center lg:justify-start">
                                <button
                                    className="
            w-full lg:w-auto
            inline-flex items-center justify-center
            rounded-full bg-linear-to-r from-[#206DD1] to-[#1a5bb3]
            px-10 py-4 text-base font-bold text-white
            shadow-[0_10px_25px_rgba(32,109,209,0.4)]
            transition-transform hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(32,109,209,0.5)]
            focus:outline-none focus:ring-2 focus:ring-blue-400
            focus:ring-offset-2 focus:ring-offset-white
          "
                                    aria-label="Explore Point of Sale Systems"
                                >
                                    Point Of Sale Systems
                                    <ArrowRight className="ml-3 h-5 w-5" />
                                </button>
                            </div>

                            {/* HEADING */}
                            <div className="col-span-12 lg:col-span-8 order-1 lg:order-2">
                                <h2
                                    id="pos-cta-heading"
                                    className="
            text-3xl sm:text-4xl font-body font-semibold leading-tight text-slate-900
          "
                                >
                                    Experience the future of payments
                                </h2>
                                <p
                                    className="
            text-base sm:text-lg text-slate-700 leading-relaxed
          "
                                >
                                    Discover how our cutting-edge technology and local expertise can
                                    transform your business operations and boost your bottom line.
                                    From seamless transactions to powerful analytics, we provide all the tools
                                    you need to scale your business effortlessly.
                                </p>
                            </div>



                            {/* Optional Illustration Accent */}
                            <div className="hidden lg:block absolute -top-16 right-8 w-32 h-32 bg-blue-200/50 rounded-full blur-3xl animate-pulse-slow"></div>

                        </div>
                    </div>
                </section>





                <section id="reviews" className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white" aria-labelledby="testimonials-heading">
                    <h2 id="testimonials-heading" className="sr-only">Customer Testimonials</h2>

                    <div className="container mx-auto">
                        <div className="grid md:grid-cols-1 xl:grid-cols-2 gap-8">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl lg:h-full">
                                <img src="https://plus.unsplash.com/premium_photo-1711051475117-f3a4d3ff6778?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='max-w-full' />
                            </div>

                            <div className="bg-linear-to-br bg-[#10284D] backdrop-blur-xl rounded-3xl px-8 pt-16 border border-slate-700/30 shadow-2xl">
                                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3  md:gap-6 gap-24 lg:gap-6 text-center">
                                    <article className="relative rounded-3xl p-3 border border-slate-700/30 shadow-2xl
  bg-[linear-gradient(45deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.15)_8%,rgba(16,40,77,0.95)_22%,rgba(16,40,77,1)_100%)]">

                                        <div className="relative inline-block mb-4 -mt-16">
                                            <div
                                                className="w-24 h-24 rounded-full bg-linear-to-br from-yellow-400 to-yellow-600 p-1
  shadow-[0_0_30px_rgba(255,215,100,0.65),0_0_60px_rgba(255,255,255,0.25)]"
                                            >
                                                <img
                                                    src="https://media.istockphoto.com/id/1410862476/photo/closeup-face-of-young-attractive-girl-looking-at-camera-isolated-on-orange-color-background.webp?a=1&s=612x612&w=0&k=20&c=IASXuVO7CRN3ifDpQlrSxkVkNMXwSXSULsjlYTQAol4="
                                                    height={96}
                                                    width={96}
                                                    className="w-full h-full object-cover rounded-full"
                                                    alt="Testimonial: David L."
                                                />                                            </div>
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

                                    <article className="relative rounded-3xl p-3 border border-slate-700/30 shadow-2xl
  bg-[linear-gradient(45deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.15)_8%,rgba(16,40,77,0.95)_22%,rgba(16,40,77,1)_100%)]">                                        <div className="relative inline-block mb-4 -mt-16">
                                            <div
                                                className="w-24 h-24 rounded-full bg-linear-to-br from-yellow-400 to-yellow-600 p-1
  shadow-[0_0_30px_rgba(255,215,100,0.65),0_0_60px_rgba(255,255,255,0.25)]"
                                            >
                                                <img
                                                    src="https://media.istockphoto.com/id/2057786344/photo/portrait-of-beautiful-elegant-young-woman-with-curly-hair-posing-with-smile-against-black.webp?a=1&s=612x612&w=0&k=20&c=D1DzhcJvEepBC_SgyS7cO3fe0nc7lvTrQqZ5helsMwc="
                                                    height={96}
                                                    width={96}
                                                    className="w-full h-full object-cover rounded-full"
                                                    alt="Testimonial: David L."
                                                />                                            </div>
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

                                    <article className="relative rounded-3xl p-3 border border-slate-700/30 shadow-2xl
  bg-[linear-gradient(45deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.15)_8%,rgba(16,40,77,0.95)_22%,rgba(16,40,77,1)_100%)]">                                        <div className="relative inline-block mb-4 -mt-16">
                                            <div
                                                className="w-24 h-24 rounded-full bg-linear-to-br from-yellow-400 to-yellow-600 p-1
  shadow-[0_0_30px_rgba(255,215,100,0.65),0_0_60px_rgba(255,255,255,0.25)]"
                                            >
                                                <img
                                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                    height={96}
                                                    width={96}
                                                    className="w-full h-full object-cover rounded-full"
                                                    alt="Testimonial: David L."
                                                />
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

                                <nav className="mt-8 pt-6 border-b border-slate-700/50" aria-label="Footer navigation">
                                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-md text-[#f4e28f] mb-4">
                                        <a href="#solutions" className="hover:text-white transition">Solutions</a>
                                        <a href="#merchants" className="hover:text-white transition">Merchants</a>
                                        <a href="#about" className="hover:text-white transition">About Us</a>
                                        <a href="#contact" className="hover:text-white transition">Contact</a>
                                        <a href="#privacy" className="hover:text-white transition">Privacy Policy</a>
                                        <a href="#terms" className="hover:text-white transition">Terms of Service</a>
                                    </div>
                                </nav>
                                <footer className="py-8  border-t border-slate-800" role="contentinfo">
                                    <div className="w-full">
                                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-sm text-slate-400">
                                            <address className="flex flex-col text-[12px] sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-1 not-italic">
                                                <a href="tel:1-877-418-0827" className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded px-2 py-1 text-[12px]"><span className='text-[#f4e28f]'>Toll Free:</span> 1-877-418-0827</a>
                                                <a href="tel:240-328-4424" className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded px-2 py-1 text-[12px]"><span className='text-[#f4e28f]'>Local:</span> 240-328-4424</a>
                                                <span ><span className='text-[#f4e28f]'>Address:</span> Maryland, USA</span>
                                            </address>

                                            <div className="flex items-center gap-4" role="list" aria-label="Social media links">
                                                <a href="#facebook" className="w-10 h-10 bg-[#f4e28f]  rounded-full flex items-center justify-center hover:bg-yellow-600 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg" aria-label="Facebook" role="listitem">
                                                    <span className="text-slate-900 text-lg font-bold" aria-hidden="true">f</span>
                                                </a>
                                                <a href="#twitter" className="w-10 h-10 bg-[#f4e28f] rounded-full flex items-center justify-center hover:bg-yellow-600 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg" aria-label="Twitter" role="listitem">
                                                    <span className="text-slate-900 text-lg font-bold" aria-hidden="true">t</span>
                                                </a>
                                                <a href="#linkedin" className="w-10 h-10 bg-[#f4e28f]  rounded-full flex items-center justify-center hover:bg-yellow-600 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg" aria-label="LinkedIn" role="listitem">
                                                    <span className="text-slate-900 text-lg font-bold" aria-hidden="true">in</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </div>
    );
}