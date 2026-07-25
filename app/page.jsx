"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Building2,
  Search,
  SlidersHorizontal,
  Sparkles,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Award,
  PhoneCall,
  Bed,
  Bath,
  Maximize2,
  Plus,
  Minus,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import initialProducts from "../data/products.json";

const heroImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=85",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85"
];

const ImageSlider = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full h-full group/slider overflow-hidden bg-gray-900">
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover group-hover/slider:scale-105 transition-transform duration-700"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-black/30 z-10 pointer-events-none" />

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 right-4 flex justify-center gap-1.5 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-[#d4af37] w-4" : "bg-white/50 hover:bg-white/90 w-1.5"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function HomePage() {
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [quantities, setQuantities] = useState({});
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Initialize quantity state for each product
    const initialQty = {};
    initialProducts.forEach((p) => {
      initialQty[p.id] = 1;
    });
    setQuantities(initialQty);
  }, []);

  const handleQuantityChange = (id, delta) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      const next = current + delta;
      if (next < 1) return prev;
      return { ...prev, [id]: next };
    });
  };

  const handleBuyNowWhatsApp = (product, qty) => {
    const message = encodeURIComponent(
      `Hello SD Property.lk! I am interested in purchasing/inquiring about:\n\n*Property:* ${product.title}\n*Location:* ${product.location}\n*Price:* ${product.priceFormatted}\n*Quantity/Units:* ${qty}\n\nPlease send me full legal documentation, floor plans, and schedule a site visit.`
    );
    window.open(`https://wa.me/94775104625?text=${message}`, "_blank");
  };

  const categories = ["All", "Houses", "Lands", "Villas"];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0b0f17] text-gray-100 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Dark Luxury House Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-[#0b0f17]">
          <AnimatePresence>
            <motion.img
              key={currentHeroImage}
              src={heroImages[currentHeroImage]}
              alt="Luxury Real Estate Background"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.35]"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/70 to-[#0b0f17]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Hero Content with Framer Motion Text Reveal */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#151d2a]/90 border border-[#d4af37]/40 backdrop-blur-md text-[#f3e5ab] text-xs font-semibold tracking-widest uppercase shadow-xl"
          >
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span>Sri Lanka's Exclusive Real Estate Collection</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white tracking-tight leading-none"
          >
            Find Your <span className="text-gold-gradient">Dream Property</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Discover bespoke luxury houses, prime oceanfront lands, and elite hill country villas with verified clear titles across Colombo, Kandy, Galle, and Korathota.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="#properties"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#aa820a] text-black font-bold text-sm tracking-widest uppercase shadow-2xl hover:brightness-110 transition-all gold-glow-button flex items-center justify-center gap-3"
            >
              <span>Explore Listings</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/94775104625?text=Hello%20SD%20Property.lk,%20I%20would%20like%20to%20schedule%20a%20VIP%20consultation."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#151d2a]/80 hover:bg-[#1f293d] border border-[#d4af37]/50 text-white font-semibold text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-3 backdrop-blur-md"
            >
              <PhoneCall className="w-4 h-4 text-[#d4af37]" />
              <span>Contact Director</span>
            </a>
          </motion.div>

          {/* Quick Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center"
          >
            {[
              { label: "Clear Deed Titles", value: "100% Guaranteed" },
              { label: "Prime Properties", value: "LKR 72M - 285M+" },
              { label: "Island Locations", value: "Colombo • Kandy • Galle" },
              { label: "Direct Owner WhatsApp", value: "+94 77 510 4625" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#151d2a]/60 border border-[#d4af37]/20 backdrop-blur-sm"
              >
                <div className="text-sm sm:text-base font-bold text-[#f3e5ab] font-serif">
                  {stat.value}
                </div>
                <div className="text-[11px] text-gray-400 uppercase tracking-wider mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FILTER & PRODUCT SECTION */}
      <section id="properties" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#d4af37] block">
            Exclusive Catalogue
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Featured <span className="text-gold-gradient">Properties</span>
          </h2>
          <p className="text-sm text-gray-400">
            Handpicked luxury residences, villas, and prime plots with immediate transfer availability.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-[#151d2a]/80 p-4 rounded-2xl border border-[#d4af37]/20 backdrop-blur-md">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${selectedCategory === cat
                    ? "bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-black shadow-lg font-bold"
                    : "bg-[#0b0f17] text-gray-300 hover:text-white border border-gray-800"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search location, title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0b0f17] text-xs text-white pl-10 pr-4 py-2.5 rounded-xl border border-gray-800 focus:border-[#d4af37] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Product Grid with Staggered Framer Motion Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchQuery}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product) => {
              const qty = quantities[product.id] || 1;
              return (
                <motion.div
                  key={product.id}
                  variants={{
                    hidden: { opacity: 0, y: 35 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: "easeOut" },
                    },
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-gradient-to-b from-[#151d2a] to-[#0d131f] rounded-2xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37]/60 shadow-xl hover:shadow-[#d4af37]/15 flex flex-col justify-between transition-all duration-300"
                >
                  {/* Top Image & Details */}
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
                      <ImageSlider images={product.images} title={product.title} />

                      <div className="absolute top-3 left-3 bg-[#0b0f17]/80 backdrop-blur-md border border-[#d4af37]/40 text-[#f3e5ab] text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                        {product.category}
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                        <span className="text-xl sm:text-2xl font-bold font-serif text-[#f3e5ab] drop-shadow-md">
                          {product.priceFormatted}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <div className="flex items-center gap-1.5 text-xs text-[#d4af37]">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{product.location}</span>
                      </div>

                      <h3 className="text-lg font-serif font-semibold text-white line-clamp-1">
                        {product.title}
                      </h3>

                      <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Specs badges */}
                      <div className="pt-2 border-t border-gray-800/80 grid grid-cols-3 gap-2 text-center text-xs text-gray-300">
                        <div className="py-1.5 bg-[#0b0f17]/60 rounded-lg border border-gray-800 flex items-center justify-center gap-1">
                          {product.beds > 0 ? (
                            <>
                              <Bed className="w-3.5 h-3.5 text-[#d4af37]" />
                              <span>{product.beds} Beds</span>
                            </>
                          ) : (
                            <>
                              <Maximize2 className="w-3.5 h-3.5 text-[#d4af37]" />
                              <span>{product.landSize}</span>
                            </>
                          )}
                        </div>

                        <div className="py-1.5 bg-[#0b0f17]/60 rounded-lg border border-gray-800 flex items-center justify-center gap-1">
                          {product.baths > 0 ? (
                            <>
                              <Bath className="w-3.5 h-3.5 text-[#d4af37]" />
                              <span>{product.baths} Baths</span>
                            </>
                          ) : (
                            <>
                              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Clear Title</span>
                            </>
                          )}
                        </div>

                        <div className="py-1.5 bg-[#0b0f17]/60 rounded-lg border border-gray-800 flex items-center justify-center gap-1 truncate px-1">
                          {product.sqft > 0 ? (
                            <>
                              <Maximize2 className="w-3.5 h-3.5 text-[#d4af37]" />
                              <span className="truncate">{product.sqft} Sqft</span>
                            </>
                          ) : (
                            <>
                              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                              <span>Prime Plot</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quantity & WhatsApp Action Buttons */}
                  <div className="p-5 pt-0 space-y-3">
                    {/* Quantity Control 
                    <div className="flex items-center justify-between bg-[#0b0f17] p-2 rounded-xl border border-[#d4af37]/20">
                      <span className="text-[11px] text-gray-400 font-medium pl-2 uppercase tracking-wider">
                        Inquiry Units / Qty:
                      </span>
                      <div className="flex items-center gap-3 bg-[#151d2a] px-2 py-1 rounded-lg border border-gray-700">
                        <button
                          onClick={() => handleQuantityChange(product.id, -1)}
                          disabled={qty <= 1}
                          className="p-1 hover:text-[#d4af37] text-gray-400 disabled:opacity-30 transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold font-mono text-[#f3e5ab] w-5 text-center">
                          {qty}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(product.id, 1)}
                          className="p-1 hover:text-[#d4af37] text-gray-400 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>*/}

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        to={`/product/${product.id}`}
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 font-medium text-xs transition-colors border border-gray-700"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <button
                        onClick={() => handleBuyNowWhatsApp(product, qty)}
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#c5a059] to-[#aa820a] hover:brightness-110 text-black font-semibold text-xs uppercase tracking-wider shadow-lg cursor-pointer gold-glow-button"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-black" />
                        <span className="truncate">Buy now via WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-[#151d2a]/40 rounded-2xl border border-gray-800">
            <p className="text-gray-400 text-sm">
              No luxury properties match your query. Try resetting filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 bg-[#d4af37] text-black text-xs font-bold rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
