'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Briefcase,
  TrendingUp,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  Check,
  ShieldCheck,
  Lightbulb,
  Handshake,
  Send
} from 'lucide-react';

export default function CareersPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Placeholder submit – integrate with backend or email service as needed
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('sent');
      (e.currentTarget as HTMLFormElement).reset();
    } catch {
      setStatus('error');
    }
  };

  const benefits = [
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: 'Trusted & Growing',
      description: 'Work with a trusted and rapidly growing financial services company.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: 'Competitive Compensation',
      description: 'Attractive pay with performance-based incentives.'
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: 'Flexible Growth',
      description: 'Flexible schedules and real opportunities to grow.'
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: 'Supportive Environment',
      description: 'A positive, leadership-driven team culture.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: 'Continuous Learning',
      description: 'Ongoing training in payments and modern technology.'
    }
  ];

  const cultureValues = [
    {
      icon: ShieldCheck,
      title: 'Integrity & transparency',
      color: 'from-sky-400 to-cyan-400'
    },
    {
      icon: Award,
      title: 'Commitment to excellence',
      color: 'from-indigo-400 to-purple-400'
    },
    {
      icon: Lightbulb,
      title: 'Innovation in payment technology',
      color: 'from-orange-400 to-rose-400'
    },
    {
      icon: Handshake,
      title: 'Community focus',
      color: 'from-emerald-400 to-teal-400'
    }
  ];

  return (
    <div className="relative min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 via-transparent to-indigo-500/10" />
        <div className="absolute top-10 left-10 w-96 h-96 bg-sky-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-400/30 rounded-full blur-3xl animate-pulse delay-1000" />
       <Image src="/banner/carrer.jpg" alt="Hero" fill className="absolute opacity-10 inset-0 object-cover" />
        <div className="container mx-auto relative z-10 px-6 text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Join Our Team at Elite Card Processing
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Join thousands of businesses saving big with transparent payment processing from Elite Card Processing.
          </p>
          <div className="mx-auto mt-2 h-1 w-28 rounded-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500" />
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Elite?
          </h2>
          <p className="text-xl text-gray-600">
            Experience a modern, transparent, and growth-focused workplace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/30 shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-linear-to-br from-sky-400/20 to-indigo-400/20 rounded-full group-hover:scale-150 blur-2xl transition-transform duration-500" />

              <div className="relative text-center">
                <div className="w-22 h-22 mb-4 rounded-full bg-linear-to-br group-hover:bg-blue-400/20  border-2 border-indigo-200 flex items-center justify-center text-primary mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CULTURE (LUCIDE ICONS) ================= */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Culture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              People-first values that empower innovation and trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="relative bg-white/50 backdrop-blur-xl rounded-2xl p-8 border border-white/30 shadow-lg hover:-translate-y-2 transition-all"
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${value.color} opacity-10 rounded-2xl`}
                  />

                  <div className="relative text-center">
                    <div className="w-14 h-14 mb-4 rounded-xl mx-auto bg-linear-to-br from-sky-100 to-indigo-200 flex items-center justify-center text-primary">
                      <Icon className="w-7 h-7" />
                    </div>

                    <div className="flex items-start gap-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {value.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* ================= APPLICATION FORM (CAREER CONTACT) ================= */}
      <section id="career-application" className="py-16 lg:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-200/60">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Apply with us</h2>
            <p className="text-gray-500 text-sm mb-6">
              Fill out the form and attach your resume. We typically respond within one business day.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="career-name" className="block text-sm font-medium text-slate-900 mb-2">
                    Name
                  </label>
                  <input
                    id="career-name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="career-email" className="block text-sm font-medium text-slate-900 mb-2">
                    Email
                  </label>
                  <input
                    id="career-email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="career-message" className="block text-sm font-medium text-slate-900 mb-2">
                  Message
                </label>
                <textarea
                  id="career-message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-y min-h-[100px]"
                  placeholder="Tell us about yourself and the role you’re interested in..."
                />
              </div>
              <div>
                <label htmlFor="career-resume" className="block text-sm font-medium text-slate-900 mb-2">
                  Resume <span className="text-gray-500 font-normal">(optional)</span>
                </label>
                <input
                  id="career-resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-slate-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">PDF or Word, max 10MB</p>
              </div>
              {status === 'sent' && (
                <p className="text-sm font-medium text-green-600">
                  Thanks! Your application has been submitted. We’ll be in touch soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm font-medium text-red-600">Something went wrong. Please try again.</p>
              )}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex justify-center items-center gap-2 px-8 py-3 rounded-lg font-semibold text-base bg-linear-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white transition-colors shadow-lg disabled:opacity-70"
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit application
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
{/* ================= CTA ================= */}
<section className="relative py-16 md:pt-5 md:pb-24 overflow-hidden bg-url('https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') bg-cover bg-center">
  {/* Background glow */}
  {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-br from-sky-400/30 to-indigo-400/30 rounded-full blur-3xl animate-pulse" /> */}

  <div className="relative max-w-4xl mx-auto px-6">
    <div className="text-center">

      {/* Hover glow */}
      {/* <div className="absolute inset-0 bg-linear-to-r from-sky-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity" /> */}

      <div className="relative">
       

        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Ready to Make an Impact?
        </h2>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Join a fast-growing, people-first company redefining the future of
          payment processing across the nation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/careers" className="bg-linear-to-r from-sky-500 to-indigo-500 text-white px-10 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
            View All Opportunities
          </a>

          <a href="/contact" className="bg-white/80 backdrop-blur border border-white/40 text-gray-900 px-10 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            Contact Hiring Team
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  );
}
