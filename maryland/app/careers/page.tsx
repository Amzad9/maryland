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
  Loader2
} from 'lucide-react';

export default function CareersPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    position: '',
    message: ''
  });
  const [resume, setResume] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setResume(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Placeholder submit – integrate with backend or email service as needed
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      telephone: '',
      position: '',
      message: ''
    });
    setResume(null);
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
      {/* ================= JOB ================= */}
<section className="relative  mx-auto px-6 py-16 md:py-24 overflow-hidden">
  {/* Floating background */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl animate-pulse" />
  <div className="absolute bottom-0 -right-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative z-10">
    <div className="text-center mb-16 max-w-2xl mx-auto">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        Career Opportunities
      </h2>
      <p className="text-xl text-gray-600">
        Build your future with Elite Card Processing
      </p>
    </div>

        <div className="max-w-4xl mx-auto group">
      <div className="relative bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/30 shadow-sm  transition-all duration-500 p-8 lg:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between overflow-hidden">

        {/* Glow on hover */}
        <div className="absolute inset-0 bg-linear-to-r from-sky-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative">
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-1 bg-blue-200/60 text-blue-800 rounded-full text-sm font-semibold">
            <Briefcase className="w-4 h-4" />
            Full Time
          </span>

          <h3 className="text-3xl font-bold text-gray-900 mb-2">
            B2B Sales Executive
          </h3>

          <p className="text-lg text-gray-600 mb-4">
            Elite Card Processing LLC
          </p>

          {/* Tags */}
          <div className="flex gap-2 flex-wrap">
          {['Sales', 'B2B', 'FinTech', 'Nationwide'].map(tag => (
              <span
                key={tag}
                className="px-4 py-2 bg-white/20 backdrop-blur border border-gray-200/80 rounded-lg text-sm font-medium text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <a
          href="#career-application"
          className="relative bg-linear-to-r from-sky-500 to-indigo-500 text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
        >
          Apply Now
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
</section>
{/* ================= APPLICATION FORM ================= */}
<section
  id="career-application"
  className="relative max-w-5xl mx-auto px-6 pb-20 md:pb-24"
>
  <div className="relative bg-white/70 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-xl overflow-hidden">
    <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-linear-to-br from-sky-400/25 to-indigo-400/25 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-linear-to-tr from-indigo-400/25 to-purple-400/25 blur-3xl" />

    <div className="relative z-10 p-8 md:p-10 lg:p-12">
      <div className="mb-8 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold tracking-wide uppercase">
          <Sparkles className="w-4 h-4" />
          Join the Team
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
          Submit Your Application
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Share your details and upload your resume. Our hiring team will review your
          information and contact you if there is a potential fit.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full h-12 md:h-14 rounded-xl px-4 text-sm md:text-base bg-white/90 border border-slate-200 focus:ring-4 focus:ring-sky-500/20 focus:border-sky-500 outline-none transition-all"
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full h-12 md:h-14 rounded-xl px-4 text-sm md:text-base bg-white/90 border border-slate-200 focus:ring-4 focus:ring-sky-500/20 focus:border-sky-500 outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="Phone (optional)"
            className="w-full h-12 md:h-14 rounded-xl px-4 text-sm md:text-base bg-white/90 border border-slate-200 focus:ring-4 focus:ring-sky-500/20 outline-none transition-all"
          />
          <input
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Position of Interest"
            className="w-full h-12 md:h-14 rounded-xl px-4 text-sm md:text-base bg-white/90 border border-slate-200 focus:ring-4 focus:ring-sky-500/20 outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Resume
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-700 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100 cursor-pointer"
            />
            <p className="mt-1 text-xs text-gray-500">
              Accepted formats: PDF, DOC, DOCX (max 10MB).
            </p>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500" />
              Securely reviewed by our hiring team
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500" />
              No third-party sharing of your information
            </li>
          </ul>
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your experience and what makes you a great fit..."
          className="w-full rounded-xl px-4 py-3 text-sm md:text-base bg-white/90 border border-slate-200 focus:ring-4 focus:ring-sky-500/20 outline-none resize-none transition-all"
        />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs md:text-sm text-gray-500 max-w-md">
            By submitting this form, you agree that Elite Card Processing may contact you
            about relevant opportunities.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-linear-to-r from-sky-500 to-indigo-500 text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 active:scale-100 transition-all disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting…
              </>
            ) : (
              <>
                <Briefcase className="w-5 h-5" />
                Submit Application
              </>
            )}
          </button>
        </div>
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
