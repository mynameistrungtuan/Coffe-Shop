import React from "react";
import logo from "../../assets/images/logo.png";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <div className="navbar-name">
          <h3>The Coffee House</h3>
        </div>

        <div className="navbar-search">
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="enter-address">
            <h4>Giao hàng</h4>
            <p>Tại: Nhập địa chỉ giao hàng</p>
          </div>
        </div>

        <div className="navbar-options">
          <ul>
            <li><a href="">Đặt hàng</a></li>
            <li><a href="">Tin tức</a></li>
            <li><a href="">Cửa hàng</a></li>
            <li><a href="">Khuyến mãi</a></li>
            <li><a href="">Tuyển dụng</a></li>
          </ul>
        </div>

        <div className="navbar-login">
          <i class="fa-solid fa-user" id="user"></i>
          <i class="fa-solid fa-square-envelope" id="envelope"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
