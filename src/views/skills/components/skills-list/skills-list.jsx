import React from "react";
import "./skills-list.css";

export default function SkillsList({ title, skills }) {
  return (
    <div className="skills-list">
      <h3>{title}</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
