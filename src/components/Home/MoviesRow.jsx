import React from 'react'
import { useEffect, useState } from 'react'
import 'src/assets/css/MoviesRow.css'
import axios from 'src/axios'
import { Link, useNavigate } from 'react-router-dom'

import { Col, Row, Skeleton } from 'antd'

function MoviesRow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const nav = useNavigate()
  const base_url = 'https://image.tmdb.org/t/p/original/'
  const [size, setSize] = useState('default')

  useEffect(() => {
    function fetchData() {
      axios
        .get(fetchUrl)
        .then((res) => {
          setMovies(res.data.results)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          setLoading(false)
        })
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
    <>
      {loading ? (
        <div className='movie-row-container'>
          <h2 className='text-2xl	'>{title}</h2>
          <div className='movie-row-posters'>
            <Row gutter={[0, 15]} className=''>
              <Col span={3}>
                <Skeleton.Image active={loading} size={size} />
              </Col>
              <Col span={3}>
                <Skeleton.Image active={loading} size={size} />
              </Col>
              <Col span={3}>
                <Skeleton.Image active={loading} size={size} />
              </Col>
              <Col span={3}>
                <Skeleton.Image active={loading} size={size} />
              </Col>
              <Col span={3}>
                <Skeleton.Image active={loading} size={size} />
              </Col>
              <Col span={3}>
                <Skeleton.Image active={loading} size={size} />
              </Col>
              <Col span={3}>
                <Skeleton.Image active={loading} size={size} />
              </Col>
              <Col span={3}>
                <Skeleton.Image active={loading} size={size} />
              </Col>
            </Row>
          </div>
        </div>
      ) : (
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
      )}
    </>
  )
}

export default MoviesRow
