import React from "react";
import "./sections-title.css";

export default function SectionsTitle({ title }) {
  return (
    <div className="sections-title">
      <h2>
        {title}
        <b className="accent-color">.</b>
      </h2>
    </div>
  );
}
