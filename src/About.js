import React from "react";
import "./Css Style/About.css";
import ab1 from "./img/ab1.jpg";
import ab2 from "./img/ab2.jpg";

export default function About() {
  return (
    <>
      <div className="ab-cont">
        <div className="ab-grid">
          <h1>About US</h1>
          <h2>WELCOME TO L1MARKET</h2>
          <div className="about-det">
            <div className="about-grid">
              <img src={ab1} alt="image" />
              <h3>WHAT WE REALLY DO?</h3>
              <p>
                Get all the best deals, sales and offers from the best online
                shopping store in UAE. Sign up now !
              </p>
            </div>
            <div className="about-grid">
              <img src={ab2} alt="image" />
              <h3>OUR VERSION</h3>
              <p>
                Get all the best deals, sales and offers from the best online
                shopping store in UAE. Sign up now !
              </p>
            </div>
            <div className="about-grid">
              <h3>HISTORY OF BEGINNING</h3>
              <p>
                All the best deals, sales and offers from the best online
                shopping store in UAE. Sign up now !
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
