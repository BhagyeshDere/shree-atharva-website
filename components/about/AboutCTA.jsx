"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, Award } from "lucide-react";

export default function AboutCTA() {
  return (
    /* Reduced padding for a more compact height */
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      
      {/* 1. CENTRALIZED AMBIENT DECOR */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Technical Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.3]" 
          style={{ 
            backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`, 
            backgroundSize: '30px 30px' 
          }} 
        />
        
        {/* Compressed soft glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#1A52A2]/5 blur-[100px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-[#DA1F28]/5 blur-[80px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        {/* 2. CENTERED BADGE (Reduced bottom margin) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2.5 bg-[#F8FAFC] border border-slate-200 px-4 py-1.5 rounded-full mb-6 shadow-sm"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-[#1A52A2]" />
          <span className="uppercase tracking-[0.3em] text-[9px] font-black text-slate-500">
            Official Compliance Partner
          </span>
        </motion.div>

        {/* 3. CENTERED TYPOGRAPHY (Tightened leading) */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-black text-[#0a132e] leading-[0.85] uppercase tracking-tighter"
        >
          Ready to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A52A2] to-[#DA1F28]">
            Protect?
          </span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-slate-500 text-base md:text-lg leading-relaxed max-w-xl mx-auto font-medium"
        >
          Secure your infrastructure with Maharashtra's leading fire safety engineers. 
          Government-authorized protection at the industry standard.
        </motion.p>

        {/* 4. CENTRALIZED ACTIONS (Reduced mt) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group relative flex items-center justify-center gap-3 bg-[#0a132e] text-white px-8 py-4 rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-900/10 w-full sm:w-auto">
            <span className="relative z-10 uppercase tracking-widest text-[11px] font-black">
              Start Consultation
            </span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            <div className="absolute inset-0 bg-[#DA1F28] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          <button className="flex items-center justify-center gap-3 border-2 border-slate-100 bg-white text-[#0a132e] px-8 py-4 rounded-full hover:bg-slate-50 transition-all uppercase tracking-widest text-[11px] font-black w-full sm:w-auto">
            <Phone className="w-3.5 h-3.5 text-[#1A52A2]" />
            Call Expert
          </button>
        </motion.div>

        {/* 5. TRUST SIGNATURE (Reduced spacing and mt) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap justify-center gap-8 opacity-60"
        >
          <div className="flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Licensed Agency</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-[12px] font-black italic">A</span>
            <span className="text-[9px] font-black uppercase tracking-widest">Class 'A' Certified</span>
          </div>
          <div className="flex items-center gap-2">
             <div className="w-1.5 h-1.5 rounded-full bg-[#DA1F28] animate-pulse" />
             <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">24/7 Support</span>
          </div>
        </motion.div>
      </div>

      {/* Subtle Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
}