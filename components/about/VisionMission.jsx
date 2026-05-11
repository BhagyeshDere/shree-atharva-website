"use client";

import { motion } from "framer-motion";
import { Eye, Target, ShieldCheck, Zap } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="relative py-24 md:py-40 bg-[#050a1a] overflow-hidden">
      
      {/* 1. BRANDED AMBIANCE */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Logo Theme Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#DA1F28]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#1A52A2]/10 rounded-full blur-[120px]" />
        
        {/* Subtle Engineering Grid */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '50px 50px' }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#DA1F28] font-black uppercase tracking-[0.5em] text-[10px] md:text-xs mb-4"
          >
            Core Philosophy
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Our Purpose & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A52A2] to-blue-400">Direction</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-stretch">

          {/* VISION CARD - The "Flame" Side (Red Accent) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-[#DA1F28] translate-x-3 translate-y-3 rounded-[60px_10px_60px_10px] opacity-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />
            
            <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-16 rounded-[60px_10px_60px_10px] overflow-hidden transition-all duration-500 hover:border-[#DA1F28]/50">
              {/* Floating Decorative A */}
              <div className="absolute -top-10 -right-10 text-white/[0.02] text-[15rem] font-black italic select-none">A</div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-[#DA1F28] flex items-center justify-center shadow-[0_0_30px_rgba(218,31,40,0.4)] mb-10 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <Eye className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                  Our <br /><span className="text-[#DA1F28]">Vision</span>
                </h3>

                <p className="mt-8 text-slate-400 text-lg md:text-xl leading-9 font-medium">
                  To become Maharashtra’s most trusted fire protection company by delivering <span className="text-white">innovative, reliable</span>, and future-ready fire safety solutions that set new global standards.
                </p>

                <div className="mt-10 flex items-center gap-3">
                  <div className="h-[2px] w-12 bg-[#DA1F28]" />
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Global Benchmark</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* MISSION CARD - The "Shield" Side (Blue Accent) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-[#1A52A2] -translate-x-3 translate-y-3 rounded-[10px_60px_10px_60px] opacity-10 group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />
            
            <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-16 rounded-[10px_60px_10px_60px] overflow-hidden transition-all duration-500 hover:border-[#1A52A2]/50">
               {/* Floating Decorative A */}
               <div className="absolute -top-10 -right-10 text-white/[0.02] text-[15rem] font-black italic select-none">A</div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-[#1A52A2] flex items-center justify-center shadow-[0_0_30px_rgba(26,82,162,0.4)] mb-10 -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <Target className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                  Our <br /><span className="text-[#1A52A2]">Mission</span>
                </h3>

                <p className="mt-8 text-slate-400 text-lg md:text-xl leading-9 font-medium">
                  To protect <span className="text-white">lives and infrastructure</span> through high-quality prevention systems, engineering excellence, and responsive support that empowers safety.
                </p>

                <div className="mt-10 flex items-center gap-3">
                  <div className="h-[2px] w-12 bg-[#1A52A2]" />
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Engineering Excellence</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM TAGLINE */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex justify-center"
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-white/5 rounded-full border border-white/10 shadow-2xl">
            <ShieldCheck className="text-[#DA1F28]" size={24} />
            <span className="text-slate-300 font-bold uppercase tracking-widest text-[10px]">Licensed Agency Excellence since 2014</span>
            <Zap className="text-[#1A52A2]" size={24} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}