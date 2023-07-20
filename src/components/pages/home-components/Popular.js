import React, { useEffect, useState } from "react";
import Cards from "../../UI/Cards";
import "./Popular.css";
const Popular = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.slice(0, 4));
      });
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="helper-div d-flex flex-wrap">
            {data.map((data) => (
              <div key={data.id}>
                <Cards
                  title={data.title}
                  description={data.description.slice(0, 145)}
                  img={data.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
