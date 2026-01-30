import React from "react";
import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { ProjectCard } from "../components/ProjectCard";
import { PROJECTS } from "../data/portfolio";

export const Projects = () => {
  // Filtra os projetos baseado na categoria
  const frontendProjects = PROJECTS.filter((p) => p.category === "frontend");
  const backendProjects = PROJECTS.filter((p) => p.category === "backend");

  return (
    <section id="projects" className="py-20">
      <Container>
        <SectionTitle
          title="Meus Projetos"
          subtitle="Uma seleção de trabalhos focados em experiência do usuário e lógica de servidor."
        />

        {/* --- GRUPO 1: FRONT-END --- */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-100 mb-6 pl-4 border-l-4 border-blue-600">
            Front-end & Full Stack
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frontendProjects.length > 0 ? (
              frontendProjects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))
            ) : (
              <p className="text-slate-500">Nenhum projeto de front-end ainda.</p>
            )}
          </div>
        </div>

        {/* --- GRUPO 2: BACK-END --- */}
        <div>
          <h3 className="text-2xl font-bold text-slate-100 mb-6 pl-4 border-l-4 border-purple-600">
            Back-end & APIs
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {backendProjects.length > 0 ? (
              backendProjects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))
            ) : (
              <p className="text-slate-500">Nenhum projeto de back-end ainda.</p>
            )}
          </div>
        </div>

      </Container>
    </section>
  );
};