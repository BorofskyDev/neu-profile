import Image from 'next/image'
import styles from './ImageContainer.module.scss'
import GenericContainer from '../generic-container/GenericContainer'
import NameContainer from '../name-container/NameContainer'

export default function ImageContainer({ src, alt, bg1, bg2, bg3, title }) {
  return (
    <GenericContainer className={bg1}>
      <div className={`${styles.pictureContainer} ${bg2}`}>
        <Image src={src} alt={alt} />
      </div>
      <NameContainer className={bg3}>{title}</NameContainer>
    </GenericContainer>
  )
}
