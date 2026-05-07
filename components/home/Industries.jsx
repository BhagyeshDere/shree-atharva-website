"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Factory, 
  Building2, 
  Hospital, 
  Landmark, 
  Home, 
  Hotel, 
  School, 
  Gavel,
  ShieldCheck
} from "lucide-react";

const industries = [
  { name: "Industrial Projects", icon: <Factory className="w-5 h-5" />, side: "left" },
  { name: "Commercial Projects", icon: <Building2 className="w-5 h-5" />, side: "right" },
  { name: "Hospitals", icon: <Hospital className="w-5 h-5" />, side: "left" },
  { name: "Banks", icon: <Landmark className="w-5 h-5" />, side: "right" },
  { name: "Residential Projects", icon: <Home className="w-5 h-5" />, side: "left" },
  { name: "Hotels", icon: <Hotel className="w-5 h-5" />, side: "right" },
  { name: "Schools & Colleges", icon: <School className="w-5 h-5" />, side: "left" },
  { name: "Government Jobs", icon: <Gavel className="w-5 h-5" />, side: "right" },
];

export default function IndustriesSection() {
  return (
    <section className="py-20 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Brand Styled */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block bg-[#DA1F28] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-sm mb-6"
          >
            Industries We Serve
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-[#1A52A2] leading-tight uppercase tracking-tighter">
            Serving Multiple Sectors Across<br />
            <span className="text-[#DA1F28]">Maharashtra</span>
          </h2>
        </div>

        {/* The Hub-and-Spoke Layout */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-[650px]">
          
          {/* Mobile/Tablet: Clean Stacking Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden w-full z-10">
            {industries.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-between bg-[#1A52A2] text-white p-4 rounded-full px-8 shadow-lg border-b-4 border-[#DA1F28]/30"
              >
                <span className="font-bold text-xs uppercase tracking-widest">{item.name}</span>
                <div className="bg-white text-[#DA1F28] p-2 rounded-full shadow-md">
                  {item.icon}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: The Hub & Spoke System */}
          <div className="hidden lg:flex items-center justify-center w-full relative">
            
            {/* Left Column Spokes */}
            <div className="flex flex-col gap-14 items-end pr-40 z-10">
              {industries.filter(i => i.side === "left").map((item, idx) => (
                <IndustryNode key={idx} item={item} align="right" />
              ))}
            </div>

            {/* Central Brand Hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="w-72 h-72 rounded-full bg-white shadow-[0_0_60px_rgba(26,82,162,0.15)] border-t-[6px] border-r-[6px] border-[#1A52A2] border-b-[6px] border-l-[6px] border-l-[#DA1F28] border-b-[#DA1F28] flex flex-col items-center justify-center p-10 text-center relative"
              >
                <ShieldCheck className="w-8 h-8 text-[#1A52A2] mb-2" />
                <h3 className="text-[#1A52A2] font-black text-3xl leading-none uppercase tracking-tighter">
                  Industries
                </h3>
                <p className="text-[#DA1F28] font-bold uppercase tracking-[0.2em] text-xs mt-2">
                  We Serve
                </p>
                <div className="w-16 h-[2px] bg-slate-200 my-4" />
                <p className="text-slate-400 font-bold text-[9px] uppercase tracking-[0.4em]">
                  Checklist
                </p>
                
                {/* Decorative Spin Ring */}
                <div className="absolute -inset-4 rounded-full border border-dashed border-slate-200 animate-[spin_30s_linear_infinite]" />
              </motion.div>
            </div>

            {/* Right Column Spokes */}
            <div className="flex flex-col gap-14 items-start pl-40 z-10">
              {industries.filter(i => i.side === "right").map((item, idx) => (
                <IndustryNode key={idx} item={item} align="left" />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryNode({ item, align }) {
  const isRight = align === "right";
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: isRight ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`group flex items-center gap-5 bg-[#1A52A2] text-white py-3.5 px-7 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 relative cursor-default ${isRight ? "flex-row" : "flex-row-reverse"}`}
    >
      <span className="font-bold text-[10px] md:text-[11px] uppercase tracking-[0.15em] whitespace-nowrap">
        {item.name}
      </span>
      <div className="bg-white text-[#DA1F28] p-2.5 rounded-full shrink-0 shadow-[inner_0_2px_4px_rgba(0,0,0,0.1)] group-hover:bg-[#DA1F28] group-hover:text-white transition-colors">
        {item.icon}
      </div>

      {/* Spoke Connector Line */}
      <div className={`absolute top-1/2 -translate-y-1/2 w-24 h-[1px] border-t border-dashed border-slate-300 -z-10 
        ${isRight ? "-right-24" : "-left-24"}`} 
      />
    </motion.div>
  );
}