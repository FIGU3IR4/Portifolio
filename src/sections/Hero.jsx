import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowRight } from "lucide-react";
import { Container } from "../components/ui/Container";
import { ME } from "../data/portfolio";
import myphoto from "../assets/minhaimagem.png";
import cv from "../assets/VictorFigueiraCV.pdf"; 

export const Hero = () => (
  <section id="home" className="relative overflow-hidden">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.18),transparent_40%)]" />

    <Container className="relative py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="order-2 md:order-1"
      >
        <span className="text-sm px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
          {ME.location}
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-white">
          {ME.title}
        </h1>
        <p className="mt-3 text-slate-300 max-w-xl">{ME.tagline}</p>
        
       
        <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 bg-blue-600 text-white hover:bg-blue-500 transition">
                Ver Projetos
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 border border-slate-700 text-slate-200 hover:bg-slate-800">
                Contato
            </a>
        </div>

       
        <div className="mt-8 flex items-center gap-4 text-slate-300">
           
             <a href={ME.links.github} className="hover:text-white"><Github className="w-6 h-6"/></a>
             <a href={ME.links.linkedin} className="hover:text-white"><Linkedin className="w-6 h-6"/></a>
           
        </div>
      </motion.div>

    
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center items-center py-12"
      >
        <div className="relative bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-cyan-500/20 border border-slate-700 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl backdrop-blur-md hover:scale-105 transition-transform">
            <img src={myphoto} alt={ME.name} className="w-28 h-28 mx-auto rounded-full border-4 border-blue-500 shadow-md object-cover"/>
            <h3 className="mt-4 text-2xl font-bold text-slate-100">{ME.name}</h3>
            <p className="mt-2 text-slate-300 text-sm">React • Node.js • Spring Boot</p>
            <a href={cv} download className="mt-6 inline-block px-5 py-2 rounded-xl font-semibold bg-blue-600 text-white hover:bg-blue-500 transition">
                📄 Baixar CV
            </a>
        </div>
      </motion.div>
    </Container>
  </section>
);