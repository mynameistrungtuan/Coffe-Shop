import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-logo">
          <div className="footer-logo-name">
            <p>Phố Mới Coffee</p>
          </div>
        </div>

        <div className="footer-information">
          <ul className="footer-list-infomation">
            <li>
              <a href="">Đặt hàng</a>
            </li>
            <li>
              <a href="">Tin tức</a>
            </li>
            <li>
              <a href="">Cửa hàng</a>
            </li>
            <li>
              <a href="">Khuyến mãi</a>
            </li>
            <li>
              <a href="">Tuyển dụng</a>
            </li>
          </ul>
        </div>

        <div className="footer-personal">
          <div className="footer-personal-name">
            <i>Design by tuanphuong2091</i>
          </div>
          <div className="footer-personal-social">
            <a href="https://www.facebook.com/profile.php?id=100076903453048">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-instagram"></i>
            </a>

            <a href="">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
