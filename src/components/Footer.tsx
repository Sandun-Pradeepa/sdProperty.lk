import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin, ShieldCheck, ArrowUpRight, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello SD Property.lk, I would like to make a general inquiry about luxury properties.");
    window.open(`https://wa.me/94775104625?text=${text}`, '_blank');
  };

  return (
    <footer className="bg-[#070a0f] border-t border-[#d4af37]/20 text-gray-400 text-sm pt-16 pb-8 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#d4af37]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#f3e5ab] via-[#d4af37] to-[#aa820a] p-0.5">
                <div className="w-full h-full bg-[#0b0f17] rounded-[7px] flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-[#d4af37]" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-wider text-white font-serif">
                SD <span className="text-gold-gradient">PROPERTY.LK</span>
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-gray-400">
              Sri Lanka's premier luxury real estate agency, specializing in high-end villas, prime coastal lands, and exclusive residential mansions in Colombo, Kandy, Galle & Korathota.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#d4af37]">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span>100% Verified Legal Deed Clear Titles</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#d4af37] pl-3">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-[#d4af37] transition-colors flex items-center gap-1">
                  <span>Home</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#d4af37] transition-colors flex items-center gap-1">
                  <span>About Our Story</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#d4af37] transition-colors flex items-center gap-1">
                  <span>Contact & Location</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#d4af37] pl-3">
              Contact Us
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-gray-500 text-[10px] uppercase">Phone & Hotline</span>
                  <a href="tel:+94775104625" className="text-gray-200 hover:text-[#d4af37] font-mono">
                    +94 77 510 4625
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-gray-500 text-[10px] uppercase">Email Inquiries</span>
                  <a href="mailto:wickramarathnasuresh78@gmail.com" className="text-gray-200 hover:text-[#d4af37] break-all">
                    wickramarathnasuresh78@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-gray-500 text-[10px] uppercase">Head Office</span>
                  <span className="text-gray-200">Korathota, 10640, Sri Lanka</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Direct WhatsApp Callout */}
          <div className="p-4 rounded-xl bg-gradient-to-b from-[#151d2a] to-[#0f1622] border border-[#d4af37]/30 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block mb-1">
                Instant Response
              </span>
              <h4 className="text-white font-serif text-sm font-medium mb-2">
                Need VIP Property Consultation?
              </h4>
              <p className="text-[11px] text-gray-400 mb-4">
                Chat directly with our Managing Director Suresh Wickramarathna on WhatsApp.
              </p>
            </div>
            <button
              onClick={handleWhatsApp}
              className="w-full py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Hotline</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} SD Property.lk. All rights reserved.</p>
          <p className="text-[11px]">Designed with Framer Motion & Luxury Real Estate Standards</p>
        </div>
      </div>
    </footer>
  );
};
