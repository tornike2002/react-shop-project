import React from "react";
const CartDesign = (props) => {
  return (
    <div>
      <div className="cart-main-container d-flex gap-5 align-items-center">
        <img src={props.img} alt="adsa" className="w-25" />
        <div className="cart-params-container d-flex w-100 justify-content-between align-items-center">
          <div className="cart-text-container text-white">
            <h1>{props.title}</h1>
            <p>{props.price}</p>
            <p>{props.description}</p>
          </div>
          <div className="cart-tools text-white d-flex flex-column gap-5 pe-5">
            <i className="fa-solid fa-arrow-up"></i>
            <i className="fa-solid fa-arrow-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDesign;
