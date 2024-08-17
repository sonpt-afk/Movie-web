import Menu from './Menu'
import Search from './Search'
import { useState } from 'react'
import Account from './Account'
import React from 'react'
import styles from 'src/assets/css/Navbar.module.scss'
import { motion } from 'framer-motion'

const NavBar = ({ onSearch, isScrolled }) => {
  const navBackground = isScrolled ? styles.navBar__filled : styles.navBar

  return (
    <motion.div
      className={navBackground}
      initial='hidden'
      animate='visible'
      exit='hidden'
      variants={{
        hidden: { opacity: 0, transition: { duration: 0.2 } },
        visible: { opacity: 1, transition: { duration: 0.2 } }
      }}
    >
      <div className={styles.navBar}>
        <div className={styles.navBar__left}>
          <Menu />
        </div>
        <div className={styles.navBar__right}>
          <Search onSearch={onSearch} />

          <Account />
        </div>
      </div>
    </motion.div>
  )
}

export default NavBar
