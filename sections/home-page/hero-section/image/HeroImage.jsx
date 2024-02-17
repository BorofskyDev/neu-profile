import Image from 'next/image'
import joelKid from '@/assets/images/joel-school.png'
import styles from './HeroImage.module.scss'

export default function HeroImage({ children, className }) {
  const imageClasses = `${styles.heroImage} ${className || ''}`

  return (
    <div className={imageClasses}>
      <div className='light-bg-indigo'>
        <div className='bg-blue'>
          <Image width={100} height={130} src={joelKid} alt='Hero Image' />
        </div>
      </div>
    </div>
  )
}
