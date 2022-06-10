import React from "react";
import "./cardNews.scss";

const CardNews = ({dataNews}) => {
  return (
    <div>
      <div className="card-news-container">
        <div className="card-news-img">
          <img src={dataNews.img} />
        </div>

        <div className="card-news-title">
            <p>{dataNews.title}</p>
        </div>

        <div className="card-news-read">
          <button>ĐỌC TIẾP</button>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
