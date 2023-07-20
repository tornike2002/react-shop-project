import React from "react";
import NavBar from "../NavBar";
import "./Home.css";
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
        
      </section>
    </div>
  );
};

export default Home;
