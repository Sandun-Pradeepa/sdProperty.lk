"use client";

import React from "react";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Building2,
  Award,
  Users,
  Compass,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";

export default function AboutPage() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#d4af37]" />,
      title: "100% Verified Title Deeds",
      description:
        "Every listing undergoes rigorous legal scrutiny, title search checks, and surveying to ensure zero encumbrances and instant transfer eligibility.",
    },
    {
      icon: <Award className="w-8 h-8 text-[#d4af37]" />,
      title: "Exclusive High-Value Estates",
      description:
        "Access off-market mansions, private coastal plots, and hillside sanctuary villas not listed anywhere else in Sri Lanka.",
    },
    {
      icon: <Compass className="w-8 h-8 text-[#d4af37]" />,
      title: "VIP Concierge & Valuation",
      description:
        "From architectural consultations and land surveying to bank valuation and deed transfer, we handle every detail seamlessly.",
    },
    {
      icon: <Building2 className="w-8 h-8 text-[#d4af37]" />,
      title: "Prime Regional Presence",
      description:
        "Deep local market expertise across Cinnamon Gardens Colombo 07, Aniwatte Kandy, Thalpe Galle, and Korathota Kaduwela.",
    },
  ];

  const team = [
    {
      name: "Suresh Wickramarathna",
      role: "Founder & Managing Director",
      phone: "+94 77 510 4625",
      email: "wickramarathnasuresh78@gmail.com",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Dilini Senanayake",
      role: "Head of Legal & Title Conveyancing",
      phone: "+94 77 510 4625",
      email: "wickramarathnasuresh78@gmail.com",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Kavinda Rathnayake",
      role: "Senior Luxury Real Estate Consultant",
      phone: "+94 77 510 4625",
      email: "wickramarathnasuresh78@gmail.com",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0f17] text-gray-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* PAGE HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-20 space-y-4"
      >
        <span className="text-xs font-semibold tracking-widest uppercase text-[#d4af37] block">
          Pioneering Luxury Real Estate
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white">
          About <span className="text-gold-gradient">SD Property.lk</span>
        </h1>
        <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
          Crafting extraordinary real estate transactions with trust, transparency, and architectural elegance across Sri Lanka.
        </p>
      </motion.div>

      {/* SECTION 1: OUR STORY */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28"
      >
        {/* Left Column Text */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151d2a] border border-[#d4af37]/30 text-[#f3e5ab] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Our Heritage & Vision</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
            Redefining High-End <span className="text-gold-gradient">Property Ownership</span> in Sri Lanka
          </h2>

          <p className="text-sm text-gray-300 leading-relaxed font-light">
            Founded by Suresh Wickramarathna, SD Property.lk was established to fulfill a distinct market demand in Sri Lanka: providing discerning buyers, overseas Sri Lankans, and international investors with transparent, verified, high-value real estate opportunities.
          </p>

          <p className="text-sm text-gray-300 leading-relaxed font-light">
            Headquartered in Korathota (10640), our boutique agency curates an exclusive portfolio ranging from colonial Cinnamon Gardens mansions to oceanfront Galle plots and lush Kandy sanctuaries. Every transaction is handled with utmost legal diligence, confidentiality, and white-glove service.
          </p>

          <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-medium text-[#f3e5ab]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
              <span>Full Legal Conveyancing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
              <span>Bespoke Site Inspections</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
              <span>Direct Owner Negotiation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
              <span>Expedited Deed Transfer</span>
            </div>
          </div>
        </div>

        {/* Right Column Image */}
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="SD Property Luxury Architecture"
              className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0b0f17]/90 border border-[#d4af37]/40 backdrop-blur-md">
              <p className="text-xs text-gray-300 italic font-serif">
                "Real estate isn't just about land or concrete; it's about crafting legacies and securing peace of mind."
              </p>
              <span className="block text-[11px] font-bold text-[#f3e5ab] mt-2 uppercase tracking-wider">
                — Suresh Wickramarathna, Founder
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 2: WHY CHOOSE US GRID */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-28"
      >
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#d4af37]">
            Unrivaled Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Why Choose <span className="text-gold-gradient">SD Property.lk</span>
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#151d2a] to-[#0d131f] border border-[#d4af37]/20 hover:border-[#d4af37]/60 shadow-xl space-y-4"
            >
              <div className="w-14 h-14 rounded-xl bg-[#0b0f17] border border-[#d4af37]/30 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-serif font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* SECTION 3: OUR TEAM */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#d4af37]">
            Leadership & Advisory
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Meet Our <span className="text-gold-gradient">Executive Team</span>
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl bg-[#151d2a] border border-[#d4af37]/20 hover:border-[#d4af37]/60 text-center space-y-4 shadow-xl"
            >
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-[#d4af37] p-1 shadow-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div>
                <h3 className="text-lg font-serif font-bold text-white">
                  {member.name}
                </h3>
                <span className="text-xs text-[#d4af37] uppercase tracking-wider block font-medium mt-0.5">
                  {member.role}
                </span>
              </div>

              <div className="pt-2 border-t border-gray-800 text-xs space-y-1.5 text-gray-400">
                <p className="font-mono text-gray-300">{member.phone}</p>
                <p className="truncate text-[11px] text-gray-400">{member.email}</p>
              </div>

              <a
                href={`https://wa.me/94775104625?text=Hello%20${encodeURIComponent(
                  member.name
                )},%20I%20would%20like%20to%20consult%20with%20you.`}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#0b0f17] hover:bg-[#1f293d] border border-gray-700 text-xs text-[#f3e5ab] font-semibold transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Contact Officer</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
