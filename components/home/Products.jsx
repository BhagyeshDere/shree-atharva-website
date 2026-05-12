"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Droplets, Bell, ArrowRight, ChevronLeft, ChevronRight, MoveRight, Settings2 } from "lucide-react";
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
    img: "/images/products/p1.png",
    icon: <ShieldCheck />,
    brandColor: "#DA1F28",
    tag: "IMMEDIATE RESPONSE"
  },
  {
    id: "02",
    title: "Hydrant System",
    desc: "Complete hydrant system with pipes, valves, hose cabinets, pumps and safety fittings.",
    img: "/images/products/p2.png",
    icon: <Zap />,
    brandColor: "#1A52A2",
    tag: "HEAVY INFRASTRUCTURE"
  },
  {
    id: "03",
    title: "Sprinkler System",
    desc: "Automatic sprinkler solutions designed for fast response and effective fire control.",
    img: "/images/products/p3.png",
    icon: <Droplets />,
    brandColor: "#0ea5e9",
    tag: "AUTOMATED CONTROL"
  },
  {
    id: "04",
    title: "Fire Alarm System",
    desc: "Detection and alarm systems for early warning, monitoring and emergency response.",
    img: "/images/products/p4.png",
    icon: <Bell />,
    brandColor: "#e11d48",
    tag: "EARLY DETECTION"
  },
  {
    id: "05",
    title: "Water Flow Control Valves",
    desc: "Precision valves for regulating water pressure and flow direction in complex fire networks.",
    img: "/images/products/p5.png",
    icon: <Settings2 />,
    brandColor: "#059669",
    tag: "PRECISION REGULATION"
  },
];

export default function Products() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-[#fdfdfd] overflow-hidden" id="products">
      {/* Structural Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#1A52A2]/5 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#DA1F28]/5 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      {/* Main Container - Optimized Left Padding */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative z-10">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 md:mb-12 items-end">
          <div className="lg:col-span-10 xl:col-span-9">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-10 md:w-14 h-[2px] bg-[#DA1F28]" />
              <span className="text-[#DA1F28] font-black uppercase tracking-[0.5em] text-[10px]">
                Technical Catalog v2.0
              </span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#0a132e] uppercase tracking-tighter leading-[0.85] mb-0 lg:-ml-2">
              Precision <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A52A2] via-[#0a132e] to-[#DA1F28]">
                Engineering
              </span>
            </h2>
          </div>
          
          <div className="lg:col-span-2 xl:col-span-3 flex justify-start lg:justify-end gap-3 pb-2">
            <button 
              ref={prevRef}
              className="w-11 h-11 md:w-14 md:h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#DA1F28] hover:text-[#DA1F28] transition-all disabled:opacity-20"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              ref={nextRef}
              className="w-11 h-11 md:w-14 md:h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#DA1F28] hover:text-[#DA1F28] transition-all disabled:opacity-20"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider Component */}
        <div className="relative cursor-grab active:cursor-grabbing">
          {mounted && (
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{
                clickable: true,
                el: '.custom-swiper-pagination',
              }}
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
                  <motion.div
                    className="group relative h-[450px] sm:h-[550px] lg:h-[620px] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#121212]"
                  >
                    <div className="absolute inset-0 z-0 scale-110 group-hover:scale-100 transition-transform duration-1000 ease-in-out">
                      <img
                        src={product.img}
                        alt={product.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/90" />
                    </div>

                    <div className="absolute top-8 md:top-10 right-0 z-20 flex flex-col items-end gap-2 pr-6 md:pr-10">
                      <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-1.5 rounded-full">
                        <span className="text-white text-[9px] font-black tracking-widest uppercase">{product.tag}</span>
                      </div>
                    </div>

                    <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-14">
                      <div className="absolute top-0 left-6 md:left-10 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                        <span className="text-[8rem] md:text-[12rem] font-black text-white">{product.id}</span>
                      </div>

                      <div className="relative">
                        <div className="flex items-center gap-4 mb-5">
                          <motion.div 
                            whileHover={{ rotate: 15 }}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-white shadow-2xl"
                            style={{ backgroundColor: product.brandColor }}
                          >
                            {React.cloneElement(product.icon, { size: 20 })}
                          </motion.div>
                          <div className="h-[1px] w-8 bg-white/20" />
                        </div>

                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-3 leading-tight">
                          {product.title}
                        </h3>
                        <p className="text-white/60 text-xs md:text-base font-medium leading-relaxed max-w-sm mb-8 group-hover:text-white/90 transition-colors line-clamp-2 md:line-clamp-none">
                          {product.desc}
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                          <div className="flex items-center gap-2">
                             <span className="w-1.5 h-1.5 rounded-full bg-[#DA1F28] animate-pulse" />
                             <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Active</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        {/* BOTTOM NAVIGATION */}
        <div className="mt-8 flex flex-col items-center gap-5 border-t border-slate-100 pt-6">
          
          <div className="flex flex-col items-center gap-3 group">
            <div className="relative flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border border-slate-200 group-hover:border-[#DA1F28] transition-colors" />
              <motion.div 
                animate={isEnd ? { x: -5 } : { x: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute text-[#DA1F28]"
              >
                {isEnd ? <ChevronLeft size={20} /> : <MoveRight size={20} />}
              </motion.div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#DA1F28]">
                {isEnd ? "Back to Start" : "Swipe to Explore"}
              </span>
            </div>
          </div>

          <div className="custom-swiper-pagination !static flex justify-center gap-2" />
        </div>

        {/* Global Styles */}
        <style jsx global>{`
          .custom-swiper-pagination .swiper-pagination-bullet {
            width: 32px;
            height: 2px;
            background: #e2e8f0;
            opacity: 1;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            border-radius: 0;
            margin: 0 !important;
          }
          .custom-swiper-pagination .swiper-pagination-bullet-active {
            background: #DA1F28 !important;
            width: 64px;
          }
        `}</style>
      </div>
    </section>
  );
}