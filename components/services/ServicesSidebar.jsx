"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import servicesData from "@/data/servicesData";
import { Layers, Zap, ShieldCheck } from "lucide-react";

export default function ServicesSidebar({ activeService, setActiveService }) {
  return (
    <div className="sticky top-32 h-fit w-full lg:max-w-[340px] px-2 md:px-0">
      <div className="relative overflow-hidden bg-white rounded-[2rem] shadow-[0_30px_60px_rgba(10,19,46,0.12)] border border-slate-100">
        
        {/* Subtitle / Status Top Bar */}
        <div className="bg-[#0A132E] px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShieldCheck size={10} className="text-[#DA1F28]" />
            <span className="text-[9px] font-black text-white/60 uppercase tracking-[0.2em]">Verified Provider</span>
          </div>
          <div className="flex gap-1">
             <div className="w-1 h-1 rounded-full bg-white/20" />
             <div className="w-1 h-1 rounded-full bg-white/20" />
          </div>
        </div>

        {/* Header Section */}
        <div className="relative p-6 border-b border-slate-50 bg-white">
          {/* Subtle Industrial Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L0 20z' fill='%230A132E' fill-rule='evenodd'/%3E%3C/svg%3E")` }} 
          />
          
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-[#0A132E] to-[#1A52A2] text-white shadow-lg shadow-blue-900/30">
                 <Layers size={20} />
              </div>
              <div>
                <h2 className="text-sm font-black text-[#0A132E] uppercase tracking-[0.2em] leading-none">
                  Services
                </h2>
                <p className="text-[10px] text-slate-400 font-bold uppercase mt-1.5 tracking-wider flex items-center gap-1">
                  <span className="w-1 h-1 bg-[#DA1F28] rounded-full" /> Catalog 2026
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable List */}
        <div className="relative z-10 flex flex-col bg-white">
          <div className="max-h-[60vh] overflow-y-auto custom-sidebar-scroll transition-all py-2">
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
        <div className="p-4 bg-slate-50/50 border-t border-slate-100">
           <div className="bg-white rounded-xl p-3 border border-slate-100 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#DA1F28] animate-pulse" />
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Select a service to view details</span>
           </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-sidebar-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .custom-sidebar-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-sidebar-scroll::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 20px;
          border: 1px solid white;
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
    className="relative w-full group outline-none px-4 py-1"
  >
    <div
      className={`relative z-10 w-full text-left px-5 py-4 rounded-2xl transition-all duration-500 flex items-center justify-between overflow-hidden ${
        isActive 
          ? "bg-[#0A132E] shadow-xl shadow-blue-900/20" 
          : "bg-transparent hover:bg-slate-50"
      }`}
    >
      <div className="flex items-center gap-4 relative z-20">
        {/* Number/Icon Container */}
        <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-500 ${
            isActive ? "bg-[#DA1F28] text-white" : "bg-slate-100 text-slate-400 group-hover:bg-[#1A52A2]/10 group-hover:text-[#1A52A2]"
        }`}>
          {isActive ? (
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
            >
              <Zap size={14} fill="currentColor" />
            </motion.div>
          ) : (
            <span className="text-[10px] font-black tracking-tighter">
              {(index + 1).toString().padStart(2, '0')}
            </span>
          )}
        </div>

        <span className={`font-bold text-[12px] uppercase tracking-wider transition-all duration-500 ${
          isActive ? "text-white" : "text-slate-600 group-hover:text-[#0A132E]"
        }`}>
          {service.title}
        </span>
      </div>

      {/* Decorative Arrow Line */}
      <div className={`h-[2px] transition-all duration-700 ease-in-out rounded-full ${
        isActive ? "w-6 bg-[#DA1F28]" : "w-0 bg-slate-200 group-hover:w-3"
      }`} />

      {/* Subtle Shine Effect for Active State */}
      {isActive && (
        <motion.div 
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
        />
      )}
    </div>

    {/* Transition Glow */}
    <AnimatePresence>
      {isActive && (
        <motion.div 
          layoutId="sidebarActiveGlow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-x-2 inset-y-1 z-0 bg-[#0A132E] rounded-2xl"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </AnimatePresence>
  </button>
);