import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Products from "@/components/home/Products";
import Industries from "@/components/home/Industries";
//import Projects from "@/components/home/Projects";
import Clients from "@/components/home/Clients";


export default function Home() {
  return (
    <main>

      {/* Hero Section */}
      <Hero />

     

      {/* About Company */}
      <About />

    {/* services */}
      <Services />

      
        {/* Industries We Serve */}
      <Industries />

      

     {/* products */}
      <Products />

     

      

   {/* Clients Logos */}
      <Clients />

     
    </main>
  );
}