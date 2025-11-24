import React, { useState } from "react";
import "../src/Css Style/Popup.css";

function Popup({ cart, onRemove, onIncrease, onDecrease }) {
  let total = 0;
  const handle = cart.map((item) => {
    const itemPrice = item.price * item.orderedQ;
    total += itemPrice;
    return (
      <div className="pop-df-jc">
        <img className="pop-img" src={item.img} alt="image" />
        <h1 className="pop-name fs wd">{item.name}</h1>
        <div className="df-pop wd">
          <button className="pop-btn-dec" onClick={() => onDecrease(item)}>
            -
          </button>
          <button className="pop-btn-inc" onClick={() => onIncrease(item)}>
            +
          </button>
        </div>
        <h2 className="pop-qty fs wd">{item.orderedQ}</h2>
        <h2 className="pop-price fs wd">{item.price * item.orderedQ}</h2>
        <i
          onClick={() => onRemove(item)}
          class="fa-solid fa-trash fa-xl pop-btn-rem"
        ></i>
      </div>
    );
  });
  return (
    <div className="popup-cont">
      <div className="pop-grid">
        {handle}
        <p className="total">Total Price: {total}</p>
      </div>
    </div>
  );
}

export default Popup;
