import React from "react";
import "./experience.css";
import SectionsTitle from "../../components/sections-title/sections-title.jsx";
export default function Experience() {
  return (
    <div id="experience">
      <SectionsTitle title="Experiencia" />
      <div className="experience-container">
        <div className="experience-title">
          <span>Tecnica 5</span>
        </div>
        <div className="experience-information">
          <div className="information-header">
            <span>Practicas Profesionalizantes</span>
            <span className="accent-color">@Tecnica 5</span>
          </div>
          <div className="information-body">
            <p>
              Desarrollé aplicaciones web completas utilizando HTML, CSS,
              JavaScript, React, Node.js y bases de datos como MySQL y MongoDB.
            </p>
            <p>
              Participé en el diseño, bocetado y maquetado de interfaces
              aplicando principios de usabilidad y experiencia de usuario.
            </p>
            <p>
              Fortalecí habilidades blandas como el trabajo en equipo, la
              organización de tareas, el liderazgo en proyectos colaborativos y
              la oratoria al presentar proyectos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
