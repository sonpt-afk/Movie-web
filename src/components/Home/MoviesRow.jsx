import React from "react";
import { useEffect, useState } from "react";
import "~/assets/css/MoviesRow.css";
import axios from "~/axios";
function MoviesRow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/w500/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);
  return (
    <div className="movie-row-container">
      <h2>{title}</h2>
      <div className="movie-row-posters">
        {/*some row posters */}
        {movies.map((movie) => (
          <img
            className="movie-row-poster"
            key={`${movie.id}`}
            src={`${base_url}${movie.poster_path}`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}

export default MoviesRow;
