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
import Player from './components/Home/Player.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './redux/store.js'
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
  },
  {
    path: '/player/:id',
    element: <Player />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
