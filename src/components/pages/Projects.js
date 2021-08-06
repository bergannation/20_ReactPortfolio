import React from "react";

import ParallaxCard from "react-parallax-card";
import "../../styles/css/style.css";
import "../../styles/css/style3.css";
import ever24 from "../../images/familysky.jpg";
import delivery from "../../images/delivery.png";
import weather from "../../images/weather.png";
import scheduler from "../../images/scheduler.png";
import note from "../../images/note.png";
import password from "../../images/password.png";

export default function Projects() {
  return (
    <div className="background">
      <h2 id="h2">My Portfolio Work</h2>
      <section id="app" className="cards">
        <a
          href="https://ever24.herokuapp.com/"
          target="_blank"
          className="image1"
          alt="image1"
        >
          <ParallaxCard
            enableRotate
            enableTransform
            style={{ margin: "0 auto", width: 340, height: 340 }}
            className="image1"
          >
            <img src={ever24} style={{ maxWidth: "100%", maxHeight: "100%" }} />
            <div class="card-info" id="card-info">
              <h1>Ever24: Project 2</h1>
              <a
                href="https://github.com/bergannation/KU_BootCamp_Project2"
                target="_blank"
              >
                <button className="custom-btn btn-11 btn">Repository</button>
              </a>
            </div>
          </ParallaxCard>
        </a>

        <a
          href="https://japinell.github.io/KU-CBC-Project-1-Delivery-Done-Right/"
          target="_blank"
          className="image2"
          alt="image2"
        >
          <ParallaxCard
            enableRotate
            enableTransform
            style={{ margin: "0 auto", width: 340, height: 340 }}
            className="image2"
          >
            <img
              class="image2"
              src={delivery}
              style={{ width: 340, height: 250 }}
            />
            <div class="card-info" id="card-info">
              <h1>Delivery Project</h1>
              <a
                href="https://github.com/japinell/KU-CBC-Project-1-Delivery-Done-Right"
                target="_blank"
              >
                <button className="custom-btn btn-11 btn">Repository</button>
              </a>
            </div>
          </ParallaxCard>
        </a>

        <a
          href="https://bergannation.github.io/06_WeatherDashboard/"
          target="_blank"
          className="image3"
          alt="image3"
        >
          <ParallaxCard
            enableRotate
            enableTransform
            style={{ margin: "0 auto", width: 340, height: 340 }}
            className="image3"
          >
            <img
              class="image3"
              src={weather}
              style={{ width: 340, height: 250 }}
            />
            <div class="card-info" id="card-info">
              <h1>Weather App JS</h1>
              <a
                href="https://github.com/bergannation/06_WeatherDashboard"
                target="_blank"
              >
                <button className="custom-btn btn-11 btn">Repository</button>
              </a>
            </div>
          </ParallaxCard>
        </a>

        <a
          href="https://bergannation.github.io/05_workDayScheduler/"
          target="_blank"
          className="image4"
          alt="image4"
        >
          <ParallaxCard
            enableRotate
            enableTransform
            style={{ margin: "0 auto", width: 340, height: 340 }}
            className="image4"
          >
            <img src={scheduler} style={{ width: 340, height: 250 }} />
            <div class="card-info" id="card-info">
              <h1>Day Scheduler</h1>
              <a
                href="https://github.com/bergannation/05_workDayScheduler"
                target="_blank"
              >
                <button className="custom-btn btn-11 btn">Repository</button>
              </a>
            </div>
          </ParallaxCard>
        </a>

        <a
          href="https://bergan-notetaker2.herokuapp.com/"
          target="_blank"
          className="image5"
          alt="image5"
        >
          <ParallaxCard
            enableRotate
            enableTransform
            style={{ margin: "0 auto", width: 340, height: 340 }}
            className="image5"
          >
            <img src={note} style={{ width: 340, height: 250 }} />
            <div class="card-info" id="card-info">
              <h1>Note Taker App</h1>
              <a
                href="https://github.com/bergannation/11_NoteTaker"
                target="_blank"
              >
                <button className="custom-btn btn-11 btn">Repository</button>
              </a>
            </div>
          </ParallaxCard>
        </a>

        <a
          href="https://bergannation.github.io/03_passwordhmwrk/"
          target="_blank"
          className="image6"
          alt="image6"
        >
          <ParallaxCard
            enableRotate
            enableTransform
            style={{ margin: "0 auto", width: 340, height: 340 }}
            className="image6"
          >
            <img src={password} style={{ width: 340, height: 250 }} />
            <div class="card-info" id="card-info">
              <h1>Password App</h1>
              <a
                href="https://github.com/bergannation/03_passwordhmwrk"
                target="_blank"
              >
                <button className="custom-btn btn-11 btn">Repository</button>
              </a>
            </div>
          </ParallaxCard>
        </a>

        <a
          href="https://bergannation.github.io/06_WeatherDashboard/"
          target="_blank"
          className="image7"
          alt="image7"
        >
          <ParallaxCard
            enableRotate
            enableTransform
            style={{ margin: "0 auto", width: 340, height: 340 }}
            className="image7"
          >
            <img
              src="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
              style={{ width: 340, height: 250 }}
            />
            <div class="card-info" id="card-info">
              <h1>Coming Soon!</h1>
              <a
                href="https://github.com/bergannation/KU_BootCamp_Project2"
                target="_blank"
              >
                <button className="custom-btn btn-11 btn">Repository</button>
              </a>
            </div>
          </ParallaxCard>
        </a>
      </section>
    </div>
  );
}
