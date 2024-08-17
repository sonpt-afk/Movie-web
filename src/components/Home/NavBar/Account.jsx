import useDimensions from 'src/hooks/useDimensions'
import { useNavigate } from 'react-router-dom'
import { Input } from 'antd'
import Search from './Search'
import 'src/assets/css/Navbar.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Account = () => {
  const navigate = useNavigate()
  return (
    <div>
      <ul className='header__navbar-list-right'>
        <li className='header__navbar-item header__navbar-user' onClick={() => navigate('/profile')}>
          <img
            alt=''
            src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/017lok-ons-mas-dsk-02-0-1574179195.jpg'
            className='header__navbar-user-img'
          />
          <FontAwesomeIcon className='header-icon' icon={faAngleDown} />
        </li>
      </ul>
    </div>
  )
}

export default Account
