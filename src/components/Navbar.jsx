import React from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "./ui/Container";
import { ME } from "../data/portfolio"; 

export const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-slate-800 transition-all duration-300">
      <Container className="flex items-center justify-between py-3">
        {}
        <a 
          href="#home" 
          className="text-slate-100 font-bold tracking-tight text-lg hover:text-blue-400 transition-colors"
        >
          {ME.name}
        </a>

        {}
        <div className="hidden md:flex items-center gap-8 text-slate-300 text-sm font-medium">
          <a className="hover:text-white transition-colors" href="#about">
            Sobre
          </a>
          <a className="hover:text-white transition-colors" href="#projects">
            Projetos
          </a>
          <a className="hover:text-white transition-colors" href="#skills">
            Skills
          </a>
          <a className="hover:text-white transition-colors" href="#contact">
            Contato
          </a>
          
          {/* Botão de Ação */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-blue-600 text-white hover:bg-blue-500 transition shadow-lg shadow-blue-900/20"
          >
            Ver Projetos <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {}
      </Container>
    </nav>
  );
};