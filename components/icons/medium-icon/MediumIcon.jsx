import styles from './MediumIcon.module.scss'
import MediumIconImg from './medium-icon-img/MediumIconImg'

export default function MediumIcon({icon, className }) {
  const iconClasses = `${styles.mediumIcon} ${className || ''}`

  return <div className={iconClasses}><MediumIconImg icon={icon} /></div>
}
