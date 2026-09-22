"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import QuickContactFormSection from "@/components/QuickContactFormSection";
import { PROJECTS_DATA } from "@/data/projectsData";

const WORK_FILTERS = [
  { id: "all", label: "All Work" },
  { id: "web", label: "Custom Web" },
  { id: "wordpress", label: "WordPress & CMS" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "social-video", label: "Social & Video" },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.categorySlug === activeFilter);

  return (
    <main className="relative min-h-screen bg-white text-[#0d0d11] selection:bg-black selection:text-white font-sans">
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
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[7px] bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-md text-white font-mono">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>PORTFOLIO & CASE STUDIES</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
              Selected Work That Speaks For Itself.
            </h1>

            <p className="text-lg sm:text-2xl text-zinc-300 font-normal leading-relaxed max-w-3xl">
              Explore how we help ambitious businesses engineer custom digital flagships, rank #1 on Google, build viral creative campaigns, and scale mobile apps.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-6 bg-[#fbfbfa] border-b border-zinc-200 sticky top-16 z-30 backdrop-blur-md bg-[#fbfbfa]/90">
        <div className="w-[90%] max-w-[1500px] mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {WORK_FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2.5 rounded-[7px] text-xs font-bold uppercase tracking-wider transition-all shrink-0 border ${
                  activeFilter === filter.id
                    ? "bg-black text-white border-black shadow-sm"
                    : "bg-white border-zinc-200 text-zinc-600 hover:text-black hover:bg-zinc-100 hover:border-zinc-300"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid with Dedicated Full-Color Showcase Preview Cards */}
      <section className="py-24 sm:py-32 bg-[#fafafa] text-[#0d0d11] relative">
        <div className="w-[90%] max-w-[1500px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 min-[1600px]:gap-12">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                >
                  <Link
                    href={`/work/${project.id}`}
                    className="group relative block rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 transition-all hover:scale-[1.01] hover:border-white flex flex-col justify-between text-white bg-zinc-950"
                  >
                    {/* Dedicated Full-Color Showcase Header */}
                    <div className="relative h-64 sm:h-76 min-[1600px]:h-84 w-full overflow-hidden bg-zinc-900 border-b border-white/10">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-black/20 pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
                        <span className="px-4 py-1.5 rounded-[7px] bg-white text-black text-xs font-bold shadow-md uppercase tracking-wider font-mono">
                          {project.category}
                        </span>
                        <div className="w-10 h-10 rounded-[7px] bg-black/70 border border-white/30 backdrop-blur-md flex items-center justify-center text-white shadow-md group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-8 min-[1600px]:p-10 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-4">
                        <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block font-mono">
                          {project.index} — CLIENT: {project.client}
                        </span>

                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight group-hover:text-zinc-200 transition-colors">
                          {project.title}
                        </h2>

                        <p className="text-zinc-400 text-sm leading-relaxed max-w-xl line-clamp-2">
                          {project.summary}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-1">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-lg bg-white/10 border border-white/20 text-xs text-zinc-200 font-semibold font-mono"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-white">
                        <span className="text-zinc-300 font-mono">IMPACT: {project.impactMetric}</span>
                        <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                          Read Case Study →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <QuickContactFormSection />
      <Footer />
    </main>
  );
}
