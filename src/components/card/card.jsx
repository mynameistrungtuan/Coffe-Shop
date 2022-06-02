import React from 'react';
import "./card.scss";

const Card = () => {
    return (
        <div>
            <div className="card-container">
                <div className="card-img">
                    <img src="https://minio.thecoffeehouse.com/image/admin/mochanong_433980_400x400.jpg" alt='#'/>
                </div>

                <div className="card-name">
                    <h3>Mocha Nóng</h3>
                </div>

                <div className="card-price">
                    <p>Giá: 40000</p>
                    <i class="fa-solid fa-circle-plus"></i>
                </div>
            </div>
        </div>
    );
};

export default Card;