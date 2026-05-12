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
    <section className="relative pt-24 md:pt-32 pb-8 md:pb-12 bg-[#F9FBFF] overflow-hidden">
      
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
        {/* 2. HEADER SECTION */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 bg-white border-2 border-slate-100 px-6 py-2.5 rounded-full shadow-sm mb-6 md:mb-8"
          >
            <Award className="w-4 h-4 text-[#1A52A2]" />
            <span className="uppercase tracking-[0.4em] text-[10px] font-black text-slate-500">
              Compliance Portfolio
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-8xl font-black text-[#0a132e] uppercase leading-[0.85] tracking-tighter">
            Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A52A2] to-[#DA1F28]">Authority</span>
          </h2>

          <p className="mt-6 md:mt-8 text-slate-500 max-w-xl mx-auto text-xs md:text-base font-bold uppercase tracking-widest leading-relaxed">
            Officially Licensed Agency • Class 'A' Government Registration
          </p>
        </div>

        {/* 3. INFINITE FRAMED SLIDER */}
        <div className="relative flex overflow-hidden group py-4 md:py-6">
          <motion.div
            className="flex gap-8 md:gap-12 whitespace-nowrap"
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
                <div className="relative w-[260px] md:w-[400px] aspect-[1/1.4] transition-all duration-500 group-hover/card:-translate-y-4">
                  <div className="absolute inset-6 bg-[#0a132e]/40 blur-2xl rounded-sm opacity-0 group-hover/card:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-[#1e293b] border-[10px] md:border-[14px] border-[#0f172a] shadow-2xl rounded-sm overflow-hidden flex items-center justify-center">
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
                        <p className="text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em]">Full Inspection</p>
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
          <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-[#F9FBFF] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-[#F9FBFF] to-transparent z-20 pointer-events-none" />
        </div>
      </div>

      {/* 5. LIGHTBOX */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050810]/95 backdrop-blur-xl p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute top-2 right-2 md:-top-10 md:-right-10 text-white/50 hover:text-white transition-colors z-[110]"
              >
                <X size={36} strokeWidth={1.5} />
              </button>
              
              <div className="relative w-full h-full flex items-center justify-center">
                 <img 
                  src={selectedImg} 
                  alt="Enlarged Certificate" 
                  className="max-w-full max-h-full object-contain shadow-2xl rounded-sm border border-white/20"
                />
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
                <div className="flex items-center gap-3 bg-[#DA1F28] px-5 py-2 md:px-6 md:py-2.5 rounded-full text-white shadow-2xl">
                  {/* FIXED: Removed md:size namespace error */}
                  <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em]">Official Verification</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}