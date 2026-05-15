"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HardHat, History, Zap } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      id: "01",
      title: "10+ Years Excellence",
      desc: "Delivering world-class fire safety engineering across Maharashtra since 2014.",
      icon: History,
      theme: "blue",
    },
    {
      id: "02",
      title: "Licensed Agency",
      desc: "Government approved agency ensuring your infrastructure meets all legal fire compliance.",
      icon: ShieldCheck,
      theme: "red",
    },
    {
      id: "03",
      title: "Precision Engineering",
      desc: "Expert team utilizing advanced testing and commissioning tools for maximum reliability.",
      icon: HardHat,
      theme: "blue",
    },
    {
      id: "04",
      title: "24/7 Response",
      desc: "Comprehensive maintenance and rapid support systems for all projects.",
      icon: Zap,
      theme: "red",
    },
  ];

  return (
    // Tightened overall section padding: pb-16 on mobile and pb-20 on desktop
    <section className="relative pt-16 pb-12 md:pt-20 md:pb-16 overflow-hidden bg-[#f8fafc]">
      
      {/* Structural Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.4]" 
             style={{ backgroundImage: `radial-gradient(#e2e8f0 1.5px, transparent 1.5px)`, backgroundSize: '40px 40px' }} 
        />
        
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-400/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-red-400/10 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Heading */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-12 h-[1px] bg-[#DA1F28]" />
            <span className="text-[#DA1F28] font-black uppercase tracking-[0.4em] text-[10px]">
              The Advantage
            </span>
            <div className="w-12 h-[1px] bg-[#DA1F28]" />
          </motion.div>

          <h2 className="text-4xl md:text-7xl font-black text-[#0f172a] leading-none uppercase tracking-tighter">
            Why Choose <span className="text-[#1A52A2]">Us</span>
          </h2>
          
          <p className="mt-4 text-slate-500 text-sm md:text-base max-w-2xl leading-relaxed font-medium">
            We combine government-certified trust with over a decade of 
            on-site engineering expertise to protect your assets.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-8 bg-white/80 backdrop-blur-sm border-t-4 transition-all duration-500 rounded-b-3xl flex flex-col items-center text-center border-x border-b shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] 
                ${feature.theme === 'blue' 
                  ? 'border-t-[#1A52A2] border-slate-100' 
                  : 'border-t-[#DA1F28] border-slate-100'}`}
            >
              <span className="absolute top-4 left-1/2 -translate-x-1/2 text-7xl font-black text-slate-100/50 select-none">
                {feature.id}
              </span>

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 mx-auto transition-all duration-500 shadow-lg group-hover:scale-110
                  ${feature.theme === 'blue' ? 'bg-[#1A52A2] text-white' : 'bg-[#DA1F28] text-white'}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg md:text-xl font-black text-[#0f172a] uppercase tracking-tight mb-4 min-h-[50px] flex items-center justify-center leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </div>

              <div className={`absolute bottom-6 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity
                ${feature.theme === 'blue' ? 'bg-[#1A52A2]' : 'bg-[#DA1F28]'}`} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Industrial Side Lines */}
      <div className="absolute top-0 left-1/4 w-[1px] h-20 bg-gradient-to-b from-slate-200 to-transparent" />
      <div className="absolute top-0 right-1/4 w-[1px] h-20 bg-gradient-to-b from-slate-200 to-transparent" />
    </section>
  );
}