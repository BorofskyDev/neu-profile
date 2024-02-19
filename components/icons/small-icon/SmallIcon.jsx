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

  const variants = {
    initial: { x: isLeft ? -50 : 50, opacity: 0 },
    animate: {rotate: isLeft ? 325 : -315, x: 0, opacity: 1 },
  }

  return (
    <motion.div
      className={iconClasses}
      initial='initial'
      animate='animate'
      variants={variants}
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
