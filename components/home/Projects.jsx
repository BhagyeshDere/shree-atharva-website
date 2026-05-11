"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const projectData = [
  { id: 1, title: "Hydrant System Work", img: "/images/projects/ga.png", category: "Installation" },
  { id: 2, title: "Site Execution", img: "/images/projects/Site Execution.png", category: "Operation" }, 
  { id: 3, title: "Safety Equipment", img: "/images/projects/Safety Equipment.png", category: "Safety" },
  { id: 4, title: "Protection Setup", img: "/images/projects/Protection Setup.png", category: "Engineering" },
  { id: 5, title: "Completed Installation", img: "/images/projects/Completed Installation.png", category: "Project" },
];

export default function Projects() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const handleNext = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % projectData.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + projectData.length) % projectData.length);
  }, []);

  // Hybrid Sliding Logic: Pauses on hover, resets on manual click
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(handleNext, 5000);
    return () => clearInterval(timerRef.current);
  }, [handleNext, isPaused]);

  // Logic to calculate 3D positioning
  const getCardStyles = (index) => {
    const total = projectData.length;
    const diff = (index - activeIdx + total) % total;

    // Center Card
    if (diff === 0) {
      return { 
        zIndex: 40, opacity: 1, scale: 1, x: 0, 
        rotateY: 0, filter: "blur(0px)",
        boxShadow: "0 25px 50px -12px rgba(218, 31, 40, 0.25)"
      };
    } 
    // Immediate Right
    if (diff === 1) {
      return { 
        zIndex: 30, opacity: 0.8, scale: 0.85, x: "55%", 
        rotateY: -25, filter: "blur(1px)" 
      };
    } 
    // Immediate Left
    if (diff === total - 1) {
      return { 
        zIndex: 30, opacity: 0.8, scale: 0.85, x: "-55%", 
        rotateY: 25, filter: "blur(1px)" 
      };
    }
    // Distant Right
    if (diff === 2) {
      return { 
        zIndex: 20, opacity: 0.4, scale: 0.7, x: "90%", 
        rotateY: -45, filter: "blur(4px)" 
      };
    }
    // Distant Left
    return { 
      zIndex: 20, opacity: 0.4, scale: 0.7, x: "-90%", 
      rotateY: 45, filter: "blur(4px)" 
    };
  };

  return (
    <section className="py-24 bg-[#f8fafc] overflow-hidden" id="gallery">
      <div className="container mx-auto px-6">
        
        {/* Header with Counter */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <div className="text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center justify-center md:justify-start gap-2 mb-4"
            >
              <span className="w-8 h-px bg-[#DA1F28]" />
              <span className="text-[#DA1F28] font-bold uppercase tracking-[0.4em] text-[10px]">
                Portfolio
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-[#0a132e] uppercase tracking-tighter leading-none">
              Site <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b2c6b] to-[#DA1F28]">Snapshots</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100">
            <span className="text-2xl font-black text-[#0b2c6b]">0{activeIdx + 1}</span>
            <div className="w-px h-6 bg-slate-200" />
            <span className="text-slate-400 font-bold">0{projectData.length}</span>
          </div>
        </div>

        <div 
          className="relative flex items-center justify-center h-[450px] md:h-[650px] w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Controls */}
          <div className="absolute inset-0 flex items-center justify-between z-[50] pointer-events-none">
            <button 
              onClick={handlePrev}
              className="pointer-events-auto ml-2 md:-ml-6 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white shadow-2xl rounded-2xl text-[#0b2c6b] hover:bg-[#0b2c6b] hover:text-white transition-all group active:scale-90 border border-slate-100"
            >
              <ChevronLeft size={28} strokeWidth={2.5} />
            </button>
            <button 
              onClick={handleNext}
              className="pointer-events-auto mr-2 md:-mr-6 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white shadow-2xl rounded-2xl text-[#0b2c6b] hover:bg-[#0b2c6b] hover:text-white transition-all group active:scale-90 border border-slate-100"
            >
              <ChevronRight size={28} strokeWidth={2.5} />
            </button>
          </div>

          {/* 3D Stage */}
          <div className="relative w-full h-full perspective-2000 flex items-center justify-center">
            {projectData.map((project, index) => {
              const styles = getCardStyles(index);
              const isActive = activeIdx === index;
              
              return (
                <motion.div
                  key={project.id}
                  animate={styles}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20 
                  }}
                  className="absolute w-[280px] h-[380px] md:w-[480px] md:h-[550px] cursor-pointer"
                  onClick={() => setActiveIdx(index)}
                >
                  <div className="relative w-full h-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden group shadow-2xl bg-[#0b2c6b]">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className={`w-full h-full object-cover transition-transform duration-700 ${isActive ? 'scale-100' : 'scale-110 opacity-60'}`}
                    />
                    
                    {/* Visual Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-[#0a132e] via-transparent to-black/20 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

                    {/* Card Content */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between"
                        >
                          <div className="flex justify-end">
                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                              <Maximize2 size={16} />
                            </div>
                          </div>
                          
                          <div>
                            <span className="text-[#DA1F28] font-black uppercase tracking-[0.2em] text-[10px] mb-2 block">
                              {project.category}
                            </span>
                            <h3 className="text-white text-xl md:text-3xl font-black uppercase tracking-tight leading-tight">
                              {project.title}
                            </h3>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Pagination Bar */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {projectData.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className="relative h-1.5 transition-all duration-500 overflow-hidden rounded-full bg-slate-200"
              style={{ width: activeIdx === i ? "40px" : "12px" }}
            >
              {activeIdx === i && (
                <motion.div 
                  layoutId="activeBar"
                  className="absolute inset-0 bg-[#DA1F28]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-2000 {
          perspective: 2000px;
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}