"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
  ArrowUpRight,
} from "lucide-react";
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

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-white text-[#0d0d11] border-b border-zinc-200">
      <div className="w-[90%] max-w-[1500px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-end">
          {/* Left Column: Standardized Header */}
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[7px] bg-purple-50 border border-purple-200 text-xs font-bold uppercase tracking-wider text-[#8b5cf6]">
              <span className="w-2 h-2 rounded-[7px] bg-[#8b5cf6] animate-pulse" />
              <span>RESEARCH DRIVES RESULTS • CORE CAPABILITIES</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0d0d11] tracking-tight leading-[1.15]">
              Systematic Methodology & Multi-Discipline Execution.
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-2xl">
              From custom Next.js full-stack code and WordPress ecosystems to SEO rankings, mobile apps, and video systems.
            </p>
          </div>

          {/* Right Column: Filter Tabs */}
          <div className="lg:col-span-5 flex flex-wrap lg:justify-end gap-2">
            {[
              { id: "all", label: "All Disciplines" },
              { id: "development", label: "Web & WordPress" },
              { id: "mobile", label: "Mobile Apps" },
              { id: "marketing", label: "SEO & Growth" },
              { id: "creative", label: "Social & Video" },
              { id: "branding", label: "Brand Identity" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-2.5 rounded-[7px] text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === tab.id
                    ? "bg-[#8b5cf6] text-white shadow-md"
                    : "bg-zinc-100 border border-zinc-200 text-zinc-700 hover:text-black hover:bg-zinc-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Capabilities Cards Grid with Full Background Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((service, idx) => {
            const serviceImg = SERVICE_IMAGES[service.slug] || "/images/hero_showcase.jpg";
            return (
              <motion.div
                key={service.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative block rounded-3xl overflow-hidden min-h-[460px] shadow-lg hover:shadow-2xl border border-white/20 transition-all hover:scale-[1.01] hover:border-[#8b5cf6] flex flex-col justify-between p-8 text-white bg-zinc-950"
                >
                  {/* Full-Card Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={serviceImg}
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Cinematic Multi-Stop Dark Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40 backdrop-blur-[1px]" />
                  </div>

                  {/* Card Top */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-4 py-1.5 rounded-[7px] bg-[#8b5cf6] text-white text-xs font-bold shadow-md">
                      {service.badge}
                    </span>
                    <span className="text-xs font-bold px-3 py-1 rounded-[7px] bg-white/20 border border-white/30 text-white shadow-xs backdrop-blur-md">
                      [ 0{idx + 1} ]
                    </span>
                  </div>

                  {/* Card Bottom Over the Image */}
                  <div className="relative z-10 space-y-4 pt-16">
                    <h3 className="text-2xl font-extrabold text-white group-hover:text-purple-200 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-zinc-300 text-sm leading-relaxed line-clamp-2">
                      {service.shortDesc}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-white/20">
                      {service.deliverables.slice(0, 3).map((deliv, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-zinc-200 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-purple-300 shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-white/20 flex items-center justify-between text-xs">
                      <div>
                        <span className="text-zinc-400">Starts at </span>
                        <strong className="text-white font-bold">{service.startingPrice}</strong>
                      </div>
                      <span className="inline-flex items-center gap-1.5 font-bold text-white group-hover:translate-x-1 transition-transform">
                        <span>Explore Scope</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
