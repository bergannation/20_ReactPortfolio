import React from "react";

import twitch from "../../images/twitch.png";
import "../../styles/css/style2.css";

export default function Contact() {
  return (
    <section className="body">
      <h2 id="contactheader">Contact Me</h2>
      <div className="all">
        <a
          href="https://www.twitch.tv/bergannation/about"
          target="_blank"
          className="lefter"
        >
          <div className="text">Twitch</div>
        </a>
        <a
          href="https://twitter.com/Coach_TBrown20"
          target="_blank"
          className="left"
        >
          <div className="text">Twitter</div>
        </a>
        <a
          href="https://github.com/bergannation"
          target="_blank"
          className="center"
        >
          <div className="explainer">
            <span>Hover Me</span>
          </div>
          <div className="text">GitHub</div>
        </a>
        <a
          href="https://www.linkedin.com/in/travis-brown-97478a154/"
          target="_blank"
          className="right"
        >
          <div className="text">LinkedIn</div>
        </a>
        <a
          href="assets/images/Travis Brown Resume Work.docx (1).pdf"
          target="_blank"
          className="righter"
        >
          <div className="text">Resume</div>
        </a>
      </div>
      <h3>
        © Travis Brown's Portfolio 2021 <br />
        Contact: See Resume
      </h3>
    </section>
  );
}
