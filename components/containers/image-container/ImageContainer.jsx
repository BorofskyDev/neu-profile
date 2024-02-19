import Image from 'next/image'
import styles from './ImageContainer.module.scss'
import GenericContainer from '../generic-container/GenericContainer'
import NameContainer from '../name-container/NameContainer'
import SmallIcon from '@/components/icons/small-icon/SmallIcon'

export default function ImageContainer({
  xmlns,
  icon,
  viewBox,
  src,
  alt,
  bg1,
  bg2,
  bg3,
  title,
  iconBg,
  iconFill
 
}) {
  return (
    <GenericContainer className={bg1}>
      <SmallIcon xmlns={xmlns} icon={icon} viewBox={viewBox} className={`${iconBg} ${iconFill}`}  />
      <div className={`${styles.pictureContainer} ${bg2}`}>
        <Image src={src} alt={alt} />
      </div>
      <NameContainer className={bg3}>{title}</NameContainer>
    </GenericContainer>
  )
}
