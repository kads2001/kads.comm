"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Mail, MapPin, ChevronDown, Clock, ShieldCheck } from "lucide-react";

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
    company: "",
    service: "",
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
    <section
      id="contact"
      className="relative bg-[var(--kads-bg-alt)] text-[var(--kads-text)] border-b border-[var(--kads-border)]"
      style={{ paddingTop: "var(--kads-section-py)", paddingBottom: "var(--kads-section-py)" }}
    >
      <div className="kads-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 min-[1600px]:gap-16 items-start">
          {/* Left Column: Headline & Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <span className="kads-pill">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
              <span>GET IN TOUCH</span>
            </span>

            <h2 className="kads-heading">
              Let&apos;s build something that moves your business forward.
            </h2>

            <p className="kads-subheading">
              Tell us about your project. We&apos;ll get back to you within 24 hours with a clear next step.
            </p>

            {/* Direct Contact */}
            <div className="pt-2 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 block font-mono">
                Direct Contact
              </span>
              <div className="grid grid-cols-1 gap-3">
                <a
                  href="mailto:hello@kads.com"
                  className="flex items-center gap-3 p-4 rounded-[var(--kads-radius-lg)] bg-white border border-[var(--kads-border)] shadow-[var(--kads-shadow-sm)] hover:border-black transition-colors"
                >
                  <div className="w-9 h-9 rounded-[var(--kads-radius-md)] bg-black text-white flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[var(--kads-text-subtle)] uppercase tracking-wider font-semibold block font-mono">Email</span>
                    <span className="text-sm font-bold text-[var(--kads-text)]">hello@kads.com</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 rounded-[var(--kads-radius-lg)] bg-white border border-[var(--kads-border)] shadow-[var(--kads-shadow-sm)]">
                  <div className="w-9 h-9 rounded-[var(--kads-radius-md)] bg-black text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[var(--kads-text-subtle)] uppercase tracking-wider font-semibold block font-mono">Location</span>
                    <span className="text-sm font-bold text-[var(--kads-text)]">Remote-First Studio</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-[var(--kads-radius-lg)] bg-white border border-[var(--kads-border)] shadow-[var(--kads-shadow-sm)]">
                  <div className="w-9 h-9 rounded-[var(--kads-radius-md)] bg-black text-white flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[var(--kads-text-subtle)] uppercase tracking-wider font-semibold block font-mono">Response Time</span>
                    <span className="text-sm font-bold text-[var(--kads-text)]">Within 24 Hours</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-[var(--kads-radius-lg)] bg-white border border-[var(--kads-border)] shadow-[var(--kads-shadow-sm)]">
                  <div className="w-9 h-9 rounded-[var(--kads-radius-md)] bg-black text-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[var(--kads-text-subtle)] uppercase tracking-wider font-semibold block font-mono">Guarantees</span>
                    <span className="text-sm font-bold text-[var(--kads-text)]">100% Commercial IP Handover</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 min-[1600px]:p-12 rounded-[var(--kads-radius-xl)] bg-white border border-[var(--kads-border)] shadow-[var(--kads-shadow-sm)]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[var(--kads-text)]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-[var(--kads-text-muted)] text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. We&apos;ll review your message and respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider font-bold text-zinc-700 mb-1.5 font-mono">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-3.5 rounded-[var(--kads-radius-md)] bg-white border border-[var(--kads-border)] text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider font-bold text-zinc-700 mb-1.5 font-mono">
                        Work Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3.5 rounded-[var(--kads-radius-md)] bg-white border border-[var(--kads-border)] text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company */}
                    <div>
                      <label htmlFor="contact-company" className="block text-xs uppercase tracking-wider font-bold text-zinc-700 mb-1.5 font-mono">
                        Company
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your company name"
                        className="w-full px-4 py-3.5 rounded-[var(--kads-radius-md)] bg-white border border-[var(--kads-border)] text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-all"
                      />
                    </div>

                    {/* Service Interest */}
                    <div>
                      <label htmlFor="contact-service" className="block text-xs uppercase tracking-wider font-bold text-zinc-700 mb-1.5 font-mono">
                        Service Needed
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-[var(--kads-radius-md)] bg-white border border-[var(--kads-border)] text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-all appearance-none"
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="wordpress">WordPress & E-Commerce</option>
                        <option value="seo">Technical SEO</option>
                        <option value="mobile">Mobile App Development</option>
                        <option value="social-video">Social Media & Video</option>
                        <option value="branding">Branding & Design</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>
                  </div>

                  {/* Phone with Country Code */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs uppercase tracking-wider font-bold text-zinc-700 mb-1.5 font-mono">
                      Phone Number
                    </label>
                    <div className="relative flex items-center">
                      <button
                        type="button"
                        onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                        className="flex items-center gap-1.5 px-3.5 py-3.5 rounded-l-[var(--kads-radius-md)] bg-zinc-50 border border-r-0 border-[var(--kads-border)] text-xs font-bold text-zinc-800 hover:bg-zinc-100 transition-colors shrink-0"
                        aria-expanded={showCountryDropdown}
                        aria-haspopup="listbox"
                      >
                        <span className="text-lg leading-none">{countryCode.flag}</span>
                        <span>{countryCode.code}</span>
                        <ChevronDown className="w-3.5 h-3.5 text-zinc-500" />
                      </button>

                      {showCountryDropdown && (
                        <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-[var(--kads-border)] rounded-[var(--kads-radius-md)] shadow-[var(--kads-shadow-lg)] z-50 py-2 max-h-52 overflow-y-auto" role="listbox">
                          {COUNTRY_CODES.map((c) => (
                            <button
                              type="button"
                              key={c.code + c.country}
                              role="option"
                              aria-selected={countryCode.code === c.code}
                              onClick={() => {
                                setCountryCode(c);
                                setShowCountryDropdown(false);
                              }}
                              className="w-full px-4 py-2 text-left text-xs font-semibold hover:bg-zinc-100 hover:text-black flex items-center justify-between"
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

                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-3.5 rounded-r-[var(--kads-radius-md)] bg-white border border-[var(--kads-border)] text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider font-bold text-zinc-700 mb-1.5 font-mono">
                      Project Details *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                      className="w-full px-4 py-3.5 rounded-[var(--kads-radius-md)] bg-white border border-[var(--kads-border)] text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-[var(--kads-radius-sm)] bg-black hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-black shadow-md disabled:opacity-50 active:scale-[0.99] cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Sending Brief..." : "Send Message"}</span>
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
