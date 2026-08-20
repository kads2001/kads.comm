"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calculator,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  baseDays: number;
  category: string;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  { id: "custom-web", name: "Custom Full-Stack Web App (Next.js)", basePrice: 4500, baseDays: 18, category: "Web" },
  { id: "wordpress-cms", name: "WordPress & WooCommerce Store", basePrice: 2800, baseDays: 14, category: "Web" },
  { id: "technical-seo", name: "Technical SEO & Rankings Audit", basePrice: 1500, baseDays: 7, category: "Growth" },
  { id: "mobile-app", name: "Cross-Platform Mobile App (iOS/Android)", basePrice: 5500, baseDays: 24, category: "App" },
  { id: "social-creatives", name: "Social Media Post & Ad Package", basePrice: 1200, baseDays: 7, category: "Creative" },
  { id: "video-motion", name: "Viral Video Production & 3D Motion", basePrice: 2000, baseDays: 10, category: "Creative" },
  { id: "brand-identity", name: "Brand Identity & Design System", basePrice: 2200, baseDays: 12, category: "Creative" },
];

const SCOPE_TIERS = [
  { id: "starter", name: "Essential Launch", multiplier: 1.0, desc: "Core MVP with key features & clean design" },
  { id: "growth", name: "Growth Scale", multiplier: 1.5, desc: "Advanced features, custom integrations & speed optimization" },
  { id: "enterprise", name: "Enterprise Flagship", multiplier: 2.2, desc: "Full custom architecture, SLA support & dedicated team" },
];

export default function InteractiveEstimator() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["custom-web", "technical-seo"]);
  const [selectedScope, setSelectedScope] = useState<string>("growth");

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const scopeMultiplier = SCOPE_TIERS.find((s) => s.id === selectedScope)?.multiplier || 1.0;

  const rawTotal = selectedServices.reduce((acc, currId) => {
    const s = SERVICE_OPTIONS.find((opt) => opt.id === currId);
    return acc + (s ? s.basePrice : 0);
  }, 0);

  const rawDays = selectedServices.reduce((acc, currId) => {
    const s = SERVICE_OPTIONS.find((opt) => opt.id === currId);
    return acc + (s ? s.baseDays : 0);
  }, 0);

  const estimatedPrice = Math.round(rawTotal * scopeMultiplier);
  const estimatedDays = Math.max(7, Math.round(rawDays * 0.7 * (scopeMultiplier > 1 ? 1.2 : 1.0)));

  return (
    <section id="estimator" className="relative py-24 sm:py-32 bg-[#f7f7f9] text-[#0d0d11] border-b border-zinc-200">
      <div className="w-[90%] max-w-[1500px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[7px] bg-purple-50 border border-purple-200 text-xs font-bold uppercase tracking-wider text-[#8b5cf6]">
              <span className="w-2 h-2 rounded-[7px] bg-[#8b5cf6] animate-pulse" />
              <span>TRANSPARENT PROJECT SCOPING</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0d0d11] tracking-tight leading-[1.15]">
              Interactive Scope & Timeline Estimator.
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
              Select your required disciplines and scope tier to calculate an instant estimated investment and delivery timeline.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Service & Scope Selection */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Services Selection */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200 shadow-sm">
              <span className="text-xs uppercase font-bold tracking-wider text-zinc-500 block mb-2">
                STEP 01 · SELECT REQUIRED DISCIPLINES
              </span>
              <h3 className="text-xl font-bold text-[#0d0d11] mb-6">Which services do you require?</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICE_OPTIONS.map((opt) => {
                  const isSelected = selectedServices.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => toggleService(opt.id)}
                      className={`p-4 rounded-2xl border text-left transition-all flex items-start justify-between gap-3 backdrop-blur-sm ${
                        isSelected
                          ? "bg-[#8b5cf6] text-white border-[#8b5cf6] shadow-md"
                          : "bg-white/80 border-zinc-200 text-zinc-700 hover:border-zinc-400 hover:bg-white"
                      }`}
                    >
                      <div>
                        <div className="text-xs font-semibold opacity-80 mb-1">{opt.category}</div>
                        <div className="text-sm font-bold">{opt.name}</div>
                      </div>
                      <span className="text-xs font-bold shrink-0 mt-0.5">
                        ${opt.basePrice.toLocaleString()}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Scope Tier */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200 shadow-sm">
              <span className="text-xs uppercase font-bold tracking-wider text-zinc-500 block mb-2">
                STEP 02 · SELECT SCOPE LEVEL
              </span>
              <h3 className="text-xl font-bold text-[#0d0d11] mb-6">Choose project scale & depth</h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {SCOPE_TIERS.map((tier) => {
                  const isSelected = selectedScope === tier.id;
                  return (
                    <button
                      key={tier.id}
                      onClick={() => setSelectedScope(tier.id)}
                      className={`p-5 rounded-2xl border text-left transition-all backdrop-blur-sm ${
                        isSelected
                          ? "bg-[#8b5cf6] text-white border-[#8b5cf6] shadow-md"
                          : "bg-white/80 border-zinc-200 text-zinc-700 hover:border-zinc-400 hover:bg-white"
                      }`}
                    >
                      <div className="text-sm font-bold mb-1">{tier.name}</div>
                      <div className="text-xs opacity-80 leading-relaxed">{tier.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Calculated Breakdown */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 text-white shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                <span className="text-xs uppercase font-bold text-zinc-400">ESTIMATED INVESTMENT</span>
                <span className="px-3 py-1 rounded-[7px] bg-[#8b5cf6] text-xs font-bold text-white">
                  {selectedServices.length} Selected
                </span>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
                  ${estimatedPrice.toLocaleString()}{" "}
                  <span className="text-sm font-normal text-zinc-400">USD</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <Clock className="w-4 h-4 text-[#8b5cf6]" />
                  <span>Estimated Delivery: <strong>~{estimatedDays} Business Days</strong></span>
                </div>
              </div>

              {/* Selected List */}
              <div className="space-y-2 pt-4 border-t border-zinc-800 text-xs text-zinc-300">
                {selectedServices.map((id) => {
                  const s = SERVICE_OPTIONS.find((item) => item.id === id);
                  return (
                    <div key={id} className="flex justify-between items-center py-1">
                      <span>• {s?.name}</span>
                      <span className="text-[#8b5cf6] font-bold">${s?.basePrice}</span>
                    </div>
                  );
                })}
              </div>

              {/* Included Guarantees */}
              <div className="pt-4 border-t border-zinc-800 space-y-2 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8b5cf6] shrink-0" />
                  <span>100% Commercial Code & Asset Ownership</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8b5cf6] shrink-0" />
                  <span>100/100 Lighthouse Performance SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8b5cf6] shrink-0" />
                  <span>30-Day Post-Launch Technical Warranty</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href={`/contact?services=${selectedServices.join(",")}&scope=${selectedScope}&estimate=${estimatedPrice}`}
                  className="w-full py-4 rounded-[7px] bg-[#8b5cf6] text-white font-bold text-sm text-center flex items-center justify-center gap-2 hover:bg-[#6d28d9] transition-all shadow-xl hover:scale-105"
                >
                  <span>Lock in This Scope & Get Proposal</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
