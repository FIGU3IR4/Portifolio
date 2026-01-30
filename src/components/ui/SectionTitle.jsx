import React from "react";

export const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-10 text-center">
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 text-slate-400 max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);