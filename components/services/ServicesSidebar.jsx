"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import servicesData from "@/data/servicesData";
import { Layers, Zap, ShieldCheck, ChevronRight, ChevronLeft } from "lucide-react";

export default function ServicesSidebar({ activeService, setActiveService }) {
  const scrollRef = useRef(null);

  // Auto-scroll mobile tabs when active service changes
  useEffect(() => {
    const activeElement = document.getElementById(`mobile-tab-${activeService.id}`);
    if (activeElement && scrollRef.current) {
      scrollRef.current.scrollTo({
        left: activeElement.offsetLeft - 20,
        behavior: "smooth",
      });
    }
  }, [activeService]);

  return (
    /* 
       CONTAINER RESPONSIVENESS: 
       - Mobile: Sticky at top (just below navbar), full width, no margin.
       - Desktop: Sticky side column with your original max-width.
    */
    <div className="sticky top-16 md:top-24 lg:top-32 h-fit w-full lg:max-w-[380px] xl:max-w-[420px] px-0 lg:px-0 z-40 lg:z-30 mb-8 lg:mb-0">
      <div className="relative overflow-hidden bg-white lg:rounded-[2rem] shadow-[0_20px_40px_rgba(10,19,46,0.08)] lg:shadow-[0_40px_80px_rgba(10,19,46,0.15)] border-b lg:border border-slate-100">
        
        {/* Status Bar - Hidden on small mobile to save space */}
        <div className="bg-[#0A132E] px-6 py-2 hidden sm:flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShieldCheck size={10} className="text-[#DA1F28]" />
            <span className="text-[9px] font-black text-white/60 uppercase tracking-[0.2em]">Verified Provider</span>
          </div>
          <div className="flex gap-1.5">
             <div className="w-1 h-1 rounded-full bg-white/20" />
             <div className="w-1 h-1 rounded-full bg-white/20" />
          </div>
        </div>

        {/* Header Section - Condensed on Mobile */}
        <div className="relative p-4 md:p-6 lg:p-8 border-b border-slate-50 bg-white">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L0 20z' fill='%230A132E' fill-rule='evenodd'/%3E%3C/svg%3E")` }} 
          />
          
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3 lg:gap-4">
              <div className="p-2 lg:p-3.5 rounded-xl lg:rounded-2xl bg-gradient-to-br from-[#0A132E] to-[#1A52A2] text-white shadow-lg">
                 <Layers size={18} className="lg:hidden" />
                 <Layers size={22} className="hidden lg:block" />
              </div>
              <div>
                <h2 className="text-[9px] lg:text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-0.5 lg:mb-1">
                    Navigation
                </h2>
                <h2 className="text-sm lg:text-base font-black text-[#0A132E] uppercase tracking-[0.1em] leading-none">
                  Our Services
                </h2>
              </div>
            </div>
            
            {/* Mobile Swipe Indicator */}
            <div className="lg:hidden flex items-center gap-1 text-[#DA1F28] animate-pulse">
              <span className="text-[8px] font-bold uppercase">Swipe</span>
              <ChevronRight size={12} />
            </div>
          </div>
        </div>

        {/* List Section: Vertical on Desktop / Horizontal on Mobile */}
        <div className="relative z-10 flex flex-col bg-white">
          <div 
            ref={scrollRef}
            className="flex lg:flex-col overflow-x-auto lg:overflow-y-auto lg:max-h-[60vh] custom-sidebar-scroll transition-all py-3 px-4 lg:px-3 gap-2 lg:gap-0 no-scrollbar sm:scrollbar-auto"
          >
            {servicesData.map((service, index) => (
              <div 
                key={service.id} 
                id={`mobile-tab-${service.id}`}
                className="flex-shrink-0 lg:w-full"
              >
                <ServiceButton 
                  index={index}
                  service={service}
                  isActive={activeService.id === service.id}
                  onClick={() => setActiveService(service)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info Badge - Desktop Only */}
        <div className="hidden lg:block p-5 bg-slate-50/80 border-t border-slate-100">
            <div className="bg-white rounded-2xl p-4 border border-slate-200/50 flex items-center gap-3 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#DA1F28] animate-pulse" />
                <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest leading-tight">Select a service to view technical specifications</span>
            </div>
        </div>
      </div>

      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .custom-sidebar-scroll::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .custom-sidebar-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-sidebar-scroll::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 20px;
        }
        .custom-sidebar-scroll::-webkit-scrollbar-thumb:hover {
          background: #1A52A2;
        }
      `}</style>
    </div>
  );
}

const ServiceButton = ({ service, isActive, onClick, index }) => (
  <button 
    onClick={onClick} 
    className="relative w-full group outline-none py-1 lg:py-1.5"
  >
    <div
      className={`relative z-10 w-full text-left px-4 lg:px-5 py-2.5 lg:py-4 rounded-xl lg:rounded-2xl transition-all duration-500 flex items-center justify-between overflow-hidden border whitespace-nowrap lg:whitespace-normal ${
        isActive 
          ? "bg-[#0A132E] border-[#0A132E] shadow-lg lg:shadow-xl lg:translate-x-1" 
          : "bg-white lg:bg-transparent border-slate-200 lg:border-transparent hover:bg-slate-50 hover:border-slate-200"
      }`}
    >
      <div className="flex items-center gap-3 lg:gap-4 relative z-20">
        {/* Number/Icon Container */}
        <div className={`w-7 h-7 lg:w-9 lg:h-9 rounded-lg lg:rounded-xl flex items-center justify-center transition-all duration-500 ${
            isActive ? "bg-[#DA1F28] text-white" : "bg-slate-100 text-slate-400"
        }`}>
          {isActive ? (
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
            >
              <Zap size={12} fill="currentColor" className="lg:w-4 lg:h-4" />
            </motion.div>
          ) : (
            <span className="text-[10px] lg:text-[11px] font-black tracking-tighter">
              {(index + 1).toString().padStart(2, '0')}
            </span>
          )}
        </div>

        <span className={`font-bold text-[11px] lg:text-[13px] uppercase tracking-wider transition-all duration-500 ${
          isActive ? "text-white" : "text-slate-600 group-hover:text-[#0A132E]"
        }`}>
          {service.title}
        </span>
      </div>

      {/* Decorative Arrow Line - Desktop Only */}
      <div className={`hidden lg:block h-[2px] transition-all duration-700 ease-in-out rounded-full ${
        isActive ? "w-8 bg-[#DA1F28]" : "w-0 bg-slate-200 group-hover:w-4"
      }`} />

      {/* Subtle Shine Effect for Active State */}
      {isActive && (
        <motion.div 
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
          className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
        />
      )}
    </div>

    {/* Transition Glow Background */}
    <AnimatePresence>
      {isActive && (
        <motion.div 
          layoutId="sidebarActiveGlow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-0 bg-[#0A132E]/5 rounded-2xl blur-md hidden lg:block"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </AnimatePresence>
  </button>
);