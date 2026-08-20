"use client";

import { motion } from "framer-motion";
import { Quote, Star, Building2 } from "lucide-react";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "KADS transformed our digital platform into a high-speed, modern flagship. Their attention to design detail and engineering precision exceeded our highest standards.",
    author: "Elena Rostova",
    role: "Chief Technology Officer",
    company: "Apex Global Financial",
    industry: "Enterprise FinTech",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "Our organic search impressions surged from 4K to 3.8M monthly within 4 months. Their full-stack technical SEO and speed engineering deliver measurable revenue.",
    author: "Marcus Vance",
    role: "Head of Growth",
    company: "CloudPulse Solutions",
    industry: "B2B SaaS",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "The custom WordPress store they engineered reduced page load time from 6.2s to 0.9s, lifting mobile conversion rates by 240% in the first 30 days.",
    author: "Sophia Sterling",
    role: "Managing Director",
    company: "Nordic Living Collective",
    industry: "E-Commerce & Retail",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-[#f7f7f9] text-[#0d0d11] border-b border-zinc-200">
      <div className="w-[90%] max-w-[1500px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[7px] bg-purple-50 border border-purple-200 text-xs font-bold uppercase tracking-wider text-[#8b5cf6]">
              <span className="w-2 h-2 rounded-[7px] bg-[#8b5cf6] animate-pulse" />
              <span>CLIENT TESTIMONIALS</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0d0d11] tracking-tight leading-[1.15]">
              What Our Partners Say.
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
              Verified client reviews demonstrating our relentless commitment to digital craftsmanship.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200 hover:border-[#8b5cf6] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#8b5cf6] text-[#8b5cf6]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-zinc-300" />
                </div>

                <p className="text-zinc-700 text-sm leading-relaxed mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-200/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-[7px] bg-[#8b5cf6] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                  {t.author.charAt(0)}
                </div>

                <div>
                  <div className="font-bold text-[#0d0d11] text-sm">{t.author}</div>
                  <div className="text-xs text-zinc-600 font-medium">{t.role}</div>
                  <div className="text-[11px] text-zinc-400 flex items-center gap-1 mt-0.5">
                    <Building2 className="w-3 h-3" />
                    <span>{t.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
