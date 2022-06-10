import { useState, useEffect } from "react";
import Card from "../../components/card/card";
import "./home.scss";
import dataCard from "../../assets/data/products";
import Navbar from "../../components/navbar/navbar";
import Footer from "../footer/footer";

const Home = () => {
  

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataCard);
  }, []);

  const handleFindHiTea = () => {
    let content = "Hi-Tea";
    setData(
      dataCard.filter((item) =>
        item?.type?.toLowerCase()?.includes(content.toLowerCase())
      )
    );
  };

  const handleFindCoffee = () => {
    let content = "coffee";
    setData(
      dataCard.filter((item) =>
        item?.type?.toLowerCase()?.includes(content.toLowerCase())
      )
    );
  };

  const findSearch = (e) => {
    setData(
      dataCard.filter((item) =>
        item?.name?.toLowerCase()?.includes(e.toLowerCase())
      )
    );
  };

  return (
    <div>
      <Navbar findSearch={findSearch} />
      <div className="container-home">
        <div className="menu-drinks">
          <div className="hi-tea" onClick={handleFindHiTea}>
            <img
              src="https://minio.thecoffeehouse.com/image/admin/1653274559_dau-tay-man-muoi-aloe-vera_400x400.jpg"
              alt=""
            />
            <h4>Hi Tea</h4>
          </div>

          <div className="coffee" onClick={handleFindCoffee}>
            <img
              src="https://minio.thecoffeehouse.com/image/admin/1639377770_cfsua-nong_400x400.jpg"
              alt=""
            />
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
        <Footer />
      </div>
    </div>
  );
};

export default Home;
