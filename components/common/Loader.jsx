"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // ADVANCED KINETIC TIMING SEQUENCE
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // 1.5s delay at the end allows the "System Online" message to resonate
          setTimeout(() => setIsVisible(false), 1500); 
          return 100;
        }

        // KINETIC FLOW: 
        // 0-45%: Rapid burst (Simulating power-up)
        // 45-85%: Steady stream (Simulating scan)
        // 85-99%: Micro-increments (Simulating deep verification/editorial impact)
        let increment = 0;
        if (prev < 45) {
          increment = Math.random() * 3.5;
        } else if (prev < 85) {
          increment = Math.random() * 0.8;
        } else {
          increment = Math.random() * 0.15; 
        }
        
        return Math.min(prev + increment, 100);
      });
    }, 35); // 35ms for maximum fluid response

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 1.2, ease: [0.85, 0, 0.15, 1] } 
          }}
          className="fixed inset-0 z-[9999] bg-[#050a1a] flex items-center justify-center overflow-hidden font-sans"
        >
          {/* 1. LARGE BACKGROUND BRANDING (EDITORIAL) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden px-4">
            <motion.h2 
              initial={{ opacity: 0, scale: 1.1, letterSpacing: "0.2em" }}
              animate={{ opacity: 0.05, scale: 1, letterSpacing: "0em" }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="text-[12vw] md:text-[14vw] font-black text-white uppercase leading-none text-center whitespace-nowrap tracking-tighter"
            >
              Shree Atharva
            </motion.h2>
          </div>

          {/* 2. PRECISION SCANNING BEAM */}
          <motion.div 
            animate={{ top: ["-5%", "105%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#DA1F28]/60 to-transparent z-10 shadow-[0_0_15px_rgba(218,31,40,0.5)]"
          />

          {/* 3. CORE ASSEMBLY (RESPONSIVE SCALING) */}
          <div className="relative flex flex-col items-center scale-75 sm:scale-90 md:scale-100">
            
            {/* INTERACTIVE PROGRESS RING */}
            <div className="relative flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-72 h-72 md:w-80 md:h-80 border border-dashed border-white/10 rounded-full"
              />

              <svg className="w-64 h-64 md:w-72 md:h-72 -rotate-90">
                <circle
                  cx="50%" cy="50%" r="46%"
                  className="stroke-white/5 fill-none"
                  strokeWidth="1"
                />
                <motion.circle
                  cx="50%" cy="50%" r="46%"
                  className="fill-none"
                  strokeWidth="3"
                  strokeDasharray="100 100"
                  animate={{ strokeDashoffset: 100 - progress }}
                  style={{ 
                    stroke: progress > 70 ? "#DA1F28" : "#1A52A2",
                    filter: `drop-shadow(0 0 ${progress / 10}px currentColor)`
                  }}
                  transition={{ ease: "linear" }}
                />
              </svg>

              {/* BRAND LOGO */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.img
                  src="/images/logo.png"
                  alt="Shree Atharva Logo"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-32 md:w-40 object-contain z-20"
                />
              </div>
            </div>

            {/* 4. TYPOGRAPHIC INTERFACE */}
            <div className="mt-12 text-center px-6 max-w-[90vw]">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center gap-3"
              >
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-[0.3em] leading-tight">
                  SHREE ATHARVA <span className="text-[#DA1F28]">ENTERPRISES</span>
                </h1>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-8 md:w-20 bg-gradient-to-r from-transparent to-[#1A52A2]" />
                  <p className="text-white/50 text-[10px] md:text-xs font-medium uppercase tracking-[0.6em] whitespace-nowrap">
                    Safety Engineering Solutions
                  </p>
                  <div className="h-[1px] w-8 md:w-20 bg-gradient-to-l from-transparent to-[#DA1F28]" />
                </div>
              </motion.div>

              {/* PERFORMANCE DATA DISPLAY */}
              <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-4 md:gap-8">
                  <span className="text-[#1A52A2] font-mono text-[10px] font-bold tracking-widest">SEQ_BOOT</span>
                  <div className="w-40 sm:w-56 md:w-80 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-[#1A52A2] via-[#DA1F28] to-[#DA1F28]"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="text-[#DA1F28] font-mono text-[10px] font-bold w-12 text-right">
                    {Math.round(progress)}%
                  </span>
                </div>

                <div className="h-6 flex items-center justify-center">
                  <motion.p
                    key={Math.floor(progress / 15)}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-white/40 uppercase tracking-[0.3em] text-[8px] md:text-[10px] font-bold font-mono"
                  >
                    {progress < 20 && ">> Initializing Safety Grid..."}
                    {progress >= 20 && progress < 40 && ">> Scanning Fire Suppression Nodes..."}
                    {progress >= 40 && progress < 60 && ">> Calibrating Engineering Specs..."}
                    {progress >= 60 && progress < 85 && ">> Authenticating Licensed Access..."}
                    {progress >= 85 && progress < 100 && ">> Finalizing System Integrity..."}
                    {progress === 100 && ">> System Secure - Access Granted"}
                  </motion.p>
                </div>
              </div>
            </div>
          </div>

          

          <div className="absolute bottom-10 right-10 hidden sm:block text-right">
            <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.25em] mb-2 italic">
              Government Licensed Class 'A'
            </p>
            <div className="h-[3px] w-16 bg-gradient-to-r from-transparent to-[#DA1F28] ml-auto" />
          </div>

          {/* DYNAMIC GRID BACKGROUND */}
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none" 
            style={{ 
              backgroundImage: `linear-gradient(to right, #ffffff 1.5px, transparent 1.5px), linear-gradient(to bottom, #ffffff 1.5px, transparent 1.5px)`, 
              backgroundSize: '80px 80px' 
            }} 
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}