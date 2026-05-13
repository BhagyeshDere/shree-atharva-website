"use client";

import { useState } from "react";
import { MapPin, Send } from "lucide-react";
import clientsData from "@/data/clientsData";

import ClientsHero from "@/components/clients/ClientsHero";
import ClientsFilters from "@/components/clients/ClientsFilters";
import ClientsTable from "@/components/clients/ClientsTable";

export default function ClientsPage() {
  const [selected, setSelected] = useState("All");

  const filteredClients =
    selected === "All"
      ? clientsData
      : clientsData.filter(
          (client) => client.category === selected
        );

  return (
    <>
      <ClientsHero />

      <section className="py-12 md:py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* TIGHTENED SPACING BETWEEN FILTERS AND TABLE */}
          <div className="mt-8">
            <ClientsFilters
              selected={selected}
              setSelected={setSelected}
            />
          </div>

          <div className="mt-8">
            <ClientsTable clients={filteredClients} />
          </div>
        </div>
      </section>

      {/* FULL WIDTH MAP SECTION */}
      <div className="relative w-full h-[500px] md:h-[600px] bg-slate-200 overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.56730310243!2d73.92813587593645!3d18.50328226970724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c19630e20037%3A0xc38584826b13e018!2sMega%20Center!5e0!3m2!1sen!2sin!4v1715500000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.9)' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        ></iframe>

        {/* FLOATING ADDRESS BOX - RIGHT CORNER */}
        <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 max-w-[340px] bg-white/95 backdrop-blur-md p-8 rounded-[2rem] shadow-2xl border border-white/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#1A52A2] p-2 rounded-xl">
              <MapPin className="text-white" size={20} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Headquarters</span>
          </div>
          
          <h4 className="text-[#0a132e] font-black text-xl uppercase tracking-tighter mb-2">Mega Center, Pune</h4>
          <p className="text-slate-500 font-bold text-xs leading-relaxed mb-6">
            J-308, 2nd Floor, Mega Center, Pune - Solapur Road, Hadapsar, Pune - 411028
          </p>
          
          <a 
            href="https://maps.app.goo.gl/..." 
            target="_blank"
            className="flex items-center justify-center gap-3 w-full bg-[#0a132e] text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#1A52A2] transition-all group"
          >
            Get Directions 
            <Send size={12} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </>
  );
}