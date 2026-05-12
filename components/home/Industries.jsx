"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Hospital,
  House,
  School,
  Building2,
  Landmark,
  Hotel,
  BriefcaseBusiness,
} from "lucide-react";

export default function Industries() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = (direction) => ({
    hidden: { opacity: 0, x: direction === "left" ? -40 : 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  });

  return (
    <section className="relative z-20 py-16 bg-[#f8fafc] overflow-hidden">
      {/* Background Glow - Logo Themed */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0b2c6b]/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ef1d27]/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading - Theme Updated */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#ef1d27] text-white px-10 py-3 uppercase tracking-[0.25em] text-[10px] font-black shadow-lg shadow-red-500/20">
            Industries We Serve
          </span>
          <h2 className="mt-6 text-4xl md:text-7xl font-black text-[#0b2c6b] leading-[0.95] tracking-tighter uppercase">
            Providing <span className="text-[#ef1d27]">Safety</span> Solutions
            <br />
            Across Maharashtra
          </h2>
        </motion.div>

        {/* MAIN INFOGRAPHIC */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative hidden lg:flex items-center justify-center min-h-[750px]"
        >
          {/* CENTER - LOGO + TEXT */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="relative z-20 flex items-center justify-center"
          >
            {/* Outer Dashed Circle */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[340px] h-[340px] rounded-full border-2 border-dashed border-[#0b2c6b]/20" 
            />

            {/* Main Logo & Text Container */}
            <div className="relative w-[260px] h-[260px] rounded-full bg-white shadow-[0_20px_50px_rgba(11,44,107,0.15)] border-4 border-white flex flex-col items-center justify-center overflow-hidden p-6 text-center">
               <img 
                src="/images/logo.png" 
                alt="Shree Atharva Logo" 
                className="w-20 h-auto object-contain mb-2"
              />
              <div className="flex flex-col">
                <span className="text-[#0b2c6b] font-black text-xl leading-tight uppercase tracking-tight">Shree Atharva</span>
                <span className="text-[#ef1d27] font-bold text-sm uppercase tracking-widest">Enterprises</span>
              </div>
              
              {/* Bottom Accent Strip */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-[#ef1d27]" />
            </div>
          </motion.div>

          {/* CONNECTION LINES (SVG) */}
          <svg className="absolute inset-0 w-full h-full z-0 opacity-30">
            <g stroke="#0b2c6b" strokeWidth="1.5" strokeDasharray="6 6">
              <line x1="50%" y1="50%" x2="26%" y2="20%" />
              <line x1="50%" y1="50%" x2="22%" y2="37%" />
              <line x1="50%" y1="50%" x2="24%" y2="63%" />
              <line x1="50%" y1="50%" x2="28%" y2="80%" />
              <line x1="50%" y1="50%" x2="74%" y2="20%" />
              <line x1="50%" y1="50%" x2="78%" y2="37%" />
              <line x1="50%" y1="50%" x2="76%" y2="63%" />
              <line x1="50%" y1="50%" x2="72%" y2="80%" />
            </g>
          </svg>

          {/* LEFT SIDE ITEMS */}
          <motion.div variants={itemVariants("left")} className="absolute left-0 top-[10%] flex items-center group">
            <div className="bg-gradient-to-r from-[#0b2c6b] to-[#1296db] text-white h-[60px] min-w-[280px] rounded-full flex items-center justify-center text-base font-black uppercase shadow-xl transition-all group-hover:scale-105">Industrial Projects</div>
            <div className="-ml-5 w-[75px] h-[75px] rounded-full bg-white border-[5px] border-[#0b2c6b] flex items-center justify-center shadow-xl z-10 transition-transform group-hover:scale-110">
              <Factory className="w-8 h-8 text-[#ef1d27]" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants("left")} className="absolute left-[2%] top-[33%] flex items-center group">
            <div className="bg-gradient-to-r from-[#0b2c6b] to-[#1296db] text-white h-[60px] min-w-[280px] rounded-full flex items-center justify-center text-base font-black uppercase shadow-xl transition-all group-hover:scale-105">Hospitals</div>
            <div className="-ml-5 w-[75px] h-[75px] rounded-full bg-white border-[5px] border-[#0b2c6b] flex items-center justify-center shadow-xl z-10 transition-transform group-hover:scale-110">
              <Hospital className="w-8 h-8 text-[#ef1d27]" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants("left")} className="absolute left-[3%] bottom-[30%] flex items-center group">
            <div className="bg-gradient-to-r from-[#0b2c6b] to-[#1296db] text-white h-[60px] min-w-[280px] rounded-full flex items-center justify-center text-base font-black uppercase shadow-xl transition-all group-hover:scale-105">Residential Projects</div>
            <div className="-ml-5 w-[75px] h-[75px] rounded-full bg-white border-[5px] border-[#0b2c6b] flex items-center justify-center shadow-xl z-10 transition-transform group-hover:scale-110">
              <House className="w-8 h-8 text-[#ef1d27]" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants("left")} className="absolute left-[8%] bottom-[8%] flex items-center group">
            <div className="bg-gradient-to-r from-[#0b2c6b] to-[#1296db] text-white h-[60px] min-w-[280px] rounded-full flex items-center justify-center text-base font-black uppercase shadow-xl transition-all group-hover:scale-105">Schools & Colleges</div>
            <div className="-ml-5 w-[75px] h-[75px] rounded-full bg-white border-[5px] border-[#0b2c6b] flex items-center justify-center shadow-xl z-10 transition-transform group-hover:scale-110">
              <School className="w-8 h-8 text-[#ef1d27]" />
            </div>
          </motion.div>

          {/* RIGHT SIDE ITEMS */}
          <motion.div variants={itemVariants("right")} className="absolute right-0 top-[10%] flex items-center group">
            <div className="mr-[-20px] w-[75px] h-[75px] rounded-full bg-white border-[5px] border-[#ef1d27] flex items-center justify-center shadow-xl z-10 transition-transform group-hover:scale-110">
              <Building2 className="w-8 h-8 text-[#0b2c6b]" />
            </div>
            <div className="bg-gradient-to-r from-[#ef1d27] to-[#b91c1c] text-white h-[60px] min-w-[280px] rounded-full flex items-center justify-center text-base font-black uppercase shadow-xl transition-all group-hover:scale-105">Commercial Projects</div>
          </motion.div>

          <motion.div variants={itemVariants("right")} className="absolute right-[2%] top-[33%] flex items-center group">
            <div className="mr-[-20px] w-[75px] h-[75px] rounded-full bg-white border-[5px] border-[#ef1d27] flex items-center justify-center shadow-xl z-10 transition-transform group-hover:scale-110">
              <Landmark className="w-8 h-8 text-[#0b2c6b]" />
            </div>
            <div className="bg-gradient-to-r from-[#ef1d27] to-[#b91c1c] text-white h-[60px] min-w-[280px] rounded-full flex items-center justify-center text-base font-black uppercase shadow-xl transition-all group-hover:scale-105">Banks</div>
          </motion.div>

          <motion.div variants={itemVariants("right")} className="absolute right-[3%] bottom-[30%] flex items-center group">
            <div className="mr-[-20px] w-[75px] h-[75px] rounded-full bg-white border-[5px] border-[#ef1d27] flex items-center justify-center shadow-xl z-10 transition-transform group-hover:scale-110">
              <Hotel className="w-8 h-8 text-[#0b2c6b]" />
            </div>
            <div className="bg-gradient-to-r from-[#ef1d27] to-[#b91c1c] text-white h-[60px] min-w-[280px] rounded-full flex items-center justify-center text-base font-black uppercase shadow-xl transition-all group-hover:scale-105">Hotels</div>
          </motion.div>

          <motion.div variants={itemVariants("right")} className="absolute right-[8%] bottom-[8%] flex items-center group">
            <div className="mr-[-20px] w-[75px] h-[75px] rounded-full bg-white border-[5px] border-[#ef1d27] flex items-center justify-center shadow-xl z-10 transition-transform group-hover:scale-110">
              <BriefcaseBusiness className="w-8 h-8 text-[#0b2c6b]" />
            </div>
            <div className="bg-gradient-to-r from-[#ef1d27] to-[#b91c1c] text-white h-[60px] min-w-[280px] rounded-full flex items-center justify-center text-base font-black uppercase shadow-xl transition-all group-hover:scale-105">Government Jobs</div>
          </motion.div>
        </motion.div>

        {/* MOBILE VERSION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
          {[
            { title: "Industrial Projects", icon: Factory },
            { title: "Hospitals", icon: Hospital },
            { title: "Residential Projects", icon: House },
            { title: "Schools & Colleges", icon: School },
            { title: "Commercial Projects", icon: Building2 },
            { title: "Banks", icon: Landmark },
            { title: "Hotels", icon: Hotel },
            { title: "Government Jobs", icon: BriefcaseBusiness },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-[#0b2c6b] flex items-center gap-4 hover:border-[#ef1d27] transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-[#f1f5f9] flex items-center justify-center shrink-0">
                <item.icon className="w-7 h-7 text-[#ef1d27]" />
              </div>
              <h3 className="text-md font-black text-[#0b2c6b] uppercase leading-tight">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}