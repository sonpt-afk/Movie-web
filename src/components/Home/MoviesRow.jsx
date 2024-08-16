import React from 'react'
import { useEffect, useState } from 'react'
import 'src/assets/css/MoviesRow.css'
import axios from 'src/axios'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
function MoviesRow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')

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

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'))
        })
        .catch((error) => console.log(error))
    }
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
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default MoviesRow
