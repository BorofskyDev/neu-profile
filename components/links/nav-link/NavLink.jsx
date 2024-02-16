import Link from 'next/link'
import styles from './NavLink.module.scss'

export default function NavLink({ href, className, children }) {
  const linkClasses = `${styles.navLink} ${className || ''}`

  return (
    <li className={linkClasses}>
      <Link href={href}>{children}</Link>
    </li>
  )
}