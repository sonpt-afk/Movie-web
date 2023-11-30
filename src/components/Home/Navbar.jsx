import React, { useState } from "react";
import { Link } from "react-router-dom";
import "~/assets/css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faMagnifyingGlass,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import "~/assets/css/grid.css";
import "~/assets/css/base.css";
import "~/assets/css/responsive.css";
import { useHistory } from "react-router-dom";
const Navbar = () => {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const history = useHistory();

  const handleScroll = () => {
    const navbar = document.querySelector(".header");
    if (window.scrollY > 20) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div className="header">
        <div className="grid wide"></div>
        <nav className="header__navbar">
          <ul className="header__navbar-list">
            <li className="header__navbar-item">
              <img
                className="logo"
                src="https://media.twofour54.com/sites/5/2019/10/netflix-768x583.jpg"
                alt=""
              />
            </li>
            <li className="header__navbar-item active">
              <a href="">Trang chủ</a>
            </li>
            <li className="header__navbar-item">
              <a href="">Phim T.hình</a>
            </li>
            <li className="header__navbar-item">
              <a href="">Phim</a>
            </li>
            <li className="header__navbar-item">
              <a href="">Mới & Phổ biến</a>
            </li>
            <li className="header__navbar-item">
              <a href="">Danh sách của tôi</a>
            </li>
            <li className="header__navbar-item">
              <a href="">Duyệt tìm theo ngôn ngữ</a>
            </li>
          </ul>
          <ul className="header__navbar-list-right">
            <li className="header__navbar-item ">
              <input
                value={input}
                placeholder="Search "
                className="header__navbar-search-input"
                onChange={handleInputChange}
              ></input>
              <a href="">
                <FontAwesomeIcon
                  className="header-icon"
                  icon={faMagnifyingGlass}
                />
              </a>
            </li>
            <li className="header__navbar-item header__navbar-item--has-notify">
              <a href="">
                <FontAwesomeIcon className="header-icon" icon={faBell} />
              </a>
              <div className="header__notify">
                <header className="header__notify-header">
                  <h3>Thông báo mới nhận</h3>
                </header>
                <ul className="header__notify-list">
                  <li className="header__notify-item header__notify-item--viewed">
                    <a href="" className="header__notify-link">
                      <img
                        src="https://th.bing.com/th/id/OIP.aRje5vJud3JlUnpPRE28owAAAA?rs=1&pid=ImgDetMain"
                        alt=""
                        className="header__notify-img"
                      />
                      <div className="header__notify-info">
                        <span className="header__notify-name">
                          Stranger Things
                        </span>
                        <span className="header__notify-description">
                          Season 5 now available
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="header__notify-item header__notify-item--viewed">
                    <a href="" className="header__notify-link">
                      <img
                        src="https://th.bing.com/th/id/OIP.aRje5vJud3JlUnpPRE28owAAAA?rs=1&pid=ImgDetMain"
                        alt=""
                        className="header__notify-img"
                      />
                      <div className="header__notify-info">
                        <span className="header__notify-name">
                          Stranger Things
                        </span>
                        <span className="header__notify-description">
                          Season 5 now available
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="header__notify-item header__notify-item--viewed">
                    <a href="" className="header__notify-link">
                      <img
                        src="https://th.bing.com/th/id/OIP.aRje5vJud3JlUnpPRE28owAAAA?rs=1&pid=ImgDetMain"
                        alt=""
                        className="header__notify-img"
                      />
                      <div className="header__notify-info">
                        <span className="header__notify-name">
                          Stranger Things
                        </span>
                        <span className="header__notify-description">
                          Season 5 now available
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="header__notify-item header__notify-item--viewed">
                    <a href="" className="header__notify-link">
                      <img
                        src="https://th.bing.com/th/id/OIP.aRje5vJud3JlUnpPRE28owAAAA?rs=1&pid=ImgDetMain"
                        alt=""
                        className="header__notify-img"
                      />
                      <div className="header__notify-info">
                        <span className="header__notify-name">
                          Stranger Things
                        </span>
                        <span className="header__notify-description">
                          Season 5 now available
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="header__notify-item header__notify-item--viewed">
                    <a href="" className="header__notify-link">
                      <img
                        src="https://th.bing.com/th/id/OIP.aRje5vJud3JlUnpPRE28owAAAA?rs=1&pid=ImgDetMain"
                        alt=""
                        className="header__notify-img"
                      />
                      <div className="header__notify-info">
                        <span className="header__notify-name">
                          Stranger Things
                        </span>
                        <span className="header__notify-description">
                          Season 5 now available
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="header__notify-item header__notify-item--viewed">
                    <a href="" className="header__notify-link">
                      <img
                        src="https://th.bing.com/th/id/OIP.aRje5vJud3JlUnpPRE28owAAAA?rs=1&pid=ImgDetMain"
                        alt=""
                        className="header__notify-img"
                      />
                      <div className="header__notify-info">
                        <span className="header__notify-name">
                          Stranger Things
                        </span>
                        <span className="header__notify-description">
                          Season 5 now available
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="header__notify-item header__notify-item--viewed">
                    <a href="" className="header__notify-link">
                      <img
                        src="https://th.bing.com/th/id/OIP.aRje5vJud3JlUnpPRE28owAAAA?rs=1&pid=ImgDetMain"
                        alt=""
                        className="header__notify-img"
                      />
                      <div className="header__notify-info">
                        <span className="header__notify-name">
                          Stranger Things
                        </span>
                        <span className="header__notify-description">
                          Season 5 now available
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="header__navbar-item header__navbar-user">
              {" "}
              <img
                onClick={() => history.push("/profile")}
                alt=""
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/017lok-ons-mas-dsk-02-0-1574179195.jpg"
                className="header__navbar-user-img"
              />
              <FontAwesomeIcon className="header-icon" icon={faAngleDown} />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
