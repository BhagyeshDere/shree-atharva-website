"use client";

import React from "react";
import { CheckCircle2, ArrowRight, ShieldAlert } from "lucide-react";

export default function ServiceDetails({ service }) {
  if (!service) return null;

  return (
    <div
      key={service.id}
      className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(10,19,46,0.05)] border border-slate-100 h-full flex flex-col"
    >
      {/* TOP SECTION: HORIZONTAL IMAGE */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-[#F8FAFC] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center"
        />
        
        {/* Gradient Overlay for a premium feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A132E]/20 to-transparent" />

        {/* Status Badge - Floating on the horizontal image */}
        <div className="absolute bottom-6 left-6 md:left-10 flex items-center gap-3 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/20">
          <div className="w-8 h-8 rounded-lg bg-[#DA1F28] flex items-center justify-center text-white">
            <ShieldAlert size={16} />
          </div>
          <p className="text-[10px] font-bold text-[#0A132E] uppercase tracking-tight">
            Premium Grade
          </p>
        </div>
      </div>

      {/* BOTTOM SECTION: CONTENT DATA */}
      <div className="relative p-8 md:p-12 lg:p-16 flex flex-col">
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Left Column: Title & Description */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Category Tag */}
            <div className="mb-4">
              <span className="text-[#1A52A2] text-xs font-bold uppercase tracking-widest bg-[#1A52A2]/10 px-4 py-2 rounded-full border border-[#1A52A2]/20">
                {service.category || "Welding Solutions"}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-black text-[#0A132E] leading-[1.1] mb-6 uppercase tracking-tighter">
              {service.title}
            </h2>

            {/* Description */}
            <p className="text-slate-500 text-lg leading-relaxed border-l-4 border-[#DA1F28] pl-6 max-w-2xl">
              {service.description}
            </p>
          </div>

          {/* Right Column: Features & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-slate-50/50 p-6 md:p-8 rounded-[2rem] border border-slate-100">
            {/* FEATURES LIST */}
            <div className="space-y-4 mb-8">
              {service.points && service.points.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 text-[#1A52A2]">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-slate-700 font-bold text-sm uppercase tracking-tight">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA ACTION */}
            <button className="group relative flex items-center justify-between bg-[#0A132E] hover:bg-[#1A52A2] text-white px-8 py-5 rounded-2xl transition-all duration-500 shadow-xl shadow-blue-900/20 overflow-hidden w-full">
              <span className="relative z-10 font-black uppercase tracking-[0.2em] text-xs">
                Enquire Now
              </span>
              <div className="relative z-10 w-8 h-8 rounded-full bg-[#DA1F28] flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                <ArrowRight size={18} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </div>
        </div>

        {/* Discrete Watermark */}
        <div className="absolute bottom-4 right-8 opacity-[0.03] w-20 pointer-events-none grayscale">
          <img src="/LOGO_.jpg-removebg-preview_4.png" alt="watermark" />
        </div>
      </div>
    </div>
  );
}