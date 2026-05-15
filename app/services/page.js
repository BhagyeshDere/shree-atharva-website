"use client";

import { useState } from "react";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesSidebar from "@/components/services/ServicesSidebar";
import ServiceDetails from "@/components/services/ServiceDetails";
import servicesData from "@/data/servicesData";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(servicesData[0]);

  return (
    // Added a main wrapper to ensure proper stacking context
    <main className="relative">
      
      {/* 1. HERO SECTION */}
      {/* Ensure ServicesHero internal padding-top is consistent with other pages */}
      <ServicesHero />

      {/* 2. CONTENT SECTION */}
      <section className="py-16 md:py-24 bg-[#f8fafc] relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[320px_1fr] gap-10 items-start">
            
            {/* SIDEBAR */}
            <ServicesSidebar
              activeService={activeService}
              setActiveService={setActiveService}
            />

            {/* DETAILS */}
            <ServiceDetails service={activeService} />

          </div>
        </div>
      </section>
      
    </main>
  );
}