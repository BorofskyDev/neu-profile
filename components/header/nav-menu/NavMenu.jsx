import NavLink from '@/components/links/nav-link/NavLink'
import styles from './NavMenu.module.scss'

export default function NavMenu() {
  return (
    <nav className={styles.navMenu}>
      <ul>
        <NavLink href='/'>Home</NavLink>
        <NavLink href='/about'>About</NavLink>
        <NavLink href='/projects'>Projects</NavLink>
        <NavLink href='/contact'>Contact</NavLink>
      </ul>
    </nav>
  )
}
