import React from "react";
import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";

export const About = () => {
  
  const stats = [
    { value: "+8", label: "Repositórios no GitHub" },
    { value: "3", label: "Stacks principais" },
    { value: "3", label: "Projetos em destaque" },
    { value: "∞", label: "Vontade de evoluir" },
  ];

  return (
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
              {stats.map((stat, index) => (
                <div key={index} className="rounded-2xl border border-slate-800 p-4 hover:bg-slate-800/50 transition">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};