// components/FirearmsMerchantAccount.tsx
"use client";

import { useState } from 'react';
import { Phone, MapPin, Shield, Target, Zap, CheckCircle2, ChevronRight, Star, Award, Users, Globe, Badge } from 'lucide-react';

function ConsultationSection() {
  const consultationItems = [
    "Current Processing Cost Analysis",
    "Firearms Account Qualification Review",
    "Equipment And Technology Recommendations",
    "Cash Discount Program Eligibility",
    "Same-Day Quote And Rapid Approval"
  ];

  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden">
      {/* Light Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      
      {/* Subtle gradient accents */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-100/60 via-orange-100/40 to-red-100/60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-50/50 via-gray-50/30 to-indigo-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
        
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Get Your Firearms
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-red-600 mt-2">
              Merchant Account Today
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-12">
            Specialized payment processing solutions designed specifically for firearms businesses
          </p>
        </div>

        {/* Consultation Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl shadow-gray-200/50 p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-300/50">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-300 mb-2">
                  <Star className="w-3 h-3 text-amber-600" />
                  <span className="text-xs font-semibold text-amber-800">FREE CONSULTATION</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Free Firearms Business Consultation
                </h2>
              </div>
            </div>
            
            <div className="space-y-4">
              {consultationItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 hover:border-amber-400 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 transition-all duration-300 group"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-amber-200 to-orange-200 border border-amber-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-amber-600"></div>
                  </div>
                  <span className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button for this section */}
            <div className="mt-10 text-center">
              <button className="group relative overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-xl shadow-amber-300/50 hover:shadow-2xl hover:shadow-amber-400/60 transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <Zap className="w-5 h-5" />
                  <span>Start Your Free Consultation</span>
                  <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyApplySection() {
  const [isHovered, setIsHovered] = useState(false);

  const contactInfo = [
    {
      type: "Local (Hagerstown)",
      phone: "(240) 329-9424",
      icon: Phone
    },
    {
      type: "Toll-Free",
      phone: "(877) 415-8627",
      icon: Phone
    },
    {
      type: "Visit",
      address: "13701 Maugansville Rd #5, Hagerstown, MD 21740",
      icon: MapPin
    }
  ];

  const serviceAreas = [
    {
      title: "Primary Local Service Area:",
      description: "All of Maryland, Pennsylvania, and West Virginia",
      icon: MapPin,
      color: "emerald"
    },
    {
      title: "National Service Area:",
      description: "We can certainly help any firearms business located within the United States",
      icon: Globe,
      color: "blue"
    }
  ];

  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-100/50 via-gray-100/30 to-indigo-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Apply <span className="text-amber-600">Today</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Join firearms businesses who choose reliable payment processing without discrimination
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Why Apply Content */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border border-blue-200 p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Why Choose Us</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Firearms businesses deserve reliable payment processing without discrimination. Join the growing number of Second Amendment businesses choosing Elite Card Processing for competitive rates and local support.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-300">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                  <span className="text-blue-800 font-medium">No discrimination against legitimate firearms businesses</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-300">
                  <Shield className="w-6 h-6 text-amber-600 shrink-0" />
                  <span className="text-amber-800 font-medium">Competitive rates and local Maryland support guaranteed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-xl shadow-gray-200/30 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 hover:border-amber-400 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 border border-amber-300 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-amber-700" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-amber-700 mb-1">{item.type}</p>
                          <p className="text-gray-900 text-lg font-medium">
                            {item.phone || item.address}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

           

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4">
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-bold text-lg px-6 py-4 rounded-2xl shadow-xl shadow-amber-300/50 hover:shadow-2xl hover:shadow-amber-400/60 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <Zap className="w-5 h-5" />
                  <span>Get Firearms Quote Now</span>
                </div>
              </button>
              
              <button className="group bg-gradient-to-br from-gray-100 to-white border border-gray-300 text-gray-900 font-bold text-lg px-6 py-4 rounded-2xl shadow-md shadow-gray-200/30 hover:border-amber-400 hover:bg-gradient-to-br hover:from-amber-50 hover:to-orange-50 hover:text-gray-900 transition-all duration-300">
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>Call (240) 329-9424</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Component 3: Industry Partnerships Section (from third screenshot)
function PartnershipsSection() {
  const industryPartnerships = {
    title: "Industry Partnerships",
    description: "Proud member of NRABA and supporter of NSSF initiatives.",
    nra: {
      title: "NRA Business Alliance",
      tagline: "\"The Business of Freedom.\""
    }
  };

  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-white to-gray-50">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-100/30 via-orange-100/20 to-red-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-100 to-red-50 backdrop-blur-sm border border-red-300 mb-6">
            <Badge className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-red-800">TRUSTED INDUSTRY PARTNER</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industry <span className="text-amber-600">Partnerships</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Aligned with leading organizations dedicated to supporting the firearms industry
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl shadow-gray-200/30 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left - Partnership Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-amber-600" />
                  <h3 className="text-2xl font-bold text-gray-900">{industryPartnerships.title}</h3>
                </div>
                <p className="text-gray-700 text-lg mb-8">{industryPartnerships.description}</p>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-300">
                    <h4 className="text-lg font-semibold text-amber-800 mb-2">NRABA Member</h4>
                    <p className="text-gray-700">National Rifle Association Business Alliance</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-300">
                    <h4 className="text-lg font-semibold text-amber-800 mb-2">NSSF Supporter</h4>
                    <p className="text-gray-700">National Shooting Sports Foundation Initiatives</p>
                  </div>
                </div>
              </div>

              {/* Right - NRA Card */}
              <div className="text-center">
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-red-50 to-red-100 border border-red-300">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 border-4 border-white flex items-center justify-center shadow-lg">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="mb-6 pt-4">
                    <h4 className="text-2xl font-bold text-red-800 mb-2">
                      {industryPartnerships.nra.title}
                    </h4>
                    <p className="text-gray-600 italic text-lg">{industryPartnerships.nra.tagline}</p>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-100 to-red-50 border border-red-300">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-red-800 font-medium">Official Partner</span>
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="mt-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-300">
                    <Shield className="w-4 h-4 text-amber-700" />
                    <span className="text-sm text-amber-800">Trusted by Firearms Businesses Nationwide</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 text-center">
              <button className="group relative overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-xl shadow-amber-300/50 hover:shadow-2xl hover:shadow-amber-400/60 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <Users className="w-5 h-5" />
                  <span>Join Our Network of Trusted Partners</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Component that combines all three sections
export default function FirearmsMerchantAccount() {
  return (
    <div className="relative">
      {/* Floating Particles - Shared across sections */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-300/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Render all three sections */}
      <ConsultationSection />
      <WhyApplySection />
      <PartnershipsSection />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>
    </div>
  );
}