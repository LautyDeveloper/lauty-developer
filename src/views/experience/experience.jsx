import React from "react";
import "./experience.css";
import SectionsTitle from "../../components/sections-title/sections-title.jsx";
export default function Experience() {
  return (
    <div id="experience">
      <SectionsTitle title="Experience" />
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
              Developed and shipped highly interactive web applications for
              Apple Music using Ember.js
            </p>
            <p>
              Built and shipped the Apple Music Extension within Facebook
              Messenger leveraging third-party and internal APIs
            </p>
            <p>
              Contributed extensively to MusicKit.js, a JavaScript framework
              that allows developers to add an Apple Music player to their web
              apps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
