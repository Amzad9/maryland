'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-yellow-400 focus:text-slate-900 focus:rounded">
                Skip to main content
            </a>

            <nav className="sticky bg-[#10284D]/97 top-0 z-50 backdrop-blur-md border-b border-slate-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-2 select-none">
                            {/* <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#f4e28f,#d4af37,#b8962e)] shadow-[0_0_15px_rgba(212,175,55,0.6)]">
                                <span className="text-slate-900 font-extrabold text-lg leading-none">MD</span>
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-white font-extrabold text-sm sm:text-base tracking-wide">Maryland</span>
                                <span className="text-slate-300 text-[10px] sm:text-xs tracking-wider uppercase">Merchant Services</span>
                            </div> */}
                            <Image src="/logo.png" alt="Maryland Merchant Services" width={80} height={80} />
                        </div>

                        <div className="hidden lg:flex items-center space-x-6">
                            {['Solutions', 'Merchants', 'About Us', 'How To Videos', 'Reviews', 'Careers', 'Contact Us'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                                    className="text-md text-slate-300 font-body hover:text-white px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                >
                                    {item}
                                </a>
                            ))}
                            <button className="px-5 py-2.5 text-sm font-semibold rounded-full text-slate-900 bg-[linear-gradient(90deg,#f4e28f_0%,#f1d86a_30%,#d4af37_60%,#f4e28f_100%)] shadow-[0_0_20px_#d4af3744] hover:shadow-[0_0_30px_#d4af3766] transition-all">
                                Get A Quote Now
                            </button>
                        </div>

                        <button
                            onClick={() => setMobileMenuOpen((v) => !v)}
                            className="lg:hidden p-2 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 z-50"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`lg:hidden fixed inset-y-0 right-0 w-80 bg-slate-900/95 backdrop-blur-xl border-l border-slate-800 shadow-2xl transform transition-transform duration-300 ease-in-out z-100 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="h-full overflow-y-auto px-6 py-20 space-y-4">
                    {['Solutions', 'Merchants', 'About Us', 'How To Videos', 'Reviews', 'Careers', 'Contact Us'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-lg text-slate-300 hover:text-white px-4 py-3 rounded hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        >
                            {item}
                        </a>
                    ))}
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-5 py-2.5 text-sm font-semibold rounded-full text-slate-900 bg-[linear-gradient(90deg,#f4e28f_0%,#f1d86a_30%,#d4af37_60%,#f4e28f_100%)] shadow-[0_0_20px_#d4af3744] hover:shadow-[0_0_30px_#d4af3766] transition-all"
                    >
                        Get A Quote Now
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]" onClick={() => setMobileMenuOpen(false)} />
            )}
        </>
    );
}
