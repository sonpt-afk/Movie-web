import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from 'src/redux/store'
import App from './components/App.jsx'
import 'src/assets/css/global.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Welcome/Login.jsx'
import Profile from './components/Home/Profile.jsx'
import Home from './components/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/home',
    element: <Home />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
