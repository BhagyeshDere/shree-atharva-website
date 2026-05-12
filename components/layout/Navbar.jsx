"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${
      scrolled ? "p-0" : "p-4 md:p-6"
    }`}>
      <div 
        className={`mx-auto flex items-center justify-between transition-all duration-500 ease-in-out bg-white/90 backdrop-blur-md shadow-lg border-gray-100 ${
          scrolled 
            ? "max-w-full w-full rounded-none px-6 md:px-12 py-4 border-b" 
            : "max-w-7xl rounded-full px-4 md:px-8 py-2 md:py-3 border"
        }`}
      >
        
        {/* Left: Logo Section */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 md:w-12 md:h-12">
            <img
              src="/images/logo.png"
              alt="Shree Atharva Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm md:text-base font-black tracking-tighter text-[#1A52A2] leading-none uppercase">
              Shree Atharva
            </h1>
            <p className="text-[8px] md:text-[10px] tracking-[0.2em] font-bold text-[#DA1F28] uppercase">
              Enterprises
            </p>
          </div>
        </Link>

        {/* Center: Desktop Pages Text (Centralized) */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm font-bold text-slate-700">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="hover:text-[#1A52A2] transition-colors whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </div>
          
        {/* Right: CTA & Contact */}
        <div className="hidden lg:flex items-center gap-4 border-l border-gray-200 pl-6 shrink-0">
          <a href="tel:+919422504471" className="p-2 text-[#DA1F28] hover:bg-red-50 rounded-full transition-colors">
            <Phone size={18} fill="currentColor" />
          </a>
          {/* Updated: Link to Contact Page */}
          <Link href="/contact">
            <button className="px-6 py-2.5 bg-[#DA1F28] text-white text-xs md:text-sm font-bold rounded-full hover:scale-105 transition-transform shadow-md active:scale-95">
              Get Quote
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-[#1A52A2]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`absolute left-4 right-4 bg-white shadow-2xl p-8 z-[90] flex flex-col gap-6 lg:hidden border border-gray-100 ${
              scrolled ? "top-20 rounded-2xl" : "top-24 rounded-3xl"
            }`}
          >
            {navLinks.map((link, i) => (
              <Link 
                key={link.name}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-xl font-bold text-[#1A52A2] border-b border-gray-50 pb-2"
              >
                {link.name}
              </Link>
            ))}
            {/* Updated: Mobile CTA Link to Contact Page */}
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full py-4 bg-[#DA1F28] text-white font-bold rounded-2xl">
                Get Quote
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}