import React, { useEffect } from 'react'
import Login from './Welcome/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { auth } from 'src/firebase'
import Home from './Home/Home'
import Register from './Welcome/Register'
import { useDispatch, useSelector } from 'react-redux'
import { login } from 'src/userSlice'
import Profile from './Home/Profile'
function App() {
  // const user = useSelector((state) => state.user.user)
  const user = null
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        console.log(userAuth)
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          })
        )
      } else {
        //logged out
      }
    })
    return unsubscribe
  }, [])
  return (
    <>
      <div className='app'>
        <BrowserRouter>
          <Routes>
            {!user ? (
              <Route path='/' element={<Register />} />
            ) : (
              <>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
