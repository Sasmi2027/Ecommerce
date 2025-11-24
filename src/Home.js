import React from "react";
import "./Css Style/Home.css";
import { Router, Routes, Route, Link } from "react-router-dom";
import Slider from "./Slider/Slider";
import data from "./Slider/Data";
import Category from "./Data/Category";
import MobileData from "./Data/MobileData";
import L1 from "./img/1.webp";
import L2 from "./img/2.webp";
import tag from "./img/PC_stripe_Golive.jpg";
import ban1 from "./img/mobi-banner (1).jpg";
import ban2 from "./img/mobi-banner (2).jpg";
import ban3 from "./img/mobi-banner (3).jpg";
import ban4 from "./img/mobi-banner (4).jpg";
import ban5 from "./img/mobi-banner (5).jpg";
import ban6 from "./img/mobi-banner (6).jpg";
import ban7 from "./img/mobi-banner (7).jpg";
import ban8 from "./img/mobi-banner (8).jpg";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SliderIndex: 1,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.autoplay(), 4000);
  }
  autoplay() {
    if (this.state.SliderIndex === 0) {
      this.setState({
        SliderIndex:
          this.state.SliderIndex === 0
            ? data.length - 1
            : this.state.SliderIndex - 1,
      });
    } else {
      this.setState({
        SliderIndex:
          this.state.SliderIndex === data.length - 1
            ? 0
            : this.state.SliderIndex + 1,
      });
    }
  }

  render() {
    const proCat = Category.map((val) => {
      return (
        <div className="procat">
          <img src={val.img} alt={val.cat} />
          <h4>{val.cat}</h4>
        </div>
      );
    });
    const mobi = MobileData.map((val) => {
      return (
        <div className="fash-container-front">
          <div className="fash-grid-front">
            <i class="fa-solid fa-heart fa-xl fav-i"></i>
            <img className="fs-img-front" src={val.img} alt="image" />
            <h2 className="fs-h2-front">{val.name}</h2>
            <p className="fs-p-front">{val.cont}</p>

            <h3 className="fs-h3-front">
              Rs.{val.price}
              <span className="fs-sp1-front">M.R.P {val.MRP}</span>
            </h3>
            <p className="buy2-front">Buy 2 items, get 5% off</p>
            <h6 className="fs-h6-front">Free Delivery</h6>
          </div>
        </div>
      );
    });

    return (
      <>
        <div className="container">
          <div className="grid">
            <div className="home-top1 home-top">
              <ul>
                <li className="a-c">ALL CATEGORIES  <i class="fa-solid fa-caret-down"></i></li>
                <li>
                  <Link to="Fashion">
                    <i class="fa-solid fa-vest-patches"></i> Fashion
                  </Link>
                </li>
                <li>
                  <Link to="Laptop">
                    <i class="fa-solid fa-utensils"></i>Laptop & Accessories
                  </Link>
                </li>
                <li>
                  <Link to="Smartphone">SmartPhones</Link>
                </li>
                <li>
                  <Link className="Link" to="Computer">
                    Computer & office
                  </Link>
                </li>
                <li>
                  <Link to="Health-Beauty">Health & Beauty</Link>
                </li>
                <li>
                  <Link to="Grocery">Grocery/GourmentFoods</Link>
                </li>
                <li>
                  <Link to="Gift-Sport-Toys">Gift,Sport,toys</Link>
                </li>
                <li>
                  <Link to="Jewellery-Watch">Jewelry & Watch</Link>
                </li>
                <li>
                  <Link to="HomeandFurniture">Home & Furniture</Link>
                </li>
                <li className="see-all">See All ...</li>
              </ul>
            </div>
            <div className="home-top2 home-top">
              <Slider slideIndex={this.state.SliderIndex} />
            </div>
            <div className="home-top3 home-top">
              <a href="" target="">
                <img src={L2} alt="image" />
              </a>
              <a href="" target="">
                <img src={L1} alt="image" />
              </a>
            </div>
          </div>
        </div>
        {/* //ProductData */}
        <div className="container">
          <div className="grid-2">
            <div className="cat-detaile">
              <div className="shop-cat">
                <h2>Shop Category</h2>
                <span className="sc-line"></span>
              </div>
              <div className="df-jc procat-bg">{proCat}</div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="grid3">
            <div className="pro-de">
              <img
                className="macc"
                src={tag}
                alt="image"
                width="auto"
                height="60px"
              />
              <div className="mobi-list">
                <img src={ban2} alt="image" width="auto" height="200px" />
                <img src={ban4} alt="image" width="auto" height="200px" />
                <img src={ban5} alt="image" width="auto" height="200px" />
                <img src={ban3} alt="image" width="auto" height="200px" />
                <img src={ban7} alt="image" width="auto" height="200px" />
                <img src={ban8} alt="image" width="auto" height="200px" />
                {/* <img src={ban6} alt="image" width="auto" height="250px"/> */}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="grid4">{mobi}</div>
        </div>
      </>
    );
  }
}

export default Home;
