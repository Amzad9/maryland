'use client';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface NavLink {
    name: string;
    href: string;
    hasDropdown?: boolean;
    items?: string[];
}

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const [solutionsOpen, setSolutionsOpen] = useState<boolean>(false);
    const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState<boolean>(false);
    
    const dropdownRef = useRef<HTMLDivElement>(null);

    const SOLUTIONS_ITEMS = [
        'Point of sale systems',
        'Online food ordering',
        'Level III merchant services',
        'Merchant cash advance',
        'Seasonal ATMs',
        'Cash discount dial pricing',
        'Account management',
        'Retail services',
        '2a firearms',
        'Restaurants'
    ];

    const NAV_LINKS: NavLink[] = [
        { name: 'Home', href: '/' },
        { 
            name: 'Solutions', 
            href: 'solutions',
            hasDropdown: true,
            items: SOLUTIONS_ITEMS
        },
        { name: 'Merchants', href: 'merchants' },
        { name: 'About', href: 'about' },
        { name: 'How To Videos', href: 'how-to-videos' },
        { name: 'Elite Reviews', href: 'elite-reviews' },
        { name: 'Careers', href: 'careers' },
        { name: 'Contact', href: 'contact' },
    ];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setSolutionsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close mobile menu when route changes
    const handleLinkClick = () => {
        setMobileMenuOpen(false);
        setMobileSolutionsOpen(false);
    };

    return (
        <>
            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-[#10284D]/95 backdrop-blur-md border-b border-slate-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-2">
                        {/* Logo */}
                        <div className="flex items-center gap-2 select-none">
                            <a href="/">
                                <Image 
                                    src="/logo.png" 
                                    alt="Maryland Merchant Services" 
                                    width={80} 
                                    height={80} 
                                    className="h-auto"
                                />
                            </a>
                        </div>

                        {/* Desktop Links */}
                        <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
                            {NAV_LINKS.map((link) => (
                                <div 
                                    key={link.name} 
                                    className="relative"
                                    ref={link.hasDropdown ? dropdownRef : null}
                                >
                                    {link.hasDropdown ? (
                                        <div className="relative">
                                            <button
                                                onClick={() => setSolutionsOpen(!solutionsOpen)}
                                                className="flex items-center gap-1 text-md text-slate-300 font-body hover:text-white px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                            >
                                                {link.name}
                                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
                                            </button>
                                            
                                            {/* Dropdown Menu */}
                                            {solutionsOpen && (
                                                <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-slate-200 overflow-hidden animate-fadeIn z-50">
                                                    <div className="py-2">
                                                        {link.items?.map((item, index) => (
                                                            <a
                                                                key={index}
                                                                href={`/solutions/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                                                className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors border-b border-slate-100 last:border-b-0"
                                                                onClick={() => setSolutionsOpen(false)}
                                                            >
                                                                {item}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className="text-md text-slate-300 font-body hover:text-white px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        >
                                            {link.name}
                                        </a>
                                    )}
                                </div>
                            ))}
                            <a
                                href="getquote"
                                className="px-5 py-2.5 text-sm font-semibold rounded-full text-slate-900 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 shadow-lg hover:shadow-xl transition-all ml-4"
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
                <div className="h-full overflow-y-auto px-6 py-20 space-y-4">
                    {NAV_LINKS.map((link) => (
                        <div key={link.name}>
                            {link.hasDropdown ? (
                                <>
                                    <button
                                        onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                                        className="flex items-center justify-between w-full text-md text-slate-300 font-body hover:text-white px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    >
                                        {link.name}
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    
                                    {/* Mobile Dropdown */}
                                    {mobileSolutionsOpen && (
                                        <div className="ml-4 mt-2 mb-3 space-y-2 border-l border-slate-700 pl-4 animate-fadeIn">
                                            {link.items?.map((item, index) => (
                                                <a
                                                    key={index}
                                                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                                    className="block text-sm text-slate-300 hover:text-white px-2 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                                    onClick={handleLinkClick}
                                                >
                                                    {item}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <a
                                    href={link.href}
                                    className="block text-md text-slate-300 font-body hover:text-white px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    onClick={handleLinkClick}
                                >
                                    {link.name}
                                </a>
                            )}
                        </div>
                    ))}
                    <a
                        href="getquote"
                        className="inline-block px-5 py-2.5 mt-4 text-sm font-semibold rounded-full text-slate-900 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 shadow-lg hover:shadow-xl transition-all"
                        onClick={handleLinkClick}
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

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out forwards;
                }
            `}</style>
        </>
    );
}