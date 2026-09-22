"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
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
    <section
      id="services"
      className="relative bg-white text-[var(--kads-text)] border-b border-[var(--kads-border)]"
      style={{ paddingTop: "var(--kads-section-py)", paddingBottom: "var(--kads-section-py)" }}
    >
      <div className="kads-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-end">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-4">
            <span className="kads-pill">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
              <span>OUR SERVICES</span>
            </span>
            <h2 className="kads-heading">
              What We Build.
            </h2>
            <p className="kads-subheading max-w-2xl">
              From custom web applications and WordPress stores to SEO, mobile apps, and creative production — everything your business needs to grow digitally.
            </p>
          </div>

          {/* Right Column: Filter Tabs */}
          <div className="lg:col-span-5 flex flex-wrap lg:justify-end gap-2">
            {[
              { id: "all", label: "All Services" },
              { id: "development", label: "Web & WordPress" },
              { id: "mobile", label: "Mobile Apps" },
              { id: "marketing", label: "SEO & Growth" },
              { id: "creative", label: "Creative" },
              { id: "branding", label: "Branding" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-[var(--kads-radius-sm)] text-xs font-bold uppercase tracking-wider transition-all border ${
                  activeCategory === tab.id
                    ? "bg-black text-white border-black shadow-sm"
                    : "bg-zinc-100 border-zinc-200 text-zinc-600 hover:text-black hover:bg-zinc-200 hover:border-zinc-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-[1600px]:gap-8">
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
                  className="group relative block rounded-[var(--kads-radius-xl)] overflow-hidden shadow-[var(--kads-shadow-md)] hover:shadow-[var(--kads-shadow-lg)] border border-white/15 hover:border-white transition-all duration-300 flex flex-col justify-between text-white bg-zinc-950"
                >
                  {/* Dedicated Full-Color Media Showcase Header */}
                  <div className="relative h-52 sm:h-56 min-[1600px]:h-60 w-full overflow-hidden bg-zinc-900 border-b border-white/10">
                    <Image
                      src={serviceImg}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-black/20 pointer-events-none" />

                    {/* Card Top Badges */}
                    <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 rounded-[var(--kads-radius-sm)] bg-white text-black text-xs font-bold shadow-md uppercase tracking-wider font-mono">
                        {service.badge}
                      </span>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-[var(--kads-radius-sm)] bg-black/70 border border-white/25 text-white shadow-xs backdrop-blur-md font-mono">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-7 min-[1600px]:p-8 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <h3 className="text-xl font-extrabold text-white group-hover:text-zinc-200 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
                        {service.shortDesc}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-white/10">
                        {service.deliverables.slice(0, 3).map((deliv, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-zinc-300 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                      <div>
                        <span className="text-zinc-400">From </span>
                        <strong className="text-white font-bold">{service.startingPrice}</strong>
                      </div>
                      <span className="inline-flex items-center gap-1.5 font-bold text-white group-hover:translate-x-1 transition-transform">
                        <span>Learn More</span>
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
