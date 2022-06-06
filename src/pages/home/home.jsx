import { useState, useEffect } from "react";
import Card from "../../components/card/card";
import "./home.scss";
import data from "../../assets/data/products";
import Navbar from "../../components/navbar/navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container-home">
        <div className="menu-drinks">
          <div className="hi-tea">
            <img src="https://minio.thecoffeehouse.com/image/admin/1653274559_dau-tay-man-muoi-aloe-vera_400x400.jpg" />
            <h4>Hi Tea</h4>
          </div>
          <div className="coffee">
            <img src="https://minio.thecoffeehouse.com/image/admin/1639377770_cfsua-nong_400x400.jpg"/>
            <h4>Coffee</h4>
          </div>
        </div>

        <div className="content-container-home">
          <div className="left-home"></div>
          <div className="main-home">
            {data.map((item) => (
              <Card dataCard={item} />
            ))}
          </div>
          <div className="right-home"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
