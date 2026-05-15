"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef(null);

  // Generate an array for fire particles
  const fireParticles = Array.from({ length: 15 });

  return (
    /* Reduced py-20/32 to py-16/24 and pb-12/16 to tighten the bottom */
    <section ref={containerRef} className="relative pt-16 pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20 bg-[#f8fafc] overflow-hidden">
      
      {/* Background Architectural Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%231A52A2' stroke-width='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
      </div>

      {/* FIRE PARTICLES LAYER */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {fireParticles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange-500/20 blur-[2px]"
            initial={{ 
              opacity: 0, 
              scale: 0, 
              x: Math.random() * 100 + "%", 
              y: "110%" 
            }}
            animate={{ 
              opacity: [0, 0.6, 0], 
              scale: [0, Math.random() * 1.5 + 0.5, 0],
              y: "-10%",
              x: (Math.random() * 100) + (Math.random() * 10 - 5) + "%"
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              delay: Math.random() * 10,
              ease: "linear" 
            }}
            style={{
              width: Math.random() * 8 + 4 + "px",
              height: Math.random() * 8 + 4 + "px",
              filter: "blur(1px)",
              boxShadow: "0 0 10px rgba(249, 115, 22, 0.5)"
            }}
          />
        ))}
      </div>

      <div className="max-w-[90rem] mx-auto px-4 md:px-8 relative z-10">
        
        {/* CENTRALIZED HEADER SECTION */}
        <div className="text-center mb-12 md:mb-16 relative">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#DA1F28] font-black uppercase tracking-[0.5em] text-xs mb-4 block"
          >
            Engineering Security Since 2014
          </motion.span>
          
          <div className="relative inline-block">
            <h2 className="relative z-10 text-5xl md:text-8xl font-black text-[#0a132e] tracking-tighter uppercase leading-[0.8] mb-4">
              Building a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A52A2] to-[#1A52A2]/60">Safer</span> <br />
              Future Together
            </h2>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[8rem] md:text-[14rem] font-black text-slate-200/40 select-none -z-10 tracking-tighter uppercase hidden md:block">
              PROTECT
            </span>
          </div>
        </div>

        {/* CENTRALIZED DETAILED INFORMATION BLOCK */}
        <div className="max-w-6xl mx-auto text-center px-2 md:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <p className="text-slate-600 leading-[1.6] md:leading-[1.8] text-lg md:text-2xl font-medium">
                Since our inception in 2014, <span className="text-[#0a132e] font-bold">Shree Atharva Enterprises</span> has established itself as a premier Government Approved Licensed Agency, specializing in the complete lifecycle of industrial fire protection. We deliver high-precision engineering solutions through a holistic approach that encompasses the <span className="text-[#DA1F28] font-bold">Supply, Installation, Testing, and Commissioning</span> of advanced safety systems. By integrating cutting-edge technology with rigorous regulatory compliance, we safeguard critical human lives and industrial assets across both the Government and Private sectors, ensuring that every project meets 100% safety certification standards while defining new benchmarks for technical excellence in the field of fire security.
              </p>
              
              {/* Reduced margin top on the divider */}
              <div className="mt-8 flex justify-center items-center gap-4">
                <div className="h-[1px] w-12 md:w-16 bg-slate-200" />
                <div className="w-2 h-2 rounded-full bg-[#DA1F28]" />
                <div className="h-[1px] w-12 md:w-16 bg-slate-200" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Vertical Bar - Centered vertically relative to the section */}
    
    </section>
  );
}