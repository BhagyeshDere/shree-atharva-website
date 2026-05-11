"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Fire Hydrant & Sprinkler System",
    description: "Design, supply, installation and maintenance of hydrant and sprinkler systems.",
    side: "left",
  },
  {
    id: "02",
    title: "Smoke Detection & Fire Alarm",
    description: "Automatic smoke detection, fire alarm and emergency alert systems.",
    side: "right",
  },
  {
    id: "03",
    title: "PA System & Gas Detection",
    description: "Public announcement systems and gas detection safety solutions.",
    side: "left",
  },
  {
    id: "04",
    title: "Velocity Spray System",
    description: "High and medium velocity spray systems for critical fire protection areas.",
    side: "right",
  },
  {
    id: "05",
    title: "Annual Maintenance Contracts",
    description: "AMC services for reliable and compliant fire safety operations.",
    side: "left",
  },
  {
    id: "06",
    title: "Fire Pumps & Control Panel",
    description: "Supply and maintenance of fire pumps, control panels and related equipment.",
    side: "right",
  },
];

export default function Services() {
  return (
    <section className="relative w-full py-24 bg-[#020617] overflow-hidden text-white">
      {/* BACKGROUND VIDEO LAYER */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-50 grayscale-[0.2]"
        >
          <source src="/videos/services.mp4" type="video/mp4" />
        </video>
        
        {/* LEFT BLUE GRADIENT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(26,82,162,0.25)_0%,_transparent_50%)] z-[1]" />
        
        {/* RIGHT RED GRADIENT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_rgba(218,31,40,0.2)_0%,_transparent_50%)] z-[1]" />
        
        {/* SUBTLE OVERLAY FOR READABILITY */}
        <div className="absolute inset-0 bg-[#020617]/30 z-[1]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-[#DA1F28]" />
            <span className="text-[#DA1F28] font-black uppercase tracking-[0.4em] text-[10px]">
              Our Main Services
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
            Services We <span className="text-[#1A52A2]">Offer</span>
          </h2>
          <p className="text-white/80 max-w-xl font-medium drop-shadow-md">
            Complete fire prevention, protection, compliance and maintenance services.
          </p>
        </div>

        {/* FLOW WRAPPER */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Connecting Line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#1A52A2] via-[#DA1F28] to-[#1A52A2] opacity-30 hidden lg:block" />

          <div className="flex flex-col gap-12 lg:gap-0">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: service.side === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex w-full items-center ${
                  service.side === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-1/2 ${service.side === "left" ? "lg:pr-20" : "lg:pl-20"}`}>
                  <div className={`relative p-8 bg-[#020617]/50 border border-white/10 backdrop-blur-md group hover:border-[#DA1F28]/50 transition-all duration-500`}>
                    
                    {/* Number Badge */}
                    <span className="absolute -top-4 left-6 bg-[#DA1F28] text-white font-black px-4 py-1 text-xs tracking-widest shadow-xl">
                      {service.id}
                    </span>

                    {/* Lightning Dot (Corner status) */}
                    <div className="absolute top-2 right-2 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1A52A2] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1A52A2]"></span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-[#1A52A2] transition-colors">
                      {service.title}
                    </h3>
                    
                    <div className="w-12 h-[2px] bg-[#DA1F28] mb-4 group-hover:w-24 transition-all duration-500" />
                    
                    <p className="text-white/70 text-sm md:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Central Point Indicator (Desktop Only) */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 items-center justify-center">
                  <div className="w-3 h-3 bg-[#020617] border-2 border-[#DA1F28] rotate-45 z-20" />
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute w-6 h-6 bg-[#DA1F28]/30 rounded-full blur-sm"
                  />
                </div>

                {/* Empty Spacer for Flow (Desktop Only) */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}