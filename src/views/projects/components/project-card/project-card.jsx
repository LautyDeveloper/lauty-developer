import React from "react";
import "./project-card.css";
export default function ProjectCard({ project, isLarge }) {
  return (
    <div className={isLarge ? "project-card large" : "project-card"}>
      <img src={project.image} alt="Imagen del Proyecto" />
      <div className="project-card-text">
        <div className="project-title">
          <h3>{project.title}</h3>
          <a href="">→</a>
        </div>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
