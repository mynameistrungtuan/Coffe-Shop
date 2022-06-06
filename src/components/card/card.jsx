import React from 'react';
import "./card.scss";

const Card = ({dataCard}) => {

    return (
        <div>
            <div className="card-container">
                <div className="card-img">
                    <img src={dataCard.img} />
                </div>

                <div className="card-name">
                    <h4>{dataCard.name}</h4>
                </div>

                <div className="card-price">
                    <p>Giá: {dataCard.price}đ</p>
                    <i class="fa-solid fa-circle-plus"></i>
                </div>
            </div>
        </div>
    );
};

export default Card;