"use client";

import React from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  ChevronUp
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // SVG Social Icons
  const socials = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      svg: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      svg: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      svg: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
  ];

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050a1a] text-white pt-20 overflow-hidden">
      {/* Decorative Brand Accent */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#1A52A2] via-[#DA1F28] to-[#1A52A2]" />

      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand Identity */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.png" 
                alt="Shree Atharva Logo" 
                className="h-10 w-auto object-contain"
              />
              <Link href="/" className="block">
                <h2 className="text-xl font-black leading-tight tracking-tight uppercase">
                  Shree Atharva<br />
                  <span className="text-[#DA1F28]">Enterprises</span>
                </h2>
              </Link>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Government Approved License Agency. 
              Established in 2014, providing premier fire protection solutions for safer infrastructure across Maharashtra.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#DA1F28] hover:border-[#DA1F28] transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <span className="text-slate-400 group-hover:text-white transition-colors">
                    {social.svg}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#DA1F28]" />
            </h3>
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    <ArrowRight className="w-3 h-3 text-[#DA1F28] opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details (Pune) */}
          <div>
            <h3 className="text-lg font-bold mb-8 relative inline-block">
              Corporate Office
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#1A52A2]" />
            </h3>
            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#DA1F28] shrink-0" />
                <address className="text-slate-400 text-sm leading-relaxed not-italic">
                  J-308, 2nd Floor, Mega Center, Pune-Solapur Road, Hadapsar, Pune - 411028
                </address>
              </div>
              <div className="flex gap-3 items-center group">
                <Phone className="w-5 h-5 text-[#DA1F28] shrink-0" />
                <a href="tel:+919422504471" className="text-slate-400 text-sm hover:text-white transition-colors underline-offset-4 hover:underline">+91 9422504471</a>
              </div>
              <div className="flex gap-3 items-center group">
                <Mail className="w-5 h-5 text-[#DA1F28] shrink-0" />
                <a href="mailto:atharvaent101@gmail.com" className="text-slate-400 text-sm hover:text-white transition-colors underline-offset-4 hover:underline">atharvaent101@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Details (Latur) */}
          <div>
            <h3 className="text-lg font-bold mb-8 relative inline-block">
              Latur Office
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#1A52A2]" />
            </h3>
            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#DA1F28] shrink-0" />
                <address className="text-slate-400 text-sm leading-relaxed not-italic">
                  Road no 3, Vyankatesh Nagar, Ambajogai Road, Latur - 413512
                </address>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-[#DA1F28] shrink-0" />
                <a href="tel:+918484003636" className="text-slate-400 text-sm hover:text-white transition-colors underline-offset-4 hover:underline">+91 8484003636</a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-[#DA1F28] shrink-0" />
                <a href="mailto:atharvaent101@gmail.com" className="text-slate-400 text-sm hover:text-white transition-colors underline-offset-4 hover:underline">atharvaent101@gmail.com</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Scroll to Top */}
      <div className="border-t border-white/5 bg-black/30 backdrop-blur-sm py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] font-medium uppercase tracking-widest order-2 md:order-1">
            © {currentYear} Shree Atharva Enterprises. All Rights Reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 bg-[#DA1F28] rounded-full flex items-center justify-center hover:scale-110 transition-transform active:scale-95 shadow-lg order-1 md:order-2"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5 text-white" />
          </button>

          <div className="flex flex-col md:flex-row items-center gap-1 order-3">
             <p className="text-slate-500 text-[10px] font-medium uppercase tracking-widest">
               Developed by
             </p>
             <a 
               href="https://qirotec.com/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-white font-bold text-[10px] uppercase tracking-widest hover:text-[#DA1F28] transition-colors"
             >
               Qiro Tech Innovation Pvt. Ltd.
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
}