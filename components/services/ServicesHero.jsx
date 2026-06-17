"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ChevronDown } from "lucide-react";

export default function ServicesHero() {
  return (
    // Increased top padding (pt-44 on mobile, md:pt-36 on desktop) to shift the content a little bit further lowerside
    <section className="relative w-full flex items-center justify-center bg-[#F8FAFC] overflow-hidden pb-4 md:pb-6 z-10 pt-44 md:pt-36">
      
      {/* CLEAN ANIMATED BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `radial-gradient(#0A132E 1px, transparent 1px)`,
            backgroundSize: '40px 40px' 
          }} 
        />
        
        {/* Soft Animated Glows - Scaled for mobile */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-[#1A52A2] rounded-full blur-[80px] md:blur-[120px]"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.06, 0.03] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 -right-20 w-56 h-56 md:w-80 md:h-80 bg-[#DA1F28] rounded-full blur-[70px] md:blur-[100px]"
        />
      </div>

      {/* CENTRAL CONTENT - Removed negative transform translation to allow natural baseline flow further down the viewport axis */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* Compact Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 mb-6 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm border border-slate-100"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#DA1F28] animate-pulse" />
          <span className="text-[#0A132E] text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase">
            Precision Engineering
          </span>
        </motion.div>

        {/* RESPONSIVE HEADING - Adjusted font size down for cleaner balance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase leading-[1.1] md:leading-[0.95] text-[#0A132E] tracking-tighter">
            Fire Safety <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A52A2] via-[#0A132E] to-[#1A52A2] bg-[length:200%_auto] animate-gradient-x">
              Engineering Services
            </span>
          </h1>
        </motion.div>

        {/* Concise Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 md:mt-8 text-sm md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed px-2 md:px-0"
        >
          Approved fire protection systems and consultancy. 
          <span className="block md:inline font-bold text-[#1A52A2]"> Securing lives and high-value assets</span> across Maharashtra.
        </motion.p>
      </div>

      {/* Decorative Brand Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-1 flex rounded-t-full overflow-hidden">
        <div className="flex-1 bg-[#0A132E]" />
        <div className="flex-1 bg-[#1A52A2]" />
        <div className="flex-1 bg-[#DA1F28]" />
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </section>
  );
}