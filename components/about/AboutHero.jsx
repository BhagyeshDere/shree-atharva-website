"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    // Dark Theme: Deep Navy Slate background to make logo colors pop
    <section className="relative h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden bg-[#050A18]">
      
      {/* 1. BRANDED BACKGROUND ARCHITECTURE (DARK MODE) */}
      <div className="absolute inset-0 z-0">
        {/* Engineering Grid - Dark blue variation */}
        <div 
          className="absolute inset-0 opacity-[0.1]" 
          style={{ 
            backgroundImage: `linear-gradient(#1A52A2 1px, transparent 1px), linear-gradient(90deg, #1A52A2 1px, transparent 1px)`,
            backgroundSize: '50px 50px' 
          }} 
        />
        
        {/* Logo-inspired Cinematic Glows */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#1A52A2]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#DA1F28]/15 rounded-full blur-[120px]" />
        
        {/* Subtle Radial Gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050A18_100%)]" />
      </div>

      {/* 2. CONTENT AREA (Adjusted downward) */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 40 }} // Settles lower in the container
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center px-6 max-w-7xl mx-auto pt-20"
      >
        {/* Dual-Tone Badge */}
        <div className="inline-flex items-center gap-0 overflow-hidden rounded-sm shadow-2xl shadow-black">
          <span className="bg-[#1A52A2] text-white px-6 py-2 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
            Safety
          </span>
          <span className="bg-[#DA1F28] text-white px-6 py-2 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
            Excellence
          </span>
        </div>

        {/* High-Impact Heading */}
        <h1 className="mt-10 text-5xl md:text-9xl font-black text-white uppercase leading-[0.9] tracking-tighter">
          Building <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A52A2] via-[#3b82f6] to-[#DA1F28]">
            Fire Safety
          </span>
        </h1>

        {/* Subtext */}
        <div className="mt-10 max-w-2xl mx-auto relative">
          <p className="text-slate-400 text-base md:text-xl font-medium leading-relaxed tracking-wide">
            Shree Atharva Enterprises delivers professional
            fire protection and <span className="text-white font-bold">safety engineering solutions</span>
            across Maharashtra.
          </p>
          
          {/* Subtle Flame-shaped Accent Line */}
          <motion.div 
             initial={{ width: 0, opacity: 0 }}
             whileInView={{ width: "80px", opacity: 1 }}
             transition={{ delay: 0.5, duration: 0.8 }}
             className="h-[4px] bg-gradient-to-r from-[#1A52A2] to-[#DA1F28] mx-auto mt-8 rounded-full shadow-[0_0_15px_rgba(218,31,40,0.5)]"
          />
        </div>
      </motion.div>

      {/* 3. LOGO WATERMARK DECORATION */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Massive "A" Watermark */}
        <div className="absolute -bottom-32 -left-20 text-[#1A52A2]/[0.05] font-black text-[40rem] md:text-[55rem] leading-none italic select-none">
          A
        </div>
        
        {/* Floating Detail */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden lg:block opacity-40">
          <div className="flex items-center gap-6 rotate-90">
             <span className="text-[11px] font-black uppercase tracking-[0.6em] text-white/50">Since 2010</span>
             <div className="w-16 h-[2px] bg-gradient-to-r from-[#DA1F28] to-transparent" />
          </div>
        </div>
      </div>

    </section>
  );
}