"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck } from "lucide-react";

export default function ClientsHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects for background depth
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-[#050a1a]"
    >
      {/* --- Refined Background Layer --- */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="/images/clients/hero.png"
          alt="Shree Atharva Clients"
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        
        {/* Minimized Logo Mesh Glow - Lighter opacity */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(29,78,216,0.12)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,_rgba(218,31,40,0.08)_0%,_transparent_50%)] animate-pulse" />
        
        {/* Lightened Overlays - Reduced dark blue density */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a1a]/60 via-transparent to-[#050a1a]" />
        <div className="absolute inset-0 bg-[#050a1a]/20" /> 
      </motion.div>

      {/* --- Centered Content --- */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center"
      >
        {/* Refined Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 mb-8 bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-md shadow-sm"
        >
          <ShieldCheck className="text-[#DA1F28]" size={16} />
          <span className="text-blue-200 uppercase tracking-[0.4em] text-[9px] md:text-xs font-bold">
            ISO Certified Excellence
          </span>
        </motion.div>

        {/* Heading with Elegant Logo Gradient */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-6xl md:text-9xl font-black text-white leading-[0.9] uppercase tracking-tighter"
        >
          Our <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] via-white to-[#DA1F28]">
            Partners
          </span>
        </motion.h1>

        {/* Responsive Text */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-slate-300 max-w-3xl mx-auto text-lg md:text-2xl leading-relaxed font-light"
        >
          Powering Maharashtra’s growth by providing robust solutions to 
          <span className="text-white font-semibold"> 150+ leading organizations </span> 
          across multiple sectors.
        </motion.p>
      </motion.div>

      {/* --- Bottom Accent --- */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-600/30 to-transparent z-20" />
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4"
      >
        <div className="flex flex-col items-center opacity-70">
           <div className="w-[1px] h-8 bg-gradient-to-b from-[#1D4ED8] to-transparent" />
           <div className="w-[1px] h-8 bg-gradient-to-t from-[#DA1F28] to-transparent" />
        </div>
        <span className="text-[9px] text-blue-400 uppercase tracking-[0.4em] font-bold">Explore</span>
      </motion.div>
    </section>
  );
}