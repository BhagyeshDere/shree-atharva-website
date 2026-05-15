"use client";

import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function ServiceDetails({ service }) {
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