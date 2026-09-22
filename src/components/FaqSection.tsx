"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Do you build custom code or WordPress sites?",
    answer:
      "We do both. For complex web applications, SaaS products, and high-performance sites, we build with Next.js and TypeScript. For content-driven sites and e-commerce, we create custom WordPress themes with WooCommerce that your team can easily manage.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "A focused website or WordPress build typically takes 2 to 4 weeks. Full-scale web applications, custom e-commerce stores, or mobile apps generally range from 4 to 8 weeks from strategy through launch, depending on complexity.",
  },
  {
    question: "Do I own the code and design files?",
    answer:
      "Yes, 100%. Upon project completion, you receive full ownership of all code (via GitHub), design files (Figma), and creative assets. No vendor lock-in or recurring licensing fees.",
  },
  {
    question: "How does your SEO optimization work?",
    answer:
      "We perform a comprehensive technical audit, fix crawl and indexing issues, implement structured data (JSON-LD), optimize Core Web Vitals for speed, and target relevant keywords. Our goal is to build a solid technical foundation that search engines reward.",
  },
  {
    question: "Can you create ongoing content, social posts, and video?",
    answer:
      "Yes. We offer creative packages that include social media carousels, motion graphics, video editing, and ad creatives optimized for platforms like Instagram, TikTok, and Meta Ads.",
  },
  {
    question: "What does your pricing look like?",
    answer:
      "Every project is scoped individually based on your specific needs. We provide transparent, detailed proposals with clear deliverables and timelines. Contact us with your project details and we'll send you a custom estimate.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative bg-white text-[var(--kads-text)] border-b border-[var(--kads-border)]"
      style={{ paddingTop: "var(--kads-section-py)", paddingBottom: "var(--kads-section-py)" }}
    >
      <div className="kads-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="kads-pill">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
              <span>FAQ</span>
            </span>
            <h2 className="kads-heading">
              Common Questions.
            </h2>
            <p className="kads-subheading">
              Everything you need to know about working with KADS.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-[var(--kads-radius-xl)] bg-white border border-[var(--kads-border)] overflow-hidden transition-all shadow-[var(--kads-shadow-sm)] hover:border-black hover:shadow-[var(--kads-shadow-md)]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-base sm:text-lg font-bold text-[var(--kads-text)]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-[var(--kads-radius-sm)] flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen ? "rotate-180 bg-black text-white" : "bg-zinc-100 text-black"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 sm:px-7 pb-7 text-[var(--kads-text-muted)] text-sm sm:text-base leading-relaxed border-t border-[var(--kads-border-light)] pt-4"
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
