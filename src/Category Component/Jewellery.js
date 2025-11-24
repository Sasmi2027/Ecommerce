import React from "react";
import "../Css Style/Fashion.css";
import J1 from "../img/All category/Jewellery-Watch/71koEgPDDdL._UY575_.jpg";

const objJW = [
  {
    img: J1,
    Cat: "all jewellery",
    name: "Sukkhi",
    cont: " Fashion Jewellery for Women",
    price: 299,
    MRP: 999,
    offer: "(45%)",
  },
];
function Jewellery() {
  const JW = objJW.map((val) => {
    return (
      <div className="fash-container">
        <div className="fash-grid">
          <img className="fs-img" src={val.img} alt="image" />
          <h2 className="fs-h2">{val.name}</h2>
          <p className="fs-p">{val.cont}</p>
          <h3 className="fs-h3">Rs.{val.price}</h3>
          <span className="fs-sp1">M.R.P {val.MRP}</span>
          <p className="buy2">NOT AVAILABLE..</p>
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
              <li>Jewellery</li>
              <li>Mens Watch</li>
              <li>Womens watch</li>
              <li>Smartwatch</li>
            </ul>
          </div>
          <div className="df">{JW}</div>
        </div>
      </div>
    </>
  );
}
export default Jewellery;
