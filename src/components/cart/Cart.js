import React from "react";
import NavBar from "../NavBar";
import CartDesign from "../UI/CartDesign";


const Cart = () => {
  return (
    <div className="bgg-c">
      <NavBar />
      <section className="d-flex align-item-center justify-content-center w-100">
        <h1 className="text-center pp-c">Cart</h1>
            <CartDesign />
      </section>
      <hr className="w-100 pp-c"/>
      <section>
        <p className="pp-c">Total:100$</p>
      </section>
    </div>
  );
};

export default Cart;
