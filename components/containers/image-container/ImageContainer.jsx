'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import GenericContainer from '../generic-container/GenericContainer'
import NameContainer from '../name-container/NameContainer'
import SmallIcon from '@/components/icons/small-icon/SmallIcon'
import styles from './ImageContainer.module.scss'
import iconStyles from '@/components/icons/small-icon/SmallIcon.module.scss'

export default function ImageContainer({
  xmlns1,
  icon1,
  viewBox1,
  iconBg1,
  iconFill1,
  xmlns2,
  icon2,
  viewBox2,
  iconBg2,
  iconFill2,
  src,
  alt,
  bg1,
  bg2,
  bg3,
  title,
}) {
  const variants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <GenericContainer className={bg1}>
      <SmallIcon
        xmlns={xmlns1}
        icon={icon1}
        viewBox={viewBox1}
        className={`${iconBg1} ${iconStyles.left}`}
        iconFill={iconFill1}
      />
      <SmallIcon
        xmlns={xmlns2}
        icon={icon2}
        viewBox={viewBox2}
        className={`${iconBg2} ${iconStyles.right}`}
        iconFill={iconFill2}
      />
      <motion.div
        className={`${styles.pictureContainer} ${bg2}`}
        initial='initial'
        animate='animate'
        variants={variants}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Image height={1600} width={1200} src={src} alt={alt} />
      </motion.div>
      <NameContainer className={bg3}>{title}</NameContainer>
    </GenericContainer>
  )
}
