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
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import userSlice from "~/userSlice";
function Home() {
  const API_KEY = "36ee3b04e4f7ab80bdffd6e940ec21b1";

  // Clean up the event listener on component unmount
  return (
    <>
      <div className="app">
        <Navbar></Navbar>
        <Banner></Banner>
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
    </>
  );
}

export default Home;
