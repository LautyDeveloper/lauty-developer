import React from "react";
import "./my-history.css";
import SectionsTitle from "../../components/sections-title/sections-title";

export default function MyHistory() {
  return (
    <div id="my-history">
      <SectionsTitle title="Mi Historia" />
      <div className="my-history-container">
        <p>
          My journey as a front-end developer started back in 2010, working as a
          freelancer for clients all over the world for several years.
        </p>
        <p>
          After being on my own for a while, I decided to enter the corporate
          world, and I started working as a software developer at Webflow, the
          same platform I was using with my freelance clients.
        </p>
        <p>
          After some exciting months of work at Webflow, I decided to transition
          to Stripe, where I returned what I love: front-end development.
        </p>
        <p>
          My success quickly compounded I started receiving job offers from the
          biggest names in the industry.
        </p>
        <p>
          All these opportunities led me to travel the world. Eventually,
          however, I decided to settle down for a more calm and simple routine,
          and I'm now working at Apple. And you know what? I love what I do! 💜
        </p>
      </div>
    </div>
  );
}
