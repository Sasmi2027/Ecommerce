import "./App.css";
import { Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Computer from "./Category Component/Computer";
import Smartphone from "./Category Component/Smartphones";
import Fashion from "./Category Component/Fashion";
import LaptopandAccessories from "./Category Component/LaptopandAccessories";
import HealthBeauty from "./Category Component/HealthBeauty";
import GiftSportToys from "./Category Component/GiftSportToys";
import Jewellery from "./Category Component/Jewellery";
import HomeandFurniture from "./Category Component/HomeandFurniture";
import Grocery from "./Category Component/Grocery";
import { useState } from "react";
import Popup from "./Popup";
import Footer from "./Footer";
import About from "./About";
import Blog from "./Blog";
import DailyDeals from "./DailyDeals";

function App(props) {
  const [cart, setCart] = useState([]);
  const addToCart = (data) => {
    if (cart.find((item) => item.name === data.name)) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.name === data.name ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...data, qty: 1 }]);
    }
  };
  const CartCount = () => {
    const count = cart.reduce((acc, item) => acc + item.orderedQ, 0);
    return count;
  };

  // last change type
  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.name !== item.name);
    setCart(updatedCart);
  };

  
  const incQuantity = (item) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.name === item.name) {
        return { ...cartItem, orderedQ: cartItem.orderedQ + 1 };
      }
      return cartItem;
    });
    setCart(updatedCart);
  };

  const decQuantity = (item) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.name === item.name) {
        if (cartItem.orderedQ > 1) {
          return { ...cartItem, orderedQ: cartItem.orderedQ - 1 };
        }
      }
      return cartItem;
    });
    setCart(updatedCart);
  };
  //........................
  return (
    <div className="App">
      <Nav count={CartCount()} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="DailyDeals" element={<DailyDeals />}></Route>
        <Route path="Blog" element={<Blog />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route
          path="Smartphone"
          element={<Smartphone addToCart={addToCart} />}
        ></Route>
        <Route
          path="Fashion"
          element={<Fashion addToCart={addToCart} cart={cart} />}
        ></Route>
        <Route
          path="Laptop"
          element={<LaptopandAccessories addToCart={addToCart} cart={cart} />}
        ></Route>
        <Route
          path="Computer"
          element={<Computer addToCart={addToCart} cart={cart} />}
        ></Route>
        <Route
          path="Health-Beauty"
          element={<HealthBeauty addToCart={addToCart} cart={cart} />}
        ></Route>
        <Route
          path="Gift-Sport-Toys"
          element={<GiftSportToys addToCart={addToCart} cart={cart} />}
        ></Route>
        <Route path="Jewellery-Watch" element={<Jewellery />}></Route>
        <Route path="HomeandFurniture" element={<HomeandFurniture />}></Route>
        <Route
          path="Grocery"
          element={<Grocery addToCart={addToCart} />}
        ></Route>
        <Route
          path="Popup"
          element={
            <Popup
              cart={cart}
              onRemove={removeFromCart}
              onIncrease={incQuantity}
              onDecrease={decQuantity}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
