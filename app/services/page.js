"use client";

import { useState } from "react";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesLayout from "@/components/services/ServicesLayout"; // Imported our combined layout file
import servicesData from "@/data/servicesData";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(servicesData[0]);

  return (
    // Main wrapper ensuring proper stacking context
    <main className="relative">
      
      {/* 1. HERO SECTION */}
      {/* ServicesHero handles its own internal responsive alignments and padding offsets */}
      <ServicesHero />

      {/* 2. CONTENT SECTION */}
      {/* Removed the manual outer container grid to let the combined layout manage spacing natively */}
      <section className="bg-[#f8fafc] relative z-10">
        <ServicesLayout 
          activeService={activeService} 
          setActiveService={setActiveService} 
        />
      </section>
      
    </main>
  );
}