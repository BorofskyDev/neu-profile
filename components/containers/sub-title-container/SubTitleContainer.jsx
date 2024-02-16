import styles from './SubTitleContainer.module.scss'

export default function SubTitleContainer({ children, className }) {
  const containerClasses = `${styles.subTitleContainer} ${className || ''}`

  return <div className={containerClasses}>{children}</div>
}
