"use client";

import { motion } from "framer-motion";
import { PhoneCall, ArrowRight, ShieldCheck } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.1]" 
             style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
        />
        
        {/* Soft "Brand" Light Leaks - Reduced size for shorter height */}
        <div className="absolute -bottom-1/4 -right-1/4 w-[400px] h-[400px] bg-red-50 opacity-60 blur-[100px] rounded-full" />
        <div className="absolute -top-1/4 -left-1/4 w-[350px] h-[350px] bg-blue-50 opacity-60 blur-[80px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Professional Trust Badge - Tightened margin */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-6"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#DA1F28]" />
            <span className="text-slate-600 text-[9px] md:text-xs font-black uppercase tracking-[0.2em]">
              Licensed Government Agency
            </span>
          </motion.div>

          {/* High-Impact Heading - Adjusted size and leading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-slate-900 leading-[1] uppercase tracking-tighter max-w-4xl"
          >
            Securing Your <span className="text-[#DA1F28]">Future</span><br className="hidden md:block" />
            With <span className="text-[#1A52A2]">Total Protection.</span>
          </motion.h2>

          {/* Clean Descriptive Text - Reduced margin and size */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-6 text-slate-500 text-sm md:text-xl max-w-2xl leading-relaxed font-medium"
          >
            Maharashtra's trusted partner for advanced fire safety engineering 
            and 24/7 industrial compliance support.
          </motion.p>

          {/* Action Group - Tightened spacing */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-6"
          >
            {/* Primary Action Button */}
            <button className="group relative px-10 py-5 bg-[#DA1F28] text-white rounded-full font-black uppercase tracking-widest text-[10px] transition-all hover:scale-105 hover:shadow-[0_15px_30px_-10px_rgba(218,31,40,0.4)] active:scale-95">
              <span className="flex items-center gap-3">
                Request Free Survey <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            {/* Secondary Contact Link */}
            <a 
              href="tel:+919422504471" 
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white group-hover:bg-[#1A52A2] transition-all duration-500 shadow-lg">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-[#DA1F28] text-[9px] font-black uppercase tracking-[0.1em]">Contact Expert</p>
                <p className="text-lg font-black text-slate-900 group-hover:text-[#1A52A2] transition-colors leading-none">+91 94225 04471</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Editorial Decorative Typography - Scaled down */}
      <div className="hidden lg:block absolute -bottom-6 -right-6 opacity-[0.02]">
        <span className="text-[18rem] font-black text-slate-900 select-none leading-none tracking-tighter">
          FIRE
        </span>
      </div>
      
      {/* Top Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-slate-200 to-transparent" />
    </section>
  );
}