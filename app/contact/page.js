"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Activity, Navigation } from "lucide-react";

export default function Contact() {
  const offices = [
    {
      city: "Pune",
      type: "Main Hub",
      address: "J-308, 2nd Floor, Mega Center, Pune - Solapur Road, Hadapsar, Pune - 411028",
      phone: "+91 9422504471",
      email: "atharvaent101@gmail.com",
      color: "bg-[#f0f4fa] border-l-[6px] border-l-[#1A52A2] border-y-slate-200 border-r-slate-200",
      accent: "#1A52A2"
    },
    {
      city: "Latur",
      type: "Service Node",
      address: "Road no 3, Vyankatesh Nagar, Ambajogai Road, Latur - 413512",
      phone: "+91 8484003636",
      email: "atharvaent101@gmail.com",
      color: "bg-[#fef2f2] border-l-[6px] border-l-[#DA1F28] border-y-slate-200 border-r-slate-200",
      accent: "#DA1F28"
    }
  ];

  return (
    <section className="relative w-full bg-[#f8fbff] overflow-hidden">
      
      {/* BACKGROUND GRAPHIC ELEMENTS */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-[-10%] w-[500px] h-[500px] bg-red-50 rounded-full blur-[120px]" />
      </div>

      {/* 1. HERO HEADER */}
      <div className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden">
        <img 
          src="/images/about/about-main.png" 
          className="w-full h-full object-cover"
          alt="Safety Engineering"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a132e]/90 via-[#0a132e]/50 to-transparent md:bg-gradient-to-r" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-10 pb-32 md:pb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-2 mb-6">
                <Activity className="text-[#DA1F28]" size={20} />
                <span className="text-white/80 font-black uppercase tracking-[0.6em] text-[10px]">Operational 24/7</span>
              </div>
              <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.85]">
                Start a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A52A2] to-blue-400">Conversation</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 2. OVERLAPPING CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 -mt-20 md:-mt-32 z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* SOLID CARDS (LEFT) */}
          <div className="lg:col-span-5 space-y-8">
            {offices.map((office, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className={`${office.color} p-8 md:p-10 rounded-2xl border shadow-xl relative group hover:shadow-2xl transition-all duration-500`}
              >
                <div className="absolute -top-4 -right-4 bg-white shadow-lg w-14 h-14 rounded-full flex items-center justify-center border border-slate-100 z-10">
                  <MapPin style={{ color: office.accent }} size={24} />
                </div>
                
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-2">{office.type}</span>
                <h3 className="text-3xl font-black text-[#0a132e] uppercase mb-6">{office.city}</h3>
                
                <div className="space-y-6">
                  <p className="text-slate-700 font-bold leading-relaxed">{office.address}</p>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-white px-5 py-2 rounded-full border border-slate-200 flex items-center gap-3 shadow-sm">
                      <Phone size={14} style={{ color: office.accent }} />
                      <span className="text-sm font-bold text-[#0a132e]">{office.phone}</span>
                    </div>
                    <div className="bg-white px-5 py-2 rounded-full border border-slate-200 flex items-center gap-3 shadow-sm">
                      <Mail size={14} style={{ color: office.accent }} />
                      <span className="text-sm font-bold text-[#0a132e]">Email HQ</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* FORM (RIGHT) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-8 md:p-16 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-slate-100"
          >
            <div className="mb-12">
              <h4 className="text-3xl font-black text-[#0a132e] uppercase tracking-tighter">Inquiry Terminal</h4>
              <div className="w-12 h-1 bg-[#DA1F28] mt-4" />
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#1A52A2]">01. Client Name</p>
                  <input type="text" className="w-full bg-slate-50 rounded-xl px-6 py-4 outline-none focus:ring-2 ring-[#1A52A2]/20 border border-slate-100 transition-all" placeholder="Full Name" />
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#1A52A2]">02. Connection</p>
                  <input type="email" className="w-full bg-slate-50 rounded-xl px-6 py-4 outline-none focus:ring-2 ring-[#1A52A2]/20 border border-slate-100 transition-all" placeholder="Email Address" />
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#1A52A2]">03. Transmission Message</p>
                <textarea rows={4} className="w-full bg-slate-50 rounded-2xl px-6 py-6 outline-none focus:ring-2 ring-[#1A52A2]/20 border border-slate-100 transition-all resize-none" placeholder="How can we assist your project?" />
              </div>

              <button className="group w-full bg-[#0a132e] hover:bg-[#1A52A2] text-white py-6 rounded-full font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-4 transition-all duration-500 shadow-xl">
                Send <Send size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* 4. MAP SECTION WITH CORNER ADDRESS */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="w-full mt-24 relative"
        >
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-[#DA1F28] font-black uppercase tracking-[0.4em] text-[10px]">Geographic Reach</span>
              <h2 className="text-4xl font-black text-[#0a132e] uppercase tracking-tighter mt-2">Network <span className="text-[#1A52A2]">Visualizer</span></h2>
            </div>
          </div>

          <div className="h-[500px] md:h-[650px] w-full relative group overflow-hidden rounded-[2rem] shadow-2xl border border-slate-100 bg-white">
            {/* Map Frame */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.568341640538!2d73.9118128751912!3d18.503254982587523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1966568600d%3A0xf639999684784a0d!2sMega%20Center%2C%20Hadapsar%2C%20Pune%2C%20Maharashtra%20411028!5e0!3m2!1sen!2sin!4v1715520000000!5m2!1sen!2sin" 
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-1000" 
              allowFullScreen="" 
              loading="lazy" 
            />
            
          

            {/* Subtle Overlay Badge */}
            <div className="absolute bottom-8 right-8 hidden md:block">
              <div className="bg-white/90 backdrop-blur-sm text-[#0a132e] px-4 py-2 rounded-full border border-slate-200 shadow-xl flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                <span className="text-[9px] font-black uppercase tracking-tighter">Live Systems Tracking</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}