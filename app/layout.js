import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import WhatsAppButton from "@/components/common/WhatsAppButton";

export const metadata = {
  title: "Shree Atharva Enterprises",
  description: "Fire Protection & Safety Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#050a1a] overflow-x-hidden antialiased">

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="relative">
          {children}
        </main>

        {/* Floating WhatsApp */}
        <WhatsAppButton />

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}