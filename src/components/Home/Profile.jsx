import React from 'react'
import 'src/assets/css/Profile.css'
import { useNavigate } from 'react-router-dom'
import Navbar from './NavBar/Menu'
const Profile = () => {
  const navigate = useNavigate()
  return (
    <>
      <Navbar></Navbar>
      <div className='profile-page'>
        <div className='profile-container'>
          <h1 className='profile-age-title'>Thông tin tài khoản</h1>

          <div className='profile-container-info'>
            <div className='profile-container-ava-email 	'>
              <input className='profile-email' type='text' value='abc@mail.com' />
            </div>
            <h2 className='profile-current-plan'>Plans(Current Plan: premium)</h2>
            <p className='profile-renew-date'>Renewal date: 9/9/2024</p>
            <ul>
              <li className='profile-list-item'>
                <div className='profile-list-item-left'>
                  <p>Netflix Standard</p>
                  <span className='resolution'>1080p</span>
                </div>

                <button className='profile-list-item-subbtn'>Subscribe</button>
              </li>
              <li className='profile-list-item'>
                <div className='profile-list-item-left'>
                  <p>Netflix Basic</p>
                  <span className='resolution'>480p</span>
                </div>

                <button className='profile-list-item-subbtn'>Subscribe</button>
              </li>
              <li className='profile-list-item'>
                <div className='profile-list-item-left'>
                  <p>Netflix</p>
                  <span className='resolution'>4K+HDR</span>
                </div>

                <button className='profile-list-item-current-pack'>Current Package</button>
              </li>
            </ul>
            <button
              className='profile-signout-btn'
              onClick={() => {
                navigate.push('/')
              }}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
