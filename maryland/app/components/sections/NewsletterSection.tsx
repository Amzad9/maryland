'use client';
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function NewsletterSection() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    return (
        <section className="w-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden" aria-labelledby="newsletter-heading">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="container mx-auto max-w-3xl relative z-10">
                <div className="text-center mb-10">
                    <div className="inline-flex p-3 bg-white/20 backdrop-blur-md rounded-full mb-6">
                        <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h2 id="newsletter-heading" className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Stay Connected
                    </h2>
                    <p className="text-lg text-blue-100">
                        Get the latest updates and exclusive offers delivered to your inbox
                    </p>
                </div>
                <form 
                    className="space-y-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                        // Handle form submission
                    }}
                >
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white/30"
                            aria-label="Your Name"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white/30"
                            aria-label="Email Address"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full sm:w-auto mx-auto flex items-center justify-center gap-3 px-10 py-5 bg-white hover:bg-yellow-400 text-blue-600 hover:text-slate-900 font-bold rounded-full transition-all shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        aria-label="Subscribe to Newsletter"
                    >
                        Subscribe Now
                        <Send className="w-5 h-5" />
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-white/80">
                    By subscribing, you agree to our <a href="#privacy" className="underline hover:text-white">Privacy Policy</a>. 
                    Reply STOP to opt-out anytime.
                </p>
            </div>
        </section>
    );
}