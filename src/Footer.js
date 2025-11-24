import React from "react";
import "./Css Style/Footer.css";
import payment from "./img/payments-1.png";

export default function Footer() {
  return (
    <>
      <div className="bg">
        <div className="ff-cont">
          <div className="ff-grid">
            <div className="ff-view">
              <div className="df">
                <i class="fa-sharp fa-solid fa-l logo-ff">1</i>
                <div className="logo-con">
                  <h2 className="logo-con-h2">Market</h2>
                  <p className="con-p">all in one store</p>
                </div>
              </div>
              <div className="ff-view">
                <ul>
                  <li className="c-care">About Us</li>
                  <li>India</li>
                  <li>+91 9900990099</li>
                  <li>+91 6874600000</li>
                  <li>Support_l1market@domain.com</li>
                  <li>Open time: 8:00AM - 16:PM</li>
                </ul>
              </div>
              <div className="ff-view">
                <ul>
                  <li className="c-care">CUSTOMER CARE</li>
                  <li>My Account</li>
                  <li>Track your Order</li>
                  <li>Wishlist</li>
                  <li>Customer Service</li>
                  <li>Returns / Exchange</li>
                  <li>Support</li>
                </ul>
              </div>
              <div className="ff-view cat-ff">
                <ul>
                  <li className="c-care">CATEGORIES</li>
                  <li>Health & Beauty</li>
                  <li>Gifts Sports & Toys</li>
                  <li>Textiles & Accessories</li>
                  <li>Packaging & Office</li>
                  <li>Event & Party</li>
                  <li>Home Improvement</li>
                  <li>Lamps & Light</li>
                </ul>
              </div>
              <div className="ff-view">
                <ul>
                  <li className="c-care">Connect with Us</li>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Instagram</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ff-cont2">
        <div className="ff-grid">
          <div className="payment">
            <img src={payment} alt="image" />
          </div>
        </div>
      </div>
      <div className="bg">
        <div className="ff-cont3">
          <div className="ff-grid3">
            <div className="payment">
              <p>
                Conditions of Use & Sale Privacy Notice Interest-Based Ads ©
                1996-2023, L1market.com, Inc. or its affiliates
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
