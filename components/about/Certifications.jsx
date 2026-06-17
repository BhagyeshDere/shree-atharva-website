"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Maximize2, X, Award } from "lucide-react";

export default function Certifications() {
  const [selectedImg, setSelectedImg] = useState(null);

  const certificates = [
    "/images/certifications/c1.jpg",
    "/images/certifications/c2.jpg",
    "/images/certifications/c3.jpg",
    "/images/certifications/c4.jpg",
    "/images/certifications/c5.jpg",
    "/images/certifications/c6.jpeg",
  ];

  return (
    /* Reduced top padding from pt-24/32 to pt-12/16 */
    <section className="relative pt-12 md:pt-16 pb-8 md:pb-12 bg-[#F9FBFF] overflow-hidden">
      
      {/* 1. TECHNICAL BACKGROUND DECOR */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#1A52A2]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#DA1F28]/5 blur-[120px] rounded-full" />
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)`,
            backgroundSize: '100px 100px' 
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 2. HEADER SECTION - Tightened margins */}
        <div className="text-center mb-10 md:mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 bg-white border-2 border-slate-100 px-6 py-2 rounded-full shadow-sm mb-4 md:mb-6"
          >
            <Award className="w-4 h-4 text-[#1A52A2]" />
            <span className="uppercase tracking-[0.4em] text-[10px] font-black text-slate-500">
              Compliance Portfolio
            </span>
          </motion.div>

          {/* Adjusted heading sizing for smooth fluid typography on all devices */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0a132e] uppercase leading-[1.0] md:leading-[0.85] tracking-tighter">
            Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A52A2] to-[#DA1F28]">Authority</span>
          </h2>

          <p className="mt-4 md:mt-6 text-slate-500 max-w-xl mx-auto text-[10px] md:text-xs font-bold uppercase tracking-widest leading-relaxed">
            Officially Licensed Agency • Class 'A' Government Registration
          </p>
        </div>

        {/* 3. INFINITE FRAMED SLIDER */}
        <div className="relative flex overflow-hidden group py-2 md:py-4">
          <motion.div
            className="flex gap-6 md:gap-10 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...certificates, ...certificates].map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedImg(item)}
                className="relative flex-shrink-0 group/card cursor-pointer"
              >
                <div className="relative w-[240px] md:w-[380px] aspect-[1/1.4] transition-all duration-500 group-hover/card:-translate-y-3">
                  <div className="absolute inset-6 bg-[#0a132e]/40 blur-2xl rounded-sm opacity-0 group-hover/card:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-[#1e293b] border-[8px] md:border-[12px] border-[#0f172a] shadow-2xl rounded-sm overflow-hidden flex items-center justify-center">
                    <div className="w-[92%] h-[94%] bg-[#0a132e] p-1 flex items-center justify-center relative overflow-hidden ring-1 ring-white/10">
                      <img
                        src={item}
                        alt="Official Certificate"
                        className="w-full h-full object-cover transition-all duration-700 group-hover/card:scale-105 group-hover/card:brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a132e] via-transparent to-transparent opacity-60 group-hover/card:opacity-20 transition-opacity duration-500" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-500 bg-[#0a132e]/70 backdrop-blur-[2px]">
                        <div className="bg-white p-3 md:p-4 rounded-full shadow-2xl mb-4 transform scale-50 group-hover/card:scale-100 transition-transform duration-500">
                          <Maximize2 className="text-[#0a132e] w-5 h-5 md:w-6 md:h-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-[#334155] border border-white/10" />
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#334155] border border-white/10" />
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-[#334155] border border-white/10" />
                  <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-[#334155] border border-white/10" />
                </div>
              </div>
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-[#F9FBFF] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-[#F9FBFF] to-transparent z-20 pointer-events-none" />
        </div>
      </div>

      {/* 5. LIGHTBOX - Optimized stacking hierarchy, padding offsets, and image heights */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md pt-20 pb-6 px-4 md:px-8 cursor-zoom-out select-none"
          >
            {/* Top Bar for close action - Lifted to override headers */}
            <div className="absolute top-0 inset-x-0 h-20 flex items-center justify-end px-6 z-[10000] pointer-events-none">
              <button 
                onClick={() => setSelectedImg(null)}
                className="pointer-events-auto text-white/70 hover:text-white bg-white/10 active:bg-white/20 p-2.5 rounded-full transition-all duration-200 shadow-xl"
                aria-label="Close modal"
              >
                <X size={24} className="md:w-7 md:h-7" />
              </button>
            </div>
            
            {/* Centered Image Container Frame */}
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 28, stiffness: 200 }}
              className="relative w-full flex-1 flex items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative p-1.5 bg-neutral-900 border border-white/10 rounded-lg shadow-2xl max-w-full flex items-center justify-center">
                <img 
                  src={selectedImg} 
                  alt="Enlarged Certificate Document" 
                  className="w-auto h-auto max-w-[85vw] max-h-[58vh] md:max-h-[64vh] lg:max-h-[68vh] object-contain rounded-sm select-none"
                />
              </div>
            </motion.div>

            {/* Bottom Verification Label */}
            <div className="mt-4 relative z-[10000] pointer-events-none">
              <div className="flex items-center gap-3 bg-[#DA1F28] px-5 py-2.5 rounded-full text-white shadow-2xl">
                <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] whitespace-nowrap">Official Verification</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}