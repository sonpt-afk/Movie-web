import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faMagnifyingGlass,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import "~/assets/css/grid.css";
import "~/assets/css/base.css";
import "~/assets/css/responsive.css";
import "~/assets/css/Home.css";
import "./MoviesRow";
import { useState, useEffect } from "react";
import MoviesRow from "./MoviesRow";
import requests from "~/requests";
import Banner from "./Banner";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import appSlice from "~/appSlice";
function Home() {
  const API_KEY = "36ee3b04e4f7ab80bdffd6e940ec21b1";

  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const moviesList = useSelector((state) => state.app.list);
  const handleSearch = (e) => {
    e.preventDefault();
    // useEffect(() => {
    //   axios({
    //     method: "GET",
    //     url: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${input}`,
    //   });
    // }, [searchResult]);
    setSearchQuery(input);
  };

  const filteredMovies = moviesList.filter((movie) => {
    movie.text.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleScroll = () => {
    const navbar = document.querySelector(".header__navbar");
    if (window.scrollY > 20) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);

  // Clean up the event listener on component unmount
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
                <a href="" onClick={handleSearch}>
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
                <a href="">
                  <FontAwesomeIcon className="header-icon" icon={faAngleDown} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="body">
          {/* <div className="main-film__featured">
            <img
              src="https://i.pinimg.com/736x/d1/49/8d/d1498d73f0ded562696baf807bb19ef8.jpg"
              alt=""
            />
          </div> */}
          <Banner></Banner>
          <div>
            <MoviesRow
              title="Netflix Originals"
              fetchUrl={requests.fetchNetflixOriginals}
            ></MoviesRow>
            <MoviesRow
              title="Trending Now"
              fetchUrl={requests.fetchTrending}
            ></MoviesRow>
            <MoviesRow
              title="Top Rated"
              fetchUrl={requests.fetchTopRated}
            ></MoviesRow>
            <MoviesRow
              title="Action Movies"
              fetchUrl={requests.fetchActionMovies}
            ></MoviesRow>
            <MoviesRow
              title="Comedy Movies"
              fetchUrl={requests.fetchComedyMovies}
            ></MoviesRow>
            <MoviesRow
              title="Horror Movies"
              fetchUrl={requests.fetchHorrorMovies}
            ></MoviesRow>
            <MoviesRow
              title="Romance Movies"
              fetchUrl={requests.fetchRomanceMovies}
            ></MoviesRow>
            <MoviesRow
              title="Documentaries"
              fetchUrl={requests.fetchDocumentaries}
            ></MoviesRow>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </>
  );
}

export default Home;
