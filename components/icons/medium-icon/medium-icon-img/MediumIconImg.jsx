import styles from './MediumIconImg.module.scss'

export default function MediumIconImg({ icon, className }) {
    const iconClasses = `${styles.mediumIconImg} ${className || ''}`
    
    return (
        <svg className={iconClasses}>
            <path d={icon} />
        </svg>
    )
    }