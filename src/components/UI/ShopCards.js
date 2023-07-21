import React from "react";
import "./ShopCards.css";
const ShopCards = (props) => {
  return (
    <div className="shop-cards-container d-flex flex-column justify-content-center align-items-center">
      <img src={props.img} />
      <div className="shop-cards-text d-flex gap-3 flex-column align-items-center justify-content-center">
        <h2 className="text-center pp-c">{props.title.slice(0, 50)}</h2>
        <div className="cards-helper flex-column d-flex align-items-center justify-content-center gap-2">
          <h3 className="text-success">{props.price}$</h3>
          <h4 className="pp-c">{props.category}</h4>
        </div>
        <button type="button" className="btn btn-outline-primary p-2 mb-2">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ShopCards;
