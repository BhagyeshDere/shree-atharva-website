"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Building2, Hash } from "lucide-react";

export default function ClientsTable({ clients }) {
  return (
    <div className="relative group">
      {/* Decorative background glow to tie into the logo theme */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#1D4ED8]/20 to-[#DA1F28]/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
      
      <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/80 backdrop-blur-xl shadow-2xl">
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full min-w-[800px] border-collapse">
            
            <thead>
              <tr className="bg-gradient-to-r from-[#0a132e] to-[#1D4ED8] text-white">
                <th className="px-8 py-6 text-left">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-black opacity-80">
                    <Hash size={14} className="text-[#DA1F28]" /> #
                  </div>
                </th>
                <th className="px-8 py-6 text-left">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-black opacity-80">
                    <Building2 size={14} className="text-[#DA1F28]" /> Client Name
                  </div>
                </th>
                <th className="px-8 py-6 text-left">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-black opacity-80">
                    Category
                  </div>
                </th>
                <th className="px-8 py-6 text-left">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-black opacity-80">
                    <MapPin size={14} className="text-[#DA1F28]" /> Location
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              <AnimatePresence mode="popLayout">
                {clients.map((client, index) => (
                  <motion.tr
                    key={client.id || index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="group/row hover:bg-slate-50/80 transition-all duration-300"
                  >
                    {/* Index Column */}
                    <td className="px-8 py-5">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 text-[#0a132e] font-black text-sm group-hover/row:bg-[#DA1F28] group-hover/row:text-white transition-colors duration-300">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </td>

                    {/* Name Column */}
                    <td className="px-8 py-5">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-800 text-lg tracking-tight group-hover/row:text-[#1D4ED8] transition-colors">
                          {client.name}
                        </span>
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">
                          Verified Partner
                        </span>
                      </div>
                    </td>

                    {/* Category Column */}
                    <td className="px-8 py-5">
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#1D4ED8]/20 bg-[#1D4ED8]/5 text-[#1D4ED8] text-[11px] font-black uppercase tracking-wider shadow-sm">
                        {client.category}
                      </span>
                    </td>

                    {/* Location Column */}
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2 text-slate-600 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#DA1F28] animate-pulse" />
                        {client.location}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>

      {/* Responsive Tip for mobile users */}
      <div className="mt-4 flex items-center justify-center gap-2 md:hidden">
        <div className="w-1 h-1 rounded-full bg-slate-400 animate-ping" />
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
          Scroll horizontally to view details
        </p>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}