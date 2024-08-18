import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'src/assets/css/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import useDimensions from 'src/hooks/useDimensions'
import styles from 'src/assets/css/Navbar.module.scss'

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
  const [isVisible, setIsVisible] = useState(false)
  const [open, setOpen] = useState(false)


  return (
    <>
      {isMobile || isTablet ? (
        <>
          <IoMenu onClick={showDrawer} className='text-5xl mx-3' />
          <Drawer onClose={onCloseDrawer} open={open}>
            <ul className='flex flex-col gap-10 w-fit p-4'>
              {browseList.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    navigate('/home')
                    onCloseDrawer()
                  }}
                  className='h-1/4 p-4 bg-red-500 text-bold text-4xl text-white'
                >
                  {item}
                </li>
              ))}
            </ul>
          </Drawer>
        </>
      ) : (
        browseList.map((item, index) => (
          <li
            key={index}
            className={styles.options}
            onClick={() => {
              navigate('/home')
              onCloseDrawer()
            }}
          >
            {item}
          </li>
        ))
      )}
    </>
  )
}

export default Menu
