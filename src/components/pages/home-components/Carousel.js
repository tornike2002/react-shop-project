import React, { Fragment } from "react";
import "./Carousel.css";
import car1 from "../../../assets/car1.jpg";
import car2 from "../../../assets/car2.jpg";
import car3 from "../../../assets/car3.jpg";
const CarouselComp = () => {
  return (
    <Fragment>
      <section className="container mt-5 car">
        <h1 className="pp-c text-center pt-3">
          Let Your Shopping Be Memorable
        </h1>
        <hr className="w-100 text-danger pb-3" />
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active auto">
              <img
                src={car2}
                className="car-pic d-block mw-100 w-100 h-100"
                alt="car1"
              />
            </div>
            <div className="carousel-item">
              <img
                src={car3}
                className="d-block w-100 mw-100 h-100"
                alt="car2"
              />
            </div>
            <div className="carousel-item">
              <img
                src={car1}
                className="d-block w-100 mw-100 h-100"
                alt="car3"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </Fragment>
  );
};

export default CarouselComp;
