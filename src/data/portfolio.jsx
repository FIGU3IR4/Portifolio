// src/data/portfolio.js
import React from "react"; 
import { Code2, Bot, Cpu, Database, Boxes } from "lucide-react";

// Importação das imagens
import logofluflu from "../assets/logofluflu.png";
import logomobigo from "../assets/logomobigo.png";
import logopedefacil from "../assets/logopedefacil.jpg";
import logotropicalmate from "../assets/LogoTropical.jpg";
import logomeandher from "../assets/meandherlogo.png";

export const ME = {
  name: "Victor Figueira",
  title: "Desenvolvedor Full Stack",
  tagline: "Crio soluções web com React, Node.js e Spring Boot. Também navego por Python, C++ e IoT.",
  location: "Recife, Brasil",
  links: {
    github: "https://github.com/figu3ir4",
    linkedin: "https://linkedin.com/in/figu3ir4",
    email: "mailto:victorgfigueira@gmail.com",
    phone: "tel:+5581996259614",
  },
};

export const SKILLS = [
  { name: "React", icon: <Code2 className="w-5 h-5" /> },
  { name: "Node.js", icon: <Bot className="w-5 h-5" /> },
  { name: "Java / Spring Boot", icon: <Cpu className="w-5 h-5" /> },
  { name: "MySQL / PostgreSQL", icon: <Database className="w-5 h-5" /> },
  { name: "Python", icon: <Code2 className="w-5 h-5" /> },
  { name: "C++ (IoT)", icon: <Boxes className="w-5 h-5" /> },
];

export const PROJECTS = [
  {
    title: "Tropical Mate",
    description: "A Tropical Mate é um sistema front-end, desenvolvido em React, criado para apresentar os produtos da empresa, que atua na venda de tereré, cuias e bombas, oferecendo uma interface moderna e intuitiva para visualização do catálogo.",
    tech: ["React", "Tailwind", "Node.js/ Npm"],
    
    category: "frontend", 
    demo: "https://www.tropicalmate.com.br", 
    repo: "https://github.com/FIGU3IR4/TropicalMate",
    image: logotropicalmate,
  },
    {
    title: "Me and Her",
    description: "Um site onde se encontra uma declaração de amor e uma linha do tempo dos momentos especiais compartilhados.",
    tech: ["React", "Tailwind", "Node.js/ Npm"],
    
    category: "frontend", 
    demo: "https://victorandrebeca.vercel.app", 
    repo: "https://github.com/FIGU3IR4/MeAndHer",
    image: logomeandher,
  },
  {
    title: "PedeFácil – Plataforma de Restaurantes",
    description: "back-end em Spring Boot. Gestão de cardápio, pedidos e autenticação.",
    tech: ["Spring Boot", "PostgreSQL", "Java", "Spring Data JPA",  "REST APIs", "Hibernate", "Maven", "Docker"],
    // Categoria: Aparecerá no bloco de CIMA (Interfaces Visuais)
    category: "backend", 
    demo: null, // Substitua pelo link real quando fizer o deploy (ex: Vercel)
    repo: "https://github.com/FIGU3IR4/pedefacil",
    image: logopedefacil,
  },
  {
    title: "Mobility Go – Sistema de Aluguel de Carros",
    description: "Aplicação em Python puro para gerenciamento de aluguel de carros, incluindo cadastro de veículos e tarifas.",
    tech: ["Python"],
    // Categoria: Aparecerá no bloco de BAIXO (Lógica/Back-end)
    category: "backend",
    demo: null, // null remove o botão "Demo"
    repo: "https://github.com/FIGU3IR4/Sistema_carros_versao_final",
    image: logomobigo,
  },
  {
    title: "Fluflu Pet – Plataforma de Clínicas Veterinárias",
    description: "Aplicação desenvolvida em Node.js para agendamento de consultas e gestão de serviços.",
    tech: ["Node.js"],
    // Categoria: Aparecerá no bloco de BAIXO (Lógica/Back-end)
    category: "backend",
    demo: null, // null remove o botão "Demo"
    repo: "https://github.com/FIGU3IR4/fluflu_pet",
    image: logofluflu,
  },
];