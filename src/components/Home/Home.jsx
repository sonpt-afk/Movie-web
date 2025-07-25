import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import 'src/assets/css/base.css'
import 'src/assets/css/Home.css'
import './MoviesRow'
import { useState, useEffect, createContext, useContext } from 'react'
import MoviesRow from './MoviesRow'
import requests from 'src/requests'
import Banner from './Banner'
import axios from 'axios'
import Navbar from './NavBar'
import { useSelector, useDispatch } from 'react-redux'
import userSlice from 'src/userSlice'
import Search from './NavBar/Search'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'

function Home() {
  const [resultsFromSearch, setResultsFromSearch] = useState(null)
  const handleResultsFromSearch = (results) => {
    setResultsFromSearch(results)
    console.log('resultsFromSearch', results)
  }
  const base_url = 'https://image.tmdb.org/t/p/original/'

  const handleClick = (id) => {
    nav(`/player/${id}`)
  }
  const nav = useNavigate()

  return (
    <>
      <div className='app '>
        <Navbar className='fixed' onSearch={handleResultsFromSearch}></Navbar>
        {resultsFromSearch ? (
          resultsFromSearch?.length > 0 ? (
            <div className=' relative top-1/3 transform -translate-y-1/2 		'>
              <div className='absolute flex flex-wrap  '>
                {resultsFromSearch.map((movie) => (
                  <img
                    loading='eager'
                    className='movie-row-poster'
                    key={`${movie.id}`}
                    src={`${base_url}${movie.poster_path}`}
                    alt={movie.title}
                    onClick={() => {
                      handleClick(movie.id)
                    }}
                  />
                ))}
              </div>
            </div>
          ) : (
            <h1 className='font-bold text-5xl text-center my-9	'>Không có kết quả trùng khớp</h1>
          )
        ) : (
          <>
            <Banner></Banner>
            <div className='movies-rows-container'>
              <MoviesRow title='Action Movies' fetchUrl={requests.fetchActionMovies}></MoviesRow>
              <MoviesRow title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}></MoviesRow>
              <MoviesRow title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}></MoviesRow>
              <MoviesRow title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}></MoviesRow>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Home
