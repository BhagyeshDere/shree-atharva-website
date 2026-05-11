"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Target, Award, ArrowDownRight } from "lucide-react";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef(null);
  const stats = [
    { label: "Years of Excellence", value: "10+", icon: Award },
    { label: "Projects Completed", value: "500+", icon: Target },
    { label: "Safety Certified", value: "100%", icon: ShieldCheck },
  ];

  return (
    // Reduced padding from py-24/py-40 to py-16/py-28
    <section ref={containerRef} className="relative py-16 md:py-28 bg-[#f8fafc] overflow-hidden">
      
      {/* Background Architectural Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%231A52A2' stroke-width='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* CENTRALIZED HEADER SECTION - Reduced margin-bottom */}
        <div className="text-center mb-16 md:mb-20 relative">
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
            {/* Background Outline Text */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[8rem] md:text-[14rem] font-black text-slate-200/40 select-none -z-10 tracking-tighter uppercase hidden md:block">
              PROTECT
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Staggered Image Composition - Reduced height from 450/600 to 380/500 */}
          <div className="lg:col-span-7 relative">
            <div className="relative h-[380px] md:h-[500px] w-full">
              {/* Main Image */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute top-0 left-0 w-4/5 h-[85%] rounded-sm overflow-hidden shadow-2xl z-10 border-8 border-white"
              >
                <img 
                  src="/images/about/about-main.png" 
                  alt="Industrial Fire Safety"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Decorative Accent behind main image */}
              <div className="absolute top-10 left-10 w-4/5 h-[85%] bg-[#1A52A2] -z-10 opacity-10 rounded-sm" />

              {/* Floating Secondary Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute bottom-0 right-0 w-3/5 h-1/2 rounded-sm overflow-hidden shadow-2xl z-20 border-[6px] border-white"
              >
                <img 
                  src="/images/about/about-secondary.png" 
                  alt="Testing"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* RIGHT: Sophisticated Content Block - Reduced gap and padding */}
          <div className="lg:col-span-5 lg:pl-8 flex flex-col justify-center h-full pt-6 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-slate-900 font-extrabold leading-tight tracking-tight">
                  Shree Atharva Enterprises is a Government Approved Licensed Agency 
                  defining safety standards.
                </p>
                
                <p className="text-slate-600 leading-relaxed text-base border-l-4 border-[#DA1F28] pl-6 italic">
                  We specialize in the end-to-end Supply, Installation, Testing, and Commissioning 
                  of advanced fire protection systems across Industrial and Government sectors.
                </p>
              </div>

              {/* Stats Grid - High End Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {stats.map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="bg-white p-5 shadow-xl shadow-slate-200/50 rounded-xl border border-slate-100 flex flex-col items-center sm:items-start"
                  >
                    <stat.icon className="w-5 h-5 text-[#DA1F28] mb-2" />
                    <h4 className="text-2xl font-black text-[#0a132e] tabular-nums">{stat.value}</h4>
                    <p className="text-[9px] uppercase font-bold tracking-[0.2em] text-slate-400 mt-1">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Scroll Vertical Bar */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4">
        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest rotate-90 origin-center mb-10">Atharva Safety</span>
        <div className="w-[1px] h-24 bg-slate-200 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 96] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-6 bg-[#DA1F28]"
          />
        </div>
      </div>
    </section>
  );
}