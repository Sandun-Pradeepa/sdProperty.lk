"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Luxury House",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Construct WhatsApp message as well
      const message = encodeURIComponent(
        `*New Contact Submission from Website*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Interest:* ${formData.interest}\n*Message:* ${formData.message}`
      );
      window.open(`https://wa.me/94775104625?text=${message}`, "_blank");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-gray-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* PAGE HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16 space-y-4"
      >
        <span className="text-xs font-semibold tracking-widest uppercase text-[#d4af37] block">
          Get in Touch
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white">
          Contact <span className="text-gold-gradient">SD Property.lk</span>
        </h1>
        <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
          Our real estate advisors are available for private consultations, property viewings, and title deed inquiries.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        {/* LEFT PANEL: CONTACT DETAILS & INFO WITH SLIDE-IN ANIMATION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 bg-gradient-to-b from-[#151d2a] to-[#0d131f] p-8 rounded-2xl border border-[#d4af37]/30 shadow-2xl space-y-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b0f17] border border-[#d4af37]/30 text-[#f3e5ab] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Direct Corporate Access</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-white">
              Headquarters & Contacts
            </h2>
            <p className="text-xs text-gray-400 mt-2 leading-relaxed">
              Reach out directly to Founder & Managing Director Suresh Wickramarathna.
            </p>
          </div>

          <div className="space-y-6 text-sm">
            {/* Phone */}
            <motion.div
              whileHover={{ x: 6 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-[#0b0f17]/70 border border-gray-800 hover:border-[#d4af37]/40 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-[#151d2a] border border-[#d4af37]/40 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <span className="block text-[10px] text-gray-400 uppercase tracking-widest">
                  Direct Hotline & WhatsApp
                </span>
                <a
                  href="tel:+94775104625"
                  className="text-base font-bold text-white font-mono hover:text-[#d4af37] transition-colors"
                >
                  +94 77 510 4625
                </a>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              whileHover={{ x: 6 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-[#0b0f17]/70 border border-gray-800 hover:border-[#d4af37]/40 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-[#151d2a] border border-[#d4af37]/40 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <span className="block text-[10px] text-gray-400 uppercase tracking-widest">
                  Official Email
                </span>
                <a
                  href="mailto:wickramarathnasuresh78@gmail.com"
                  className="text-sm font-semibold text-white break-all hover:text-[#d4af37] transition-colors"
                >
                  wickramarathnasuresh78@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              whileHover={{ x: 6 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-[#0b0f17]/70 border border-gray-800 hover:border-[#d4af37]/40 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-[#151d2a] border border-[#d4af37]/40 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <span className="block text-[10px] text-gray-400 uppercase tracking-widest">
                  Office Location
                </span>
                <p className="text-sm font-semibold text-white">
                  Korathota, 10640, Sri Lanka
                </p>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              whileHover={{ x: 6 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-[#0b0f17]/70 border border-gray-800 hover:border-[#d4af37]/40 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-[#151d2a] border border-[#d4af37]/40 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <span className="block text-[10px] text-gray-400 uppercase tracking-widest">
                  Operating Hours
                </span>
                <p className="text-xs font-medium text-gray-200">
                  Monday - Sunday: 8:00 AM – 8:00 PM (IST)
                </p>
              </div>
            </motion.div>
          </div>

          <div className="pt-4 border-t border-gray-800 flex items-center gap-2 text-xs text-emerald-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Guaranteed Confidentiality for All Property Inquiries</span>
          </div>
        </motion.div>

        {/* RIGHT PANEL: MODERN CONTACT FORM WITH HOVER STATES */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-7 bg-[#151d2a] p-8 rounded-2xl border border-[#d4af37]/20 shadow-2xl"
        >
          <h2 className="text-2xl font-serif font-bold text-white mb-2">
            Send an Inquiry
          </h2>
          <p className="text-xs text-gray-400 mb-6">
            Fill in your preferred details below to request floor plans, title deed documents, or schedule an onsite visit.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="block text-xs font-medium uppercase tracking-wider text-gray-300">
                  Your Full Name *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  required
                  placeholder="Suresh Wickramarathna"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#0b0f17] text-sm text-white px-4 py-3 rounded-xl border border-gray-800 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] focus:outline-none transition-all"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="block text-xs font-medium uppercase tracking-wider text-gray-300">
                  Phone / WhatsApp Number *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="tel"
                  required
                  placeholder="+94 77 510 4625"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#0b0f17] text-sm text-white px-4 py-3 rounded-xl border border-gray-800 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] focus:outline-none transition-all font-mono"
                />
              </div>
            </div>

            {/* Email & Interest */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="block text-xs font-medium uppercase tracking-wider text-gray-300">
                  Email Address *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  required
                  placeholder="wickramarathnasuresh78@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#0b0f17] text-sm text-white px-4 py-3 rounded-xl border border-gray-800 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] focus:outline-none transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-medium uppercase tracking-wider text-gray-300">
                  Property Interest
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full bg-[#0b0f17] text-sm text-white px-4 py-3 rounded-xl border border-gray-800 focus:border-[#d4af37] focus:outline-none transition-all cursor-pointer"
                >
                  <option value="Luxury House">Luxury House (Colombo / Korathota)</option>
                  <option value="Prime Coastal Land">Prime Coastal Land (Galle / Beachfront)</option>
                  <option value="Sanctuary Villa">Sanctuary Villa (Kandy Hillside)</option>
                  <option value="Commercial Lake Estate">Commercial Estate (Rajagiriya)</option>
                  <option value="General Property Consultation">General Property Consultation</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium uppercase tracking-wider text-gray-300">
                Your Specific Inquiry / Message *
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.005 }}
                rows={4}
                required
                placeholder="I would like to inquire about viewing scheduling and legal deed verification..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#0b0f17] text-sm text-white p-4 rounded-xl border border-gray-800 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] focus:outline-none transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#aa820a] hover:brightness-110 text-black font-bold text-sm tracking-widest uppercase shadow-xl flex items-center justify-center gap-3 transition-all cursor-pointer gold-glow-button"
            >
              {loading ? (
                <span>Transmitting Inquiry...</span>
              ) : (
                <>
                  <Send className="w-4 h-4 fill-black" />
                  <span>Send Inquiry & Connect WhatsApp</span>
                </>
              )}
            </motion.button>
          </form>

          {/* Submission Feedback Banner */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <p className="font-semibold">Thank you for your inquiry!</p>
                  <p className="text-[11px] text-emerald-300">
                    A WhatsApp window has been launched with your details. Director Suresh Wickramarathna will connect with you shortly.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* MAP SECTION: GOOGLE MAPS IFRAME EMBED PLACEHOLDER FOR KORATHOTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl bg-[#151d2a] p-4 space-y-4"
      >
        <div className="flex items-center justify-between px-2 pt-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d4af37]">
            <MapPin className="w-4 h-4" />
            <span>Korathota, 10640 Head Office Location</span>
          </div>
          <span className="text-[11px] text-gray-400">Sri Lanka</span>
        </div>

        <div className="relative aspect-[21/9] w-full rounded-xl overflow-hidden bg-gray-900 border border-gray-800">
          <iframe
            title="SD Property.lk Location Map"
            src="https://maps.google.com/maps?q=Korathota,%20Kaduwela,%20Sri%20Lanka&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 filter brightness-[0.7] contrast-[1.2] invert-[0.9] hue-rotate-[180deg]"
            allowFullScreen={false}
            loading="lazy"
          />
        </div>
      </motion.section>
    </div>
  );
}
