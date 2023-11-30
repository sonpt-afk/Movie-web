import React, { useEffect, useState } from "react";
import axios from "~/axios";
import requests from "~/requests";
import "~/assets/css/Banner.css";
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }

    fetchData();
  }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__contents-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <h1 className="banner__description">{movie?.overview}</h1>
        <div className="banner__buttons">
          <button className="banner__button btn-play">Phát</button>
          <button className="banner__button btn-info">Thông tin khác</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
