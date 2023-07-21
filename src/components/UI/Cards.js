import React from "react";
import "./Cards.css";
const Cards = (props) => {
  return (
    <div className="card-main-cont d-flex flex-column bg-white gap-5">
      <div className="card card-cont d-flex gap-3 align-items-center justify-content-center ">
        <h1 className="sale-prop position-absolute">Sale</h1>
        <div className="cards-img-wrap d-flex align-items-center justify-content-center position-relative ">
          <img
            src={props.img}
            className="card-img-top cards-img-ww"
            alt="img"
          />
        </div>
        <div className="card-body bgg-c text-center p-3">
          <h5 className="card-title pp-c">{props.title}</h5>
          <p className="card-text tt-c">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
