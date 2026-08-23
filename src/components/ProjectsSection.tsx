"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projectsData";

export default function ProjectsSection() {
  return (
    <section
      id="work"
      className="relative bg-[var(--kads-bg-alt)] text-[var(--kads-text)] border-b border-[var(--kads-border)]"
      style={{ paddingTop: "var(--kads-section-py)", paddingBottom: "var(--kads-section-py)" }}
    >
      <div className="kads-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="kads-pill">
              <span className="w-2 h-2 rounded-full bg-[var(--kads-purple)] animate-pulse" />
              <span>SELECTED WORK</span>
            </span>
            <h2 className="kads-heading">
              Projects Built with Precision.
            </h2>
            <p className="kads-subheading">
              A selection of projects showcasing our capabilities across web development, mobile apps, e-commerce, and creative production.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--kads-purple)] hover:underline underline-offset-4 shrink-0"
          >
            <span>View All Projects ({PROJECTS_DATA.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                className="group relative block rounded-[var(--kads-radius-xl)] overflow-hidden min-h-[440px] sm:min-h-[500px] shadow-[var(--kads-shadow-md)] hover:shadow-[var(--kads-shadow-lg)] border border-white/20 transition-all hover:border-[var(--kads-purple)] flex flex-col justify-between p-8 text-white bg-zinc-950"
              >
                {/* Full-Card Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/35" />
                </div>

                {/* Card Top */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-4 py-1.5 rounded-[var(--kads-radius-sm)] bg-[var(--kads-purple)] text-white text-xs font-bold shadow-md">
                    {project.category}
                  </span>
                  <div className="w-11 h-11 rounded-[var(--kads-radius-sm)] bg-white/15 border border-white/25 backdrop-blur-md flex items-center justify-center text-white shadow-md group-hover:bg-[var(--kads-purple)] group-hover:scale-110 transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Bottom */}
                <div className="relative z-10 space-y-4 pt-16">
                  <span className="text-xs font-bold text-purple-300 uppercase tracking-widest block">
                    {project.index} — {project.category}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight group-hover:text-purple-200 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-zinc-300 text-sm leading-relaxed max-w-xl line-clamp-2">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs text-zinc-200 font-medium backdrop-blur-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs font-bold text-white">
                    <span className="text-purple-300">{project.impactMetric}</span>
                    <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                      View Project →
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
