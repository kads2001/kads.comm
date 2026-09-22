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
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[7px] bg-black text-white text-xs font-mono uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>VIRAL CONTENT & BRAND SYSTEMS</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-black tracking-tight leading-[1.15]">
              Magnetic Creatives <span className="font-serif italic font-normal text-zinc-600">Engineered to Convert</span>.
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
                className={`flex items-center gap-2 px-6 py-3 rounded-[7px] text-xs font-mono uppercase tracking-wider transition-all shrink-0 ${
                  isActive
                    ? "bg-black text-white border border-black shadow-sm"
                    : "bg-zinc-50 border border-zinc-200 text-zinc-600 hover:text-black hover:border-black"
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
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  DISCIPLINE 05 · SOCIAL MEDIA CREATIVES
                </span>
                <h3 className="text-2xl sm:text-4xl font-bold text-black leading-tight">
                  High-CTR Educational Carousels & Paid Ad Formats
                </h3>
                <p className="text-zinc-600 text-base leading-relaxed">
                  We design multi-slide carousels and ad creatives with proven psychological visual hooks, contrast ratios, and typography tailored for maximum shares and paid return on ad spend.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-200">
                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                    <div className="text-3xl font-mono font-light text-black">4.2x</div>
                    <div className="text-xs font-mono uppercase text-zinc-500 mt-1">Average Meta Ad ROAS</div>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                    <div className="text-3xl font-mono font-light text-black">3.8x</div>
                    <div className="text-xs font-mono uppercase text-zinc-500 mt-1">Organic Save & Share Rate</div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link href="/services/social-media-design" className="kads-btn-primary">
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
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  DISCIPLINE 06 · VIDEO PRODUCTION & MOTION
                </span>
                <h3 className="text-2xl sm:text-4xl font-bold text-black leading-tight">
                  Viral Reels, TikToks & 3D Product Motion
                </h3>
                <p className="text-zinc-600 text-base leading-relaxed">
                  Fast-paced 9:16 vertical video editing with kinetic typography, custom sound design, and 3D product animations built to hook viewers in the first 3 seconds and sustain high watch completion.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-200">
                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                    <div className="text-3xl font-mono font-light text-black">84%</div>
                    <div className="text-xs font-mono uppercase text-zinc-500 mt-1">3-Second Hook Retention</div>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                    <div className="text-3xl font-mono font-light text-black">4K / 60fps</div>
                    <div className="text-xs font-mono uppercase text-zinc-500 mt-1">Master Quality Export</div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link href="/services/video-production-motion" className="kads-btn-primary">
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
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  DISCIPLINE 07 · GRAPHIC DESIGN & BRAND IDENTITY
                </span>
                <h3 className="text-2xl sm:text-4xl font-bold text-black leading-tight">
                  Timeless Logos, Design Tokens & Brand Style Guides
                </h3>
                <p className="text-zinc-600 text-base leading-relaxed">
                  We build foundational brand identities that scale across web, print, mobile, and merchandise. Every system includes vector master logos, typography guidelines, and digital design tokens.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-200">
                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                    <div className="text-3xl font-mono font-light text-black">100%</div>
                    <div className="text-xs font-mono uppercase text-zinc-500 mt-1">Vector Scalable Asset Suite</div>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                    <div className="text-3xl font-mono font-light text-black">Figma</div>
                    <div className="text-xs font-mono uppercase text-zinc-500 mt-1">Developer Tokens Included</div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link href="/services/graphic-design-branding" className="kads-btn-primary">
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
