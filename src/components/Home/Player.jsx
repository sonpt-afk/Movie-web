import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import 'src/assets/css/Player.css'
import axios from 'axios'
import { Button } from 'antd'
import moment from 'moment'

const Player = () => {
  const { id } = useParams()
  const nav = useNavigate()
  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    typeof: ''
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2Y1NzhiMzBkZGJjYTNmNjE0NWU0NzdiYzQxOTk1MyIsIm5iZiI6MTcyMzgxNDM0OS45MTMyMTcsInN1YiI6IjY2YmY1MGVlNTU5ZmViY2M2MWFkNmQ4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DAH0UIh2Wwmec9ypDPYSkxLipbeOf89zzSeOXI4Jk10'
    }
  }

  useEffect(() => {
    console.log('id', id)
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then((response) => response.json())

      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err))
  })

  return (
    <>
    <Button  className='back-btn' onClick={()=>{
nav('/home')
    }}>Quay về trang chủ</Button>
    <div className='player'>

      <iframe
        width='80%'
        height='80%'
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title='trailer'
        allowFullScreen
        frameborder='0'
      ></iframe>
      <div className='player-info text-white'>
        
        <b>{apiData.name}</b>
        <p className="infoHeading">Ngày chiếu phim: {moment(apiData.published_at).format('DD-MM-YYYY hh:mm A')}</p>
      </div>
    </div>
    </>
  )
}

export default Player
