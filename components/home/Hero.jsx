"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center bg-[#020617] text-white py-20 md:py-0">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/videos/fire_bg1.mp4" type="video/mp4" />
        </video>
        
        {/* REFINED PRIMARY GRADIENT - Concentrated only on the left text area */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 md:via-[#020617]/60 to-transparent z-[1] w-full md:w-[60%] lg:w-[50%]" />
        
        {/* LIGHTER RED GLOW - Positioned away from center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(218,31,40,0.08)_0%,_transparent_35%)] z-[1]" />
        
        {/* BOTTOM VIGNETTE - Subtle and low profile */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 via-transparent to-transparent z-[1] h-1/2 mt-auto" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-24 pt-16 md:pt-24">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl flex flex-col items-start text-left"
        >
          {/* Government Badge */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 mb-5 md:mb-6 relative"
          >
            <div className="w-8 md:w-12 h-[2px] bg-[#DA1F28]" />
            <span className="text-[#DA1F28] font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
              Licensed Agency
            </span>
            <span className="relative flex h-2 w-2 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DA1F28] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DA1F28]"></span>
            </span>
          </motion.div>

          {/* Heading (Font sizes reduced for crisp hierarchy across screen sizes) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-black tracking-tighter leading-[0.95] uppercase drop-shadow-2xl">
            Fire <br />
            Protection <br />
            <span className="text-[#1A52A2]">Solutions</span>
          </h1>

          {/* Paragraph */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-5 md:mt-6 text-white/90 text-sm md:text-lg max-w-md md:max-w-xl leading-relaxed font-medium"
          >
            Established in 2014. Providing end-to-end fire safety engineering 
            and commissioning across Maharashtra.
          </motion.p>

          {/* Action Buttons */}
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <motion.button 
              whileHover={{ backgroundColor: "#154284", scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-[#1A52A2] text-white px-8 md:px-10 py-4 md:py-5 font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 shadow-xl transition-all"
            >
              Explore Services
              <ArrowRight size={16} />
            </motion.button>

            <motion.button 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)", scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto border border-white/20 bg-white/5 backdrop-blur-md px-8 md:px-10 py-4 md:py-5 font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 shadow-xl transition-all"
            >
              <ShieldCheck size={16} className="text-[#DA1F28]" />
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* CENTERED SCROLL ICON (Hidden on ultra-small mobile screens to prevent layout cramping) */}
      <div className="hidden sm:flex absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-[9px] text-white/40 uppercase tracking-[0.5em] mb-2 font-bold">Scroll</span>
          <div className="w-[1px] h-10 md:h-12 bg-gradient-to-b from-[#1A52A2] via-[#DA1F28] to-transparent opacity-60 relative" />
        </motion.div>
      </div>
    </section>
  );
}