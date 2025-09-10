import React from "react";
import "./project-card.css";
import { CircleArrowOutUpRight } from "lucide-react";

export default function ProjectCard({ project, isLarge }) {
  return (
    <div className={isLarge ? "project-card large" : "project-card"}>
      <div
        className="project-image-container"
        style={{
          backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.5), 
          rgba(0, 0, 0, 0.5)
        ), url(${project.backImage})`,
        }}
      >
        <img src={project.image} alt="Imagen del Proyecto" />
      </div>
      <div className="project-card-text">
        <div className="project-title">
          <h3>{project.title}</h3>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <CircleArrowOutUpRight />
          </a>
        </div>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
