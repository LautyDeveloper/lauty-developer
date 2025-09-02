import React from "react";
import Header from "./components/header/header";
import Information from "./components/information/information";
import "./hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <Header />
      <div className="hero-content">
        <Information />
      </div>
    </div>
  );
}
