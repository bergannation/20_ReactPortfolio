import React from "react";

import ParallaxCard from "react-parallax-card";
import "../../styles/css/style.css";

export default function Projects() {
  return (
    <section id="app" className="background">
      <h2 id="work">My Portfolio Work</h2>
      <ParallaxCard
        enableRotate
        enableTransform
        style={{ margin: "0 auto", width: 240, height: 240 }}
      >
        <img
          src="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />

        <div />
        <div />
        <div />

        <p style={{ fontSize: "3rem", fontWeight: "bold", padding: "3rem" }}>
          Javascript!
        </p>
      </ParallaxCard>
      <ParallaxCard
        enableRotate
        enableTransform
        style={{ margin: "0 auto", width: 240, height: 240 }}
      >
        <img
          src="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />

        <div />
        <div />
        <div />

        <p style={{ fontSize: "3rem", fontWeight: "bold", padding: "3rem" }}>
          Javascript!
        </p>
      </ParallaxCard>
    </section>
  );
}
