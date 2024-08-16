import React, { useEffect } from 'react'
import Login from './Welcome/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Register from './Welcome/Register'
import { useDispatch, useSelector } from 'react-redux'
import { login } from 'src/userSlice'
import Profile from './Home/Profile'
function App() {
  // const user = useSelector((state) => state.user.user)
  const user = null
  const dispatch = useDispatch()

  return (
    <>
      <div className='app'>{!user && <Register />} </div>
    </>
  )
}

export default App
