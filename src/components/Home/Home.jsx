import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "~/assets/css/grid.css";
import "~/assets/css/base.css";
import "~/assets/css/responsive.css";
import "~/assets/css/Home.css";
function Home() {
  return (
    <>
      <div className="app">
        <div className="header">
          <div className="grid wide"></div>
          <nav className="header__navbar">
            <ul className="header__navbar-list">
              <li className="header__navbar-item">
                <a href="">
                  <img
                    className="logo"
                    src="https://media.twofour54.com/sites/5/2019/10/netflix-768x583.jpg"
                    alt=""
                  />
                </a>
              </li>
              <li className="header__navbar-item">
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
                <a href="">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </a>
              </li>
              <li className="header__navbar-item header__navbar-item--has-notify">
                <a href="">
                  <i className="fas fa-bell"></i>
                </a>
                <div className="header__notify">
                  <header className="header__notify-header">
                    <h3>Thông báo mới nhận</h3>
                  </header>
                  <ul className="header__notify-list">
                    <li className="header__notify-item header__notify-item--viewed">
                      <a href="" className="header__notify-link">
                        <img
                          src="https://stat.ameba.jp/user_images/20220928/17/kuroame-amigo/b2/85/p/o0712088415180987424.png"
                          alt=""
                          className="header__notify-img"
                        />
                        <div className="header__notify-info">
                          <span className="header__notify-name">
                            Iphone 14 chính hãng
                          </span>
                          <span className="header__notify-description">
                            Iphone 14 chính hãng giá chỉ từ 20 triệu đồng
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="header__navbar-item header__navbar-user">
                <a href="">
                  <i className="fas fa-user"></i>
                  <i className="fas fa-angle-down"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="body"></div>
        <div className="footer"></div>
      </div>
    </>
  );
}

export default Home;
