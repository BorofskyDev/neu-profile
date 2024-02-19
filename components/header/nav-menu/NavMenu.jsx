import React from 'react'
import NavLink from '@/components/links/nav-link/NavLink'
import styles from './NavMenu.module.scss'

const NavMenu = React.forwardRef((props, navbarRef) => {
  const { isSticky } = props
  return (
    <nav
      className={`${styles.navMenu} ${isSticky ? styles.sticky : ''}`}
      ref={navbarRef}
    >
      <ul>
        <NavLink href='/'>Home</NavLink>
        <NavLink href='/about'>About</NavLink>
        <NavLink href='/projects'>Projects</NavLink>
        <NavLink href='/contact'>Contact</NavLink>
      </ul>
    </nav>
  )
})


export default NavMenu