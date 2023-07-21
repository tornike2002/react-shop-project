import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./NavBar.css";
const NavBar = () => {
  const {amount}  = useSelector((store) => store.cart);
  return (
    <Fragment>
      <nav>
        <div className="nav-bar-container container d-flex align-items-center justify-content-between">
          <div className="nav-title-wrapper">
            <Link>
              <h1 to="/">Amazon</h1>
            </Link>
           
          </div>
          <div className="nav-links-contianer d-flex gap-5">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <div className="cart-tracker-container position-relative">
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
              <div className="cart-amount-tracker position-absolute">
                <p>{amount}</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
