"use client";

import { motion } from "framer-motion";
import { Quote, Star, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative bg-[var(--kads-bg-alt)] text-[var(--kads-text)] border-b border-[var(--kads-border)]"
      style={{ paddingTop: "var(--kads-section-py)", paddingBottom: "var(--kads-section-py)" }}
    >
      <div className="kads-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="kads-pill">
              <span className="w-2 h-2 rounded-full bg-[var(--kads-purple)] animate-pulse" />
              <span>CLIENT FEEDBACK</span>
            </span>
            <h2 className="kads-heading">
              What Our Clients Say.
            </h2>
            <p className="kads-subheading">
              We believe in earning trust through quality work. This section will be updated with genuine client feedback as we grow.
            </p>
          </div>
        </div>

        {/* Honest placeholder for future testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center py-16"
        >
          <div className="w-16 h-16 rounded-2xl bg-[var(--kads-purple-light)] flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="w-7 h-7 text-[var(--kads-purple)]" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-[var(--kads-text)] mb-4">
            Testimonials Coming Soon
          </h3>

          <p className="text-[var(--kads-text-muted)] text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
            We&apos;re a growing studio building real relationships with our clients.
            Genuine testimonials will appear here as we deliver exceptional work.
          </p>

          <Link
            href="/contact"
            className="kads-btn-primary"
          >
            <span>Become Our Next Success Story</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
