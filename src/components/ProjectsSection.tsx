"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projectsData";

export default function ProjectsSection() {
  return (
    <section id="work" className="relative py-24 sm:py-32 bg-[#f7f7f9] text-[#0d0d11] border-b border-zinc-200">
      <div className="w-[90%] max-w-[1500px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[7px] bg-purple-50 border border-purple-200 text-xs font-bold uppercase tracking-wider text-[#8b5cf6]">
              <span className="w-2 h-2 rounded-[7px] bg-[#8b5cf6] animate-pulse" />
              <span>SELECTED WORK & CASE STUDIES</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0d0d11] tracking-tight leading-[1.15]">
              Transforming Customer Experiences Across Industries.
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
              Explore custom engineering deployments, high-speed architectures, and conversion-optimized platforms.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8b5cf6] hover:underline underline-offset-4 shrink-0"
          >
            <span>View All Selected Work ({PROJECTS_DATA.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Projects Grid with Full-Background Image Cards & Cinematic Dark Overlay */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS_DATA.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <Link
                href={`/work/${project.id}`}
                className="group relative block rounded-3xl overflow-hidden min-h-[460px] sm:min-h-[520px] shadow-lg hover:shadow-2xl border border-white/20 transition-all hover:scale-[1.01] hover:border-[#8b5cf6] flex flex-col justify-between p-8 text-white bg-zinc-950"
              >
                {/* Full-Card Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Cinematic Multi-Stop Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/40 backdrop-blur-[1px]" />
                </div>

                {/* Card Top: Category Badge & External Arrow Button */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-4 py-1.5 rounded-[7px] bg-[#8b5cf6] text-white text-xs font-bold shadow-md">
                    {project.category}
                  </span>
                  <div className="w-11 h-11 rounded-[7px] bg-white/20 border border-white/30 backdrop-blur-md flex items-center justify-center text-white shadow-md group-hover:bg-[#8b5cf6] group-hover:scale-110 transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Bottom: Text Content Layered Over the Background Image */}
                <div className="relative z-10 space-y-4 pt-20">
                  <span className="text-xs font-bold text-purple-300 uppercase tracking-widest block">
                    {project.index} — CLIENT: {project.client}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight group-hover:text-purple-200 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-zinc-300 text-sm leading-relaxed max-w-xl line-clamp-2">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-white/10 border border-white/20 text-xs text-zinc-200 font-semibold backdrop-blur-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/20 flex items-center justify-between text-xs font-bold text-white">
                    <span className="text-purple-300">IMPACT: {project.impactMetric}</span>
                    <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
