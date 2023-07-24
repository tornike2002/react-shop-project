import React from "react";
import "./About.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
const About = () => {
  return (
    <div className="bgg-c">
      <NavBar />
      <div className="about-main-container container d-flex justify-content-center align-items-center">
        <div className="about-text-main d-flex flex-column gap-3">
          <h1 className="pp-c">About Us</h1>
          <p className="tt-c">Feel free to ask any question</p>
        </div>
      </div>
      <div className="about-info-container container pp-c mt-5">
        <h1>TEL: +995-01010101</h1>
        <h1>Address: Georgia, Tbilisi, Gldani</h1>
        <h1>Mail: Shop@gmail.com</h1>
        <h1>Instagram: www.instagram/Shop</h1>
      </div>
      <hr className="tt-c pp-c mt-5" />
      <div className="container pp-c text-center d-flex flex-column gap-3 align-items-center justify-content-center">
        <h1>
          Amazon’s Project Kuiper will open a new satellite-processing facility
          at Kennedy Space Center
        </h1>
        <p className="w-50">
          Project Kuiper is moving one step closer to deploying its full
          satellite constellation, with construction underway on a new
          satellite-processing facility at Space Florida’s Launch and Landing
          Facility at Kennedy Space Center. The facility is the latest long-term
          investment in Project Kuiper, a low Earth orbit satellite network that
          will provide fast, affordable broadband to unserved and underserved
          communities around the world. The space will be used to prepare and
          integrate Kuiper satellites with rockets from Blue Origin and United
          Launch Alliance (ULA) ahead of launches. It stems from an expected
          partnership with Space Florida’s Spaceport Improvement Program—a
          matching investment initiative to boost critical spaceport
          infrastructure—and is one of several Amazon investments that will
          drive innovation and job growth in the state of Florida. “We have an
          ambitious plan to begin Project Kuiper’s full-scale production
          launches and early customer pilots next year, and this new facility
          will play a critical role in helping us deliver on that timeline,”
          said Steve Metayer, vice president of Kuiper Production Operations.
          “We are proud to partner with Space Florida to bolster the growing
          space industry in Florida and elsewhere across the United States, and
          we look forward to adding more talent to our skilled operations and
          manufacturing team. These employees will play an important part in our
          mission to connect tens of millions of customers worldwide.” Project
          Kuiper will begin satellite production at a state-of-the-art
          manufacturing facility in Kirkland, Washington, by the end of this
          year. The new satellite-processing facility in Florida will be used to
          receive those satellite shipments, conduct final preparations ahead of
          launches, connect satellites to custom dispensers from Beyond Gravity,
          and integrate the loaded dispensers with launch vehicles. The
          100,000-square-foot facility features a 100-foot tall high bay clean
          room to allow room for the payload fairing of new heavy-lift rockets
          like Blue Origin’s New Glenn and ULA’s Vulcan Centaur. Amazon is
          investing $120 million in new construction and high-value equipment
          for the facility, and creating up to 50 new jobs on the Space Coast.
          These Project Kuiper facilities are critical to Amazon’s commitment to
          spur innovation; design and develop prototype and production
          satellites; and prepare our satellites for commercial deployment.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
