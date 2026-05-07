"use client";

import { motion } from "framer-motion";
import clients from "@/data/clients";

export default function Clients() {
  // Triple the array for a seamless, continuous infinite loop
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Centralized Editorial Heading */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-[#DA1F28] mb-8" 
          />
          
          <h2 className="text-5xl md:text-7xl font-black text-[#0a132e] uppercase tracking-tighter leading-none mb-6">
            Proven <span className="text-[#1A52A2]">Track Record</span>
          </h2>
          
          <div className="flex items-center gap-4">
            <span className="hidden md:block w-8 h-[1px] bg-gray-300" />
            <p className="text-gray-500 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
              Trusted by Maharashtra's Leading Industries
            </p>
            <span className="hidden md:block w-8 h-[1px] bg-gray-300" />
          </div>
        </div>
      </div>

      {/* Structured Slider Wrapper */}
      <div className="relative py-12 bg-gray-50/30">
        {/* Subtle top/bottom borders to give the slider a defined 'track' feel */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-200/50" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-200/50" />

        {/* Side Fades for smooth entry/exit of logos */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-33.33%"], 
          }}
          transition={{
            ease: "linear",
            duration: 15, // Speed improved: Lowered from 25 to 15 for faster movement
            repeat: Infinity,
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex-shrink-0 px-10 md:px-16 flex items-center justify-center border-r border-gray-100/50"
            >
              <img
                src={client.image}
                alt={client.name}
                // grayscale-0 ensures original colors; transition is subtle without shadows
                className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Labeling for an Advanced Look */}
      <div className="mt-12 flex justify-center">
        <div className="inline-flex items-center gap-3 px-6 py-2 border border-gray-100 rounded-full bg-white text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">
          <span className="w-2 h-2 rounded-full bg-[#DA1F28] animate-pulse" />
          Ongoing Projects Across 15+ Districts
        </div>
      </div>
    </section>
  );
}