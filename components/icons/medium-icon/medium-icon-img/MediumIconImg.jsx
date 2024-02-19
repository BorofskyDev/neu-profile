import styles from './MediumIconImg.module.scss'

export default function MediumIconImg({ icon, viewBox, className }) {
    const iconClasses = `${styles.mediumIconImg} ${className || ''}`
    
    return (
        <svg viewBox={viewBox} className={iconClasses}>
            <path d={icon} />
        </svg>
    )
    }