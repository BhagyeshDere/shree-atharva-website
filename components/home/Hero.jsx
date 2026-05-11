"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center bg-[#020617] text-white">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/videos/fire_bg1.mp4" type="video/mp4" />
        </video>
        
        {/* PRIMARY GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/30 to-transparent z-[1] w-[70%]" />
        
        {/* REFINED RED GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(218,31,40,0.1)_0%,_transparent_40%)] z-[1]" />
        
        {/* SUBTLE BOTTOM VIGNETTE */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 via-transparent to-transparent z-[1]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 pt-24 md:pt-32">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl flex flex-col items-start text-left"
        >
          {/* Government Badge */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 mb-6 relative"
          >
            <div className="w-12 h-[2px] bg-[#DA1F28]" />
            <span className="text-[#DA1F28] font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
              Licensed Agency
            </span>
            <span className="relative flex h-2 w-2 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DA1F28] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DA1F28]"></span>
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter leading-[0.9] uppercase drop-shadow-2xl">
            Fire <br />
            Protection <br />
            <span className="text-[#1A52A2]">Solutions</span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-white/90 text-base md:text-xl max-w-lg leading-relaxed font-medium"
          >
            Established in 2014. Providing end-to-end fire safety engineering 
            and commissioning across Maharashtra.
          </motion.p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <motion.button 
              whileHover={{ backgroundColor: "#154284", scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-[#1A52A2] text-white px-10 py-5 font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 shadow-xl transition-all"
            >
              Explore Services
              <ArrowRight size={18} />
            </motion.button>

            <motion.button 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)", scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto border border-white/20 bg-white/5 backdrop-blur-md px-10 py-5 font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 shadow-xl transition-all"
            >
              <ShieldCheck size={18} className="text-[#DA1F28]" />
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* CENTERED SCROLL ICON */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-[9px] text-white/40 uppercase tracking-[0.5em] mb-2 font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#1A52A2] via-[#DA1F28] to-transparent opacity-60 relative" />
        </motion.div>
      </div>

      {/* Line removed from here */}
    </section>
  );
}