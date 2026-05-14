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
    <div className="relative bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(10,19,46,0.06)] md:shadow-[0_30px_70px_rgba(10,19,46,0.08)] border border-slate-100 h-full flex flex-col">
      
      {/* 1. TOP IMAGE */}
      <div className="relative w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px] bg-[#F8FAFC] overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A132E]/40 via-transparent to-transparent" />
        
        <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-[#DA1F28] px-3 md:px-4 py-1 rounded-sm">
           <span className="text-[8px] md:text-[10px] font-black text-white uppercase tracking-widest">Technical Solution</span>
        </div>
      </div>

      {/* 2. CONTENT AREA */}
      <div className="relative p-6 sm:p-8 lg:p-12 flex flex-col flex-grow">
        
        <div className="mb-6 md:mb-8 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0A132E] leading-[0.95] md:leading-[0.9] uppercase tracking-tighter mb-4 md:mb-5">
            {service.title}
          </h2>
          <div className="w-12 md:w-16 h-1 md:h-1.5 bg-[#DA1F28] mx-auto md:mx-0" />
        </div>

        <div className="max-w-4xl mb-8 md:mb-10 text-center md:text-left">
          <p className="text-slate-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed font-medium">
            {service.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-10 gap-y-3 md:gap-y-4 mb-8 md:mb-10 border-t border-slate-100 pt-6 md:pt-8">
          {service.points?.map((point, index) => (
            <div key={index} className="flex items-center gap-3 group">
              <div className="bg-slate-100 p-1 group-hover:bg-[#1A52A2] transition-colors rounded-sm shrink-0">
                <CheckCircle2 size={12} className="text-[#1A52A2] group-hover:text-white md:w-[14px] md:h-[14px]" />
              </div>
              <span className="text-slate-700 font-bold text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wide">
                {point}
              </span>
            </div>
          ))}
        </div>

        {/* 2d. REDUCED LENGTH BUTTON */}
        <div className="mt-auto pt-4 flex justify-center md:justify-start">
          <button 
            onClick={handleEnquiry}
            className="group relative flex items-center gap-3 md:gap-4 bg-[#0A132E] hover:bg-[#1A52A2] text-white pl-5 md:pl-7 pr-1.5 md:pr-2 py-1.5 md:py-1.5 transition-all duration-500 overflow-hidden w-auto min-w-[180px] md:min-w-[210px] justify-between rounded-full shadow-lg shadow-blue-900/20"
          >
            <span className="relative z-10 font-black uppercase tracking-[0.15em] text-[9px] md:text-[10px] whitespace-nowrap">
              Enquire Now
            </span>
            <div className="relative z-10 w-8 h-8 md:w-10 md:h-10 bg-[#DA1F28] flex items-center justify-center rounded-full group-hover:translate-x-0.5 transition-transform duration-500">
              <ArrowRight size={14} className="md:w-[16px] md:h-[16px]" />
            </div>
            
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-full group-hover:translate-x-1/2 transition-transform duration-700" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#DA1F28] rounded-full opacity-50" />
    </div>
  );
}