import React from "react";
import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { SKILLS } from "../data/portfolio";

export const Skills = () => (
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
            className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 hover:border-blue-500/30 transition duration-300"
          >
            <div className="rounded-xl border border-slate-700 bg-slate-800 p-2 text-blue-400">
              {s.icon}
            </div>
            <span className="text-slate-200 font-medium">{s.name}</span>
          </div>
        ))}
      </div>
    </Container>
  </section>
);