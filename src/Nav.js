import React from "react";
import { Router, Routes, Route, Link } from "react-router-dom";
import "./Css Style/Nav.css";
import tit from "./img/icon-tit.png";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="bor-bot">
          <div className="head-top df-jc">
            <div className="head-prop">
              <p> Wrap new offers / gift every single day on Weekends</p>
            </div>
            <div className="head-prop">
              <ul className="li-sy-no df-jc">
                <li>
                  <i class="fa-solid fa-gift"></i> Gift Certificates
                </li>
                |
                <li>
                  <i class="fa-solid fa-user"></i> My Account
                </li>
                |<li> USD</li>
              </ul>
            </div>
          </div>
          <div className="df-jc mx-wd">
            <div className="df mylogo">
              <i class="fa-sharp fa-solid fa-l logo-clr">1</i>
              <div className="logo-con">
                <h2 className="logo-con-h2">Market</h2>
                <p className="con-p">all in one store</p>
              </div>
            </div>
            <div className="head-search color">
              <input type="text" placeholder="Search the store" />
              <button>
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div className="df-jc hd-sh">
              <i
                className="color"
                class="fa-solid fa-arrows-rotate fa-2xl color"
              ></i>
              <i className="color" class="fa-solid fa-heart fa-2xl color"></i>
              <div className="df-jc">
                <span className="mycart">
                  <Link to="Popup">
                    <i class="fa-solid fa-basket-shopping fa-lg mycart-i"></i>
                  </Link>
                </span>
                <h5 className="my-c2">
                  MY CART-<span>{this.props.count}</span>
                </h5>
              </div>
            </div>
          </div>
          <div className="bg-color-head">
            <div className="df-jc mx-wd nov-3">
              <h3 className="all-cat">
                ALL CATEGORIES <i class="fa-solid fa-caret-down"></i>
              </h3>
              <div className="menu-bar">
                <i class="fa-solid fa-bars"></i>
                <div className="layout-top">
                  <ul className="df li-sy-no tx-de pad-wid">
                    <li>
                      <Link to="/">HOME</Link>
                    </li>
                    <li className="feauture-a">
                      <a href="">
                        FEATURES <i class="fa-solid fa-caret-down"></i>
                      </a>
                      <div className="feature-nav">
                        <ul className="fe-ul">
                          <li className="fe-li">SHOP PAGE</li>
                          <li className="fe-li">SHOP STYLE</li>
                          <li className="fe-li">PRODUCT PAGE</li>
                          <li className="fe-li">PRODUCT STYLE</li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link to="DailyDeals">DAILY DEALS</Link>
                    </li>
                    <li>
                      <Link to="Blog">BLOG</Link>
                    </li>
                    <li>
                      <Link to="About">ABOUT US</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="df-ai tx-de sign-reg sign-reg-2">
                <i class="fa-solid fa-lock sign-reg reg"></i>
                <a href="" target="">
                  Sign In or Register
                </a>
                <i class="fa-solid fa-truck sign-reg reg-1">|</i>
                <p>Track Your Order</p>
              </div>
            </div>
            <div className="chain-icon">
              <img src={tit} alt="image" />
              <img src={tit} alt="image" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Nav;
