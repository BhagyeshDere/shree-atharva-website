"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Droplets, Bell, ArrowUpRight } from "lucide-react";

const products = [
  {
    id: "01",
    title: "Fire Extinguishers",
    desc: "Reliable fire extinguishers for industrial, commercial and residential safety requirements.",
    img: "/images/products/product.png",
    icon: <ShieldCheck />,
    brandColor: "#DA1F28",
  },
  {
    id: "02",
    title: "Hydrant System",
    desc: "Complete hydrant system with pipes, valves, hose cabinets, pumps and safety fittings.",
    img: "/images/products/product2.png",
    icon: <Zap />,
    brandColor: "#1A52A2",
  },
  {
    id: "03",
    title: "Sprinkler System",
    desc: "Automatic sprinkler solutions designed for fast response and effective fire control.",
    img: "/images/products/product3.png",
    icon: <Droplets />,
    brandColor: "#0ea5e9",
  },
  {
    id: "04",
    title: "Fire Alarm System",
    desc: "Detection and alarm systems for early warning, monitoring and emergency response.",
    img: "/images/products/product4.png",
    icon: <Bell />,
    brandColor: "#e11d48",
  },
];

export default function Products() {
  return (
    <section className="relative py-24 bg-[#f8fafc]" id="products">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-[#DA1F28] font-black uppercase tracking-[0.4em] text-xs">
              System Catalog
            </span>
            <div className="w-12 h-[2px] bg-[#DA1F28]" />
          </motion.div>
          
          <h2 className="text-6xl md:text-8xl font-black text-[#0a132e] uppercase tracking-tighter leading-[0.85]">
            Precision <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A52A2] to-[#DA1F28]">
              Protection
            </span>
          </h2>
        </div>

        {/* Stacking Cards Wrapper */}
        <div className="relative flex flex-col items-center">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="sticky top-24 md:top-28 w-full mb-12 md:mb-16"
              style={{ zIndex: index + 1 }}
            >
              {/* Outer Shadow Container */}
              <div className="relative drop-shadow-[0_30px_50px_rgba(0,0,0,0.15)] md:drop-shadow-[0_50px_80px_rgba(0,0,0,0.25)]">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-[450px] md:h-[550px] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden group bg-slate-200"
                >
                  
                  {/* 1. FULL SIZE BACKGROUND IMAGE - Reduced Zoom */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.title}
                      // Changed scale from 1.1 to 1.02 for a more natural look
                      className="w-full h-full object-cover scale-[1.02] transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    
                    {/* TEXT READABILITY GRADIENTS */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent z-10" />
                    
                    {/* Radial Scrim for Text Backdrop */}
                    <div className="absolute bottom-0 left-0 w-full h-2/3 opacity-95 z-10 pointer-events-none" 
                         style={{ background: 'radial-gradient(circle at bottom left, rgba(0,0,0,0.9) 0%, transparent 80%)' }} />
                  </div>

                  {/* 2. OVERLAY CONTENT */}
                  <div className="relative z-20 h-full w-full flex flex-col justify-end p-8 md:p-12 lg:p-16">
                    
                    <div className="max-w-2xl">
                      {/* Badge & Icon */}
                      <div className="flex items-center gap-4 mb-4 md:mb-6">
                        <div 
                          className="w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center text-white shadow-xl backdrop-blur-md"
                          style={{ backgroundColor: `${product.brandColor}E6` }} 
                        >
                          {React.cloneElement(product.icon, { size: 24 })}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-mono text-[9px] md:text-[10px] font-bold text-white/70 tracking-[0.3em] uppercase">
                            S-Series // Protocol 0{product.id}
                          </span>
                          <span className="text-white font-bold tracking-widest text-xs md:text-sm uppercase">
                            Certified Protection
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-4">
                        {product.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-white/90 text-sm md:text-lg font-medium leading-relaxed max-w-lg mb-8 border-l-2 border-white/40 pl-5">
                        {product.desc}
                      </p>

                      {/* Action Button */}
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-black uppercase text-[10px] md:text-xs tracking-widest shadow-2xl hover:bg-[#DA1F28] hover:text-white transition-all duration-300"
                      >
                        View Specs <ArrowUpRight size={16} />
                      </motion.button>
                    </div>

                    {/* Large Stylized Background Number */}
                    <div className="absolute bottom-6 right-10 opacity-10 pointer-events-none hidden lg:block">
                      <span className="text-[15rem] font-black text-white leading-none">
                        {product.id}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-slate-200" />
    </section>
  );
}