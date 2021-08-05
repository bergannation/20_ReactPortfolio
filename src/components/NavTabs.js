import React from "react";

import background from "../images/background8.jpg";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header
      class="header-background"
      style={{ backgroundImage: `url(${background})` }}
    >
      <section id="navContainer">
        <img src="assets/images/tb.jfif" alt="travisbrown" />
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
                href="#contact"
                id="testbutton4"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Home" ? "nav-link active" : "nav-link"
                }
                alt="Contact Me"
              ></a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default NavTabs;
