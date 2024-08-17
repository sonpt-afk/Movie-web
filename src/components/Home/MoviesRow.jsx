import React from 'react'
import { useEffect, useState } from 'react'
import 'src/assets/css/MoviesRow.css'
import axios from 'src/axios'
import { Link, useNavigate } from 'react-router-dom'
function MoviesRow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([])
  const nav = useNavigate()
  const base_url = 'https://image.tmdb.org/t/p/original/'
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }

    fetchData()
  }, [fetchUrl])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  }

  const handleClick = (id) => {
    nav(`/player/${id}`)
  }
  return (
    <div className='movie-row-container'>
      <h2 className='text-2xl	'>{title}</h2>
      <div className='movie-row-posters'>
        {/*some row posters */}
        {movies.map((movie) => (
          <img
            className='movie-row-poster'
            key={`${movie.id}`}
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
            onClick={() => {
              handleClick(movie.id)
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default MoviesRow
