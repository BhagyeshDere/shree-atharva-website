"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Clients", href: "/clients" }, // Added Clients link
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

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

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

        {/* Center: Desktop Pages Text */}
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
          <Link href="/contact">
            <button className="px-6 py-2.5 bg-[#DA1F28] text-white text-xs md:text-sm font-bold rounded-full hover:scale-105 transition-transform shadow-md active:scale-95">
              Get Quote
            </button>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="lg:hidden p-2 text-[#1A52A2] hover:bg-slate-50 rounded-lg transition-colors"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* MOBILE SIDEBAR SYSTEM */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#0A132E]/40 backdrop-blur-sm z-[110] lg:hidden"
            />

            {/* Left Side Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[85%] max-w-[320px] bg-white z-[120] shadow-2xl lg:hidden flex flex-col"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-50">
                <div className="flex items-center gap-2">
                   <img src="/images/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                   <span className="font-black text-[#1A52A2] text-sm uppercase tracking-tighter">Atharva</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-slate-50 text-slate-400 rounded-full hover:text-[#DA1F28] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-8 px-6 space-y-2">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Main Menu</p>
                {navLinks.map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between group py-3 px-4 rounded-xl hover:bg-[#1A52A2]/5 transition-all"
                  >
                    <span className="text-lg font-bold text-slate-700 group-hover:text-[#1A52A2]">
                      {link.name}
                    </span>
                    <ChevronRight size={18} className="text-slate-300 group-hover:text-[#1A52A2] group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>

              {/* Sidebar Footer */}
              <div className="p-6 bg-slate-50 mt-auto">
                <div className="flex flex-col gap-4">
                  <a 
                    href="tel:+919422504471" 
                    className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm"
                  >
                    <div className="p-2 bg-red-50 text-[#DA1F28] rounded-lg">
                      <Phone size={20} fill="currentColor" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Call Us</span>
                      <span className="text-sm font-black text-[#0A132E]">+91 9422504471</span>
                    </div>
                  </a>

                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <button className="w-full py-4 bg-[#DA1F28] text-white font-black uppercase tracking-widest text-xs rounded-2xl shadow-lg shadow-red-500/20 active:scale-95 transition-all">
                      Get A Free Quote
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}