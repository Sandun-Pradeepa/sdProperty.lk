"use client";

import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  Bed,
  Bath,
  Maximize2,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageSquare,
  Plus,
  Minus,
  Sparkles,
  Share2,
  Calendar,
  Award,
} from "lucide-react";
import productsData from "../../../data/products.json";

export default function ProductDetailsPage({ params = {} } = {}) {
  const routerParams = useParams();
  const navigate = useNavigate();
  const productId = routerParams.id || (nextParams && nextParams.id) || "sd-p001";

  const product = productsData.find((p) => p.id === productId) || productsData[0];
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0]);
      window.scrollTo(0, 0);
    }
  }, [productId]);

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => {
      const next = prev + delta;
      return next < 1 ? 1 : next;
    });
  };

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `Hello SD Property.lk! I want to order/inquire about:\n\n*Property Title:* ${product.title}\n*Location:* ${product.location}\n*Price:* ${product.priceFormatted}\n*Quantity/Units Requested:* ${quantity}\n*Stock Status:* ${product.stockStatus}\n\nPlease contact me directly with site visit availability and deed verification files.`
    );
    window.open(`https://wa.me/94775104625?text=${message}`, "_blank");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: `Check out ${product.title} on SD Property.lk`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Related products (excluding current)
  const relatedProducts = productsData
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0b0f17] text-gray-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Back Button */}
      <div className="mb-8 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-[#d4af37] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Listings</span>
        </Link>

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#151d2a] border border-gray-800 text-xs text-gray-300 hover:text-white hover:border-[#d4af37]/40 transition-all cursor-pointer"
        >
          <Share2 className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>{copied ? "Link Copied!" : "Share Property"}</span>
        </button>
      </div>

      {/* SPLIT SCREEN DESKTOP LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
        {/* LEFT COLUMN: IMAGE GALLERY WITH SLIDE-IN ANIMATION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 space-y-4"
        >
          {/* Main Stage Image */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#d4af37]/30 bg-gray-900 shadow-2xl group">
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-[#0b0f17]/90 backdrop-blur-md border border-[#d4af37]/40 text-[#f3e5ab] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg">
                {product.category}
              </span>
              <span className="bg-emerald-950/90 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-xs font-medium px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Legal Title</span>
              </span>
            </div>
          </div>

          {/* Image Thumbnail Selector */}
          <div className="grid grid-cols-4 gap-3">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                  selectedImage === img
                    ? "border-[#d4af37] ring-2 ring-[#d4af37]/30 scale-[1.02]"
                    : "border-gray-800 opacity-60 hover:opacity-100 hover:border-gray-600"
                }`}
              >
                <img
                  src={img}
                  alt={`${product.title} thumb ${idx}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN: PRODUCT INFO SECTION WITH SLIDE-IN ANIMATION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 bg-gradient-to-b from-[#151d2a] to-[#0d131f] p-6 sm:p-8 rounded-2xl border border-[#d4af37]/30 shadow-2xl space-y-6"
        >
          {/* Location Badge */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#d4af37] uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-[#d4af37]" />
            <span>{product.location}</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
            {product.title}
          </h1>

          {/* Price & Stock Status */}
          <div className="flex flex-wrap items-baseline justify-between gap-4 py-3 border-y border-gray-800/80">
            <div>
              <span className="block text-[11px] uppercase tracking-widest text-gray-400">
                Asking Investment Price
              </span>
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#f3e5ab]">
                {product.priceFormatted}
              </span>
            </div>

            <div className="text-right">
              <span className="block text-[11px] uppercase tracking-widest text-gray-400">
                Availability
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold mt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{product.stockStatus}</span>
              </span>
            </div>
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            {product.beds > 0 && (
              <div className="p-3 bg-[#0b0f17]/70 rounded-xl border border-gray-800 flex items-center gap-3">
                <Bed className="w-4 h-4 text-[#d4af37]" />
                <div>
                  <span className="block text-[10px] text-gray-400 uppercase">Bedrooms</span>
                  <span className="font-semibold text-white">{product.beds} Master Suites</span>
                </div>
              </div>
            )}

            {product.baths > 0 && (
              <div className="p-3 bg-[#0b0f17]/70 rounded-xl border border-gray-800 flex items-center gap-3">
                <Bath className="w-4 h-4 text-[#d4af37]" />
                <div>
                  <span className="block text-[10px] text-gray-400 uppercase">Bathrooms</span>
                  <span className="font-semibold text-white">{product.baths} Bathrooms</span>
                </div>
              </div>
            )}

            <div className="p-3 bg-[#0b0f17]/70 rounded-xl border border-gray-800 flex items-center gap-3">
              <Maximize2 className="w-4 h-4 text-[#d4af37]" />
              <div>
                <span className="block text-[10px] text-gray-400 uppercase">Land / Extent</span>
                <span className="font-semibold text-white">{product.landSize}</span>
              </div>
            </div>

            {product.sqft > 0 && (
              <div className="p-3 bg-[#0b0f17]/70 rounded-xl border border-gray-800 flex items-center gap-3">
                <Award className="w-4 h-4 text-[#d4af37]" />
                <div>
                  <span className="block text-[10px] text-gray-400 uppercase">Built Area</span>
                  <span className="font-semibold text-white">{product.sqft} Sqft</span>
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider">
              Property Overview
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              {product.description}
            </p>
          </div>

          {/* Features Checklist */}
          {product.features && (
            <div className="space-y-2 pt-2 border-t border-gray-800">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                Key Luxury Features
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="pt-2 border-t border-gray-800/80 flex items-center justify-between">
            <span className="text-xs text-gray-300 font-semibold uppercase tracking-wider">
              Units / Quantity:
            </span>
            <div className="flex items-center gap-4 bg-[#0b0f17] p-2 rounded-xl border border-gray-700">
              <button
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
                className="p-1 hover:text-[#d4af37] text-gray-400 disabled:opacity-30 transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-sm font-bold font-mono text-[#f3e5ab] w-6 text-center">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="p-1 hover:text-[#d4af37] text-gray-400 transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Large Glowing Order via WhatsApp Button */}
          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsAppOrder}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#aa820a] hover:brightness-110 text-black font-bold text-sm tracking-widest uppercase shadow-2xl flex items-center justify-center gap-3 cursor-pointer gold-glow-button"
            >
              <MessageSquare className="w-5 h-5 fill-black" />
              <span>Order via WhatsApp</span>
            </motion.button>

            <a
              href="tel:+94775104625"
              className="mt-3 w-full py-3 rounded-xl bg-[#0b0f17] hover:bg-[#151d2a] border border-gray-800 text-gray-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>Call Direct Hotline: +94 77 510 4625</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM SECTION: RELATED PRODUCTS GRID */}
      <section className="pt-12 border-t border-gray-800/80">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#d4af37] block">
              Similar Opportunities
            </span>
            <h2 className="text-2xl font-serif font-bold text-white">
              Related <span className="text-gold-gradient">Properties</span>
            </h2>
          </div>
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {relatedProducts.map((rel) => (
            <motion.div
              key={rel.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="bg-[#151d2a] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#d4af37]/50 transition-all p-4 space-y-3"
            >
              <div className="aspect-[16/10] rounded-xl overflow-hidden bg-gray-900">
                <img
                  src={rel.images[0]}
                  alt={rel.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div>
                <span className="text-[10px] text-[#d4af37] font-semibold uppercase">
                  {rel.location}
                </span>
                <h3 className="text-sm font-serif font-bold text-white truncate">
                  {rel.title}
                </h3>
                <span className="text-sm font-bold text-[#f3e5ab]">
                  {rel.priceFormatted}
                </span>
              </div>

              <Link
                to={`/product/${rel.id}`}
                className="block text-center py-2 bg-[#0b0f17] hover:bg-[#1a2536] text-xs text-gray-300 font-semibold rounded-lg transition-colors border border-gray-800"
              >
                View Property
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
}
