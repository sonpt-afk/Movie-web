import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import 'src/assets/css/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Input } from 'antd'
import Search from './Search'
import useDimensions from 'src/hooks/useDimensions'
import styles from 'src/assets/css/Navbar.module.scss'
import { motion } from 'framer-motion'
import Dialog from '../Dialog'

import { Drawer } from 'antd'
import { IoMenu } from 'react-icons/io5'

const browseList = ['Trang chủ', 'Phim T.hình', 'Phim', 'Mới & Phổ biến', 'Danh sách của tôi']
const Menu = () => {
  const navigate = useNavigate()
  const showDrawer = () => {
    setOpen(true)
  }
  const onCloseDrawer = () => {
    setOpen(false)
  }
  const { isMobile, isTablet } = useDimensions()
  const menuRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [open, setOpen] = useState(false)

  const onMenu = () => {
    setIsVisible(true)
  }
  const onClose = () => {
    setIsVisible(false)
  }

  return (
    <>
      {isMobile || isTablet ? (
        <>
          <IoMenu onClick={showDrawer} className='text-5xl' />
          <Drawer onClose={onCloseDrawer} open={open}>
            <ul className='list-genre flex flex-col gap-10 '>
              {browseList.map((item, index) => (
                <li
                  key={index}
                  className={styles.options}
                  onClick={() => {
                    navigate('/home')
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </Drawer>
        </>
      ) : (
        browseList.map((item, index) => (
          <li key={index} className={styles.options}>
            {item}
          </li>
        ))
      )}
    </>
  )
}

export default Menu
