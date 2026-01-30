import React from "react";
import "./index.css"; 


import { NavBar } from "./components/Navbar";
import { Footer } from "./components/Footer"; 


import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";

export default function PortfolioVictor() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600/30 selection:text-white">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}