'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const NAV_LINKS = [
        { name: 'Home', href: '/' },
        { name: 'Solutions', href: 'solutions' },
        { name: 'Merchants', href: 'merchants' },
        { name: 'About', href: 'about' },
        { name: 'How To Videos', href: 'how-to-videos' },
        { name: 'Elite Reviews', href: 'elite-reviews' },
        { name: 'Careers', href: 'careers' },
        { name: 'Contact', href: 'contact' },
    ];

    return (
        <>
           

            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-[#10284D]/95 backdrop-blur-md border-b border-slate-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-2">
                        {/* Logo */}
                        <div className="flex items-center gap-2 select-none">
                            <a href="/">
                                <Image src="/logo.png" alt="Maryland Merchant Services" width={80} height={80} />
                            </a>
                        </div>

                        {/* Desktop Links */}
                        <div className="hidden lg:flex items-center space-x-6">
                            {NAV_LINKS.map(({ name, href }) => (
                                <a
                                    key={href}
                                    href={href}
                                    className="text-md text-slate-300 font-body hover:text-white px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                >
                                    {name}
                                </a>
                            ))}
                            <a
                                href="getquote"
                                className="px-5 py-2.5 text-sm font-semibold rounded-full text-slate-900 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 shadow-lg hover:shadow-xl transition-all"
                            >
                                Get A Quote Now
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
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

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed top-0 right-0 h-full w-3/4 max-w-xs bg-slate-900/95 backdrop-blur-xl border-l border-slate-800 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
                    mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="h-full overflow-y-auto px-6 py-20 space-y-4 ">
                    {NAV_LINKS.map(({ name, href }) => (
                        <a
                            key={href}
                            href={href}
                            className="block text-md text-slate-300 font-body hover:text-white px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {name}
                        </a>
                    ))}
                    <a
                        href="getquote"
                        className="inline-block px-5 py-2.5 mt-4 text-sm font-semibold rounded-full text-slate-900 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 shadow-lg hover:shadow-xl transition-all"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Get A Quote Now
                    </a>
                </div>
            </div>

            {/* Overlay */}
            {mobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}
        </>
    );
}
