"use client";

import { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Activity, CheckCircle2, AlertTriangle, X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import emailjs from "@emailjs/browser";

function ContactForm({ setToast }) {
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    const serviceFromUrl = searchParams.get("service");
    const productFromUrl = searchParams.get("product");
    
    if (productFromUrl) {
      setSelectedProduct(productFromUrl);
      setSelectedService(""); 
    } else if (serviceFromUrl) {
      setSelectedService(serviceFromUrl);
      setSelectedProduct(""); 
    } else {
      setSelectedService("");
      setSelectedProduct("");
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_zocm301",    
        "template_al7ljj4",   
        {
          from_name: formData.name,
          from_email: formData.email,
          product: selectedProduct,
          service: selectedService,
          message: formData.message,
        },
        "i_oehQNlJQ5NQShub"     
      );

      setToast({
        show: true,
        type: "success",
        title: "Enquiry Sent Successfully!",
        message: "Thank you for reaching out. We will get back to you shortly."
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setSelectedProduct("");
      setSelectedService("");

    } catch (error) {
      const status = error?.status || "Unknown Status";
      const details = error?.text || error?.message || "No message returned";
      
      console.error("--- EmailJS Integration Error ---");
      console.error(`HTTP Status Code: ${status}`);
      console.error(`Server Response: ${details}`);
      console.error("Raw Stack Error String:", String(error));
      
      setToast({
        show: true,
        type: "error",
        title: "Failed to Send Enquiry",
        message: `${details} (Status: ${status})`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="space-y-2">
          <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#1A52A2]">YOUR NAME</p>
          <input 
            type="text" 
            required
            value={formData.name}
            className="w-full bg-slate-50 rounded-xl px-5 py-3.5 md:px-6 md:py-4 outline-none focus:ring-2 ring-[#1A52A2]/20 border border-slate-100 transition-all text-sm md:text-base" 
            placeholder="Full Name" 
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#1A52A2]">WORK EMAIL</p>
          <input 
            type="email" 
            required
            value={formData.email}
            className="w-full bg-slate-50 rounded-xl px-5 py-3.5 md:px-6 md:py-4 outline-none focus:ring-2 ring-[#1A52A2]/20 border border-slate-100 transition-all text-sm md:text-base" 
            placeholder="Email Address" 
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="space-y-2">
          <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#DA1F28]">PRODUCT INTEREST</p>
          <input 
            type="text" 
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            className="w-full bg-red-50/30 font-bold text-[#0a132e] rounded-xl px-5 py-3.5 md:px-6 md:py-4 outline-none focus:ring-2 ring-[#DA1F28]/20 border border-red-100/50 transition-all text-sm md:text-base" 
            placeholder="Specific product name..." 
          />
        </div>
        <div className="space-y-2">
          <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#1A52A2]">SERVICE TYPE</p>
          <input 
            type="text" 
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full bg-blue-50/50 font-bold text-[#0a132e] rounded-xl px-5 py-3.5 md:px-6 md:py-4 outline-none focus:ring-2 ring-[#1A52A2]/20 border border-blue-100 transition-all text-sm md:text-base" 
            placeholder="Maintenance, Installation, etc." 
          />
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#1A52A2]">Message</p>
        <textarea 
          rows={4} 
          required
          value={formData.message}
          className="w-full bg-slate-50 rounded-2xl px-5 py-5 md:px-6 md:py-6 outline-none focus:ring-2 ring-[#1A52A2]/20 border border-slate-100 transition-all resize-none text-sm md:text-base" 
          placeholder="How can we assist your project?" 
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        />
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="group w-full bg-[#0a132e] hover:bg-[#1A52A2] disabled:bg-slate-400 text-white py-5 md:py-6 rounded-full font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-[10px] flex items-center justify-center gap-4 transition-all duration-500 shadow-xl"
      >
        {isSubmitting ? "Sending..." : "Submit Enquiry"}
        {!isSubmitting && <Send size={14} className="group-hover:translate-x-2 transition-transform" />}
      </button>
    </form>
  );
}

export default function Contact() {
  const pPuneExactMapLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5682855140664!2d73.9279527!3d18.5031737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c12574971ca9%3A0xe21be7ca929a73bb!2sShree%20Atharva%20Enterprises!5e0!3m2!1sen!2sin!4v1719323115421!5m2!1sen!2sin";
  const pPuneExternalMapUrl = "https://maps.google.com/?q=Shree+Atharva+Enterprises,+J-308,+2nd+floor,+Pune+-+Solapur+Rd,+Magarpatta,+North+Hadapsar,+Hadapsar,+Pune,+Maharashtra+411013";
  
  const [toast, setToast] = useState({ show: false, type: "success", title: "", message: "" });

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => setToast((prev) => ({ ...prev, show: false })), 5000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const offices = [
    {
      city: "Pune",
      type: "Main Hub",
      address: "J-308, 2nd Floor, Mega Center, Pune-Solapur Road, Hadapsar, Pune - 411028",
      mapLink: pPuneExternalMapUrl,
      phone: "+91 7304251133",
      email: "sales@shreeatharva.com",
      color: "bg-[#f0f4fa] border-l-[6px] border-l-[#1A52A2] border-y-slate-200 border-r-slate-200",
      accent: "#1A52A2"
    },
    {
      city: "Latur",
      type: "Service Node",
      address: "Road no 3, Vyankatesh Nagar, Ambajogai Road, Latur - 413512",
      mapLink: "https://maps.google.com/?q=Road+no+3,+Vyankatesh+Nagar,+Ambajogai+Road,+Latur+-+413512",
      phone: "+91 8484003636",
      email: "sales@shreeatharva.com",
      color: "bg-[#fef2f2] border-l-[6px] border-l-[#DA1F28] border-y-slate-200 border-r-slate-200",
      accent: "#DA1F28"
    }
  ];

  return (
    <section className="relative w-full bg-[#f8fbff] overflow-hidden">
      
      {/* Universal Simplified Notification Toast Container */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            className="fixed top-6 left-6 right-6 md:left-auto md:right-8 z-[9999] md:max-w-md w-auto"
          >
            <div className={`p-4 rounded-xl border backdrop-blur-md shadow-[0_20px_40px_rgba(10,19,46,0.12)] flex gap-3.5 items-start relative overflow-hidden bg-white ${
              toast.type === "success" 
                ? "border-emerald-100 border-l-[5px] border-l-emerald-500" 
                : "border-red-100 border-l-[5px] border-l-[#DA1F28]"
            }`}>
              
              {toast.type === "success" ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-[#DA1F28] shrink-0 mt-0.5" />
              )}

              <div className="space-y-1 pr-6">
                <h5 className="text-sm font-bold tracking-tight text-[#0a132e]">
                  {toast.title}
                </h5>
                <p className="text-xs font-medium text-slate-500 leading-relaxed">
                  {toast.message}
                </p>
              </div>

              <button 
                onClick={() => setToast((prev) => ({ ...prev, show: false }))}
                className="absolute top-3.5 right-3.5 text-slate-400 hover:text-[#0a132e] p-0.5 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <X size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-20 right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-100 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-20 left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-50 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <div className="relative h-[55vh] md:h-[75vh] w-full overflow-hidden">
        <img src="/images/about/about-main.png" className="w-full h-full object-cover" alt="Safety Engineering" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a132e]/95 via-[#0a132e]/60 to-transparent md:bg-gradient-to-r" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-10 pb-20 md:pb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <Activity className="text-[#DA1F28] w-4 h-4 md:w-5 md:h-5" />
                <span className="text-white/80 font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-[8px] md:text-[10px]">Operational 24/7</span>
              </div>
              <h1 className="text-[9vw] sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-[0.95] md:leading-[0.85]">
                Start a <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A52A2] to-blue-400">Conversation</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 -mt-16 md:-mt-32 z-20 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            {offices.map((office, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1, duration: 0.6 }} className={`${office.color} p-6 md:p-10 rounded-2xl border shadow-xl relative group hover:shadow-2xl transition-all duration-500`}>
                <a href={office.mapLink} target="_blank" rel="noopener noreferrer" className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-white shadow-lg w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-slate-100 z-10 hover:scale-110 active:scale-95 transition-transform duration-200">
                  <MapPin style={{ color: office.accent }} className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-1 md:mb-2">{office.type}</span>
                <h3 className="text-2xl md:text-3xl font-black text-[#0a132e] uppercase mb-4 md:mb-6">{office.city}</h3>
                <div className="space-y-5 md:space-y-6">
                  <a href={office.mapLink} target="_blank" rel="noopener noreferrer" className="block text-slate-700 hover:text-[#1A52A2] transition-colors font-bold leading-relaxed text-sm md:text-base">
                    {office.address}
                  </a>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    <div className="bg-white px-4 py-1.5 md:px-5 md:py-2 rounded-full border border-slate-200 flex items-center gap-2 md:gap-3 shadow-sm">
                      <Phone className="w-3 h-3 md:w-3.5 md:h-3.5" style={{ color: office.accent }} />
                      <span className="text-xs md:text-sm font-bold text-[#0a132e]">{office.phone}</span>
                    </div>
                    <div className="bg-white px-4 py-1.5 md:px-5 md:py-2 rounded-full border border-slate-200 flex items-center gap-2 md:gap-3 shadow-sm">
                      <Mail className="w-3 h-3 md:w-3.5 md:h-3.5" style={{ color: office.accent }} />
                      <span className="text-xs md:text-sm font-bold text-[#0a132e]">sales@shreeatharva.com</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-6 md:p-16 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.08)] border border-slate-100"
          >
            <div className="mb-8 md:mb-12">
              <h4 className="text-2xl md:text-3xl font-black text-[#0a132e] uppercase tracking-tighter">Inquiry Terminal</h4>
              <div className="w-10 h-1 bg-[#DA1F28] mt-3 md:mt-4" />
            </div>

            <Suspense fallback={<div className="h-64 flex items-center justify-center font-bold uppercase text-[9px] md:text-[10px] tracking-widest text-slate-400">Loading Terminal...</div>}>
              <ContactForm setToast={setToast} />
            </Suspense>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="w-full mt-16 md:mt-24 relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-8 gap-4">
            <div>
              <span className="text-[#DA1F28] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px]">Geographic Reach</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0a132e] uppercase tracking-tighter mt-1 md:mt-2">Network <span className="text-[#1A52A2]">Visualizer</span></h2>
            </div>
          </div>
          <div className="h-[450px] md:h-[650px] w-full relative group overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-2xl border border-slate-100 bg-white">
            <iframe 
              src={pPuneExactMapLink} 
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-1000" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            <div className="absolute top-4 left-4 md:top-8 md:left-8 max-w-[calc(100%-2rem)] sm:max-w-xs bg-[#0a132e]/95 backdrop-blur-md text-white p-5 md:p-6 rounded-2xl shadow-2xl border border-white/10 group-hover:border-[#1A52A2]/40 transition-all duration-500">
              <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-[#DA1F28] block mb-1">HQ Information</span>
              <h4 className="text-sm md:text-base font-black uppercase tracking-tight mb-2">Registered Office</h4>
              <p className="text-xs text-white/80 font-medium leading-relaxed mb-4">
                J-308, 2nd Floor, Mega Center, Pune-Solapur Road, Hadapsar, Pune - 411028
              </p>
              <a 
                href={pPuneExternalMapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-wider bg-[#1A52A2] hover:bg-[#1A52A2]/80 text-white px-4 py-2 rounded-full shadow-md transition-all duration-300"
              >
                <MapPin size={10} /> Open Exact Location
              </a>
            </div>

            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}