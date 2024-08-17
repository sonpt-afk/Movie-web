import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'src/assets/css/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Input } from 'antd'
import Search from './Search'
import useDimensions from 'src/hooks/useDimensions'
import styles from 'src/assets/css/Navbar.module.scss'

const Navbar = () => {
  const navigate = useNavigate()

  const handleScroll = () => {
    const navbar = document.querySelector('.header')
    if (window.scrollY > 20) {
      navbar.classList.add('navbar-scrolled')
    } else {
      navbar.classList.remove('navbar-scrolled')
    }
  }

  window.addEventListener('scroll', handleScroll)

  return (
    <>
      <div className='header'>
        <div className='grid wide'></div>
        <nav className='header__navbar'>
          <ul className='header__navbar-list'>
            <li className='header__navbar-item'>
              <img
                onClick={() => {
                  navigate('/home')
                }}
                className='logo '
                src='https://media.twofour54.com/sites/5/2019/10/netflix-768x583.jpg'
                alt=''
              />
            </li>
            <li className='header__navbar-item active'>
              <Link to='/home'>Trang chủ</Link>
            </li>
            <li className='header__navbar-item'>
              <a href=''>Phim T.hình</a>
            </li>
            <li className='header__navbar-item'>
              <a href=''>Phim</a>
            </li>
            <li className='header__navbar-item'>
              <a href=''>Mới & Phổ biến</a>
            </li>
            <li className='header__navbar-item'>
              <a href=''>Danh sách của tôi</a>
            </li>
            <li className='header__navbar-item'>
              <a href=''>Duyệt tìm theo ngôn ngữ</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar
