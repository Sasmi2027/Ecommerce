import React from "react";
import data from "./Data";
import "./Slider.css";

export default function Slider(props) {
  const slide = data.map((val, index) => {
    return (
      <div className={index === props.slideIndex ? "myslide fade" : "mynone"}>
        <img src={val.img} alt="image" />
        <h2 className="slider-h2">{val.name}</h2>
        <p className="slider-p">{val.content}</p>
        <a className="slider-a" href="">Shop now</a>
      </div>
    );
  });
  return slide;
}
