import React, { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((value) => !value);
  };
  return (
    <Fragment>
      <section className="burg-wrapper">
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
            <div className="cart-tracker-container position-relative">
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="burg-men">
              <Link onClick={handleOpen}>
                <i className="fa-solid fa-bars"></i>
              </Link>
            </div> 
            </section>
      {open ? (
          <div className="container burg-men-diss">
            <div className="d-flex flex-column gap-3 align-items-start justify-content-center bgg-c">
              <NavLink className="pp-c" to="/home">Home</NavLink>
              <NavLink className="pp-c" to="/about">About</NavLink>
              <NavLink className="pp-c" to="/shop">Shop</NavLink>
            </div>
          </div>
        ) : (
          ""
        )}
         
    </Fragment>
  );
};

export default NavBar;
