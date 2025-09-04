import "./index.css";
import cv from "./assets/VictorFigueiraCV.pdf";
import myphoto from "./assets/minhaimagem.png";
import logofluflu from "./assets/logofluflu.png";
import logomobigo from "./assets/logomobigo.png";

import logopedefacil from "./assets/logopedefacil.jpg";
import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  ArrowRight,
  Code2,
  Cpu,
  Database,
  Boxes,
  Bot,
} from "lucide-react";

const ME = {
  name: "Victor Figueira",
  title: "Desenvolvedor Full Stack",
  tagline:
    "Crio soluções web com React, Node.js e Spring Boot. Também navego por Python, C++ e IoT.",
  location: "Recife, Brasil",
  links: {
    github: "https://github.com/figu3ir4",
    linkedin: "https://linkedin.com/in/figu3ir4",
    email: "mailto:victorgfigueira@gmail.com",
    phone: "tel:+5581996259614",
  },
};

const SKILLS = [
  { name: "React", icon: <Code2 className="w-5 h-5" /> },
  { name: "Node.js", icon: <Bot className="w-5 h-5" /> },
  { name: "Java / Spring Boot", icon: <Cpu className="w-5 h-5" /> },
  { name: "MySQL / PostgreSQL", icon: <Database className="w-5 h-5" /> },
  { name: "Python", icon: <Code2 className="w-5 h-5" /> },
  { name: "C++ (IoT)", icon: <Boxes className="w-5 h-5" /> },
];

const PROJECTS = [
  {
    title: "PedeFácil – Plataforma de Restaurantes",
    description:
      "Front-end em React e back-end em Spring Boot. Gestão de cardápio, pedidos e autenticação.",
    tech: ["React", "Tailwind", "Spring Boot", "PostgreSQL"],
    demo: "#",
    repo: "https://github.com/FIGU3IR4/pedefacil",
    image: logopedefacil,
  },
{
  title: "Mobility Go – Sistema de Aluguel de Carros",
  description:
    "Aplicação em Python puro para gerenciamento de aluguel de carros, incluindo cadastro de veículos, controle de clientes e cálculo de tarifas.",
  tech: ["Python"],
  repo: "https://github.com/FIGU3IR4/Sistema_carros_versao_final",
  image: logomobigo,
},

{
  title: "Fluflu Pet – Plataforma de Clínicas Veterinárias",
  description:
    "Aplicação desenvolvida em Node.js, pensada para web, que reúne diversas clínicas veterinárias em um só lugar, facilitando o agendamento de consultas e a gestão de serviços para clientes e administradores.",
  tech: ["Node.js"],
  demo: "#",
  repo: "https://github.com/FIGU3IR4/fluflu_pet",
  image: logofluflu,
},

];

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto max-w-6xl px-6 ${className}`}>{children}</div>
);

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-10 text-center">
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 text-slate-400 max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);

const NavBar = () => (
  <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-slate-800">
    <Container className="flex items-center justify-between py-3">
      <a href="#home" className="text-slate-100 font-bold tracking-tight">
        {ME.name}
      </a>
      <div className="hidden md:flex items-center gap-6 text-slate-300">
        <a className="hover:text-white" href="#about">
          Sobre
        </a>
        <a className="hover:text-white" href="#projects">
          Projetos
        </a>
        <a className="hover:text-white" href="#skills">
          Skills
        </a>
        <a className="hover:text-white" href="#contact">
          Contato
        </a>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-blue-600 text-white hover:bg-blue-500 transition"
        >
          Ver Projetos <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </Container>
  </nav>
);

const Hero = () => (
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
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 bg-blue-600 text-white hover:bg-blue-500 transition"
          >
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 border border-slate-700 text-slate-200 hover:bg-slate-800"
          >
            Contato
          </a>
        </div>
        <div className="mt-8 flex items-center gap-4 text-slate-300">
          <a
            className="hover:text-white"
            href={ME.links.github}
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            className="hover:text-white"
            href={ME.links.linkedin}
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            className="hover:text-white"
            href={ME.links.email}
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            className="hover:text-white"
            href={ME.links.phone}
            aria-label="Telefone"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center items-center py-12"
      >
        <div className="relative bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-cyan-500/20 border border-slate-700 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl backdrop-blur-md hover:scale-105 transition-transform">
          {/* Avatar */}
          <img
            src={myphoto}
            alt="Foto de Victor Figueira"
            className="w-28 h-28 mx-auto rounded-full border-4 border-blue-500 shadow-md object-cover"
          />

          {/* Nome */}
          <h3 className="mt-4 text-2xl font-bold text-slate-100">
            Victor Figueira
          </h3>

          {/* Stack */}
          <p className="mt-2 text-slate-300 text-sm">
            React • Node.js • Spring Boot
          </p>

          {/* Botão */}
          <a
            href={cv}
            download="VictorFigueiraCV.pdf"
            className="mt-6 inline-block px-5 py-2 rounded-xl font-semibold bg-blue-600 text-white hover:bg-blue-500 transition"
          >
            📄 Baixar CV
          </a>
        </div>
      </motion.div>
    </Container>
  </section>
);

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group rounded-3xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900/80 transition shadow-lg overflow-hidden"
  >
    <div className="aspect-[16/9] bg-slate-800 flex items-center justify-center overflow-hidden">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <span className="text-slate-500 text-sm">Sem imagem</span>
      )}
    </div>

    <div className="p-5">
      <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
      <p className="mt-2 text-slate-400 text-sm">{project.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <a
          href={project.demo}
          className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300"
        >
          <ExternalLink className="w-4 h-4" /> Demo
        </a>
        <span className="text-slate-600">•</span>
        <a
          href={project.repo}
          className="inline-flex items-center gap-1 text-slate-300 hover:text-white"
        >
          <Github className="w-4 h-4" /> Código
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => (
  <section id="projects" className="py-20">
    <Container>
      <SectionTitle
        title="Projetos em Destaque"
        subtitle="Alguns trabalhos que mostram minha experiência prática e focada em entrega."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Container>
  </section>
);

const Skills = () => (
  <section
    id="skills"
    className="py-20 bg-slate-950/40 border-y border-slate-800"
  >
    <Container>
      <SectionTitle
        title="Habilidades"
        subtitle="Stacks e ferramentas que utilizo no dia a dia."
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {SKILLS.map((s) => (
          <div
            key={s.name}
            className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
          >
            <div className="rounded-xl border border-slate-700 bg-slate-800 p-2">
              {s.icon}
            </div>
            <span className="text-slate-200 font-medium">{s.name}</span>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

const About = () => (
  <section id="about" className="py-20">
<Container>
  <SectionTitle
    title="Sobre mim"
    subtitle="Estudante de Desenvolvimento de Sistemas na CESAR School (3° Período), com experiência em front-end (React), back-end (Node.js e Spring Boot) e projetos aplicados em Python e C++."
  />
  <div className="grid md:grid-cols-3 gap-6">
    <div className="md:col-span-2 rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
      <h3 className="text-slate-100 font-semibold">O que me move</h3>
      <p className="mt-2 text-slate-300">
        Sou motivado pelo desejo de construir soluções digitais eficientes e de
        impacto. Busco sempre unir boas práticas de desenvolvimento com foco em
        escalabilidade e qualidade de código. Tenho facilidade em aprender novas
        tecnologias e me adaptar a diferentes contextos de projeto.
      </p>
      <ul className="mt-4 space-y-2 text-slate-300 list-disc list-inside">
        <li>Aplicar metodologias ágeis e boas práticas de versionamento (Git Flow).</li>
        <li>Desenvolver aplicações com foco em performance e usabilidade.</li>
        <li>Aprender continuamente e explorar novas ferramentas e frameworks.</li>
        <li>Colaborar em equipe, comunicando ideias de forma clara e objetiva.</li>
        <li>Contribuir para projetos que tragam valor real para empresas e usuários.</li>
      </ul>
    </div>
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
      <h3 className="text-slate-100 font-semibold">Em números</h3>
      <div className="mt-3 grid grid-cols-2 gap-3 text-center">
        <div className="rounded-2xl border border-slate-800 p-4">
          <div className="text-2xl font-bold text-white">+8</div>
          <div className="text-slate-400 text-sm">Repositórios no GitHub</div>
        </div>
        <div className="rounded-2xl border border-slate-800 p-4">
          <div className="text-2xl font-bold text-white">3</div>
          <div className="text-slate-400 text-sm">Stacks principais</div>
        </div>
        <div className="rounded-2xl border border-slate-800 p-4">
          <div className="text-2xl font-bold text-white">3</div>
          <div className="text-slate-400 text-sm">Projetos em destaque</div>
        </div>
        <div className="rounded-2xl border border-slate-800 p-4">
          <div className="text-2xl font-bold text-white">∞</div>
          <div className="text-slate-400 text-sm">Vontade de evoluir</div>
        </div>
      </div>
    </div>
  </div>
</Container>

  </section>
);

const Contact = () => (
  <section id="contact" className="py-20">
    <Container>
      <SectionTitle
        title="Contato"
        subtitle="Fico feliz em conversar sobre projetos, oportunidades e ideias."
      />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
          <h4 className="text-slate-100 font-semibold mb-3">Vamos conversar</h4>
          <div className="space-y-3 text-slate-300">
            <a
              className="flex items-center gap-2 hover:text-white"
              href={ME.links.github}
            >
              <Github className="w-5 h-5" /> GitHub
            </a>
            <a
              className="flex items-center gap-2 hover:text-white"
              href={ME.links.linkedin}
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a
              className="flex items-center gap-2 hover:text-white"
              href={ME.links.email}
            >
              <Mail className="w-5 h-5" /> Email
            </a>
            <a
              className="flex items-center gap-2 hover:text-white"
              href={ME.links.phone}
            >
              <Phone className="w-5 h-5" /> Telefone
            </a>
          </div>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6"
        >
          <div className="grid gap-4">
            <div>
              <label className="text-slate-300 text-sm">Nome</label>
              <input
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="text-slate-300 text-sm">Email</label>
              <input
                type="email"
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="voce@exemplo.com"
              />
            </div>
            <div>
              <label className="text-slate-300 text-sm">Mensagem</label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Escreva aqui..."
              />
            </div>
            <button
              type="submit"
              className="rounded-2xl px-5 py-2.5 bg-blue-600 text-white hover:bg-blue-500 transition"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </Container>
  </section>
);

const Footer = () => (
  <footer className="py-10 border-t border-slate-800">
    <Container>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
        <p>
          © {new Date().getFullYear()} {ME.name}. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-4">
          <a className="hover:text-white" href="#home">
            Topo
          </a>
          <a className="hover:text-white" href="#projects">
            Projetos
          </a>
          <a className="hover:text-white" href="#contact">
            Contato
          </a>
        </div>
      </div>
    </Container>
  </footer>
);


export default function PortfolioVictor() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600/30 selection:text-white">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
