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
        xmlns={icons.sunflower.xmlns}
        icon={icons.sunflower.path}
        viewBox={icons.sunflower.viewBox}
        iconBg='bg-red'
        fill='fill-light-blue'

      />
    </div>
  )
}
