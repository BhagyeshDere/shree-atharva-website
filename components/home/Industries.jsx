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
    <section className="relative z-20 py-16 bg-[#f5f5f5] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-500/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#ef1d27] text-white px-10 py-3 uppercase tracking-[0.25em] text-[10px] font-bold">
            Industries We Serve
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-black text-[#0b2c6b] leading-[1.1] tracking-tight">
            Serving Multiple Sectors Across
            <br />
            Maharashtra
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
          {/* CENTER */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="relative z-20 flex items-center justify-center"
          >
            {/* Outer Dashed Circle - Pulse Animation */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[280px] h-[280px] rounded-full border-2 border-dashed border-[#64c5f5]/50" 
            />

            {/* Main Circle */}
            <div className="relative w-[210px] h-[210px] rounded-full bg-white shadow-[0_15px_50px_rgba(0,0,0,0.12)] border-[8px] border-[#1aa7e1] flex flex-col items-center justify-center text-center overflow-hidden">
              <div className="absolute top-0 left-0 w-1/2 h-2 bg-[#0b2c6b]" />
              <div className="absolute top-0 right-0 w-1/2 h-2 bg-[#ef1d27]" />
              <h3 className="text-4xl font-black text-[#0b2c6b] leading-none">Industries</h3>
              <span className="mt-1 text-[#ef1d27] text-xl font-black uppercase tracking-wide">We Serve</span>
              <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-slate-400 font-bold">Checklist</p>
            </div>
          </motion.div>

          {/* CONNECTION LINES (SVG) */}
          <svg className="absolute inset-0 w-full h-full z-0 opacity-40">
            <g stroke="#21a9e1" strokeWidth="1.5" strokeDasharray="6 6">
              {/* Lines mapped to match the smaller 210px center */}
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
          <motion.div variants={itemVariants("left")} className="absolute left-0 top-[10%] flex items-center">
            <div className="bg-gradient-to-r from-[#0b2c6b] to-[#1296db] text-white h-[60px] min-w-[280px] rounded-full flex items-center justify-center text-base font-black uppercase shadow-xl">Industrial Projects</div>
            <div className="-ml-5 w-[75px] h-[75px] rounded-full bg-white border-[5px] border-[#1aa7e1] flex items-center justify-center shadow-xl">
              <Factory className="w-8 h-8 text-[#ef1d27]" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants("left")} className="absolute left-[2%] top-[33%] flex items-center">
            <div className="bg-gradient-to-r from-[#0b2c6b] to-[#1296db] text-white h-[60px] min-w-[280px] rounded-full flex items-center justify-center text-base font-black uppercase shadow-xl">Hospitals</div>
            <div className="-ml-5 w-[75px] h-[75px] rounded-full bg-white border-[5px] border-[#1aa7e1] flex items-center justify-center shadow-xl">
              <Hospital className="w-8 h-8 text-[#ef1d27]" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants("left")} className="absolute left-[3%] bottom-[30%] flex items-center">
            <div className="bg-gradient-to-r from-[#0b2c6b] to-[#1296db] text-white h-[60px] min-w-[280px] rounded-full flex items-center justify-center text-base font-black uppercase shadow-xl">Residential Projects</div>
            <div className="-ml-5 w-[75px] h-[75px] rounded-full bg-white border-[5px] border-[#1aa7e1] flex items-center justify-center shadow-xl">
              <House className="w-8 h-8 text-[#ef1d27]" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants("left")} className="absolute left-[8%] bottom-[8%] flex items-center">
            <div className="bg-gradient-to-r from-[#0b2c6b] to-[#1296db] text-white h-[60px] min-w-[280px] rounded-full flex items-center justify-center text-base font-black uppercase shadow-xl">Schools & Colleges</div>
            <div className="-ml-5 w-[75px] h-[75px] rounded-full bg-white border-[5px] border-[#1aa7e1] flex items-center justify-center shadow-xl">
              <School className="w-8 h-8 text-[#ef1d27]" />
            </div>
          </motion.div>

          {/* RIGHT SIDE ITEMS */}
          <motion.div variants={itemVariants("right")} className="absolute right-0 top-[10%] flex items-center">
            <div className="mr-[-20px] w-[75px] h-[75px] rounded-full bg-white border-[5px] border-[#1aa7e1] flex items-center justify-center shadow-xl z-10">
              <Building2 className="w-8 h-8 text-[#ef1d27]" />
            </div>
            <div className="bg-gradient-to-r from-[#0b2c6b] to-[#1296db] text-white h-[60px] min-w-[280px] rounded-full flex items-center justify-center text-base font-black uppercase shadow-xl">Commercial Projects</div>
          </motion.div>

          <motion.div variants={itemVariants("right")} className="absolute right-[2%] top-[33%] flex items-center">
            <div className="mr-[-20px] w-[75px] h-[75px] rounded-full bg-white border-[5px] border-[#1aa7e1] flex items-center justify-center shadow-xl z-10">
              <Landmark className="w-8 h-8 text-[#ef1d27]" />
            </div>
            <div className="bg-gradient-to-r from-[#0b2c6b] to-[#1296db] text-white h-[60px] min-w-[280px] rounded-full flex items-center justify-center text-base font-black uppercase shadow-xl">Banks</div>
          </motion.div>

          <motion.div variants={itemVariants("right")} className="absolute right-[3%] bottom-[30%] flex items-center">
            <div className="mr-[-20px] w-[75px] h-[75px] rounded-full bg-white border-[5px] border-[#1aa7e1] flex items-center justify-center shadow-xl z-10">
              <Hotel className="w-8 h-8 text-[#ef1d27]" />
            </div>
            <div className="bg-gradient-to-r from-[#0b2c6b] to-[#1296db] text-white h-[60px] min-w-[280px] rounded-full flex items-center justify-center text-base font-black uppercase shadow-xl">Hotels</div>
          </motion.div>

          <motion.div variants={itemVariants("right")} className="absolute right-[8%] bottom-[8%] flex items-center">
            <div className="mr-[-20px] w-[75px] h-[75px] rounded-full bg-white border-[5px] border-[#1aa7e1] flex items-center justify-center shadow-xl z-10">
              <BriefcaseBusiness className="w-8 h-8 text-[#ef1d27]" />
            </div>
            <div className="bg-gradient-to-r from-[#0b2c6b] to-[#1296db] text-white h-[60px] min-w-[280px] rounded-full flex items-center justify-center text-base font-black uppercase shadow-xl">Government Jobs</div>
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
              className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 flex items-center gap-4 hover:border-[#1aa7e1] transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-[#0b2c6b] flex items-center justify-center shrink-0">
                <item.icon className="w-7 h-7 text-white" />
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