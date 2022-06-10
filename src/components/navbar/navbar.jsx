import { useState } from "react";
import logo from "../../assets/images/logo.png";
import "./navbar.scss";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigation = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    props.findSearch(search);
  };

  return (
    <div>
      <div className="navbar-container">
        <div className="navbar-name">
          <p
            onClick={() => {
              navigation("/");
            }}
          >
            Phố Mới Coffee
          </p>
        </div>

        <div className="navbar-search">
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="enter-address">
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              type="text"
              placeholder="Tìm kiếm...................  "
            />
            <i
              class="fa-solid fa-magnifying-glass icon-search"
              onClick={handleSearch}
            ></i>
          </div>
        </div>

        <div className="navbar-options">
          <ul>
            <li>
              <a href="">Đặt hàng</a>
            </li>
            <li>
              <a
                href=""
                onClick={() => {
                  navigation("/news");
                }}
              >
                Tin tức
              </a>
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

        <div className="navbar-login">
          <i class="fa-solid fa-user" id="user"></i>
          <i class="fa-solid fa-square-envelope" id="envelope"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
