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
    /* UPDATED: Added rounded-[2.5rem] to the main card container */
    <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_30px_70px_rgba(10,19,46,0.08)] border border-slate-100 h-full flex flex-col">
      
      {/* 1. TOP IMAGE - Height Reduced & Rounded Top Corners */}
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[380px] bg-[#F8FAFC] overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A132E]/40 via-transparent to-transparent" />
        
        {/* Subtle Tag Overlay */}
        <div className="absolute top-6 left-6 bg-[#DA1F28] px-4 py-1 rounded-sm">
           <span className="text-[10px] font-black text-white uppercase tracking-widest">Technical Solution</span>
        </div>
      </div>

      {/* 2. CONTENT AREA - Tightened Padding */}
      <div className="relative p-6 sm:p-8 md:p-12 flex flex-col flex-grow">
        
        {/* 2a. HEADING */}
        <div className="mb-6 md:mb-8 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A132E] leading-[0.9] uppercase tracking-tighter mb-5">
            {service.title}
          </h2>
          <div className="w-16 h-1.5 bg-[#DA1F28] mx-auto md:mx-0" />
        </div>

        {/* 2b. DESCRIPTION */}
        <div className="max-w-4xl mb-8 md:mb-10 text-center md:text-left">
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
            {service.description}
          </p>
        </div>

        {/* 2c. TWO-COLUMN POINTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 mb-10 border-t border-slate-100 pt-8">
          {service.points?.map((point, index) => (
            <div key={index} className="flex items-center gap-3 group">
              <div className="bg-slate-100 p-1 group-hover:bg-[#1A52A2] transition-colors rounded-sm">
                <CheckCircle2 size={14} className="text-[#1A52A2] group-hover:text-white shrink-0" />
              </div>
              <span className="text-slate-700 font-bold text-[10px] sm:text-xs uppercase tracking-wide">{point}</span>
            </div>
          ))}
        </div>

        {/* 2d. LEFT ALIGNED BUTTON - Rounded */}
        <div className="mt-auto flex justify-center md:justify-start">
          <button 
            onClick={handleEnquiry}
            className="group relative flex items-center gap-6 bg-[#0A132E] hover:bg-[#1A52A2] text-white pl-8 pr-2 py-2 md:py-3 transition-all duration-500 overflow-hidden min-w-[240px] sm:min-w-[280px] justify-between rounded-full shadow-lg shadow-blue-900/20"
          >
            <span className="relative z-10 font-black uppercase tracking-[0.2em] text-[10px]">
              Enquire Now
            </span>
            <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 bg-[#DA1F28] flex items-center justify-center rounded-full group-hover:translate-x-1 transition-transform duration-500">
              <ArrowRight size={18} />
            </div>
            
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-full group-hover:translate-x-1/2 transition-transform duration-700" />
          </button>
        </div>
      </div>

      {/* Decorative Corner Element - Adjusted for Roundedness */}
      <div className="absolute bottom-4 right-4 w-2 h-2 bg-[#DA1F28] rounded-full opacity-50" />
    </div>
  );
}