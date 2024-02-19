import joelKid from '@/assets/images/joel-kid.png'
import ImageContainer from '@/components/containers/image-container/ImageContainer'
import { icons } from '@/components/icons/icons'
import styles from './HeroImage.module.scss'

export default function HeroImage({ className }) {
  const imageClasses = `${styles.heroImage} ${className || ''}`
  return (
    <div className={imageClasses}>
      <ImageContainer
        src={joelKid}
        alt='Joel Borofsky elementry school photo'
        bg1='light-bg-indigo'
        bg2='bg-blue'
        bg3='light-bg-yellow'
        fill1='fill-blue'
        fill2='fill-yellow'
        title='Joel Borofsky'
        icon1={icons.astronaut.path}
        xmlns1={icons.astronaut.xmlns}
        viewBox1={icons.astronaut.viewBox}
        iconBg1='bg-red'
        iconFill1='fill-light-blue'
        icon2={icons.sunflower.path}
        xmlns2={icons.sunflower.xmlns}
        viewBox2={icons.sunflower.viewBox}
        iconBg2='bg-indigo'
        iconFill2='fill-light-yellow'
      />
    </div>
  )
}
