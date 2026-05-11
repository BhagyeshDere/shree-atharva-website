"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Award } from "lucide-react";

export default function CompanyAbout() {
  const stats = [
    { 
      label: "Years Experience", 
      value: "10+", 
      icon: <Award className="text-[#DA1F28]" size={20} />,
      desc: "Industrial expertise" 
    },
    { 
      label: "Projects Completed", 
      value: "500+", 
      icon: <Zap className="text-[#1A52A2]" size={20} />,
      desc: "Pan-Maharashtra" 
    },
    { 
      label: "Safety Focus", 
      value: "100%", 
      icon: <ShieldCheck className="text-[#DA1F28]" size={20} />,
      desc: "Govt. Approved" 
    }
  ];

  return (
    <section className="relative py-24 md:py-40 bg-[#FBFDFF] overflow-hidden">
      
      {/* 1. ARCHITECTURAL DECOR - LOGO THEME */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] z-0">
        <div className="absolute top-20 left-10 w-96 h-96 border-[40px] border-[#1A52A2] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border-[40px] border-[#DA1F28] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* 2. ADVANCED IMAGE COMPOSITION (Lef Side) */}
          <div className="lg:col-span-6 relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              {/* Primary Image with Custom Border Radius */}
              <div className="relative rounded-tr-[100px] rounded-bl-[100px] rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/about/about-main.png"
                  alt="Fire Protection Installation"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a132e]/40 to-transparent" />
              </div>

              {/* Floating "A" Badge (Logo Motif) */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="bg-[#1A52A2] w-12 h-12 rounded-lg flex items-center justify-center text-white font-black text-2xl italic">
                  A
                </div>
              </div>
            </motion.div>

            {/* Decorative Geometric Blocks */}
            <div className="absolute -bottom-10 -right-6 bg-[#DA1F28] w-48 h-48 rounded-[40px] -z-10 opacity-20 blur-2xl animate-pulse" />
            <div className="absolute -bottom-4 -right-4 border-2 border-[#DA1F28] w-full h-full rounded-tr-[100px] rounded-bl-[100px] -z-20 translate-x-4 translate-y-4" />
          </div>

          {/* 3. CONTENT AREA (Right Side) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-[#DA1F28]" />
                <span className="text-[#DA1F28] uppercase tracking-[0.4em] text-[10px] md:text-xs font-black">
                  Elite Safety Infrastructure
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-[#0a132e] leading-[0.95] tracking-tighter uppercase mb-8">
                Protecting Assets <br />
                <span className="text-[#1A52A2]">Since 2014</span>
              </h2>

              <div className="space-y-6">
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed italic border-l-4 border-[#1A52A2] pl-6">
                  Government Approved Licensed Agency specializing in turnkey fire protection systems.
                </p>
                
                <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                  Shree Atharva Enterprises delivers end-to-end reliability—from initial 
                  <span className="text-[#0a132e] font-bold"> supply & installation </span> 
                  to rigorous <span className="text-[#0a132e] font-bold"> testing & commissioning</span>. 
                  We secure industrial, commercial, and government sectors with a zero-compromise safety mandate.
                </p>
              </div>

              {/* 4. MODERN STATS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-3xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] group"
                  >
                    <div className="mb-4 bg-slate-50 w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <h3 className="text-3xl font-black text-[#0a132e] tracking-tighter">
                      {stat.value}
                    </h3>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              
                
              
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}