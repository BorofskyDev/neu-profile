import styles from './SmallTitle.module.scss'

export default function SmallTitle({ children, className }) {
  return <h3 className={`${styles.smallTitle} ${className}`}>{children}</h3>
}
