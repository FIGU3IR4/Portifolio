import React from "react";
import { Container } from "./ui/Container"; 
import { ME } from "../data/portfolio";

export const Footer = () => (
  <footer className="py-10 border-t border-slate-800 bg-slate-950">
    <Container>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
        <p>
          © {new Date().getFullYear()} {ME.name}. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-6">
          <a className="hover:text-white transition-colors" href="#home">
            Topo
          </a>
          <a className="hover:text-white transition-colors" href="#projects">
            Projetos
          </a>
          <a className="hover:text-white transition-colors" href="#contact">
            Contato
          </a>
        </div>
      </div>
    </Container>
  </footer>
);