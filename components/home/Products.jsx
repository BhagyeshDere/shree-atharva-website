"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MoveRight, X, CheckCircle2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    id: "01",
    title: "Fire Extinguishers",
    desc: "Reliable fire extinguishers for industrial, commercial and residential safety requirements.",
    img: "/images/products/p11.png",
    brandColor: "#DA1F28",
    tag: "IMMEDIATE RESPONSE",
    specs: ["ABC Dry Powder", "CO2 Type", "Water/Foam Type", "ISI Marked"]
  },
  {
    id: "02",
    title: "Hydrant System",
    desc: "Complete hydrant system with pipes, valves, hose cabinets, pumps and safety fittings.",
    img: "/images/products/p22.png",
    brandColor: "#1A52A2",
    tag: "HEAVY INFRASTRUCTURE",
    specs: ["External Hydrants", "Internal Risers", "Hose Reel Drums", "Fire Pumps"]
  },
  {
    id: "03",
    title: "Sprinkler System",
    desc: "Automatic sprinkler solutions designed for fast response and effective fire control.",
    img: "/images/products/p33.png",
    brandColor: "#0ea5e9",
    tag: "AUTOMATED CONTROL",
    specs: ["Wet Pipe System", "Pre-action Valves", "Pendent/Upright Heads", "Flow Switches"]
  },
  {
    id: "04",
    title: "Fire Alarm System",
    desc: "Detection and alarm systems for early warning, monitoring and emergency response.",
    img: "/images/products/p44.png",
    brandColor: "#e11d48",
    tag: "EARLY DETECTION",
    specs: ["Addressable Panels", "Smoke/Heat Detectors", "Manual Call Points", "Hooters"]
  },
  {
    id: "05",
    title: "Water Flow Control Valves",
    desc: "Precision valves for regulating water pressure and flow direction in complex fire networks.",
    img: "/images/products/p55.png",
    brandColor: "#059669",
    tag: "PRECISION REGULATION",
    specs: ["Butterfly Valves", "NRV Check Valves", "Gate Valves", "Pressure Reducing"]
  },
];

export default function Products() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedProduct) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [selectedProduct]);

  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-[#fdfdfd] overflow-hidden" id="products">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#1A52A2]/5 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#DA1F28]/5 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:grid-gap-8 mb-8 md:mb-12 items-end">
          <div className="lg:col-span-9">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-3 mb-4">
              <span className="w-10 md:w-14 h-[2px] bg-[#DA1F28]" />
              <span className="text-[#DA1F28] font-black uppercase tracking-[0.5em] text-[10px]">Technical Catalog v2.0</span>
            </motion.div>
            
            {/* Reduced Headline Sizes slightly to prevent multi-line collision on mid-tier viewpoints */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#0a132e] uppercase tracking-tighter leading-[0.9] mb-0 lg:-ml-1">
              Precision <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A52A2] via-[#0a132e] to-[#DA1F28]">Engineering</span>
            </h2>
          </div>
          
          <div className="lg:col-span-3 flex justify-start lg:justify-end gap-3 pb-2">
            <button ref={prevRef} className="w-11 h-11 md:w-14 md:h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#DA1F28] hover:text-[#DA1F28] transition-all disabled:opacity-20"><ChevronLeft size={20} /></button>
            <button ref={nextRef} className="w-11 h-11 md:w-14 md:h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#DA1F28] hover:text-[#DA1F28] transition-all disabled:opacity-20"><ChevronRight size={20} /></button>
          </div>
        </div>

        <div className="relative cursor-grab active:cursor-grabbing">
          {mounted && (
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
              pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
              onSlideChange={(swiper) => setIsEnd(swiper.isEnd)}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              breakpoints={{
                640: { slidesPerView: 1.1, spaceBetween: 24 },
                768: { slidesPerView: 1.8, spaceBetween: 30 },
                1024: { slidesPerView: 2, spaceBetween: 32 },
                1440: { slidesPerView: 2.2, spaceBetween: 40 },
              }}
              className="!overflow-visible"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <motion.div className="group relative h-[450px] sm:h-[540px] lg:h-[580px] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#121212]">
                    <div className="absolute inset-0 z-0 scale-110 group-hover:scale-100 transition-transform duration-1000 ease-in-out">
                      <img src={product.img} alt={product.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/90" />
                    </div>

                    <div className="absolute top-8 md:top-10 right-0 z-20 flex flex-col items-end gap-2 pr-6 md:pr-10">
                      <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-1.5 rounded-full">
                        <span className="text-white text-[9px] font-black tracking-widest uppercase">{product.tag}</span>
                      </div>
                    </div>

                    <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-12">
                      <div className="relative">
                        <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter mb-2 leading-tight">
                          {product.title}
                        </h3>
                        <p className="text-white/60 text-xs md:text-sm font-medium leading-relaxed max-w-sm mb-5 group-hover:text-white/90 transition-colors line-clamp-2 md:line-clamp-none">
                          {product.desc}
                        </p>

                        <button 
                          onClick={() => setSelectedProduct(product)}
                          className="flex items-center gap-2 text-white group/btn"
                        >
                          <span className="text-[10px] md:text-xs font-black uppercase tracking-widest border-b-2 border-transparent group-hover/btn:border-[#DA1F28] transition-all py-1">View Details</span>
                          <MoveRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        <div className="mt-8 flex flex-col items-center gap-5 border-t border-slate-100 pt-6">
          <div className="flex flex-col items-center gap-3 group">
            <div className="relative flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border border-slate-200 group-hover:border-[#DA1F28] transition-colors" />
              <motion.div animate={isEnd ? { x: -5 } : { x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute text-[#DA1F28]">
                {isEnd ? <ChevronLeft size={20} /> : <MoveRight size={20} />}
              </motion.div>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#DA1F28]">{isEnd ? "Back to Start" : "Swipe to Explore"}</span>
            </div>
          </div>
          <div className="custom-swiper-pagination !static flex justify-center gap-2" />
        </div>

        {/* MODAL SYSTEM */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 lg:p-10">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="absolute inset-0 bg-[#0a132e]/80 backdrop-blur-md"
              />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-4xl bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              >
                <button onClick={() => setSelectedProduct(null)} className="absolute top-5 right-5 z-50 p-2 bg-slate-100 rounded-full hover:bg-[#DA1F28] hover:text-white transition-all shadow-md">
                  <X size={20} />
                </button>

                {/* Left Side: Product Image */}
                <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-auto relative bg-slate-100">
                  <img src={selectedProduct.img} alt={selectedProduct.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="text-white text-[10px] font-black uppercase tracking-widest bg-[#DA1F28] px-3 py-1 rounded-sm">{selectedProduct.tag}</span>
                  </div>
                </div>

                {/* Right Side: Product Info */}
                <div className="w-full md:w-1/2 p-6 md:p-12 overflow-y-auto">
                  <span className="text-[#DA1F28] text-[10px] font-black uppercase tracking-[0.4em] mb-3 block">Product Specifications</span>
                  <h2 className="text-2xl md:text-4xl font-black text-[#0a132e] uppercase tracking-tighter mb-3 leading-none">
                    {selectedProduct.title}
                  </h2>
                  <p className="text-slate-500 font-medium text-xs md:text-base leading-relaxed mb-6">
                    {selectedProduct.desc}
                  </p>

                  <div className="space-y-3">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#0a132e] border-b border-slate-100 pb-2">Technical Features</p>
                    {selectedProduct.specs?.map((spec, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={14} className="text-[#DA1F28]" />
                        <span className="text-slate-700 text-xs md:text-sm font-bold">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <style jsx global>{`
          .custom-swiper-pagination .swiper-pagination-bullet {
            width: 32px; height: 2px; background: #e2e8f0; opacity: 1; border-radius: 0; margin: 0 !important;
          }
          .custom-swiper-pagination .swiper-pagination-bullet-active {
            background: #DA1F28 !important; width: 64px;
          }
        `}</style>
      </div>
    </section>
  );
}