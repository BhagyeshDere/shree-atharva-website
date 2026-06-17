"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Zap, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import servicesData from "@/data/servicesData";

/* ==========================================================================
   PRIMARY EXPORT COMPOSED LAYOUT CONTAINER
   ========================================================================== */
export default function ServicesLayout({ activeService, setActiveService }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10 items-start">
        
        {/* Left/Top Sidebar Component Layer */}
        <ServicesSidebar 
          activeService={activeService} 
          setActiveService={setActiveService} 
        />
        
        {/* Right/Bottom Detailed Specifications Content Panel */}
        <div className="flex-grow w-full lg:min-h-[600px]">
          <ServiceDetails service={activeService} />
        </div>
        
      </div>
    </div>
  );
}

/* ==========================================================================
   SUB-COMPONENT 1: SERVICES SIDEBAR TABS COMPONENT
   ========================================================================== */
function ServicesSidebar({ activeService, setActiveService }) {
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
    /* FIXED RESPONSIVENESS: 
       - Mobile top-20: Provides enough clearance for the fixed navbar.
       - Mobile z-40: Stays below the navbar (z-9999) but above hero content.
    */
    <div className="sticky top-20 md:top-28 lg:top-32 h-fit w-full lg:max-w-[380px] xl:max-w-[420px] px-0 lg:px-0 z-[40] mb-4 lg:mb-0">
      <div className="relative overflow-hidden bg-white lg:rounded-[2rem] shadow-[0_10px_30px_rgba(10,19,46,0.05)] lg:shadow-[0_40px_80px_rgba(10,19,46,0.15)] border-b lg:border border-slate-100">
        
        {/* Status Bar - Hidden on mobile to keep navbar area clean */}
        <div className="bg-[#0A132E] px-6 py-2 hidden lg:flex justify-between items-center">
          <div className="flex gap-1.5">
             <div className="w-1 h-1 rounded-full bg-white/20" />
             <div className="w-1 h-1 rounded-full bg-white/20" />
          </div>
        </div>

        {/* Header Section - Condensed padding for mobile */}
        <div className="relative p-3 md:p-4 lg:p-8 border-b border-slate-50 bg-white">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L0 20z' fill='%230A132E' fill-rule='evenodd'/%3E%3C/svg%3E")` }} 
          />
          
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3 lg:gap-4">
              <div className="p-2 lg:p-3.5 rounded-lg lg:rounded-2xl bg-gradient-to-br from-[#0A132E] to-[#1A52A2] text-white shadow-lg">
                 <Layers size={16} className="lg:hidden" />
                 <Layers size={22} className="hidden lg:block" />
              </div>
              <div>
                <h2 className="text-[10px] lg:text-base font-black text-[#0A132E] uppercase tracking-[0.1em] leading-none">
                  Our Services
                </h2>
              </div>
            </div>
            
            {/* Mobile Swipe Indicator - Visible only on mobile/tablet */}
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
            className="flex lg:flex-col overflow-x-auto lg:overflow-y-auto lg:max-h-[60vh] custom-sidebar-scroll transition-all py-2 px-4 lg:px-3 gap-2 lg:gap-0 no-scrollbar"
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
                <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest leading-tight">Select a service for technical specs</span>
            </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .custom-sidebar-scroll::-webkit-scrollbar { width: 4px; height: 4px; }
        .custom-sidebar-scroll::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 20px; }
      `}</style>
    </div>
  );
}

/* Helper Element inside Navigation Menu Container */
const ServiceButton = ({ service, isActive, onClick, index }) => (
  <button 
    onClick={onClick} 
    className="relative group outline-none py-1 lg:w-full"
  >
    <div
      className={`relative z-10 px-4 lg:px-5 py-2 lg:py-4 rounded-lg lg:rounded-2xl transition-all duration-500 flex items-center justify-between border whitespace-nowrap lg:whitespace-normal ${
        isActive 
          ? "bg-[#0A132E] border-[#0A132E] shadow-md lg:shadow-xl lg:translate-x-1" 
          : "bg-white lg:bg-transparent border-slate-200 lg:border-transparent"
      }`}
    >
      <div className="flex items-center gap-3 lg:gap-4 relative z-20">
        <div className={`w-6 h-6 lg:w-9 lg:h-9 rounded lg:rounded-xl flex items-center justify-center transition-all duration-500 ${
            isActive ? "bg-[#DA1F28] text-white" : "bg-slate-100 text-slate-400"
        }`}>
          {isActive ? (
            <Zap size={10} fill="currentColor" className="lg:w-4 lg:h-4" />
          ) : (
            <span className="text-[9px] lg:text-[11px] font-black">
              {(index + 1).toString().padStart(2, '0')}
            </span>
          )}
        </div>

        <span className={`font-bold text-[10px] lg:text-[13px] uppercase tracking-wider transition-all duration-500 ${
          isActive ? "text-white" : "text-slate-600"
        }`}>
          {service.title}
        </span>
      </div>

      <div className={`hidden lg:block h-[2px] transition-all duration-700 ease-in-out rounded-full ${
        isActive ? "w-8 bg-[#DA1F28]" : "w-0 bg-slate-200"
      }`} />
    </div>
  </button>
);

/* ==========================================================================
   SUB-COMPONENT 2: COMPREHENSIVE SERVICE DATA DETAILS OVERLAY
   ========================================================================== */
function ServiceDetails({ service }) {
  const router = useRouter();
  const pathname = usePathname();

  if (!service) return null;

  const handleEnquiry = () => {
    const targetHash = "#contact-form-section";
    const queryString = `?service=${encodeURIComponent(service.title)}`;
    const isContactPage = pathname === "/contact" || pathname === "/";

    if (isContactPage) {
      const contactSection = document.getElementById("contact-form-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", queryString + targetHash);
        window.dispatchEvent(new Event("serviceSelection"));
      }
    } else {
      router.push(`/contact${queryString}${targetHash}`);
    }
  };

  return (
    // Responsive rounded corners and height handling
    <div className="relative bg-white rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_10px_30px_rgba(10,19,46,0.04)] md:shadow-[0_30px_70px_rgba(10,19,46,0.08)] border border-slate-100 h-full flex flex-col">
      
      {/* 1. TOP IMAGE - Optimized responsive heights */}
      <div className="relative w-full h-[180px] sm:h-[240px] md:h-[320px] lg:h-[400px] bg-[#F8FAFC] overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A132E]/40 via-transparent to-transparent" />
        
        <div className="absolute top-3 left-3 md:top-6 md:left-6 bg-[#DA1F28] px-2.5 md:px-4 py-1 rounded-sm">
           <span className="text-[7px] md:text-[10px] font-black text-white uppercase tracking-widest">Technical Solution</span>
        </div>
      </div>

      {/* 2. CONTENT AREA - Fluid padding */}
      <div className="relative p-5 sm:p-8 lg:p-12 flex flex-col flex-grow">
        
        <div className="mb-4 md:mb-8 text-center md:text-left">
          {/* text-xl for small mobile ensures title doesn't break poorly */}
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0A132E] leading-tight md:leading-[0.9] uppercase tracking-tighter mb-3 md:mb-5">
            {service.title}
          </h2>
          <div className="w-10 md:w-16 h-1 md:h-1.5 bg-[#DA1F28] mx-auto md:mx-0" />
        </div>

        <div className="max-w-4xl mb-6 md:mb-10 text-center md:text-left">
          <p className="text-slate-600 text-[11px] sm:text-sm md:text-base lg:text-lg leading-relaxed font-medium">
            {service.description}
          </p>
        </div>

        {/* Responsive Grid for Checkpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 lg:gap-x-10 gap-y-2.5 md:gap-y-4 mb-8 md:mb-10 border-t border-slate-100 pt-5 md:pt-8">
          {service.points?.map((point, index) => (
            <div key={index} className="flex items-start md:items-center gap-2.5 group">
              <div className="bg-slate-100 p-1 group-hover:bg-[#1A52A2] transition-colors rounded-sm shrink-0 mt-0.5 md:mt-0">
                <CheckCircle2 size={10} className="text-[#1A52A2] group-hover:text-white md:w-[14px] md:h-[14px]" />
              </div>
              <span className="text-slate-700 font-bold text-[8px] sm:text-[10px] md:text-xs uppercase tracking-wide">
                {point}
              </span>
            </div>
          ))}
        </div>

        {/* CTA BUTTON - Fixed width and scale for mobile */}
        <div className="mt-auto pt-4 flex justify-center md:justify-start">
          <button 
            onClick={handleEnquiry}
            className="group relative flex items-center gap-3 bg-[#0A132E] hover:bg-[#1A52A2] text-white pl-5 pr-1.5 py-1.5 transition-all duration-500 overflow-hidden w-full sm:w-auto min-w-[160px] md:min-w-[210px] justify-between rounded-full shadow-lg shadow-blue-900/10 active:scale-95"
          >
            <span className="relative z-10 font-black uppercase tracking-[0.1em] text-[8px] md:text-[10px] whitespace-nowrap">
              Enquire Now
            </span>
            <div className="relative z-10 w-7 h-7 md:w-10 md:h-10 bg-[#DA1F28] flex items-center justify-center rounded-full group-hover:translate-x-0.5 transition-transform duration-500">
              <ArrowRight size={12} className="md:w-[16px] md:h-[16px]" />
            </div>
            
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-full group-hover:translate-x-1/2 transition-transform duration-700" />
          </button>
        </div>
      </div>

      {/* Decorative Dot */}
      <div className="absolute bottom-4 right-4 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#DA1F28] rounded-full opacity-50" />
    </div>
  );
}