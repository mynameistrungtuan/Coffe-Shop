import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import dataNews from "../../components/cardNews/data";
import CardNews from "../../components/cardNews/cardNews";
import "./news.scss"
import Footer from "../footer/footer";

const News = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataNews);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="news-container">
        <div className="news-content">
          <div className="news-left"></div>

          <div className="news-main">
          {data.map((itemNews) => (
              <CardNews dataNews={itemNews} />
            ))}
          </div>

          <div className="news-right"></div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default News;
<div className="news-container"></div>;
