import useDimensions from 'src/hooks/useDimensions'
import { useNavigate } from 'react-router-dom'
import { Input } from 'antd'
import Search from './Search'
import 'src/assets/css/Navbar.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { Tooltip } from 'antd'
import { FaUserCircle } from 'react-icons/fa'
const Account = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.auth.user)
  console.log('user', user)

  return (
    <div>
      <ul className='header__navbar-list-right'>
        <li className='header__navbar-item header__navbar-user gap-3' onClick={() => navigate('/profile')}>
          <FaUserCircle className='text-4xl' />
          <p className='text-2xl'>{user?.email?.split('@')[0]}</p>
        </li>
      </ul>
    </div>
  )
}

export default Account
