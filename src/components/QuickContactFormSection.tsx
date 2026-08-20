"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Mail, Phone, MapPin, ChevronDown } from "lucide-react";

const COUNTRY_CODES = [
  { code: "+1", country: "US/CA", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+91", country: "IN", flag: "🇮🇳" },
  { code: "+61", country: "AU", flag: "🇦🇺" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+49", country: "DE", flag: "🇩🇪" },
  { code: "+65", country: "SG", flag: "🇸🇬" },
  { code: "+33", country: "FR", flag: "🇫🇷" },
];

export default function QuickContactFormSection() {
  const [countryCode, setCountryCode] = useState(COUNTRY_CODES[0]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="quick-contact" className="relative py-24 sm:py-32 bg-[#f7f7f9] text-[#0d0d11] border-b border-zinc-200">
      <div className="w-[90%] max-w-[1500px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Clean Light Channels */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[7px] bg-purple-50 border border-purple-200 text-xs font-bold uppercase tracking-wider text-[#8b5cf6]">
              <span className="w-2 h-2 rounded-[7px] bg-[#8b5cf6] animate-pulse" />
              <span>QUICK INQUIRY</span>
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0d0d11] tracking-tight leading-[1.15]">
              Ready to build something extraordinary?
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
              Send us a quick message below. Our Senior Technical Lead will get back to you within 24 hours.
            </p>

            {/* Clean Light Direct Contact Cards (Removed Black Patch Box) */}
            <div className="pt-2 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8b5cf6] block">
                KADS DIRECT CHANNELS
              </span>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/80 border border-zinc-200/80 shadow-xs backdrop-blur-sm">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-[#8b5cf6] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold block">Email Support</span>
                    <span className="text-sm font-bold text-[#0d0d11]">hello@kads.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/80 border border-zinc-200/80 shadow-xs backdrop-blur-sm">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-[#8b5cf6] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold block">Direct Line</span>
                    <span className="text-sm font-bold text-[#0d0d11]">+1 (800) KADS-COM</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/80 border border-zinc-200/80 shadow-xs backdrop-blur-sm">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-[#8b5cf6] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold block">Global Studios</span>
                    <span className="text-sm font-bold text-[#0d0d11]">San Francisco · London · Mumbai</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Simple Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200 shadow-sm">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-[7px] bg-purple-100 text-[#8b5cf6] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0d0d11]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-zinc-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you. A Senior Architect will review your note and respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-zinc-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-3.5 rounded-2xl bg-white/90 border border-zinc-200 text-sm focus:border-[#8b5cf6] focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-zinc-700 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3.5 rounded-2xl bg-white/90 border border-zinc-200 text-sm focus:border-[#8b5cf6] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone with Country Code Flag Dropdown */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-zinc-700 mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative flex items-center">
                      {/* Country Flag Selector Dropdown Button */}
                      <button
                        type="button"
                        onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                        className="flex items-center gap-1.5 px-3.5 py-3.5 rounded-l-2xl bg-zinc-100 border border-r-0 border-zinc-200 text-xs font-bold text-zinc-800 hover:bg-zinc-200 transition-colors shrink-0"
                      >
                        <span className="text-lg leading-none">{countryCode.flag}</span>
                        <span>{countryCode.code}</span>
                        <ChevronDown className="w-3.5 h-3.5 text-zinc-500" />
                      </button>

                      {/* Dropdown Menu */}
                      {showCountryDropdown && (
                        <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-zinc-200 rounded-2xl shadow-xl z-50 py-2 max-h-52 overflow-y-auto">
                          {COUNTRY_CODES.map((c) => (
                            <button
                              type="button"
                              key={c.code + c.country}
                              onClick={() => {
                                setCountryCode(c);
                                setShowCountryDropdown(false);
                              }}
                              className="w-full px-4 py-2 text-left text-xs font-semibold hover:bg-purple-50 hover:text-[#8b5cf6] flex items-center justify-between"
                            >
                              <span className="flex items-center gap-2">
                                <span className="text-lg">{c.flag}</span>
                                <span>{c.country}</span>
                              </span>
                              <span className="font-mono text-zinc-500 font-bold">{c.code}</span>
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Phone Input */}
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-3.5 rounded-r-2xl bg-white/90 border border-zinc-200 text-sm focus:border-[#8b5cf6] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-zinc-700 mb-1.5">
                      Project Goals / Message *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your website, app, SEO, or design project..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/90 border border-zinc-200 text-sm focus:border-[#8b5cf6] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-[7px] bg-[#8b5cf6] hover:bg-[#6d28d9] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-xl disabled:opacity-50 hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>{isSubmitting ? "Sending Message..." : "Send Message"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
