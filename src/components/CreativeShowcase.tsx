"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Share2,
  Video,
  Palette,
  Play,
  ArrowRight,
  Sparkles,
  TrendingUp,
  BarChart3,
  Layers,
} from "lucide-react";
import Link from "next/link";

export default function CreativeShowcase() {
  const [activeTab, setActiveTab] = useState<"social" | "video" | "branding">("social");

  return (
    <section id="creatives" className="relative py-24 sm:py-32 bg-white border-b border-zinc-200">
      <div className="w-[90%] max-w-[1500px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[7px] bg-purple-50 border border-purple-200 text-xs font-bold uppercase tracking-wider text-[#8b5cf6]">
              <span className="w-2 h-2 rounded-[7px] bg-[#8b5cf6] animate-pulse" />
              <span>VIRAL CONTENT & BRAND SYSTEMS</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0d0d11] tracking-tight leading-[1.15]">
              Magnetic Creatives Engineered to Convert.
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
              We combine high-retention motion storytelling, swipeable carousels, and vector brand systems that capture attention instantly.
            </p>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-2 pb-6 border-b border-zinc-200 mb-10 overflow-x-auto scrollbar-none">
          {[
            { id: "social", label: "01. Social Posts & Ad Carousels", icon: Share2 },
            { id: "video", label: "02. 3D Reels, Shorts & Motion", icon: Video },
            { id: "branding", label: "03. Complete Brand Systems", icon: Palette },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-[7px] text-xs font-bold uppercase tracking-wider transition-all shrink-0 ${
                  isActive
                    ? "bg-[#0d0d11] text-white shadow-md"
                    : "bg-zinc-100 border border-zinc-200 text-zinc-600 hover:text-black hover:bg-zinc-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "social" && (
            <motion.div
              key="social"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Showcase Image */}
              <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-zinc-200 bg-zinc-900">
                <img
                  src="/images/social_creatives.jpg"
                  alt="Social Media Creatives"
                  className="w-full h-80 sm:h-[460px] object-cover object-center"
                />
              </div>

              {/* Right Content */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase font-bold tracking-wider text-zinc-500">
                  DISCIPLINE 05 · SOCIAL MEDIA CREATIVES
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0d0d11] leading-tight">
                  High-CTR Educational Carousels & Paid Ad Formats
                </h3>
                <p className="text-zinc-600 text-base leading-relaxed">
                  We design multi-slide carousels and ad creatives with proven psychological visual hooks, contrast ratios, and typography tailored for maximum shares and paid return on ad spend.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-200">
                  <div className="p-4 rounded-2xl bg-[#fbfbfa] border border-zinc-200">
                    <div className="text-2xl font-extrabold text-[#0d0d11]">4.2x</div>
                    <div className="text-xs text-zinc-600 mt-0.5">Average Meta Ad ROAS</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#fbfbfa] border border-zinc-200">
                    <div className="text-2xl font-extrabold text-[#0d0d11]">3.8x</div>
                    <div className="text-xs text-zinc-600 mt-0.5">Organic Save & Share Rate</div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link href="/services/social-media-design" className="evoco-btn-primary">
                    <span>View Social Media Packages</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "video" && (
            <motion.div
              key="video"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Showcase Image */}
              <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-zinc-200 bg-zinc-900">
                <img
                  src="/images/parallax_agency_bg.jpg"
                  alt="Video & 3D Motion Production"
                  className="w-full h-80 sm:h-[460px] object-cover object-center"
                />
              </div>

              {/* Right Content */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase font-bold tracking-wider text-zinc-500">
                  DISCIPLINE 06 · VIDEO PRODUCTION & MOTION
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0d0d11] leading-tight">
                  Viral Reels, TikToks & 3D Product Motion
                </h3>
                <p className="text-zinc-600 text-base leading-relaxed">
                  Fast-paced 9:16 vertical video editing with kinetic typography, custom sound design, and 3D product animations built to hook viewers in the first 3 seconds and sustain high watch completion.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-200">
                  <div className="p-4 rounded-2xl bg-[#fbfbfa] border border-zinc-200">
                    <div className="text-2xl font-extrabold text-[#0d0d11]">84%</div>
                    <div className="text-xs text-zinc-600 mt-0.5">3-Second Hook Retention</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#fbfbfa] border border-zinc-200">
                    <div className="text-2xl font-extrabold text-[#0d0d11]">4K / 60fps</div>
                    <div className="text-xs text-zinc-600 mt-0.5">Master Quality Export</div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link href="/services/video-production-motion" className="evoco-btn-primary">
                    <span>Explore Video Production Scope</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "branding" && (
            <motion.div
              key="branding"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Showcase Image */}
              <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-zinc-200 bg-zinc-900">
                <img
                  src="/images/brand_identity_system.jpg"
                  alt="Complete Brand Identity System"
                  className="w-full h-80 sm:h-[460px] object-cover object-center"
                />
              </div>

              {/* Right Content */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase font-bold tracking-wider text-zinc-500">
                  DISCIPLINE 07 · GRAPHIC DESIGN & BRAND IDENTITY
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0d0d11] leading-tight">
                  Timeless Logos, Design Tokens & Brand Style Guides
                </h3>
                <p className="text-zinc-600 text-base leading-relaxed">
                  We build foundational brand identities that scale across web, print, mobile, and merchandise. Every system includes vector master logos, typography guidelines, and digital design tokens.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-200">
                  <div className="p-4 rounded-2xl bg-[#fbfbfa] border border-zinc-200">
                    <div className="text-2xl font-extrabold text-[#0d0d11]">100% Vector</div>
                    <div className="text-xs text-zinc-600 mt-0.5">Scalable Asset Master Suite</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#fbfbfa] border border-zinc-200">
                    <div className="text-2xl font-extrabold text-[#0d0d11]">Figma Tokens</div>
                    <div className="text-xs text-zinc-600 mt-0.5">Developer-Ready Style Guide</div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link href="/services/graphic-design-branding" className="evoco-btn-primary">
                    <span>View Brand Identity Deliverables</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
