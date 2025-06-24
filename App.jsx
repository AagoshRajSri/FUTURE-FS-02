import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Update import paths (remove "/src" since files are in root)
import Navbar from "./src/components/Navbar";
import Hero from "./src/components/Hero";
import Contact from "./src/components/Contact";
import Cart from "./src/components/Cart";
import MensClothing from "./src/components/MensClothing";
import WomensClothing from "./src/components/WomensClothing";
import ChildrensClothing from "./src/components/ChildrensClothing";
import Checkout from "./src/components/Checkout";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router basename="/FUTURE-FS-02">
      <main className="bg-gray-950 min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Contact />
              </>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/men" element={<MensClothing />} />
          <Route path="/women" element={<WomensClothing />} />
          <Route path="/children" element={<ChildrensClothing />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* Add catch-all route for 404s */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </main>
    </Router>
  );
}
