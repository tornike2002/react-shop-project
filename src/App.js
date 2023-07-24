import React from "react";
import NoPage from "./components/ErrorPage/NoPage";
import Home from "./components/pages/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Shop from "./components/pages/Shop";
import Cart from "./components/cart/Cart";
import About from "./components/pages/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
