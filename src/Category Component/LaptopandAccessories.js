import React, { useState } from "react";
import "../Css Style/Laptop.css";
import L1 from "../img/All category/Laptop & Accessories/71HD+TwPD8L._SX679_.jpg";
import la1 from "../img/All category/Laptop & Accessories/la1.jpg";
import la2 from "../img/All category/Laptop & Accessories/la2.jpg";
import la3 from "../img/All category/Laptop & Accessories/la3.jpg";
import acc from "../img/All category/Laptop & Accessories/acc1.jpg";
import de1 from "../img/All category/Laptop & Accessories/de1.jpg";
import de2 from "../img/All category/Laptop & Accessories/d2.jpg";
import b1 from "../img/All category/Laptop & Accessories/b1.jpg";
import b2 from "../img/All category/Laptop & Accessories/b2.jpg";

function LaptopandAccessories({ addToCart }) {
  const [count, setCount] = useState([
    {
      img: L1,
      cat: "all laptop",
      price: 62990,
      name: "ASUS Vivobook",
      content:
        "16X, AMD Ryzen 7 5800HS, 16inch(40.64 cm) WUXGA, Thin & Light Laptop(16GB / 512GB SSD / Integrated Graphics / Windows 11",
      offer: "(27 % off)",
      MRP: 82990,
      Day: "Deal Of The Day",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: la1,
      cat: "all laptop",
      price: 42490,
      name: "Dell 14 Laptop",
      content:
        " Intel Core i5-1135G7 Processor/ 8GB/ 512GB SSD/14.0 (35.56cm) FHD Display with Comfort View/Windows 11 + MSO'21/ Spill-Resistant Keyboard/ 15 Month McAfee/ 1.48kg",
      offer: "-39%",
      MRP: 69211,
      Day: "Deal Of The Day",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: la2,
      cat: "all laptop",
      price: 49990,
      name: "HP Laptop",
      content:
        "15s, AMD Ryzen 7 5700U, 15.6-inch (39.6 cm), FHD, 16GB DDR4, 512GB SSD, AMD Radeon Graphics, Backlit KB, Dual Speakers (Win 11, MSO 2021, Silver, 1.69 kg), ey2001AU",
      offer: "-22%",
      MRP: 64235,
      Day: "Deal Of The Day",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: la3,
      cat: "all laptop",
      price: 59490,
      name: "Acer Aspire 5",
      content:
        "Gaming Laptop Intel Core i5 12th gen (16 GB/512 GB SSD/Win11 Home/4GB Graphics/RTX 2050) A515-57G (15.6' FHD Display, 1.8 Kg)Gaming Laptop Intel Core i5 12th gen",
      offer: "-29%",
      MRP: 89211,
      Day: "Deal Of The Day",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: acc,
      cat: "all acc",
      price: 255,
      name: "STRIFF Adjustable Laptop Table",
      content:
        "top Stand Patented Riser Ventilated Portable Foldable Compatible with MacBook Notebook Tablet Tray Desk Table Book with Free Phone Stand (Black)",
      offer: "-83%",
      MRP: 1499,
      Day: "Deal Of The Day",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: b1,
      cat: "all laptop",
      price: 549,
      name: "FUR JADEN",
      content:
        "Anti Theft Number Lock Backpack Bag with 15.6 Inch Laptop Compartment, USB Charging Port & Organizer Pocket for Men Women Boys Girls",
      offer: "-73% ",
      MRP: 2000,
      Day: "Deal Of The Day",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: b2,
      cat: "all laptop",
      price: 399,
      name: "Lenovo 15.6'",
      content:
        "(39.62cm) Slim Everyday Backpack, Made in India, Compact, Water-resistant, 2-side pockets,Padded adjustable shoulder straps",
      offer: "-72%",
      MRP: 1444,
      Day: "Deal Of The Day",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: de1,
      cat: "all laptop",
      price: 499,
      name: "Wood Foldable Table",
      content:
        "Amazon Basics Engineered  Laptop  with Cup Holder, Tablet Groove and Mini Drawer (Black)",
      offer: "-75%",
      MRP: 1999,
      Day: "Deal Of The Day",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: de2,
      cat: "all laptop",
      price: 1899,
      name: "Ray Luxe",
      content:
        "Wood Multipurpose Height Adjustable & Movable Table with Mobile & Tablet Holder is Suitable for use as a Laptop, Computer, Study, and Utility Table.",
      offer: "-53%",
      MRP: 3999,
      Day: "Deal Of The Day",
      orderedQ: 1,
      qty: 1,
    },
  ]);
  const addCartValue = (item) => {
    setCount((prevCount) =>
      prevCount.map((val) => {
        if (item.name === val.name) {
          console.log(1);
          return {
            ...val,
            orderedQ: val.orderedQ + 1,
          };
        } else {
          return val;
        }
      })
    );
  };

  const removeCartValue = (item) => {
    setCount((prevState) =>
      prevState.map((val) => {
        if (item.name === val.name && item.orderedQ > 0) {
          console.log(2);
          return {
            ...val,
            orderedQ: val.orderedQ - 1,
          };
        } else {
          return val;
        }
      })
    );
  };
  const Lap = count.map((val) => {
    return (
      <div className="sp-grid">
        <img src={val.img} alt="image" />
        <div className="cont-sp">
          <h2 className="sp-h2">
            {val.name}
            <span className="off-emi">{val.offer}</span>
          </h2>

          <h3>{val.content}</h3>
          <p className="deal">{val.Day}</p>
          <p className="sp-p">Rs.{val.price}</p>
          <span className="sp-sp"> M.R.P{val.MRP}</span>
          <button className="inc-btn" onClick={() => addCartValue(val)}>
            +
          </button>
          <span>{val.qty * val.orderedQ}</span>
          <button className="inc-btn" onClick={() => removeCartValue(val)}>
            --
          </button>
          <button className="fs-btn" onClick={() => addToCart(val)}>
            Add To cart
          </button>
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
                <li>Laptop</li>
                <li>Laptop Accessories</li>
                <li>Bags</li>
                <li>Lapdesks</li>
                <li>Laptop Batteries</li>
              </ul>
            </div>
            <div className="mob-cat">{Lap}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LaptopandAccessories;
