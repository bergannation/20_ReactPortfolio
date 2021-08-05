import React from "react";

export default function Projects() {
  return (
    <section id="app">
      <h2 id="work">My Portfolio Work</h2>
      <section class="container">
        <a
          href="https://ever24.herokuapp.com/"
          target="_blank"
          class="image1"
          alt="image1"
        >
          <card data-image="https://ever24.s3.us-east-2.amazonaws.com/1625770784217-familysky.jpg">
            <h1 slot="header">Ever24 Project 2</h1>
            <button
              onclick="window.open('https://github.com/bergannation/KU_BootCamp_Project2', '_blank')"
              slot="content"
              class="custom-btn btn-11 btn"
            >
              Repository
            </button>
          </card>
        </a>
        <a
          href="https://bergannation.github.io/KU-CBC-Project-1-Delivery-Done-Right/"
          target="_blank"
          class="image2"
          alt="image2"
        >
          <card data-image="">
            <h1 slot="header">Restaurants 101</h1>
            <button
              onclick="window.open('https://github.com/bergannation/KU-CBC-Project-1-Delivery-Done-Right', '_blank')"
              slot="content"
              class="custom-btn btn-11 btn1"
            >
              Repository
            </button>
          </card>
        </a>
        <a
          href="https://bergannation.github.io/06_WeatherDashboard/"
          target="_blank"
          class="image3"
          alt="image3"
        >
          <card data-image="">
            <h1 slot="header">Weather Dashboard</h1>
            <button
              onclick="window.open('https://github.com/bergannation/06_WeatherDashboard', '_blank')"
              slot="content"
              class="custom-btn btn-11 btn"
            >
              Repository
            </button>
          </card>
        </a>
        <a
          href="https://bergannation.github.io/05_workDayScheduler/"
          target="_blank"
          class="image4"
          alt="image4"
        >
          <card data-image="">
            <h1 slot="header">Work Day Scheduler</h1>
            <button
              onclick="window.open('https://github.com/bergannation/05_workDayScheduler', '_blank')"
              slot="content"
              class="custom-btn btn-11 btn"
            >
              Repository
            </button>
          </card>
        </a>
        <a
          href="https://bergannation.github.io/03_passwordhmwrk/"
          target="_blank"
          class="image5"
          alt="image5"
        >
          <card data-image="">
            <h1 slot="header">Password Generator</h1>
            <button
              onclick="window.open('https://github.com/bergannation/03_passwordhmwrk', '_blank')"
              slot="content"
              class="custom-btn btn-11 btn"
            >
              Repository
            </button>
          </card>
        </a>
        <a
          href="https://bergan-notetaker2.herokuapp.com/"
          target="_blank"
          class="image6"
          alt="image6"
        >
          <card data-image="">
            <h1 slot="header">Note Taker App</h1>
            <button
              onclick="window.open('https://github.com/bergannation/11_NoteTaker', '_blank')"
              slot="content"
              class="custom-btn btn-11 btn"
            >
              Repository
            </button>
          </card>
        </a>
        <a href="" target="_blank" class="image7" alt="image7">
          <card data-image="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">
            <h1 slot="header">Project 7</h1>
            <p slot="content">Description Coming Soon</p>
          </card>
        </a>
      </section>
    </section>
  );
}
