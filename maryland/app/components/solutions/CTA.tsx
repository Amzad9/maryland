"use client";

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function CTA() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section id="contact" className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-purple-50"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-linear-to-r from-blue-200/30 to-purple-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-linear-to-r from-emerald-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>

            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/40 rounded-full animate-ping"></div>
            <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-purple-400/40 rounded-full animate-ping delay-300"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <div className="bg-linear-to-br from-white via-white to-blue-50/30 backdrop-blur-xl rounded-3xl border-2 border-white/50 shadow-2xl shadow-blue-500/10 p-8 md:p-12 transform transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Are You Ready To Take Your Business To The Next Level?
                            </h2>
                            
                            <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
                                Are you ready to grow your business and take that next step in your business plan,
                                but need some capital to get it moving? Elite Card Processing has an opportunity
                                for you to get the financing you need, today!
                            </p>
                            
                         
                            <div className="mt-12">
                                <p className="text-2xl font-bold text-gray-900 mb-6">
                                    Contact Us Today For A Free Quote!
                                </p>
                                
                                <button
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    className="group inline-flex items-center justify-center py-4 px-8 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
                                >
                                    <span className="text-lg">Let's Get Started</span>
                                    <ArrowRight className={`w-5 h-5 ml-3 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
                                </button>
                                
                                <p className="text-gray-500 text-sm mt-6">
                                    If you're ready to apply go ahead and click to Get Started!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}