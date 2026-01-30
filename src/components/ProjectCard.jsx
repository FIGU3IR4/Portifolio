import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group rounded-3xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900/80 transition shadow-lg overflow-hidden flex flex-col"
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

    <div className="p-5 flex-1 flex flex-col">
      <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
      <p className="mt-2 text-slate-400 text-sm flex-1">{project.description}</p>

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

      <div className="mt-4 flex items-center gap-3 pt-4 border-t border-slate-800/50">
        
        {/* CORREÇÃO AQUI: Removemos a regra !== "#" */}
        {project.demo && (
             <a 
               href={project.demo} 
               target="_blank" 
               rel="noreferrer" 
               className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300"
             >
                <ExternalLink className="w-4 h-4" /> Demo
             </a>
        )}

        {/* A bolinha separadora também precisa da mesma lógica */}
        {project.demo && <span className="text-slate-600">•</span>}
        
        <a 
          href={project.repo} 
          target="_blank" 
          rel="noreferrer" 
          className="inline-flex items-center gap-1 text-slate-300 hover:text-white"
        >
          <Github className="w-4 h-4" /> Código
        </a>
      </div>
    </div>
  </motion.div>
);