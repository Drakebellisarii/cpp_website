import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CentralPointPartnersWebsite from "./CentralPointPartnersWebsite";
import About from "./pages/About"; // adjust the path if needed
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CentralPointPartnersWebsite />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}