"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Code2,
  Layout,
  Smartphone,
  Search,
  Share2,
  Video,
  Palette,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import QuickContactFormSection from "@/components/QuickContactFormSection";
import { SERVICES_DATA } from "@/data/servicesData";

const SERVICE_IMAGES: Record<string, string> = {
  "web-development": "/images/fintech_dashboard.jpg",
  "wordpress-cms": "/images/ecommerce_store.jpg",
  "seo-optimization": "/images/seo_rankings_growth.jpg",
  "mobile-app-development": "/images/mobile_app.jpg",
  "social-media-design": "/images/social_creatives.jpg",
  "video-production-motion": "/images/social_creatives.jpg",
  "graphic-design-branding": "/images/brand_identity_system.jpg",
};

const CATEGORIES = [
  { id: "all", label: "All Disciplines" },
  { id: "development", label: "Web & WordPress" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "marketing", label: "SEO & Growth" },
  { id: "creative", label: "Social & Video" },
  { id: "branding", label: "Brand Identity" },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <main className="relative min-h-screen bg-white text-black selection:bg-black selection:text-white font-sans">
      <ScrollProgress />
      <CustomCursor />
      <Header />

      {/* HERO BANNER WITH BACKGROUND IMAGE AND BALANCED OVERLAY */}
      <section
        className="relative pt-40 pb-24 min-h-[50vh] flex flex-col justify-center overflow-hidden bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/parallax_agency_bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/40" />

        <div className="w-[90%] max-w-[1500px] mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[7px] bg-white/10 border border-white/20 text-xs font-mono uppercase tracking-wider backdrop-blur-md text-white">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>SYSTEMATIC MULTI-DISCIPLINE CAPABILITIES</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.08] mb-6">
              Full-Spectrum Engineering, <span className="font-serif italic font-normal text-zinc-300">SEO</span>, & Creative Direction.
            </h1>

            <p className="text-lg sm:text-2xl text-zinc-300 font-normal leading-relaxed max-w-3xl">
              Explore our core disciplines. Every offering includes dedicated senior architects, 100% intellectual property handover, and transparent timeline estimates.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-white border-b border-zinc-200 sticky top-16 z-30 backdrop-blur-md bg-white/90">
        <div className="w-[90%] max-w-[1500px] mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-[7px] text-xs font-mono uppercase tracking-wider transition-all shrink-0 ${
                  activeCategory === cat.id
                    ? "bg-black text-white border border-black shadow-sm"
                    : "bg-white border border-zinc-200 text-zinc-600 hover:text-black hover:border-black"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid with Full-Color Image Showcase Cards */}
      <section className="py-24 sm:py-32 bg-white text-black relative">
        <div className="w-[90%] max-w-[1500px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-[1600px]:gap-10">
            <AnimatePresence mode="popLayout">
              {filtered.map((service, idx) => {
                const serviceImg = SERVICE_IMAGES[service.slug] || "/images/hero_showcase.jpg";
                return (
                  <motion.div
                    key={service.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                  >
                    <Link
                      href={`/services/${service.slug}`}
                      className="group relative block rounded-3xl overflow-hidden shadow-xl border border-zinc-800 transition-all duration-300 hover:border-white hover:-translate-y-1 flex flex-col justify-between text-white bg-zinc-950"
                    >
                      {/* Dedicated Full-Color Media Header */}
                      <div className="relative h-56 min-[1600px]:h-64 w-full overflow-hidden bg-zinc-900 border-b border-white/10">
                        <img
                          src={serviceImg}
                          alt={service.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-black/20 pointer-events-none" />

                        {/* Card Top Badges */}
                        <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
                          <span className="px-3 py-1 rounded-[7px] bg-white text-black text-xs font-mono uppercase tracking-wider font-semibold">
                            {service.badge}
                          </span>
                          <span className="text-xs font-mono px-3 py-1 rounded-[7px] bg-black/70 border border-white/20 text-zinc-300 backdrop-blur-md">
                            [ 0{idx + 1} ]
                          </span>
                        </div>
                      </div>

                      {/* Card Bottom Body */}
                      <div className="p-8 min-[1600px]:p-10 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-4">
                          <h2 className="text-2xl font-bold text-white group-hover:text-zinc-100 transition-colors">
                            {service.title}
                          </h2>

                          <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
                            {service.shortDesc}
                          </p>

                          <div className="space-y-2 pt-2 border-t border-zinc-800">
                            {service.deliverables.slice(0, 3).map((deliv, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-zinc-300 font-medium">
                                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                                <span>{deliv}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono">
                          <div>
                            <span className="text-zinc-400 uppercase">Starts at </span>
                            <strong className="text-white font-bold">{service.startingPrice}</strong>
                          </div>
                          <span className="inline-flex items-center gap-1.5 font-bold text-white group-hover:translate-x-1 transition-transform uppercase">
                            <span>Explore Scope</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <QuickContactFormSection />
      <Footer />
    </main>
  );
}
