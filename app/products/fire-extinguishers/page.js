"use client";

import React from "react";
// Import any shared components you need here (e.g., your layout details, pricing, etc.)

export default function FireExtinguishersPage() {
  return (
    <main className="min-h-screen bg-[#fdfdfd] pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-[#DA1F28] text-xs font-black uppercase tracking-widest block mb-2">
          Category Catalog
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-[#0a132e] uppercase tracking-tighter mb-6">
          Fire Extinguishers
        </h1>
        <p className="text-slate-600 max-w-2xl text-base md:text-lg leading-relaxed">
          Reliable engineering and heavy-duty fire extinguishing products built for industrial, commercial, and residential workspaces.
        </p>
        
        {/* Your detailed technical grids, lists, or components go here */}
      </div>
    </main>
  );
}