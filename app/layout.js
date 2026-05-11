"use client";

import "./globals.css";

import { useEffect, useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import Loader from "@/components/common/Loader";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body>

        {loading && <Loader />}

        {!loading && (
          <>
            <Navbar />

            {children}

            <Footer />

            <WhatsAppButton />
          </>
        )}

      </body>
    </html>
  );
}