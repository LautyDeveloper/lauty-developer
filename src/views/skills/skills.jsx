import React from "react";
import "./skills.css";
import SectionsTitle from "../../components/sections-title/sections-title";
import skills from "./data/skills";
import SkillsList from "./components/skills-list/skills-list";

export default function Skills() {
  return (
    <div id="skills">
      <SectionsTitle title="Habilidades" />
      <div className="skills-container">
        {skills.map((group, index) => (
          <SkillsList key={index} title={group.title} skills={group.skills} />
        ))}
      </div>
    </div>
  );
}
