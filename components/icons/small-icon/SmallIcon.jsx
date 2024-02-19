import { motion } from 'framer-motion'
import style from './SmallIcon.module.scss'
import SmallIconImg from './small-icon-img/SmallIconImg'

export default function SmallIcon({
  icon,
  viewBox,
  xmlns,
  iconFill,
  className,
}) {
  const iconClasses = `${style.smallIcon} ${className || ''}`

  const isLeft = className.includes(style.left)


  return (
    <motion.div
      className={iconClasses}
      initial={{ x: isLeft ? -50 : 50, opacity: 0 }}
      whileInView={{ rotate: isLeft ? 325 : -315, x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <SmallIconImg
        icon={icon}
        viewBox={viewBox}
        xmlns={xmlns}
        iconFill={iconFill}
      />
    </motion.div>
  )
}
