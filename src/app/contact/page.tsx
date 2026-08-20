"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  Zap,
  ChevronDown,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";

const SERVICES_LIST = [
  { id: "custom-web", name: "Custom Web App (Next.js)" },
  { id: "wordpress-cms", name: "WordPress & WooCommerce" },
  { id: "seo-optimization", name: "Technical SEO & Rankings" },
  { id: "mobile-app", name: "Mobile App (iOS/Android)" },
  { id: "social-media", name: "Social Posts & Ad Creatives" },
  { id: "video-motion", name: "Video Reels & 3D Motion" },
  { id: "graphic-design", name: "Brand Identity & Design System" },
];

const BUDGET_RANGES = [
  "Under $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000+",
];

const COUNTRY_CODES = [
  { code: "+1", country: "US/CA", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+91", country: "IN", flag: "🇮🇳" },
  { code: "+61", country: "AU", flag: "🇦🇺" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+49", country: "DE", flag: "🇩🇪" },
  { code: "+65", country: "SG", flag: "🇸🇬" },
  { code: "+33", country: "FR", flag: "🇫🇷" },
];

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>("$10,000 – $25,000");
  const [countryCode, setCountryCode] = useState(COUNTRY_CODES[0]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const serviceParam = searchParams.get("service") || searchParams.get("services");
    if (serviceParam) {
      const parts = serviceParam.split(",");
      setSelectedServices(parts);
    }
  }, [searchParams]);

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter((s) => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Form Left with Frosted Glass Container */}
      <div className="lg:col-span-7">
        <div className="p-8 sm:p-12 rounded-3xl bg-white/85 backdrop-blur-xl border border-white/80 shadow-2xl">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-[7px] bg-purple-100 text-[#8b5cf6] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0d0d11]">
                Inquiry Received Successfully!
              </h3>
              <p className="text-zinc-600 text-sm max-w-md mx-auto leading-relaxed">
                Thank you for reaching out. A Senior Technical Architect will review your requirements and respond with a customized proposal within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Toggle Pills */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-zinc-500 mb-3">
                  1. SELECT REQUIRED DISCIPLINES
                </label>
                <div className="flex flex-wrap gap-2">
                  {SERVICES_LIST.map((srv) => {
                    const isSelected = selectedServices.includes(srv.id);
                    return (
                      <button
                        type="button"
                        key={srv.id}
                        onClick={() => toggleService(srv.id)}
                        className={`px-4 py-2 rounded-[7px] text-xs font-bold transition-all ${
                          isSelected
                            ? "bg-[#8b5cf6] text-white shadow-sm"
                            : "bg-white/90 border border-zinc-200 text-zinc-700 hover:border-zinc-400"
                        }`}
                      >
                        {srv.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget Range Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-zinc-500 mb-3">
                  2. ESTIMATED PROJECT BUDGET (USD)
                </label>
                <div className="flex flex-wrap gap-2">
                  {BUDGET_RANGES.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setBudget(b)}
                      className={`px-4 py-2 rounded-[7px] text-xs font-bold transition-all ${
                        budget === b
                          ? "bg-[#8b5cf6] text-white shadow-sm"
                          : "bg-white/90 border border-zinc-200 text-zinc-700 hover:border-zinc-400"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-zinc-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/90 border border-zinc-200 text-sm focus:border-[#8b5cf6] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-zinc-700 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/90 border border-zinc-200 text-sm focus:border-[#8b5cf6] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Company & Phone with Flag Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-zinc-700 mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Acme Corp"
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/90 border border-zinc-200 text-sm focus:border-[#8b5cf6] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-zinc-700 mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative flex items-center">
                    <button
                      type="button"
                      onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                      className="flex items-center gap-1.5 px-3 py-3.5 rounded-l-2xl bg-zinc-100 border border-r-0 border-zinc-200 text-xs font-bold text-zinc-800 hover:bg-zinc-200 transition-colors shrink-0"
                    >
                      <span className="text-base">{countryCode.flag}</span>
                      <span>{countryCode.code}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-zinc-500" />
                    </button>

                    {showCountryDropdown && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-zinc-200 rounded-2xl shadow-xl z-50 py-2 max-h-48 overflow-y-auto">
                        {COUNTRY_CODES.map((c) => (
                          <button
                            type="button"
                            key={c.code + c.country}
                            onClick={() => {
                              setCountryCode(c);
                              setShowCountryDropdown(false);
                            }}
                            className="w-full px-4 py-2 text-left text-xs font-semibold hover:bg-purple-50 hover:text-[#8b5cf6] flex items-center justify-between"
                          >
                            <span className="flex items-center gap-2">
                              <span className="text-base">{c.flag}</span>
                              <span>{c.country}</span>
                            </span>
                            <span className="font-mono text-zinc-500">{c.code}</span>
                          </button>
                        ))}
                      </div>
                    )}

                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-3.5 rounded-r-2xl bg-white/90 border border-zinc-200 text-sm focus:border-[#8b5cf6] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-zinc-700 mb-1.5">
                  Project Goals & Key Requirements *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your brand vision, target launch date, and key deliverables..."
                  className="w-full px-4 py-3.5 rounded-2xl bg-white/90 border border-zinc-200 text-sm focus:border-[#8b5cf6] focus:outline-none transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-[7px] bg-[#8b5cf6] hover:bg-[#6d28d9] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-xl disabled:opacity-50 hover:scale-[1.01]"
              >
                <Send className="w-4 h-4 text-white" />
                <span>{isSubmitting ? "Transmitting Proposal Request..." : "Submit Project Brief"}</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Info Right */}
      <div className="lg:col-span-5 space-y-8 sticky top-24">
        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 text-white shadow-2xl space-y-6">
          <h3 className="text-2xl font-extrabold text-white">What Happens Next?</h3>

          <div className="space-y-4 text-xs text-zinc-300">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-[7px] bg-[#8b5cf6] text-white flex items-center justify-center font-bold shrink-0 mt-0.5">
                1
              </div>
              <div>
                <strong className="text-white block">120-Point Technical Review</strong>
                Senior engineers evaluate your technical requirements and competitor landscape.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-[7px] bg-[#8b5cf6] text-white flex items-center justify-center font-bold shrink-0 mt-0.5">
                2
              </div>
              <div>
                <strong className="text-white block">Tailored Architecture Proposal</strong>
                You receive a detailed scope, technology stack recommendation, and fixed quote within 24h.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-[7px] bg-[#8b5cf6] text-white flex items-center justify-center font-bold shrink-0 mt-0.5">
                3
              </div>
              <div>
                <strong className="text-white block">Discovery Call & Kickoff</strong>
                30-minute strategic walkthrough with our founders and senior project lead.
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-800 space-y-3 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#8b5cf6]" />
              <span>hello@kads.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#8b5cf6]" />
              <span>+1 (800) KADS-COM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#8b5cf6]" />
              <span>San Francisco · London · Mumbai</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-white text-[#0d0d11] selection:bg-[#8b5cf6] selection:text-white font-sans">
      <ScrollProgress />
      <CustomCursor />
      <Header />

      {/* HERO BANNER WITH BACKGROUND IMAGE AND DARK OVERLAY */}
      <section
        className="relative pt-40 pb-24 min-h-[50vh] flex flex-col justify-center overflow-hidden bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/parallax_agency_bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/85 backdrop-blur-[2px]" />

        <div className="w-[90%] max-w-[1500px] mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[7px] bg-white/15 border border-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-md text-white">
                <span className="w-2.5 h-2.5 rounded-[7px] bg-[#8b5cf6] animate-pulse" />
                <span>GET IN TOUCH · INITIATE A PROJECT</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
              Let&apos;s Build Your Next Digital Flagship.
            </h1>

            <p className="text-lg sm:text-2xl text-zinc-300 font-normal leading-relaxed max-w-3xl">
              Tell us about your project requirements and target timeline. We will engineer the optimal technical blueprint and deliver a comprehensive proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section with Fixed Background & Frosted Glass */}
      <section
        className="py-24 bg-fixed bg-cover bg-center text-[#0d0d11] relative"
        style={{ backgroundImage: "url('/images/tech_workspace_bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/94 backdrop-blur-md" />

        <div className="w-[90%] max-w-[1500px] mx-auto relative z-10">
          <Suspense fallback={<div className="text-center py-12">Loading Inquiry Brief...</div>}>
            <ContactFormInner />
          </Suspense>
        </div>
      </section>

      <Footer />
    </main>
  );
}
