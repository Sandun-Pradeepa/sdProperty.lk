import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Phone, Menu, X, MessageSquare, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent("Hello SD Property.lk, I am interested in exploring luxury properties in Sri Lanka.");
    window.open(`https://wa.me/94775104625?text=${text}`, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0f17]/90 backdrop-blur-md border-b border-[#d4af37]/20 py-3 shadow-xl'
          : 'bg-gradient-to-b from-[#0b0f17]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#f3e5ab] via-[#d4af37] to-[#aa820a] p-0.5 shadow-[0_0_15px_rgba(212,175,55,0.4)] animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#0b0f17] rounded-[7px] flex items-center justify-center">
              <Building2 className="w-5 h-5 text-[#d4af37]" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold tracking-wider text-white font-serif">
              SD <span className="text-gold-gradient">PROPERTY.LK</span>
            </span>
            <span className="text-[10px] tracking-widest text-amber-200/70 uppercase">
              Luxury Real Estate Sri Lanka
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isActive ? 'text-[#d4af37]' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#d4af37] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+94775104625"
            className="flex items-center gap-2 text-xs font-medium text-gray-300 hover:text-[#d4af37] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#d4af37]" />
            <span>+94 77 510 4625</span>
          </a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppDirect}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-black font-semibold text-xs tracking-wider uppercase shadow-md hover:brightness-110 transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-black" />
            <span>WhatsApp Us</span>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#d4af37]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0b0f17]/98 border-b border-[#d4af37]/20 px-4 pt-4 pb-6 shadow-2xl backdrop-blur-xl overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 border-b border-gray-800 ${
                    location.pathname === link.path ? 'text-[#d4af37]' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-2 flex flex-col gap-3">
                <a
                  href="tel:+94775104625"
                  className="flex items-center gap-3 text-sm text-gray-300 py-1"
                >
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  <span>+94 77 510 4625</span>
                </a>

                <button
                  onClick={() => {
                    handleWhatsAppDirect();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa820a] text-black font-semibold text-sm uppercase tracking-wider"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire via WhatsApp</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
