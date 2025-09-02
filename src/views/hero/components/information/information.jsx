import React from "react";
import "./information.css";
import ButtonsContainer from "../../../../components/button/buttons";

export default function Information() {
  return (
    <div className="hero-information">
      <p className="information-hello">Hola! Soy Lauty 👋</p>
      <h2>
        <b className="accent-color">Full</b>-Stack Developer
      </h2>
      <p className="information-presentation">
        Soy Desarrollador Web, vivo en Argentina, y quiero ayudarte a volver
        realidad tus ideas.
      </p>
      <ButtonsContainer />
    </div>
  );
}
