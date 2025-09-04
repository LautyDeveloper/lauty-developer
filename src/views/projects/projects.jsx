import React from "react";
import ProjectsTitle from "../../components/sections-title/sections-title";
import projects from "./data/projects.js";
import ProjectCard from "./components/project-card/project-card.jsx";
import "./projects.css";

export default function Projects() {
  return (
    <div id="projects">
      <ProjectsTitle title="Projects" />
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            isLarge={index === 1 || index === 2}
          />
        ))}
      </div>
    </div>
  );
}
