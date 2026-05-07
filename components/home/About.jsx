"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, Award } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years of Excellence", value: "10+", icon: Award },
    { label: "Projects Completed", value: "500+", icon: Target },
    { label: "Safety Certified", value: "100%", icon: ShieldCheck },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Decorative Brand Accent (Background) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1A52A2]/5 -skew-x-12 translate-x-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT SIDE: Image Composition (Advanced Grid) */}
          <div className="lg:col-span-6 relative">
            <div className="relative grid grid-cols-6 grid-rows-6 gap-4 h-[500px] md:h-[650px]">
              
              {/* Main Large Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="col-span-5 row-span-5 relative overflow-hidden rounded-sm shadow-2xl"
              >
                <img 
                  src="/images/about/about-main.png" 
                  alt="Industrial Fire Safety"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#1A52A2]/10 mix-blend-multiply" />
              </motion.div>

              {/* Secondary Floating Image */}
              <motion.div 
                initial={{ opacity: 0, x: 20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="col-start-4 col-span-3 row-start-4 row-span-3 z-10 border-[12px] border-white shadow-2xl overflow-hidden"
              >
                <img 
                  src="/images/about/about-secondary.png" 
                  alt="Testing & Commissioning"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Brand Geometric Accent */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-[#DA1F28]" />
              <div className="absolute bottom-12 -right-4 w-16 h-16 bg-[#DA1F28] -z-10" />
            </div>
          </div>

          {/* RIGHT SIDE: Content */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="h-[2px] w-12 bg-[#DA1F28]" />
                <span className="text-[#DA1F28] font-black uppercase tracking-[0.3em] text-xs">
                  Est. 2014
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-[#0a132e] tracking-tighter leading-none uppercase">
                Building a <span className="text-[#1A52A2]">Safer</span> <br />
                Future Together
              </h2>

              <div className="mt-8 space-y-6">
                <p className="text-xl text-slate-800 font-bold leading-tight">
                  Shree Atharva Enterprises is a Government Approved Licensed Agency 
                  leading fire safety engineering across Maharashtra.
                </p>
                
                <p className="text-slate-600 leading-relaxed text-lg">
                  We specialize in the end-to-end Supply, Installation, Testing, and Commissioning 
                  of advanced fire protection systems. Our expertise spans across Industrial complexes, 
                  Healthcare facilities, and Government institutions, ensuring every infrastructure 
                  is resilient against fire hazards.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 pt-10 border-t border-slate-100">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center md:text-left">
                    <stat.icon className="w-6 h-6 text-[#1A52A2] mb-2 mx-auto md:mx-0" />
                    <h4 className="text-2xl font-black text-[#0a132e]">{stat.value}</h4>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Call to Action Link */}
              <div className="pt-10">
                <button className="group flex items-center gap-4 text-[#1A52A2] font-black uppercase tracking-widest text-sm">
                  Download Company Profile
                  <span className="w-10 h-[2px] bg-[#DA1F28] group-hover:w-16 transition-all" />
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}