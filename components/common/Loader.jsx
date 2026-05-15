"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Exact Brand Colors
  const brandBlue = "#1A52A2";
  const brandRed = "#DA1F28";
  const lightBg = "#F2F4F7"; 

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 800); 
          return 100;
        }
        
        let increment = 0;
        if (prev < 70) {
          increment = Math.random() * 4.5;
        } else if (prev < 92) {
          increment = Math.random() * 1.2;
        } else {
          increment = Math.random() * 0.4;
        }
        
        return Math.min(prev + increment, 100);
      });
    }, 35);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -20,
            transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } 
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden font-sans"
          style={{ backgroundColor: lightBg }}
        >
          {/* 1. INCREASED SIZE WATERMARK LOGO */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{ 
                opacity: 0.28, 
                scale: 1.2,
              }}
              transition={{ duration: 5, ease: "linear" }}
              className="absolute"
            >
              <img 
                src="/images/logo1.png" 
                alt="" 
                // Increased watermark scale
                className="w-[110vw] md:w-[75vw] lg:w-[60vw] max-w-[1200px] object-contain opacity-60" 
                style={{ 
                  filter: "contrast(1.1) saturate(1.2) grayscale(10%)"
                }}
              />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 0.04, x: 0 }}
              transition={{ duration: 2 }}
              className="absolute top-[15%] left-[-5%] text-[20vw] font-black tracking-tighter uppercase whitespace-nowrap"
              style={{ color: brandBlue }}
            >
              ENGINEERING
            </motion.h2>
          </div>

          {/* 2. CENTRAL ASSEMBLY */}
          <div className="relative flex flex-col items-center z-20 px-6 w-full max-w-6xl text-center">
            
            {/* ENHANCED LOGO SIZE */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative mb-6 md:mb-8"
            >
              {/* Increased container size for the logo */}
              <div className="relative w-40 h-40 md:w-64 md:h-64 flex items-center justify-center">
                <motion.img
                  src="/images/logo1.png"
                  alt="Logo"
                  animate={{ 
                    scale: [1, 1.04, 1],
                    filter: ["brightness(1)", "brightness(1.05)", "brightness(1)"]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  // Increased logo width significantly
                  className="w-32 md:w-56 lg:w-64 object-contain relative z-10"
                />
              </div>
            </motion.div>

            {/* 3. BRAND TYPOGRAPHY & DESCRIPTION */}
            <div className="flex flex-col items-center space-y-6 md:space-y-8">
              <div className="overflow-hidden">
                <motion.h1 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: "circOut" }}
                  className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]"
                  style={{ color: brandBlue }}
                >
                  SHREE ATHARVA <span className="block lg:inline" style={{ color: brandRed }}>ENTERPRISES</span>
                </motion.h1>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="max-w-md md:max-w-2xl space-y-4"
              >
                <div className="inline-block px-4 py-1 border-y border-slate-300">
                   <h2 className="text-xs md:text-lg font-bold tracking-[0.3em] uppercase" style={{ color: brandBlue }}>
                    Engineering Excellence since 2014
                  </h2>
                </div>
                
              </motion.div>
            </div>

            {/* 4. PROGRESS BAR */}
            <div className="mt-10 md:mt-14 w-full max-w-[280px] md:max-w-md mx-auto">
              <div className="flex justify-between items-end mb-3 px-1">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Processing Infrastructure</span>
                <span className="text-sm font-mono font-black" style={{ color: brandRed }}>{Math.round(progress)}%</span>
              </div>
              <div className="h-[3px] w-full bg-slate-200 rounded-full overflow-hidden shadow-sm">
                <motion.div 
                  className="h-full"
                  style={{ backgroundColor: brandBlue, width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>
            </div>
          </div>

          {/* 5. FOOTER CREDENTIALS */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-10 w-full flex flex-col items-center text-center px-4"
          >
             <div className="w-12 h-[2px] mb-4" style={{ backgroundColor: brandRed }} />
            
          </motion.div>

          {/* DYNAMIC GRID OVERLAY */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
            style={{ 
              backgroundImage: `radial-gradient(${brandBlue} 1px, transparent 1px)`, 
              backgroundSize: '40px 40px' 
            }} 
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}