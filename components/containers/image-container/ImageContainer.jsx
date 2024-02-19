import Image from 'next/image'
import styles from './ImageContainer.module.scss'
import GenericContainer from '../generic-container/GenericContainer'
import NameContainer from '../name-container/NameContainer'
import SmallIcon from '@/components/icons/small-icon/SmallIcon'

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
  return (
    <GenericContainer className={bg1}>
      <SmallIcon
        xmlns={xmlns1}
        icon={icon1}
        viewBox={viewBox1}
        className={iconBg1}
        iconFill={iconFill1}
      />
      <SmallIcon
        xmlns={xmlns2}
        icon={icon2}
        viewBox={viewBox2}
        className={iconBg2}
        iconFill={iconFill2}
      />
      <div className={`${styles.pictureContainer} ${bg2}`}>
        <Image src={src} alt={alt} />
      </div>
      <NameContainer className={bg3}>{title}</NameContainer>
    </GenericContainer>
  )
}
