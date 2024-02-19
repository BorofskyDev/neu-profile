
import styles from './SmallIconImg.module.scss'

export default function SmallIconImg({ icon, viewBox, xmlns, iconFill, className }) {
    const iconClasses = `${styles.smallIconImg} ${className || ''}`
    
    return (
      <svg viewBox={viewBox} xmlns={xmlns} className={iconClasses}>
        <path d={icon} className={iconFill} />
      </svg>
    )
}