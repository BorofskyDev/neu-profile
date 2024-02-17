import Image from 'next/image'
import styles from './ImageContainer.module.scss'
import GenericContainer from '../generic-container/GenericContainer'

export default function ImageContainer({ src, alt, bg1, bg2 }) {
  return (
    <GenericContainer className={bg1}>
      <div className={`${styles.pictureContainer} ${bg2}`}>
        <Image src={src} alt={alt} />
      </div>
    </GenericContainer>
  )
}
