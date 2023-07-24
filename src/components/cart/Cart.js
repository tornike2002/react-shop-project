import React, { useContext } from "react";
import { Cartcontext } from "../../context/Context";
import "./Cart.css";
import NavBar from "../NavBar";
const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total= state.reduce((total, item)=>{
    return(total +item.price * item.quantity);
  } , 0)
  return (
    <div className="cart-cont bgg-c">
      <NavBar />
      {state.map((item, index) => {
        return (
          <div className="card-conti bg-white p-5" key={index}>
            <img src={item.image} alt="adas" />
            <p>{item.title}</p>
            <p>{item.quantity * item.price}</p>

            <div className="quantity-cont">
              <button
                onClick={() => dispatch({ type: "INCREASE", payload: item })}
              >
                +
              </button>
              <p>{item.quantity}</p>
              <button
                onClick={() => {
                  if (item.quantity > 1) {
                    dispatch({ type: "DECREASE", payload: item });
                  } else {
                    dispatch({ type: "REMOVE", payload: item });
                  }
                }}
              >
                -
              </button>
            </div>
            <h2 onClick={() => dispatch({ type: "REMOVE", payload: item })}>
              X
            </h2>
          </div>
        );
      })}
        {state.length > 0 && <div className="total-contt">
          <h2 className="pp-c">{total}</h2>
          </div>}
    </div>
  );
};

export default Cart;
