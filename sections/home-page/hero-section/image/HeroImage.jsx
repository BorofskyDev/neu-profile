import styles from './HeroImage.module.scss'

export default function HeroImage({ children, className }) {
    const imageClasses = `${styles.heroImage} ${className || ''}`
    
    return <div className={imageClasses}>{children}</div>
    }