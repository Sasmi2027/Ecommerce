import React from "react";
import "../Css Style/Smartphone.css";
import F1 from "../img/All category/Home and Furnitures/614g7NNxJpL._SX466_.jpg";

const Objhomefur = [
  {
    img: F1,
    cat: "all headset",
    price: 1399,
    name: "Tree House Nesting Triangle End Coffee Tables Nightstand Modern Furniture for Home Office Living Room Nest White Table (White, Black, Engineered Wood)",
    offer: "Not available...",
    MRP: 7999,
    Day: "Deal of the Day",
  },
];
function HomeandFurniture() {
  const HF = Objhomefur.map((val) => {
    return (
      <div className="sp-grid">
        <img src={val.img} alt="image" />
        <div className="cont-sp">
          <h2 className="sp-h2">{val.name}</h2>
          <p className="deal">{val.Day}</p>
          <p className="sp-p">Rs.{val.price}</p>
          <span className="sp-sp"> M.R.P{val.MRP}</span>
          <h2>{val.offer}</h2>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="container">
        <div className="grid">
          <div className="cat-det">
            <div className="mob-cat1">
              <ul>
                <li>ALL</li>
                <li>Home Furnitures</li>
                <li>Indoor Lighting</li>
                <li>Home Aplliances</li>
                <li>Kitchen</li>
                <li>Living Room</li>
              </ul>
            </div>
            <div className="mob-cat">{HF}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeandFurniture;
