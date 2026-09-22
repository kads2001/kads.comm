"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Cpu } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import QuickContactFormSection from "@/components/QuickContactFormSection";
import { PROJECTS_DATA } from "@/data/projectsData";

export default function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const study = PROJECTS_DATA.find((p) => p.id === resolvedParams.id);

  if (!study) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center text-[#0d0d11]">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-zinc-600 mb-6">The requested case study does not exist or has been relocated.</p>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-[7px] bg-black text-white hover:bg-zinc-800 font-mono text-xs uppercase tracking-wider transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === study.id);
  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  return (
    <main className="relative min-h-screen bg-white text-[#0d0d11] selection:bg-black selection:text-white font-sans">
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
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white hover:underline underline-offset-4 mb-8 font-mono"
          >
            <ArrowLeft className="w-4 h-4" /> Return to All Work
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-zinc-300 mb-4 font-mono">
            <span className="px-3.5 py-1 rounded-[7px] bg-white text-black font-bold uppercase tracking-wider">
              {study.category}
            </span>
            <span>·</span>
            <span>CLIENT: {study.client}</span>
            <span>·</span>
            <span>YEAR: {study.year}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 max-w-4xl">
            {study.title}
          </h1>

          <p className="text-lg sm:text-2xl text-zinc-300 font-normal leading-relaxed max-w-3xl mb-8">
            {study.summary}
          </p>

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-[7px] bg-white/10 border border-white/20 text-white text-xs font-bold backdrop-blur-md font-mono">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>PRIMARY IMPACT: {study.impactMetric}</span>
          </div>
        </div>
      </section>

      {/* High-Resolution Project Showcase Image */}
      <section className="py-12 bg-[#fbfbfa] border-b border-zinc-200">
        <div className="w-[90%] max-w-[1500px] mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 bg-zinc-900">
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-80 sm:h-[540px] object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Challenge & Solution Grid with Fixed Background & Frosted Glass */}
      <section
        className="py-24 bg-fixed bg-cover bg-center text-[#0d0d11] relative border-b border-zinc-200"
        style={{ backgroundImage: "url('/images/tech_workspace_bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/96 backdrop-blur-md" />

        <div className="w-[90%] max-w-[1500px] mx-auto relative z-10 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-md">
              <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold block mb-3 font-mono">
                01 — THE STRATEGIC CHALLENGE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09090b] mb-4">What needed fixing?</h2>
              <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">{study.challenge}</p>
            </div>

            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-md">
              <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold block mb-3 font-mono">
                02 — KADS SOLUTION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09090b] mb-4">How we solved it.</h2>
              <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">{study.solution}</p>
            </div>
          </div>

          {/* Key Impact Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 text-white shadow-2xl border border-zinc-800">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Verified Measurable Outcomes
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {study.impact.map((imp, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-5 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-100 text-sm font-semibold"
                >
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                  <span>{imp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Architecture */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-5 h-5 text-black" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09090b]">Technical Architecture &amp; Stack</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {study.architecture.map((arch, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-zinc-200 text-xs text-zinc-800 font-semibold shadow-sm"
                >
                  <span className="text-black font-bold block mb-1 font-mono">0{idx + 1} LAYER</span>
                  <div className="text-sm font-bold text-[#09090b]">{arch}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Project Footer */}
          <div className="pt-12 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs text-zinc-500 uppercase font-bold font-mono">NEXT CASE STUDY</span>
              <h3 className="text-2xl font-bold text-[#09090b] mt-1">{nextProject.title}</h3>
            </div>
            <Link
              href={`/work/${nextProject.id}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-[7px] bg-black text-white font-bold text-xs uppercase tracking-wider hover:bg-zinc-800 transition-all border border-black shadow-md cursor-pointer"
            >
              <span>View Next Study</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <QuickContactFormSection />
      <Footer />
    </main>
  );
}
