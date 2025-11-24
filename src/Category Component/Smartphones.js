import React, { useState } from "react";
import "../Css Style/Smartphone.css";
import MobileData from "../Data/MobileData";

function Smartphone({ addToCart }) {
  const [count, setCount] = useState(MobileData);

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

  const mobi = count.map((val) => {
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
        <div className="grid">
          <div className="cat-det">
            <div className="mob-cat1">
              <ul>
                <li>ALL MOBILES</li>
                <li>iPHONE</li>
                <li>ONEPLUS</li>
                <li>OPPO</li>
                <li>VIVO</li>
                <li>SAMSUNG</li>
              </ul>
            </div>
            <div className="df">{mobi}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Smartphone;
