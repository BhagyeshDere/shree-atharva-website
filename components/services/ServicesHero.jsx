"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ChevronDown } from "lucide-react";

export default function ServicesHero() {
  return (
    // Increased height to 85vh and used items-end with specific pb to lower the focal point
    <section className="relative h-[85vh] min-h-[650px] flex items-end justify-center bg-[#F8FAFC] overflow-hidden pb-8">
      
      {/* CLEAN ANIMATED BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Grid - No border-top/bottom */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `radial-gradient(#0A132E 1px, transparent 1px)`,
            backgroundSize: '40px 40px' 
          }} 
        />
        
        {/* Soft Animated Glows */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-[#1A52A2] rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.06, 0.03] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#DA1F28] rounded-full blur-[100px]"
        />
      </div>

      {/* CENTRAL CONTENT - Lowered using parent items-end and container pb */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pb-4 md:pb-10">
        
        {/* Compact Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 mb-6 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm border border-slate-100"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#DA1F28] animate-pulse" />
          <span className="text-[#0A132E] text-[10px] font-black tracking-[0.3em] uppercase">
            Precision Engineering
          </span>
        </motion.div>

        {/* IMPROVED HEADING SIZE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] text-[#0A132E] tracking-tighter">
            Fire Safety <br />
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
          className="mt-8 text-base md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
        >
          Approved fire protection systems and consultancy. 
          <span className="font-bold text-[#1A52A2]"> Securing lives and high-value assets</span> across Maharashtra.
        </motion.p>

        {/* Simplified Action Area */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col items-center gap-8"
        >
          <div className="flex items-center gap-2 px-5 py-2 bg-white rounded-xl border border-slate-100 shadow-sm">
            <ShieldCheck className="text-[#DA1F28] w-4 h-4" />
            <span className="text-[11px] font-bold text-[#0A132E] uppercase tracking-wider">Licensed Provider</span>
          </div>

         
        </motion.div>
      </div>

      {/* Decorative Brand Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 flex rounded-t-full overflow-hidden">
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