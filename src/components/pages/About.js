import React from "react";

import ever24 from "../../images/ever24.png";
import ricochet from "../../images/ricochet.png";
import takeoff from "../../images/takeoff.png";

export default function About() {
  return (
    <section className="background">
      <div className="about-me">
        <div className="containerB">
          <div className="info">
            <h2 id="aboutme">About Me</h2>
            <ul>
              <li>
                CTO for Maxus 33 LLC, an emerging technology company in Omaha,
                NE. We have developed and implemented platforms for government
                and businesses, with some of our technologies shown below.
              </li>
              <li>
                University of Kansas Full-Stack Coding Program graduate in
                August/2021.
              </li>
              <li>
                Business Administration and Economics background from Hastings
                College in Hastings, NE. I attended Hastings College on a
                full-ride football scholarship.
              </li>
              <li>
                I have eight years of experience in Wholesale Distribution, with
                six of those years as a sales manager, & four years in
                technology.
              </li>
              <li>
                My football background has led me down the path of coaching. I
                have coached at three different high schools in the Omaha area
                as well as Abilene Christian University, a D-I FCS program, for
                three years.
              </li>
              <li>
                Web development has always been a passion of mine and I want to
                learn front-end & back-end so that I am better equipped to
                operate with my team.
              </li>
            </ul>
            <br />
            <hr />
            <h2>Experience</h2>
            <div className="hobbies">
              <div className="content">
                <div className="icon">
                  <i className="fa fa-paint-brush fa-2x"></i>
                </div>
                <div className="texts">
                  <h3>
                    Web Design
                    <img src={ever24} className="logos" />
                    <img src={ricochet} className="logos" />
                    <img src={takeoff} className="logos" />
                  </h3>
                  <p>
                    Experience: IT Director/Email Director. Head of development
                    team for Maxus 33 LLC. Oversight for our developed apps such
                    as Ricochet/Ever 24/Takeoff. Developed two websites for
                    Express Distribution to help drive online sales via the
                    online virtual products store.
                    <br />
                    Wordpress & SEO
                  </p>
                </div>
              </div>

              <div className="content">
                <div className="icon">
                  <i className="fa fa-users fa-2x"></i>
                </div>

                <div className="texts">
                  <h3>Marketing</h3>
                  <p>
                    Experience: Marketing Director for Express Distribution (DBA
                    Colombo Candy & Tobacco). Monthly promotional flyers, sales
                    representatives top sellers, Store Set Planograms & Product
                    Newsletter.
                  </p>
                </div>
              </div>

              <div className="content">
                <div className="icon">
                  <i className="fa fa-magic fa-2x"></i>
                </div>

                <div className="texts">
                  <h3>Graphic Design</h3>
                  <p>
                    Experience: Many Microsoft products, including Excel,
                    Powerpoint, Word, Teams, OneNote, & Publisher. <br />
                    Adobe Acrobat DC, Photoshop, Illustrator, After Effects,
                    Premiere Pro, Lightroom
                  </p>
                </div>
              </div>

              <div className="content">
                <div className="icon">
                  <i className="fa fa-keyboard-o fa-2x"></i>
                </div>

                <div className="texts">
                  <h3>Technical Skills</h3>
                  <p>
                    Experience:*HTML *CSS *Javascript *jQuery *Responsive Design
                    *Bootstrap *Handlebars *Firebase *Cookies/Local Storage
                    *API's (Server & 3rd Party) *React.js *Heroku *Git *MySQL
                    *MongoDB *Node.js *User Authentication *SEO *Semantic HTML
                    *Express *Security/Session Storage *MERN Stack
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
