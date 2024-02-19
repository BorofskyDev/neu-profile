import style from './SmallIcon.module.scss'
import SmallIconImg from './small-icon-img/SmallIconImg'

export default function SmallIcon({ icon, viewBox, xmlns, iconFill, className }) {
  const iconClasses = `${style.smallIcon} ${className || ''}`

  return (
    <div className={iconClasses}>
        <SmallIconImg icon={icon} viewBox={viewBox} xmlns={xmlns} iconFill={iconFill} />
    </div>
  )
}