import React, { useState } from "react";
import "../Css Style/Fashion.css";
import banner1 from "../img/All category/Fashion/banner4.png";
import banner2 from "../img/All category/Fashion/banner5.png";
import banner3 from "../img/All category/Fashion/banner6.png";
import h1 from "../img/All category/Fashion/51AiUV++wIL._UX679_.jpg";
import s1 from "../img/All category/Fashion/s1.jpg";
import s2 from "../img/All category/Fashion/s2.jpg";
import p1 from "../img/All category/Fashion/p1.jpg";
import p2 from "../img/All category/Fashion/p2.jpg";
import k1 from "../img/All category/Fashion/k1.jpg";
import k2 from "../img/All category/Fashion/k2.jpg";
import k3 from "../img/All category/Fashion/k3.jpg";
import k4 from "../img/All category/Fashion/k4.jpg";
import w1 from "../img/All category/Fashion/w1.jpg";
import w2 from "../img/All category/Fashion/w2.jpg";
import w3 from "../img/All category/Fashion/w3.jpg";
import w4 from "../img/All category/Fashion/w4.jpg";

function Fashion({ addToCart, cart }) {
  const [count, setCount] = useState([
    {
      img: h1,
      name: "The Modern",
      cont: "Soul unisex- adult Polyester Blend Hooded Neck Sweatshirt",
      price: 699,
      MRP: 2499,
      offer: "72%",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: s1,
      name: "Allen Solly",
      cont: " Men's Regular Fit Formal Shirt",
      price: 800,
      MRP: 1799,
      offer: "-56% ",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: s2,
      name: "LookMark",
      cont: "Men's Cotton Blend Stitched Solid Full Sleeve Shirt",
      price: 289,
      MRP: 1999,
      offer: "-86%",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: p1,
      name: "Van Heusen",
      cont: "Men's Slim Fit Pants",
      price: 1019,
      MRP: 2299,
      offer: "-56%",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: p2,
      name: "Peter England",
      cont: "Peter England Men's Slim Pants",
      price: 799,
      MRP: 1699,
      offer: "-53%",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: k1,
      name: "Hopscotch",
      cont: "Girls Cotton and Polyester Cold Shoulder Sleeves Sequin Party Dress in Red Color",
      price: 1270,
      MRP: 2539,
      offer: "-50%",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: k2,
      name: "TAGAS",
      cont: "Baby-Girls Mario Rib A-Line Casual Dress",
      price: 349,
      MRP: 1499,
      offer: "-77%",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: k3,
      name: "T2F",
      cont: "Boy's Regular Fit T-Shirt",
      price: 419,
      MRP: 1200,
      offer: "-65%",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: k4,
      name: "dimension",
      cont: "Kids Boy's Printed Cotton Blend,Hosiery Short Sleeve Regular Wear Shirt & Shorts",
      price: 450,
      MRP: 950,
      offer: "-55%",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: w1,
      name: "ANNI DESIGNER",
      cont: "Women's Cotton Blend Printed Straight Kurta with Pant",
      price: 429,
      MRP: 2599,
      offer: "-83%",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: w2,
      name: "Arayna",
      cont: "Women's Cotton Printed Anarkali Kurti with Palazzo Pants Set, Floral",
      price: 799,
      MRP: 1999,
      offer: "-60%",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: w3,
      name: "rangita",
      cont: "Women Georgette Saree With Blouse Piece",
      price: 495,
      MRP: 1099,
      offer: "-55%",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: w4,
      name: "Fabricorn",
      cont: "Combo of Plain Color Stylish Up and Down Cotton Tshirt for Women",
      price: 231,
      MRP: 1199,
      offer: "-81%",
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


  const fash = count.map((val) => {
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
              <li>MENS</li>
              <li>WOMENS</li>
              <li>KIDS</li>
            </ul>
            <div className="banner">
              <img src={banner1} alt="" width="200px" />
              <img src={banner2} alt="" width="200px" />
              <img src={banner3} alt="" width="200px" />
            </div>
          </div>
          <div className="df">{fash}</div>
        </div>
      </div>
    </>
  );
}
export default Fashion;
