"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#020617] text-white">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Original Color Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-70"
        >
          <source src="/videos/fire_bg1.mp4" type="video/mp4" />
        </video>
        
        {/* Focused Center Gradient - This makes the center text pop while keeping video visible */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,6,23,0.6)_0%,rgba(2,6,23,0.3)_40%,transparent_100%)]" />
        
        {/* Deep Edge Vignette for overall depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(2,6,23,0.8)_100%)]" />
      </div>

      {/* Centralized Content Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-5xl px-6 text-center flex flex-col items-center"
      >
        {/* Government Badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-12 h-[2px] bg-[#DA1F28]" />
          <span className="text-[#DA1F28] font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
            Licensed Agency
          </span>
          <div className="w-12 h-[2px] bg-[#DA1F28]" />
        </motion.div>

        {/* Clean, Non-Italic Bold Heading - Enhanced with shadow for visibility */}
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.1] uppercase drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
          Fire Protection <br />
          <span className="text-[#1A52A2]">Solutions</span>
        </h1>

        <p className="mt-8 text-white text-base md:text-xl max-w-2xl leading-relaxed font-semibold drop-shadow-lg">
          Established in 2014. Providing end-to-end fire safety engineering 
          and commissioning across Maharashtra.
        </p>

        {/* Clean Balanced Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-5">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-[#1A52A2] hover:bg-[#154284] text-white px-10 py-4 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-colors shadow-2xl shadow-black/50"
          >
            Explore Services
            <ArrowRight size={18} />
          </motion.button>

          <motion.button 
            whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            className="w-full sm:w-auto border border-white/40 backdrop-blur-sm px-10 py-4 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-colors shadow-lg"
          >
            <ShieldCheck size={18} className="text-[#DA1F28]" />
            Get in Touch
          </motion.button>
        </div>
      </motion.div>

      {/* Modern Centered Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] text-white/50 uppercase tracking-[0.5em]">Scroll</span>
        <div className="w-[2px] h-12 bg-gradient-to-b from-[#1A52A2] via-[#DA1F28] to-transparent" />
      </div>
    </section>
  );
}