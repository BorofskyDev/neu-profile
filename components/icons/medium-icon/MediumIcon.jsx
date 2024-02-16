import styles from './MediumIcon.module.scss'

export default function MediumIcon({ children, className }) {
  const iconClasses = `${styles.mediumIcon} ${className || ''}`

  return <div className={iconClasses}>{children}</div>
}
