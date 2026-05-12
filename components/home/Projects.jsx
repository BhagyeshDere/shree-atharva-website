"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const projectData = [
  { id: 1, title: "Industrial Projects", img: "/images/projects/p1.png", category: "Heavy Engineering" },
  { id: 2, title: "Hospitals", img: "/images/projects/p2.png", category: "Healthcare Safety" }, 
  { id: 3, title: "Commercial Buildings", img: "/images/projects/p3.png", category: "Infrastructure" },
  { id: 4, title: "Residential Projects", img: "/images/projects/p4.png", category: "Life Security" },
  { id: 5, title: "Schools & Colleges", img: "/images/projects/p5.png", category: "Institutional" },
  { id: 6, title: "Government Sectors", img: "/images/projects/p6.png", category: "Public Safety" },
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

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(handleNext, 2000);
    return () => clearInterval(timerRef.current);
  }, [handleNext, isPaused, activeIdx]);

  const getCardStyles = (index) => {
    const total = projectData.length;
    let diff = index - activeIdx;

    // Standardize diff to be within -2 to 2 range for a 5-card visible stack
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    // ACTIVE CENTER CARD
    if (diff === 0) {
      return { 
        zIndex: 50, opacity: 1, scale: 1, x: 0, rotateY: 0, filter: "blur(0px)",
        boxShadow: "0 40px 70px -15px rgba(26, 82, 162, 0.4)"
      };
    } 
    // IMMEDIATE LEFT/RIGHT
    if (diff === 1) {
      return { zIndex: 40, opacity: 0.7, scale: 0.85, x: "65%", rotateY: -35, filter: "blur(1px)" };
    } 
    if (diff === -1) {
      return { zIndex: 40, opacity: 0.7, scale: 0.85, x: "-65%", rotateY: 35, filter: "blur(1px)" };
    }
    // DEEP BACKGROUND LEFT/RIGHT (2 more backside images)
    if (diff === 2) {
      return { zIndex: 30, opacity: 0.3, scale: 0.7, x: "110%", rotateY: -45, filter: "blur(4px)" };
    }
    if (diff === -2) {
      return { zIndex: 30, opacity: 0.3, scale: 0.7, x: "-110%", rotateY: 45, filter: "blur(4px)" };
    }
    // HIDDEN CARDS
    return { zIndex: 10, opacity: 0, scale: 0.4, x: diff > 0 ? "150%" : "-150%", rotateY: 0, filter: "blur(10px)" };
  };

  return (
    <section className="relative py-20 md:py-32 bg-[#fcfdfe] overflow-hidden" id="projects">
      {/* Background Parallax Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.h1 
            key={activeIdx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 0.04, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className="text-[22vw] font-black text-[#0a132e] whitespace-nowrap uppercase italic"
          >
            {projectData[activeIdx].title.split(' ')[0]}
          </motion.h1>
        </AnimatePresence>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-[2px] bg-[#DA1F28]" />
              <span className="text-[#DA1F28] font-black uppercase tracking-[0.4em] text-[10px]">
                Portfolio Excellence
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-black text-[#0a132e] uppercase tracking-tighter leading-[0.85]">
              Project <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A52A2] to-[#DA1F28] italic">
                Archives
              </span>
            </h2>
          </div>
        </div>

        {/* 3D Multi-Card Stage */}
        <div 
          className="relative flex items-center justify-center h-[400px] md:h-[650px] w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
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
                    stiffness: 280, 
                    damping: 32, 
                    mass: 0.8 
                  }}
                  className="absolute w-[80%] max-w-[300px] h-[350px] md:max-w-[480px] md:h-[580px] cursor-pointer"
                  onClick={() => setActiveIdx(index)}
                >
                  <div className="relative w-full h-full rounded-[2rem] md:rounded-[4rem] overflow-hidden group bg-[#0a132e] shadow-2xl transition-transform duration-300">
                    <motion.img 
                      src={project.img} 
                      alt={project.title} 
                      animate={{ 
                        scale: isActive ? 1 : 1.25, 
                        filter: isActive ? "grayscale(0%)" : "grayscale(100%) brightness(0.4)" 
                      }}
                      className="w-full h-full object-cover transition-all duration-300"
                    />
                    
                    <div className={`absolute inset-0 bg-gradient-to-t from-[#0a132e] via-[#0a132e]/20 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-90' : 'opacity-0'}`} />

                    <AnimatePresence>
                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          className="absolute inset-0 p-8 md:p-14 flex flex-col justify-between z-20"
                        >
                          <div className="flex justify-between items-start">
                            <span className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
                              {project.category}
                            </span>
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1A52A2] shadow-xl hover:bg-[#DA1F28] hover:text-white transition-colors">
                              <ExternalLink size={20} />
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-4">
                              {project.title}
                            </h3>
                            <div className="w-16 h-1.5 bg-[#DA1F28]" />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-[-40px] flex gap-5 z-50">
            <button 
              onClick={handlePrev}
              className="w-14 h-14 flex items-center justify-center bg-white text-[#0a132e] rounded-full shadow-xl hover:bg-[#DA1F28] hover:text-white transition-all active:scale-90"
            >
              <ChevronLeft size={24} strokeWidth={3} />
            </button>
            <button 
              onClick={handleNext}
              className="w-14 h-14 flex items-center justify-center bg-white text-[#0a132e] rounded-full shadow-xl hover:bg-[#DA1F28] hover:text-white transition-all active:scale-90"
            >
              <ChevronRight size={24} strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-32 flex justify-center items-center gap-6">
           <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-full border border-slate-100 shadow-sm">
            {projectData.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className="group relative h-4 flex items-center"
              >
                <div 
                  className={`h-1.5 transition-all duration-300 rounded-full ${activeIdx === i ? 'w-10 bg-[#DA1F28]' : 'w-2 bg-slate-300'}`} 
                />
                <span className={`absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-black text-[#1A52A2] transition-opacity duration-200 ${activeIdx === i ? 'opacity-100' : 'opacity-0'}`}>
                  0{i + 1}
                </span>
              </button>
            ))}
          </div>
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