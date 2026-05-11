"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Zap, Droplets, Bell, Settings } from "lucide-react";

const products = [
  {
    id: "01",
    title: "Fire Extinguishers",
    desc: "Reliable fire extinguishers for industrial, commercial and residential safety requirements.",
    img: "/images/products/fir5.png",
    link: "/products#extinguishers",
    icon: <ShieldCheck size={24} />,
    brandColor: "#DA1F28",
    panelGradient: "from-red-50 to-red-100/50",
  },
  {
    id: "02",
    title: "Hydrant System",
    desc: "Complete hydrant system with pipes, valves, hose cabinets, pumps and safety fittings.",
    img: "/images/products/product2.png",
    link: "/products#hydrant",
    icon: <Zap size={24} />,
    brandColor: "#1A52A2",
    panelGradient: "from-blue-50 to-blue-100/50",
  },
  {
    id: "03",
    title: "Sprinkler System",
    desc: "Automatic sprinkler solutions designed for fast response and effective fire control.",
    img: "/images/products/product3.png",
    link: "/products#sprinkler",
    icon: <Droplets size={24} />,
    brandColor: "#1A52A2",
    panelGradient: "from-cyan-50 to-cyan-100/50",
  },
  {
    id: "04",
    title: "Fire Alarm System",
    desc: "Detection and alarm systems for early warning, monitoring and emergency response.",
    img: "/images/products/product4.png",
    link: "/products#alarm",
    icon: <Bell size={24} />,
    brandColor: "#DA1F28",
    panelGradient: "from-rose-50 to-rose-100/50",
  },
  {
    id: "05",
    title: "Water Flow Control Valves",
    desc: "High-quality valves for controlled water flow, pressure management and system safety.",
    img: "/images/products/product5.png",
    link: "/products#valves",
    icon: <Settings size={24} />,
    brandColor: "#475569",
    panelGradient: "from-slate-100 to-slate-200/50",
  },
];

export default function Products() {
  return (
    <section className="relative py-24 bg-white" id="products">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-16 md:mb-24">
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
              className="sticky top-24 md:top-28 w-full mb-10 md:mb-16"
              style={{ zIndex: index + 1 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full bg-white rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-slate-200 flex flex-col lg:flex-row min-h-[480px] md:min-h-[580px]"
              >
                
                {/* Left Info Section - Gradient Background */}
                <div className={`w-full lg:w-[45%] p-8 md:p-16 flex flex-col justify-between relative z-10 bg-gradient-to-br ${product.panelGradient}`}>
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                        style={{ backgroundColor: product.brandColor }}
                      >
                        {product.icon}
                      </div>
                      <span className="font-mono text-sm font-bold text-[#0a132e]/40 tracking-widest uppercase">
                        S-Series // 0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-4xl md:text-6xl font-black text-[#0a132e] uppercase tracking-tighter leading-none mb-6">
                      {product.title}
                    </h3>
                    
                    <p className="text-[#0a132e]/70 text-base md:text-lg font-medium leading-relaxed max-w-sm">
                      {product.desc}
                    </p>
                  </div>

                 

                  <div className="hidden lg:block absolute bottom-16 right-0 origin-bottom-right -rotate-90 translate-x-4 opacity-10 pointer-events-none">
                    <span className="text-4xl font-black uppercase tracking-tighter" style={{ color: product.brandColor }}>
                      Industrial Grade
                    </span>
                  </div>
                </div>

                {/* Right Image Section - Clean Simple White (Numbers Removed) */}
                <div className="w-full lg:w-[55%] relative flex items-center justify-center p-8 md:p-12 bg-white">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="relative z-10 w-full h-full flex items-center justify-center"
                  >
                    <img
                      src={product.img}
                      alt={product.title}
                      className="max-w-[85%] max-h-[320px] md:max-h-[450px] object-contain"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-slate-100" />
    </section>
  );
}