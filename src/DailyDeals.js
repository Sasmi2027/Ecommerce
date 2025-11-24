import React from "react";
import "./Css Style/About.css";
import Category from "./Data/Category";

export default function DailyDeals() {
  const proCat = Category.map((val) => {
    return (
      <div className="dd-cat">
        <img src={val.img} alt={val.cat} width="230px" height="auto" />
        <h4>{val.cat}</h4>
        <h3>{val.price}</h3>
        <span className="rate">
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </span>
      </div>
    );
  });

  return (
    <>
      <div className="dd-cont">
        <div className="dd-grid">{proCat}</div>
      </div>
    </>
  );
}
