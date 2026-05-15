"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    // Dark Theme: Deep Navy Slate background
    <section className="relative h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden bg-[#050A18]">
      
      {/* 1. BRANDED BACKGROUND ARCHITECTURE (WITH ANIMATION) */}
      <div className="absolute inset-0 z-0">
        {/* Animated Engineering Grid */}
        <motion.div 
          initial={{ backgroundPosition: "0px 0px" }}
          animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.1]" 
          style={{ 
            backgroundImage: `linear-gradient(#1A52A2 1px, transparent 1px), linear-gradient(90deg, #1A52A2 1px, transparent 1px)`,
            backgroundSize: '50px 50px' 
          }} 
        />
        
        {/* Pulsing Cinematic Glows */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] right-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#1A52A2]/20 rounded-full blur-[100px] md:blur-[120px]" 
        />
        
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] left-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#DA1F28]/15 rounded-full blur-[100px] md:blur-[120px]" 
        />
        
        {/* Subtle Radial Gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050A18_100%)]" />
      </div>

      {/* 2. CONTENT AREA */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 20 }} // Adjusted slightly for better responsive vertical centering
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center px-6 max-w-7xl mx-auto pt-10 md:pt-20"
      >
        {/* Dual-Tone Badge */}
        <div className="inline-flex items-center gap-0 overflow-hidden rounded-sm shadow-2xl shadow-black">
          <span className="bg-[#1A52A2] text-white px-4 md:px-6 py-2 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
            Safety
          </span>
          <span className="bg-[#DA1F28] text-white px-4 md:px-6 py-2 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
            Excellence
          </span>
        </div>

        {/* High-Impact Heading */}
        <h1 className="mt-8 md:mt-10 text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-black text-white uppercase leading-[0.95] md:leading-[0.9] tracking-tighter">
          Building <br />
          <motion.span 
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A52A2] via-[#3b82f6] to-[#DA1F28] bg-[length:200%_auto]"
          >
            Fire Safety
          </motion.span>
        </h1>

        {/* Subtext */}
        <div className="mt-8 md:mt-10 max-w-2xl mx-auto relative px-4">
          <p className="text-slate-400 text-sm md:text-xl font-medium leading-relaxed tracking-wide">
            Shree Atharva Enterprises delivers professional
            fire protection and <span className="text-white font-bold">safety engineering solutions</span>
            across Maharashtra.
          </p>
          
          {/* Animated Accent Line */}
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
        {/* Massive "A" Watermark with floating animation */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 md:-bottom-32 -left-10 md:-left-20 text-[#1A52A2]/[0.05] font-black text-[25rem] sm:text-[40rem] md:text-[55rem] leading-none italic select-none"
        >
          A
        </motion.div>
        
        
      </div>

    </section>
  );
}