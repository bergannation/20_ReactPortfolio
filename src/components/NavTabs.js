import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header id="header-background">
      <img src="assets/images/tb.jfif" alt="travisbrown" />
      <section id="container">
        <p id="shadow">
          <span id="glow">TRAVIS BROWN'S </span>
          <span id="blink">PORTFOLIO</span>
        </p>
      </section>
      <nav>
        <ul className="nav nav-tabs">
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
    </header>
  );
}

export default NavTabs;
