import joelKid from '@/assets/images/joel-kid.png'
import styles from './HeroImage.module.scss'
import ImageContainer from '@/components/containers/image-container/ImageContainer'

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
        title='Joel Borofsky'
      />
    </div>
  )
}
