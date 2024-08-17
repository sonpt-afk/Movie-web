import React, { useContext, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Input } from 'antd'
import _ from 'lodash'
import useDimensions from 'src/hooks/useDimensions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Search = ({ onSearch }) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2Y1NzhiMzBkZGJjYTNmNjE0NWU0NzdiYzQxOTk1MyIsIm5iZiI6MTcyMzgxNDM0OS45MTMyMTcsInN1YiI6IjY2YmY1MGVlNTU5ZmViY2M2MWFkNmQ4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DAH0UIh2Wwmec9ypDPYSkxLipbeOf89zzSeOXI4Jk10'
    }
  }

  const handleInputChange = _.debounce(async (e) => {
    try {
      await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${e.target.value}&include_adult=false&language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then((response) => onSearch(response.results))
        .catch((err) => console.error(err))
    } catch (error) {
      console.log(error)
    }
  }, 1000)

  return (
    <div>
      <Input placeholder='Tìm kiếm phim ...' onChange={handleInputChange} />
    </div>
  )
}

export default Search
