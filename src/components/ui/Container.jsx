import React from "react";

export const Container = ({ children, className = "" }) => (
  <div className={`mx-auto max-w-6xl px-6 ${className}`}>{children}</div>
);