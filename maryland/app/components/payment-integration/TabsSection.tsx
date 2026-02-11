"use client";

import { useState } from "react";
import { CreditCard, FileText, BarChart3, Code2, Zap, Users } from "lucide-react";

const TABS = [
  "SEAMLESS PAYMENTS",
  "DEVELOPER-FRIENDLY INTEGRATION",
  "PARTNERSHIP IN GROWTH",
];

const TAB_CONTENT = [
  {
    headline: "Create exceptional user experiences with",
    highlight: "seamless omni-channel payments",
    cards: [
      {
        icon: CreditCard,
        text:
          "Streamline payments across online, in‑person, and mobile channels with one unified checkout experience.",
      },
      {
        icon: FileText,
        text:
          "Reduce friction for your users with a single, branded payments layer that fits naturally into your workflows.",
      },
      {
        icon: BarChart3,
        text:
          "Gain real‑time visibility into transaction trends so you can optimize pricing, cash flow, and customer experience.",
      },
    ],
  },
  {
    headline: "Build faster with",
    highlight: "developer-friendly APIs and tools",
    cards: [
      {
        icon: Code2,
        text:
          "Modern REST APIs, SDKs, and examples that let your team embed payments in days instead of months.",
      },
      {
        icon: Zap,
        text:
          "Robust sandbox, test data, and webhooks so you can validate every edge case before going live.",
      },
      {
        icon: FileText,
        text:
          "Dedicated technical support, integration reviews, and clear documentation to keep your roadmap moving.",
      },
    ],
  },
  {
    headline: "Scale with a",
    highlight: "partnership built for growth",
    cards: [
      {
        icon: Users,
        text:
          "Work with partner managers who understand your vertical and stay engaged from launch through expansion.",
      },
      {
        icon: BarChart3,
        text:
          "Tap into sales enablement, playbooks, and marketing assets that help you drive adoption with your customers.",
      },
      {
        icon: Zap,
        text:
          "Collaborate on go‑to‑market campaigns and programs designed to grow recurring revenue for both sides.",
      },
    ],
  },
];

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const content = TAB_CONTENT[activeTab];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          The integrated payments advantage
        </h2>
        <div className="flex flex-wrap gap-1 border-b-2 border-gray-200">
          {TABS.map((label, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveTab(index)}
              aria-selected={activeTab === index}
              aria-controls={`tabpanel-${index}`}
              id={`tab-${index}`}
              className={`relative px-4 py-4 text-sm font-semibold uppercase tracking-wide transition-colors border-b-2 -mb-0.5 ${
                activeTab === index
                  ? "text-gray-900 border-[#d4af37]"
                  : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div
          id={`tabpanel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          className="pt-12 pb-4"
        >
          <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-10">
            {content.headline}{" "}
            <span className="text-[#d4af37]">{content.highlight}</span>
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {content.cards.map((card, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <card.icon className="w-10 h-10 text-[#10284D] mb-4" strokeWidth={1.5} />
                <p className="text-gray-700 text-xl leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
