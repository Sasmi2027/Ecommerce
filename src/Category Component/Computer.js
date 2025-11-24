import React, { useState } from "react";
import "../Css Style/Computer.css";
import C1 from "../img/All category/Computer/71wOfPc-rwL._SX679_.jpg";
import c1 from "../img/All category/Computer/c1.jpg";
import c3 from "../img/All category/Computer/c3.jpg";
import wi1 from "../img/All category/Computer/wi1.jpg";
import wi2 from "../img/All category/Computer/wi2.jpg";
import ca1 from "../img/All category/Computer/ca1.jpg";
import ca2 from "../img/All category/Computer/caa.jpg";
import p1 from "../img/All category/Computer/p.jpg";

function Computer({ addToCart }) {
  const [count, setCount] = useState([
    {
      img: C1,
      cat: "all computer",
      price: 39990,
      name: "ASUS HP ",
      content: "All-in-One AMD Ryzen 3-3250U 23.8-inches(60.5 cm) FHD Desktop PC (8GB/256GB SSD + 1TB HDD/FHD IR Camera/Radeon Graphics/Win 11",
      MRP: 55230,
      Day: "Deal Of The Day",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: c1,
      cat: "all computer",
      price: 42990,
      name: "Lenovo IdeaCentre AIO 3",
      content:
        "11th Gen Intel i3 23.8' FHD IPS 3-Side Edgeless All-in-One Desktop with Alexa Built-in (8GB/512 GB SSD/Win11/MS Office 2021",
      MRP: 56190,
      Day: "Deal Of The Day",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: c3,
      cat: "all computer",
      price: 45989,
      name: "Lenovo IdeaCentre AIO 3 ",
      content:
        "12th Gen Intel i3 23.8' FHD WVA 3-Side Edgeless All-in-One Desktop with Alexa Built-in (8GB/512GB SSD/Win11/MS Office 2021",
      MRP: 55490,
      Day: "Deal Of The Day",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: ca1,
      cat: "all computer",
      price: 2590,
      name: "HP Travel USB-C",
      content:
        "Multi Port Hub Docking Station with USB-C, RJ-45, HDMI, SD and Micro SD Slots - 1C1Y5AA, Black",
      MRP: 5999,
      Day: "Deal Of The Day",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: ca2,
      cat: "all computer",
      price: 1249,
      name: "Dell USB Wireless Keyboard and Mouse",
      content:
        "Set- KM3322W, Anti-Fade & Spill-Resistant Keys, up to 36 Month Battery Life, 3Y Advance Exchange Warranty, Black",
      MRP: 2499,
      Day: "Deal Of The Day",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: wi1,
      cat: "all computer",
      price: 999,
      name: "TP-link N300 WiFi",
      content:
        "Wireless Router TL-WR845N | 300Mbps Wi-Fi Speed | Three 5dBi high gain Antennas | IPv6 Compatible | AP/RE/WISP Mode | Parental Control | Guest Network",
      MRP: 1699,
      Day: "Deal Of The Day",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: wi2,
      cat: "all computer",
      price: 449,
      name: "TP-Link USB WiFi Adapter",
      content:
        "PC(TL-WN725N), N150 Wireless Network Adapter for Desktop - Nano Size WiFi Dongle Compatible with Windows 11/10/7/8/8.1/XP/ Mac OS",
      MRP: 999,
      Day: "Deal Of The Day",
      orderedQ: 1,
      qty: 1,
    },
    {
      img: p1,
      cat: "all computer",
      price: 16798,
      name: "HP Smart Tank 670",
      content:
        "All-in-One Auto Duplex Wireless Integrated Ink Tank Colour Printer, Scanner, Copier- High Capacity Tank (6000 Black, 8000 Colour)",
      MRP: 21390,
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
  const comp = count.map((val) => {
    return (
      <div className="sp-grid-com">
        <div className="wid-c">
          <img src={val.img} alt="image" width="auto" height="200px" />
        </div>
        <div className="cont-sp wid-2">
          <h2 className="sp-h2">{val.name}</h2>
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
                <li>Computer</li>
                <li>Accessories</li>
                <li>Printers</li>
                <li>Wifi</li>
              </ul>
            </div>
            <div className="mob-cat">{comp}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Computer;
