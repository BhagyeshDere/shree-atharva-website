"use client";

import { useState } from "react";

import ServicesHero from "@/components/services/ServicesHero";
import ServicesSidebar from "@/components/services/ServicesSidebar";
import ServiceDetails from "@/components/services/ServiceDetails";

import servicesData from "@/data/servicesData";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(servicesData[0]);

  return (
    <>
      <ServicesHero />

      <section className="py-24 bg-[#f8fafc]">
        
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
    </>
  );
}