"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import servicesData from "@/data/servicesData";
import { Layers, Zap, ShieldCheck } from "lucide-react";

export default function ServicesSidebar({ activeService, setActiveService }) {
  return (
    /* IMPROVED WIDTH: Increased max-width for ultra-wide and optimized tablet margins */
    <div className="sticky top-24 md:top-32 h-fit w-full lg:max-w-[380px] xl:max-w-[420px] px-4 sm:px-6 lg:px-0 z-30">
      <div className="relative overflow-hidden bg-white rounded-[2rem] shadow-[0_40px_80px_rgba(10,19,46,0.15)] border border-slate-100">
        
        {/* Subtitle / Status Top Bar */}
        <div className="bg-[#0A132E] px-6 py-2.5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShieldCheck size={10} className="text-[#DA1F28]" />
            <span className="text-[9px] font-black text-white/60 uppercase tracking-[0.2em]">Verified Provider</span>
          </div>
          <div className="flex gap-1.5">
             <div className="w-1 h-1 rounded-full bg-white/20" />
             <div className="w-1 h-1 rounded-full bg-white/20" />
          </div>
        </div>

        {/* Header Section */}
        <div className="relative p-6 md:p-8 border-b border-slate-50 bg-white">
          {/* Subtle Industrial Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L0 20z' fill='%230A132E' fill-rule='evenodd'/%3E%3C/svg%3E")` }} 
          />
          
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#0A132E] to-[#1A52A2] text-white shadow-lg shadow-blue-900/30">
                 <Layers size={22} />
              </div>
              <div>
                <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">
                   Navigation
                </h2>
                <h2 className="text-base font-black text-[#0A132E] uppercase tracking-[0.1em] leading-none">
                  Our Services
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable List */}
        <div className="relative z-10 flex flex-col bg-white">
          <div className="max-h-[50vh] lg:max-h-[60vh] overflow-y-auto custom-sidebar-scroll transition-all py-3 px-2 md:px-3">
            {servicesData.map((service, index) => (
              <ServiceButton 
                key={service.id}
                index={index}
                service={service}
                isActive={activeService.id === service.id}
                onClick={() => setActiveService(service)}
              />
            ))}
          </div>
        </div>

        {/* Footer Info Badge */}
        <div className="p-5 bg-slate-50/80 border-t border-slate-100">
            <div className="bg-white rounded-2xl p-4 border border-slate-200/50 flex items-center gap-3 shadow-sm">
               <div className="w-2 h-2 rounded-full bg-[#DA1F28] animate-pulse" />
               <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest leading-tight">Select a service to view technical specifications</span>
            </div>
        </div>
      </div>

      {/* Global CSS for Sidebar Scroll */}
      <style jsx global>{`
        .custom-sidebar-scroll::-webkit-scrollbar {
          width: 4px;
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
    className="relative w-full group outline-none py-1.5"
  >
    <div
      className={`relative z-10 w-full text-left px-5 py-4 rounded-2xl transition-all duration-500 flex items-center justify-between overflow-hidden border ${
        isActive 
          ? "bg-[#0A132E] border-[#0A132E] shadow-xl shadow-blue-900/30 translate-x-1" 
          : "bg-transparent border-transparent hover:bg-slate-50 hover:border-slate-200"
      }`}
    >
      <div className="flex items-center gap-4 relative z-20">
        {/* Number/Icon Container */}
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-500 ${
            isActive ? "bg-[#DA1F28] text-white rotate-0" : "bg-slate-100 text-slate-400 group-hover:bg-[#1A52A2]/10 group-hover:text-[#1A52A2] -rotate-3"
        }`}>
          {isActive ? (
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
            >
              <Zap size={16} fill="currentColor" />
            </motion.div>
          ) : (
            <span className="text-[11px] font-black tracking-tighter">
              {(index + 1).toString().padStart(2, '0')}
            </span>
          )}
        </div>

        <span className={`font-bold text-[13px] uppercase tracking-wider transition-all duration-500 ${
          isActive ? "text-white" : "text-slate-600 group-hover:text-[#0A132E]"
        }`}>
          {service.title}
        </span>
      </div>

      {/* Decorative Arrow Line */}
      <div className={`h-[2px] transition-all duration-700 ease-in-out rounded-full ${
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
          className="absolute inset-0 z-0 bg-[#0A132E]/5 rounded-2xl blur-md"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </AnimatePresence>
  </button>
);