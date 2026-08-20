"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Mail, MapPin, Clock, Sparkles, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti";

const PROJECT_TYPES = [
  "Custom Next.js Web App",
  "WordPress & CMS Website",
  "SEO & Search Dominance",
  "Mobile App (iOS & Android)",
  "Social Media Posts & Creatives",
  "Video Editing & Motion Graphics",
  "Graphic Design & Branding",
  "Full Growth Retainer",
];

const BUDGET_RANGES = [
  "$1,000 – $3,000",
  "$3,000 – $8,000",
  "$8,000 – $20,000",
  "$20,000+",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Custom Next.js Web App",
    budget: "$3,000 – $8,000",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-28 bg-zinc-900 text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[7px] bg-indigo-950 border border-indigo-700 text-indigo-300 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s build something meaningful.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-4">
            Fill out the brief below or reach out directly. We review all technical requirements and respond within 24 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-800/80 border border-zinc-700 shadow-2xl">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-[7px] bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                    <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out to KADS.COM. Our strategy and engineering team is reviewing your project details and will be in touch within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          company: "",
                          projectType: "Custom Next.js Web App",
                          budget: "$3,000 – $8,000",
                          message: "",
                        });
                      }}
                      className="px-6 py-2.5 rounded-[7px] bg-zinc-700 text-white font-semibold text-sm hover:bg-zinc-600 transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Alex Morgan"
                          className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/80 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-400 text-sm transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/80 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-400 text-sm transition-all"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Enterprise Brand"
                        className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/80 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-400 text-sm transition-all"
                      />
                    </div>

                    {/* Project Type Selector */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider mb-3">
                        Service Discipline
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {PROJECT_TYPES.map((type) => (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setFormData({ ...formData, projectType: type })}
                            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                              formData.projectType === type
                                ? "bg-white text-zinc-900 border border-white shadow-md"
                                : "bg-zinc-900/60 border border-zinc-700 text-zinc-400 hover:text-white"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget Selector */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider mb-3">
                        Estimated Budget
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {BUDGET_RANGES.map((b) => (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setFormData({ ...formData, budget: b })}
                            className={`px-3 py-2.5 rounded-xl text-xs font-mono transition-all text-center ${
                              formData.budget === b
                                ? "bg-indigo-600 text-white border border-indigo-500 shadow-md"
                                : "bg-zinc-900/60 border border-zinc-700 text-zinc-400 hover:text-white"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider mb-2">
                        Project Overview / Goals *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your timeline, tech requirements, and project vision..."
                        className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/80 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-400 text-sm transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-white text-zinc-900 hover:bg-zinc-100 font-extrabold text-base rounded-2xl flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <Send className="w-5 h-5 text-indigo-600" />
                          <span>Submit Project Brief →</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="p-8 rounded-3xl bg-zinc-800/80 border border-zinc-700 space-y-8">
              <h3 className="text-xl font-bold text-white pb-4 border-b border-zinc-700">
                Direct Contact & Consultation
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-700 flex items-center justify-center text-indigo-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-400 uppercase">Direct Email</div>
                    <a
                      href="mailto:hello@kads.com"
                      className="text-base font-bold text-white hover:text-indigo-400 transition-colors"
                    >
                      hello@kads.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-indigo-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-400 uppercase">Response Time</div>
                    <div className="text-base font-bold text-white">Within 24 Hours</div>
                    <div className="text-xs text-zinc-400">Monday – Saturday Global Coverage</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-indigo-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-400 uppercase">Engineering Hubs</div>
                    <div className="text-base font-bold text-white">Distributed Global Team</div>
                    <div className="text-xs text-zinc-400">EST & UTC Coverage</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Widget Card */}
            <div className="p-6 rounded-3xl bg-indigo-950/40 border border-indigo-800/60 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-indigo-300">
                <span>EST & UTC REGIONAL DESK</span>
                <span className="text-emerald-400 flex items-center gap-1 font-bold">
                  <span className="w-2 h-2 rounded-[7px] bg-emerald-400 animate-ping" />
                  ACCEPTING NEW CLIENTS
                </span>
              </div>
              <p className="text-zinc-300 text-xs leading-relaxed">
                Currently booking upcoming development, SEO, and video production sprint cycles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
