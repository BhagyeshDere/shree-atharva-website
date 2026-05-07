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
      color: "border-blue-500",
    },
    {
      id: "02",
      title: "Licensed Agency",
      desc: "Government approved agency ensuring your infrastructure meets all legal fire compliance.",
      icon: ShieldCheck,
      color: "border-red-600",
    },
    {
      id: "03",
      title: "Precision Engineering",
      desc: "Expert team utilizing advanced testing and commissioning tools for maximum reliability.",
      icon: HardHat,
      color: "border-blue-500",
    },
    {
      id: "04",
      title: "24/7 Response",
      desc: "Comprehensive maintenance and rapid support systems for all industrial and residential projects.",
      icon: Zap,
      color: "border-red-600",
    },
  ];

  return (
    // Updated background to a lighter Slate-900 for less "darkness"
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#0f172a]">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/about/why.png" 
          alt="Fire Safety Background"
          className="w-full h-full object-cover opacity-50 block" // Increased opacity for visibility
          style={{ objectPosition: 'center' }}
        />
        {/* Adjusted Overlays: Less deep black, more subtle gradient */}
        <div className="absolute inset-0 bg-[#0f172a]/50" /> 
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0f172a_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Centralized Editorial Heading */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 md:w-16 h-[1px] bg-[#DA1F28]" />
            <span className="text-[#DA1F28] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
              The Advantage
            </span>
            <div className="w-8 md:w-16 h-[1px] bg-[#DA1F28]" />
          </motion.div>

          <h2 className="text-4xl md:text-8xl font-black text-white leading-none uppercase tracking-tighter drop-shadow-xl">
            Why Choose <span className="text-[#1A52A2]">Us</span>
          </h2>
          
          <p className="mt-8 text-slate-200 text-base md:text-xl max-w-2xl leading-relaxed font-medium">
            We combine government-certified trust with over a decade of 
            on-site engineering expertise to protect your assets.
          </p>
        </div>

        {/* Centralized Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              // Lightened card background for better contrast against Slate
              className={`group relative p-8 bg-white/10 backdrop-blur-md border-t-4 ${feature.color} hover:bg-white/15 transition-all duration-500 rounded-b-2xl flex flex-col items-center text-center border-x border-b border-white/5`}
            >
              {/* Massive Background Number */}
              <span className="absolute top-2 left-1/2 -translate-x-1/2 text-8xl font-black text-white/5 select-none transition-opacity group-hover:opacity-10">
                {feature.id}
              </span>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-[#0f172a] border border-white/20 flex items-center justify-center mb-8 mx-auto group-hover:scale-110 group-hover:border-white/40 transition-all duration-500 shadow-xl">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-4 min-h-[60px] flex items-center justify-center">
                  {feature.title}
                </h3>
                
                <p className="text-slate-200 text-sm md:text-base leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              {/* Accent Glow Effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 rounded-full bg-white/10 backdrop-blur-sm">
             <div className="w-2 h-2 rounded-full bg-[#DA1F28] animate-pulse" />
             <span className="text-white font-bold uppercase tracking-widest text-[9px]">
               Licensed Government Contractor
             </span>
          </div>
        </motion.div>
      </div>

      {/* Modern Industrial Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-[#DA1F28] to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}