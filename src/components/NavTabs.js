import React from "react";
import "../styles/css/reset.css";
import "../styles/css/style.css";
import "../styles/css/style2.css";
import "../styles/css/style3.css";

import background from "../images/background8.jpg";
import tb from "../images/tb.jfif";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header
      className="header-background"
      style={{ backgroundImage: `url(${background})` }}
    >
      <section id="navContainer">
        <img src={tb} alt="travisbrown" />
        <p id="shadow">
          <span id="glow">TRAVIS BROWN'S </span>
          <span id="blink">PORTFOLIO</span>
        </p>

        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a
                href="#home"
                id="testbutton"
                onClick={() => handlePageChange("Home")}
                className={
                  currentPage === "Home" ? "nav-link active" : "nav-link"
                }
                alt="Home"
              ></a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                id="testbutton2"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "Home" ? "nav-link active" : "nav-link"
                }
                alt="About Me"
              ></a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                id="testbutton3"
                onClick={() => handlePageChange("Projects")}
                className={
                  currentPage === "Home" ? "nav-link active" : "nav-link"
                }
                alt="Projects"
              ></a>
            </li>
            <li className="nav-item">
              <a
                href="#form"
                id="testbutton4"
                onClick={() => handlePageChange("Form")}
                className={
                  currentPage === "Home" ? "nav-link active" : "nav-link"
                }
                alt="Form"
              ></a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default NavTabs;
