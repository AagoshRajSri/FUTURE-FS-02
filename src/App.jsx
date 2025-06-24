import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import MensClothing from "./components/MensClothing";
import WomensClothing from "./components/WomensClothing";
import ChildrensClothing from "./components/ChildrensClothing";
import Checkout from "./components/Checkout";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
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
        </Routes>
      </main>
    </Router>
  );
}
