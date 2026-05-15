"use client";

import { motion } from "framer-motion";
import clients from "@/data/clients";

export default function Clients() {
  // Triple the array for a seamless, continuous infinite loop
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    /* Tightened padding-bottom for better flow */
    <section className="pt-24 pb-16 bg-white overflow-hidden border-t border-gray-100 relative">
      {/* Subtle Background Typographic Watermark */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] flex items-center justify-center select-none">
        <span className="text-[20vw] font-black uppercase tracking-tighter text-[#1A52A2]">Partners</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Centralized Editorial Heading */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            className="h-[3px] bg-gradient-to-r from-transparent via-[#DA1F28] to-transparent mb-8" 
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-black text-[#0a132e] uppercase tracking-tighter leading-[0.85] mb-6">
              Proven <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1A52A2] to-[#0a132e]">Track Record</span>
            </h2>
          </motion.div>
          
          <div className="flex items-center gap-6">
            <span className="hidden md:block w-12 h-[1px] bg-[#1A52A2]/20" />
            <p className="text-slate-400 font-bold uppercase tracking-[0.5em] text-[10px] md:text-xs">
              Trusted by Maharashtra&apos;s Leading Industries
            </p>
            <span className="hidden md:block w-12 h-[1px] bg-[#1A52A2]/20" />
          </div>
        </div>
      </div>

      {/* Improved Slider */}
      <div className="relative py-10 group bg-slate-50/50">
        {/* Advanced Track Borders */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Side Fades */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white via-white/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white via-white/90 to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{
            x: ["0%", "-33.33%"], 
          }}
          transition={{
            ease: "linear",
            duration: 12, 
            repeat: Infinity,
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex-shrink-0 px-8 md:px-16 flex items-center justify-center"
            >
              {/* UNIFORM SIZE CONTAINER: Set fixed height/width to ensure all logos look identical in scale */}
              <div className="w-24 h-12 md:w-40 md:h-20 flex items-center justify-center grayscale-0">
                <img
                  src={client.image}
                  alt={client.name}
                  className="max-w-full max-h-full w-auto h-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Labeling - Badge Style (Reduced Margin) */}
      <div className="mt-12 flex justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="group cursor-default"
        >
          
        </motion.div>
      </div>
    </section>
  );
}