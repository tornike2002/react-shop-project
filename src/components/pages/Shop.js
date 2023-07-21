import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import Cards from "../UI/Cards";
import ShopCards from "../UI/ShopCards";
import "./Shop.css";
const Shop = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <section className="bgg-c">
      <NavBar />
      <div className="store-main_container container mt-5">
        <div className="shop-banners-container d-flex flex-wrap justify-content-center align-items-center gap-3">
          {data.map((data) => (
            <div key={data.id} className="d-flex flex-wrap">
              <ShopCards
                category={data.category}
                title={data.title}
                img={data.image}
                price={data.price}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Shop;
