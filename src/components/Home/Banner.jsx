import React, { useEffect, useState } from 'react'
import axios from 'src/axios'
import requests from 'src/requests'
import 'src/assets/css/Banner.css'
import { Link, useNavigate } from 'react-router-dom'

function Banner() {
  const [movie, setMovie] = useState([])
  const nav = useNavigate()

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchActionMovies)
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)])
      return request
    }

    fetchData()

    console.log('movie', movie)
  }, [])

  return (
    <div
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center'
      }}
    >
      <div className='banner__contents'>
        <p className='banner__contents-title '>{movie?.title || movie?.name || movie?.original_name}</p>

        <p className='banner__description '>{movie?.overview}</p>
        <div className='banner__buttons'>
          <button
            className='banner__button btn-play'
            onClick={() => {
              nav(`/player/${movie?.id}`)
              console.log('sadfds')
            }}
          >
            Phát
          </button>
          <button className='banner__button btn-info'>Thông tin khác</button>
        </div>
      </div>
    </div>
  )
}

export default Banner
