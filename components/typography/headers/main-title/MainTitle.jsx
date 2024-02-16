import styles from './MainTitle.module.scss'

export default function MainTitle({ children, className }) {
  const titleClasses = `${styles.mainTitle} ${className || ''}`

  return <h1 className={titleClasses}>{children}</h1>
}
