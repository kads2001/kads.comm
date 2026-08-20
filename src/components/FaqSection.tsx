"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Do you offer full custom code or WordPress theme development?",
    answer:
      "We excel in both. For complex data portals, SaaS, and sub-second web applications, we engineer with Next.js 16 and TypeScript. For client-editable e-commerce and content marketing sites, we build custom WordPress PHP themes and native Gutenberg blocks that marketing teams can update effortlessly.",
    category: "Development",
  },
  {
    question: "What is your typical turnaround timeline for a website or mobile app?",
    answer:
      "A focused custom marketing or WordPress build typically takes 2 to 3 weeks. Full-scale enterprise web applications, custom WooCommerce stores, or iOS/Android mobile apps generally range from 3 to 6 weeks from strategy through production launch.",
    category: "Process",
  },
  {
    question: "Do I own 100% of the code, design assets, and video files?",
    answer:
      "Yes, absolutely. Upon final project completion and delivery, 100% intellectual property, full GitHub repository ownership, Figma design files, 4K video exports, and raw project assets are transferred directly to your organization.",
    category: "Ownership",
  },
  {
    question: "How do your Technical SEO optimizations produce measurable rankings?",
    answer:
      "We execute a comprehensive 120-point technical audit, fix crawl budget errors, implement rich JSON-LD schema for Google rich snippets, optimize Core Web Vitals to 100/100, and target high-intent commercial keywords.",
    category: "Growth",
  },
  {
    question: "Can you create ongoing social media posts, reels, and video ad creatives?",
    answer:
      "Yes. We offer monthly creative retainer packages that include swipeable educational carousels, 3D product motion animations, and 9:16 vertical video edits optimized for Instagram Reels, TikTok, and high-ROAS Meta ad campaigns.",
    category: "Creative",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-white text-[#0d0d11] border-b border-zinc-200">
      <div className="w-[90%] max-w-[1500px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[7px] bg-purple-50 border border-purple-200 text-xs font-bold uppercase tracking-wider text-[#8b5cf6]">
              <span className="w-2 h-2 rounded-[7px] bg-[#8b5cf6] animate-pulse" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0d0d11] tracking-tight leading-[1.15]">
              Clear Answers to Common Questions.
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
              Everything you need to know about our engineering standards, timelines, intellectual property, and creative production.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-3xl bg-white border border-zinc-200 overflow-hidden transition-all shadow-sm hover:border-[#8b5cf6] hover:shadow-lg"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 sm:p-8 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-lg sm:text-xl font-extrabold text-[#0d0d11]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-[7px] flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? "rotate-180 bg-[#8b5cf6] text-white" : "bg-zinc-100 text-black"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 sm:px-8 pb-8 text-zinc-600 text-sm sm:text-base leading-relaxed border-t border-zinc-100 pt-4"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
