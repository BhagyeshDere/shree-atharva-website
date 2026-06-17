"use client";

import { motion } from "framer-motion";

export default function ClientsFilters({ selected, setSelected }) {
  const filters = [
    "All",
    "Industries",
    "Hospitals",
    "Residential",
    "Education",
    "Government",
  ];

  return (
    // Replaced pb-4 with responsive negative margins to pull the UI cleanly upperside closer to the hero section
    <nav className="relative w-full flex justify-center overflow-hidden pb-0 -mt-6 md:-mt-10 z-30">
      {/* Container is now centered with mx-auto and justify-center */}
      <div className="relative overflow-x-auto no-scrollbar max-w-full px-4">
        <div className="flex flex-row items-center justify-center gap-2 p-1.5 bg-[#0a132e]/5 border border-slate-200/60 rounded-2xl md:rounded-full w-max mx-auto backdrop-blur-sm">
          {filters.map((filter) => {
            const isActive = selected === filter;

            return (
              <button
                key={filter}
                onClick={() => setSelected(filter)}
                className={`relative px-5 py-2.5 md:px-8 md:py-3 rounded-xl md:rounded-full text-xs md:text-sm font-black tracking-wider uppercase transition-colors duration-300 z-10 whitespace-nowrap ${
                  isActive ? "text-white" : "text-slate-500 hover:text-[#1D4ED8]"
                }`}
              >
                {/* Text Label */}
                <span className="relative z-20">{filter}</span>

                {/* Advanced Active Indicator (Framer Motion) */}
                {isActive && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 z-10 rounded-xl md:rounded-full shadow-lg shadow-blue-900/20"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                    style={{
                      background: "linear-gradient(135deg, #1D4ED8 0%, #1e3a8a 100%)",
                    }}
                  >
                    {/* Subtle Red Accent Dot - Logo Theme */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#DA1F28] rounded-full shadow-[0_0_8px_#DA1F28]" />
                  </motion.div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Custom Scrollbar CSS for mobile */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </nav>
  );
}