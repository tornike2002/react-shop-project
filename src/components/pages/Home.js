import React from "react";
import NavBar from "../NavBar";
import "./Home.css";
import CarouselComp from "./home-components/Carousel";
import Popular from "./home-components/Popular";
import Footer from "../Footer";

const Home = () => {
  return (
    <div className="bgg-c">
      <NavBar />
      <div className="home-main_container container d-flex align-items-start mt-3 ps-5 flex-column justify-content-center">
        <h1 className="tt-c">Comfort and Quality {<br />}Come First.</h1>
        <p className="w-50 mw-100 tt-c">
          Johanna Innsbruck and Linda Copperfield have always dreamed of
          comfortable women's clothing that would look appropriate in any
          circumstances.
        </p>
      </div>
      {/* carousel */}
      <section>
        <CarouselComp />
      </section>
      <section className="container d-flex flex-column justify-content-center align-items-center mb-3">
        <h1 className="pp-c mt-5 text-center">Check Out New Products</h1>
        <hr className="w-100 text-danger mb-4" />
        <Popular />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
