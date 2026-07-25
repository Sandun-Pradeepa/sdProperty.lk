import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Bed, Bath, Maximize2, MapPin, Plus, Minus, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { Product } from '../types';

interface PropertyCardProps {
  product: Product;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const incrementQuantity = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleBuyNowWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const message = encodeURIComponent(
      `Hello SD Property.lk! I am interested in purchasing/inquiring about:\n\n*Property:* ${product.title}\n*Location:* ${product.location}\n*Price:* ${product.priceFormatted}\n*Quantity/Units:* ${quantity}\n\nPlease share legal title documents, full floor plans, and schedule a site visit for me.`
    );
    window.open(`https://wa.me/94775104625?text=${message}`, '_blank');
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
      }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group bg-gradient-to-b from-[#151d2a] to-[#0d131f] rounded-2xl overflow-hidden border border-[#d4af37]/20 hover:border-[#d4af37]/60 shadow-xl hover:shadow-[#d4af37]/10 flex flex-col justify-between transition-all duration-300 relative"
    >
      {/* Top Image Container */}
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-black/30" />

          {/* Category Badge */}
          <div className="absolute top-3 left-3 bg-[#0b0f17]/80 backdrop-blur-md border border-[#d4af37]/40 text-[#f3e5ab] text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full shadow-lg">
            {product.category}
          </div>

          {/* Stock Status Badge */}
          <div className="absolute top-3 right-3 bg-emerald-950/80 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-[10px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1 shadow-lg">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>{product.stockStatus.split(' - ')[0]}</span>
          </div>

          {/* Price Overlay */}
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
            <span className="text-xl sm:text-2xl font-bold font-serif text-[#f3e5ab] drop-shadow-md">
              {product.priceFormatted}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-3">
          <div className="flex items-center gap-1 text-xs text-[#d4af37]">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{product.location}</span>
          </div>

          <h3 className="text-lg font-serif font-semibold text-white group-hover:text-[#f3e5ab] transition-colors line-clamp-1">
            {product.title}
          </h3>

          <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Specifications Row */}
          <div className="pt-2 border-t border-gray-800/80 grid grid-cols-3 gap-2 text-center text-xs text-gray-300">
            {product.beds > 0 ? (
              <div className="flex items-center justify-center gap-1.5 py-1.5 bg-[#0b0f17]/50 rounded-lg border border-gray-800/50">
                <Bed className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{product.beds} Beds</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-1.5 py-1.5 bg-[#0b0f17]/50 rounded-lg border border-gray-800/50">
                <Maximize2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{product.landSize}</span>
              </div>
            )}

            {product.baths > 0 ? (
              <div className="flex items-center justify-center gap-1.5 py-1.5 bg-[#0b0f17]/50 rounded-lg border border-gray-800/50">
                <Bath className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{product.baths} Baths</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-1.5 py-1.5 bg-[#0b0f17]/50 rounded-lg border border-gray-800/50">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Clear Title</span>
              </div>
            )}

            {product.sqft > 0 ? (
              <div className="flex items-center justify-center gap-1.5 py-1.5 bg-[#0b0f17]/50 rounded-lg border border-gray-800/50 truncate px-1">
                <Maximize2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="truncate">{product.sqft} Sqft</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-1.5 py-1.5 bg-[#0b0f17]/50 rounded-lg border border-gray-800/50">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Prime Plot</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card Actions & Quantity Input */}
      <div className="p-5 pt-0 space-y-3">
        {/* Quantity Increment/Decrement Selector */}
        <div className="flex items-center justify-between bg-[#0b0f17] p-2 rounded-xl border border-[#d4af37]/20">
          <span className="text-[11px] text-gray-400 font-medium pl-2 uppercase tracking-wider">
            Inquiry Units / Qty:
          </span>
          <div className="flex items-center gap-3 bg-[#151d2a] px-2 py-1 rounded-lg border border-gray-700">
            <button
              onClick={decrementQuantity}
              className="p-1 hover:text-[#d4af37] text-gray-400 transition-colors disabled:opacity-40"
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="text-xs font-bold font-mono text-[#f3e5ab] w-5 text-center">
              {quantity}
            </span>
            <button
              onClick={incrementQuantity}
              className="p-1 hover:text-[#d4af37] text-gray-400 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Buttons Row */}
        <div className="grid grid-cols-2 gap-2">
          {/* Details Link */}
          <Link
            to={`/product/${product.id}`}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gray-800/80 hover:bg-gray-700 text-gray-200 font-medium text-xs transition-all border border-gray-700/60 hover:border-gray-500"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {/* Buy now via WhatsApp Button */}
          <button
            onClick={handleBuyNowWhatsApp}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#c5a059] to-[#aa820a] hover:brightness-110 text-black font-semibold text-xs tracking-wider uppercase shadow-lg transition-all cursor-pointer gold-glow-button"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-black" />
            <span className="truncate">Buy via WhatsApp</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
