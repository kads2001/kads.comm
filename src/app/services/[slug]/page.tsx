"use client";

import { use } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Clock,
  Zap,
  Globe,
  Code2,
  Layout,
  Smartphone,
  Search,
  Share2,
  Video,
  Palette,
  Check,
  Cpu,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import QuickContactFormSection from "@/components/QuickContactFormSection";
import { SERVICES_DATA } from "@/data/servicesData";

const ICON_MAP: Record<string, any> = {
  Code2,
  Globe,
  Layout,
  Smartphone,
  Search,
  Share2,
  Video,
  Palette,
};

const SERVICE_IMAGES: Record<string, string> = {
  "web-development": "/images/fintech_dashboard.jpg",
  "wordpress-cms": "/images/ecommerce_store.jpg",
  "seo-optimization": "/images/seo_rankings_growth.jpg",
  "mobile-app-development": "/images/mobile_app.jpg",
  "social-media-design": "/images/social_creatives.jpg",
  "video-production-motion": "/images/social_creatives.jpg",
  "graphic-design-branding": "/images/brand_identity_system.jpg",
};

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const service = SERVICES_DATA.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center text-black">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold mb-4">Service Discipline Not Found</h1>
          <p className="text-zinc-600 mb-6 font-mono text-sm">The requested service discipline does not exist or has been relocated.</p>
          <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-[7px] bg-black text-white hover:bg-zinc-800 font-mono text-xs uppercase tracking-wider transition-all">
            <ArrowLeft className="w-4 h-4" /> Return to Capabilities Matrix
          </Link>
        </div>
      </main>
    );
  }

  const Icon = ICON_MAP[service.iconName] || Globe;
  const serviceImg = SERVICE_IMAGES[service.slug] || "/images/hero_showcase.jpg";

  return (
    <main className="relative min-h-screen bg-white text-black selection:bg-black selection:text-white font-sans">
      <ScrollProgress />
      <CustomCursor />
      <Header />

      {/* HERO BANNER WITH BACKGROUND IMAGE AND DARK OVERLAY */}
      <section
        className="relative pt-40 pb-24 min-h-[55vh] flex flex-col justify-center overflow-hidden bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/hero_showcase.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/40" />

        <div className="w-[90%] max-w-[1500px] mx-auto relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Capabilities
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-300 mb-4">
            <span className="px-3 py-1 rounded-[7px] bg-white text-black font-semibold uppercase tracking-wider">
              {service.badge}
            </span>
            <span>·</span>
            <span>TIMELINE: {service.timeline}</span>
            <span>·</span>
            <span>STARTS AT {service.startingPrice}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.08] mb-6 max-w-4xl">
            {service.title}
          </h1>

          <p className="text-lg sm:text-2xl text-zinc-300 font-normal leading-relaxed max-w-3xl mb-8">
            {service.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href={`/contact?service=${service.slug}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-mono uppercase tracking-wider font-bold text-black bg-white hover:bg-zinc-200 rounded-[7px] transition-all"
            >
              <span>Get Detailed Proposal</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </Link>

            <Link
              href="#deliverables"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-mono uppercase tracking-wider font-bold text-white bg-black/50 border border-white/20 rounded-[7px] backdrop-blur-md hover:bg-white/10 transition-all"
            >
              <span>View Verified Deliverables</span>
            </Link>
          </div>
        </div>
      </section>

      {/* High-Resolution Showcase Image Banner */}
      <section className="py-12 bg-white border-b border-zinc-200">
        <div className="w-[90%] max-w-[1500px] mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-zinc-200 bg-zinc-900">
            <img
              src={serviceImg}
              alt={service.title}
              className="w-full h-80 sm:h-[540px] object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Highlights Grid with Fixed Background & Frosted Glass */}
      <section
        className="py-24 bg-white text-black border-b border-zinc-200 relative"
      >
        <div className="w-[90%] max-w-[1500px] mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.keyHighlights.map((hl, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm hover:border-black transition-all"
              >
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold mb-2">
                  {hl.title}
                </div>
                <div className="text-sm font-medium text-black leading-relaxed">{hl.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Services & Deliverables */}
      <section id="deliverables" className="py-24 bg-[#fbfbfa] border-b border-zinc-200">
        <div className="w-[90%] max-w-[1500px] mx-auto space-y-16">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[7px] bg-black text-white text-xs font-mono uppercase tracking-wider mb-3">
              <span>SPECIALIZED OFFERINGS</span>
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-black tracking-tight">
              What We Build Under <span className="font-serif italic text-zinc-600">This Discipline</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.subServices.map((sub, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-zinc-200 flex flex-col justify-between shadow-xs hover:border-black transition-colors"
              >
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                    0{idx + 1} SPECIALIZATION
                  </span>
                  <h3 className="text-xl font-bold text-black mb-3">{sub.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">{sub.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Full Deliverables Checklist Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-black text-white shadow-2xl border border-zinc-800">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                Guaranteed <span className="font-serif italic font-normal text-zinc-300">Deliverables</span> Checklist
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.deliverables.map((deliv, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <QuickContactFormSection />
      <Footer />
    </main>
  );
}
