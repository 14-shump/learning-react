import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Products,
  Contact
} from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route Path="/" element={<Home />} />
        <Route Path="/about" element={<About />} />
        <Route Path="/events" element={<Events />} />
        <Route Path="/products" element={<Products />} />
        <Route Path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;