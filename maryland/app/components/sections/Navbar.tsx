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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const navRef = useRef<HTMLDivElement>(null);

  const SOLUTIONS_ITEMS = [
    'Point of Sale Systems',
    'Online Food Ordering',
    'Level III Merchant Services',
    'Merchant Cash Advance',
    'Seasonal ATMs',
    'Cash Discount Dual Pricing',
  ];

  const MERCHANTS_ITEMS = [
    'Account Management',
    'Retail Services',
    '2A Firearms',
    'Restaurants',
  ];

  const NAV_LINKS: NavLink[] = [
    { name: 'Home', href: '' },
    { name: 'Solutions', href: 'solutions', hasDropdown: true, items: SOLUTIONS_ITEMS },
    { name: 'Merchants', href: 'merchants', hasDropdown: true, items: MERCHANTS_ITEMS },
    { name: 'ISO Agent Program', href: 'isoagentprogram' },
    { name: 'About', href: 'about' },
    { name: 'How To Videos', href: 'how-to-videos' },
    { name: 'Elite Reviews', href: 'elite-reviews' },
    { name: 'Careers', href: 'careers' },
    { name: 'Contact', href: 'contact' },
  ];

  const slugify = (text: string) =>
    text.toLowerCase().replace(/\s+/g, '-');

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        ref={navRef}
        className="sticky top-0 z-50 bg-[#10284D]/95 backdrop-blur-md border-b border-slate-800"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            {/* LOGO */}
            <a href="/">
              <Image src="/logo/Elite-Card-Processing-02.png" alt="Logo" className='rounded-4xl' width={90} height={90} />
            </a>

            {/* DESKTOP MENU - Changed from lg:flex to xl:flex */}
            <div className="hidden xl:flex items-center gap-6">
              {NAV_LINKS.map(link => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === link.name ? null : link.name)
                        }
                        onTouchStart={() =>
                          setOpenDropdown(openDropdown === link.name ? null : link.name)
                        }
                        className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === link.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {openDropdown === link.name && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-[#10284D] backdrop-blur-md border border-slate-700 rounded-lg shadow-xl z-50">
                          {link.items?.map(item => (
                            <a
                              key={item}
                              href={`/${slugify(item)}`}
                              onClick={handleLinkClick}
                              className="block px-4 py-3 text-sm text-slate-300 hover:bg-white/10 hover:text-white transition-colors duration-200"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={`/${link.href}`}
                      className="text-slate-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}

              <a
                href="/getquote"
                className="px-5 py-2.5 text-sm font-semibold rounded-full bg-yellow-400 text-slate-900 hover:bg-yellow-300 transition-colors duration-200"
              >
                Get A Quote
              </a>
            </div>

            {/* MOBILE BUTTON - Changed from lg:hidden to xl:hidden */}
            <button
              onClick={() => setMobileMenuOpen(v => !v)}
              className="xl:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU - Changed from lg:hidden to xl:hidden */}
      <div
        className={`xl:hidden fixed top-0 right-0 h-full w-80 bg-[#10284D] backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-6 py-20 space-y-4">
          {NAV_LINKS.map(link => (
            <div key={link.name} className="border-b border-slate-700/50 last:border-b-0 pb-2 last:pb-0">
              {link.hasDropdown ? (
                <>
                  <button
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === link.name ? null : link.name
                      )
                    }
                    onTouchStart={() =>
                      setMobileDropdown(
                        mobileDropdown === link.name ? null : link.name
                      )
                    }
                    className="flex justify-between w-full text-slate-300 hover:text-white py-2 items-center"
                  >
                    <span className="font-medium">{link.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileDropdown === link.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {mobileDropdown === link.name && (
                    <div className="ml-4 mt-2 space-y-2 border-l border-slate-700/50 pl-3">
                      {link.items?.map(item => (
                        <a
                          key={item}
                          href={`/${slugify(item)}`}
                          onClick={handleLinkClick}
                          className="block text-sm text-slate-300 hover:text-white py-1.5 pl-2 hover:bg-white/5 rounded transition-colors duration-200"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={`/${link.href}`}
                  onClick={handleLinkClick}
                  className="block text-slate-300 hover:text-white py-2 font-medium"
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}
          
          <div className="pt-4 mt-4 border-t border-slate-700/50">
            <a
              href="/getquote"
              onClick={handleLinkClick}
              className="block w-full text-center px-5 py-2.5 text-sm font-semibold rounded-full bg-yellow-400 text-slate-900 hover:bg-yellow-300 transition-colors duration-200"
            >
              Get A Quote
            </a>
          </div>
        </div>
      </div>

      {/* OVERLAY - Changed from lg:hidden to xl:hidden */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 xl:hidden"
          onClick={() => setMobileMenuOpen(false)}
          onTouchStart={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}