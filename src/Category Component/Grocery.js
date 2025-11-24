import React, { useState } from "react";
import "../Css Style/Fashion.css";
import fv1 from "../img/All category/Grocery/fv1.jpg";
import fv2 from "../img/All category/Grocery/fv2.jpg";
import ns1 from "../img/All category/Grocery/ns1.jpg";
import ns2 from "../img/All category/Grocery/ns2.jpg";
import coo1 from "../img/All category/Grocery/coo1.jpg";
import coo2 from "../img/All category/Grocery/coo2.jpg";

function Grocery({ addToCart }) {
  const [count, setCount] = useState([
    {
      img: fv1,
      name: "Desi Treat",
      cont: "Desi Treat Fresh Baby Corn, 800g",
      price: 235,
      MRP: 280,
      offer: "16%",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: fv2,
      name: "Chef Urbano Parsley",
      cont: "100% Natural | Premium Herbs and Spices | Adding Flavor to Soups, Salads, Pizza and Pasta | Flakes/Leaves | Glass Bottle",
      price: 150,
      MRP: 270,
      offer: "30%",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: ns1,
      name: "Happilo 100% Natural",
      cont: "Premium California Almonds 1kg Value Pack Pouch | Premium Badam Giri | High in Fiber & Boost Immunity | Real Nuts | Whole Natural Badam",
      price: 789,
      MRP: 1250,
      offer: "42%",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: ns2,
      name: "Happilo Dried",
      cont: "Premium Turkish Apricots 200 g | Vegan, Sun Dried Apricots | Gluten Free & Sodium Free | Add in your Healthy Recipes",
      price: 211,
      MRP: 365,
      offer: "42%",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: coo1,
      name: "Badam Pista Cookies",
      cont: "500g (Each and Every Packet Packed After Your Order Confirmation)",
      price: 499,
      MRP: 799,
      offer: "38%",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: coo2,
      name: "Chocolate Chip",
      cont: "Only Gluten Free Chocolate Chip Cookies 150 gm, Pack of 1",
      price: 239,
      MRP: 329,
      offer: "27%",
      orderedQ: 1,
      qty: 1,
    },
  ]);

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

  const Gro = count.map((val) => {
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
              <li>Fresh Vegetables</li>
              <li>Nut And Seed</li>
              <li>Fruit</li>
              <li>Cookie</li>
            </ul>
          </div>
          <div className="df">{Gro}</div>
        </div>
      </div>
    </>
  );
}
export default Grocery;
