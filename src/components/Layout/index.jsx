import React from 'react'
import NavBar from '../Home/NavBar'

const SCROLL_LIMIT = 80

const Layout = ({ children }) => {
  const isScrolled = useScrollLimit(SCROLL_LIMIT)

  return (
    <div className={styles.container}>
      <NavBar isScrolled={isScrolled} />
      {children}
    </div>
  )
}

export default Layout
