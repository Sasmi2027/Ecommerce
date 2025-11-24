import React, { useState } from "react";
import "../Css Style/Fashion.css";
import h1 from "../img/All category/Health & Beauty/41LYCGZJKfL._SX300_SY300_QL70_FMwebp_.webp";
import sk1 from "../img/All category/Health & Beauty/sk1.jpg"
import sk2 from "../img/All category/Health & Beauty/sk2.webp"
import bs1 from "../img/All category/Health & Beauty/bs1.jpg"
import bs2 from "../img/All category/Health & Beauty/bs2.webp"
import hc1 from "../img/All category/Health & Beauty/hc1.jpg"
import hc2 from "../img/All category/Health & Beauty/hc2.jpg"

function HealthBeauty({ addToCart }) {
  const [count, setCount] = useState([{
    img: h1,
    name: "The Lotus Herbals",
    cont: "WhiteGlow Skin Whitening And Brightening Gel, Face Cream with SPF-25, for all skin types, 40g",
    price: 191,
    MRP: 290,
    offer: "(34%)",
  },{
    img: sk1,
    name: "Garnier Men",
    cont: "Face Wash, Brightening & Anti-Pollution, TurboBright Double Action, 150 g",
    price: 247,
    MRP: 325,
    offer: "24%",
    orderedQ: 1,
    qty: 1,
  },{
    img: sk2,
    name: "Garnier Skin Naturals Bright",
    cont: "Complete Vitamin C Face Wash - Vitamin C Face Wash For Brighter and Glowing Skin - Suitable For all Skin Types, 150g",
    price: 188,
    MRP: 299,
    offer: "37%",
    orderedQ: 1,
    qty: 1,
  },{
    img: bs1,
    name: "Pears Pure & Gentle Soap",
    cont: "With Glycerin for Soft, Glowing Skin & Body, Paraben-Free Body Soaps For Bath Ideal for Men & Women",
    price: 460,
    MRP: 550,
    offer: "16%",
    orderedQ: 1,
    qty: 1,
  },{
    img: bs2,
    name: "Dettol Original",
    cont: "Germ Protection Bathing Soap Bar (300gm) | Kills 99.99% germs, 75gm - Pack of 4",
    price: 127,
    MRP: 140,
    offer: "9%",
    orderedQ: 1,
    qty: 1,
  },{
    img: hc1,
    name: "Dr. Reddy's Celevida",
    cont: "Dr. Reddy's Celevida for Diabetes Management - Nutrition Health Drink, Chocolate Flavour, 400g | No Added Sugar",
    price: 591,
    MRP: 790,
    offer: "25%",
    orderedQ: 1,
    qty: 1,
  },{
    img: hc2,
    name: "Himalayan Organics",
    cont: "Plant Based Eye Care Supplement to Improve Vision, Blue Light & Digital Guard (Lutemax 2020, Orange Extract, Carrot Extract) - Pack of 60 Tablets",
    price: 549,
    MRP: 1240,
    offer: "45%",
    orderedQ: 1,
    qty: 1,
  },]);
  const addCartValue = (val) => {
    setCount((prevCount) =>
      prevCount.map((value) => {
        if (val.name === value.name) {
          return {
            ...val,
            orderedQ: value.orderedQ + 1,
          };
        } else {
          return value;
        }
      })
    );
  };

  const removeCartValue = (val) => {
    setCount((prevCount) =>
      prevCount.map((value) => {
        if (val.name === value.name && val.orderedQ > 0) {
          return {
            ...val,
            orderedQ: value.orderedQ - 1,
          };
        } else {
          return value;
        }
      })
    );
  };

  const HB = count.map((val) => {
    return (
      <div className="fash-container">
        <p className="fs-sp2">{val.offer}</p>
        <div className="fash-grid">
          <img className="fs-img" src={val.img} alt="image" />
          <h2 className="fs-h2">{val.name}</h2>
          <p className="fs-p">{val.cont}</p>
          <h3 className="fs-h3">
            Rs.{val.price * val.qty}
            <span className="fs-sp1">M.R.P {val.MRP}</span>
          </h3>
          <button className="inc-btn" onClick={() => addCartValue(val)}>
            +
          </button>
          <span>{val.qty * val.orderedQ}</span>
          <button className="inc-btn" onClick={() => removeCartValue(val)}>
            -
          </button>
          <button className="fs-btn" onClick={() => addToCart(val)}>
            ADD cart
          </button>
          <p className="buy2">Buy 2 items, get 5% off</p>
          <h6 className="fs-h6">Free Delivery</h6>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="container">
        <div className="grid-2">
          <div className="mob-cat1">
            <ul>
              <li>ALL</li>
              <li>Skin Care</li>
              <li>Both & Shower</li>
              <li>Health Care</li>
            </ul>
          </div>
          <div className="df">{HB}</div>
        </div>
      </div>
    </>
  );
}
export default HealthBeauty;
