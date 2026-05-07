import Hero from "@/components/home/Hero";
import Clients from "@/components/home/Clients";
import About from "@/components/home/About";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Industries from "@/components/home/Industries";
//import Services from "@/components/home/Services";
//import Projects from "@/components/home/Projects";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main>

      {/* Hero Section */}
      <Hero />

      {/* Clients Logos */}
      <Clients />

      {/* About Company */}
      <About />

    

     

      {/* Why Choose Us */}
      <WhyChooseUs />

        {/* Industries We Serve */}
      <Industries />

  

      {/* Call To Action */}
      <CTA />

    </main>
  );
}