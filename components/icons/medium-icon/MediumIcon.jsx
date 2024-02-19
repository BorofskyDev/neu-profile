'use client'
import { motion } from 'framer-motion'
import styles from './MediumIcon.module.scss'
import MediumIconImg from './medium-icon-img/MediumIconImg'

export default function MediumIcon({ icon, viewBox, xmlns, className }) {
  const iconClasses = `${styles.mediumIcon} ${className || ''}`

  return (
    <motion.div
      className={iconClasses}
      initial={{ scale: 0 }}
      animate={{ rotate: 340, scale: 1 }}
      transition={{ type: 'spring', stiffness: 160, damping: 20 }}
    >
      <MediumIconImg icon={icon} viewBox={viewBox} xmlns={xmlns} />
    </motion.div>
  )
}
