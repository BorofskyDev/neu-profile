'use client'
import GenericContainer from '@/components/containers/generic-container/GenericContainer'
import SmallTitle from '@/components/typography/headers/small-title/SmallTitle'
import ContentBox from '@/components/typography/content/ContentBox'
import SmallIcon from '@/components/icons/small-icon/SmallIcon'
import styles from './AboutCard.module.scss'

export default function AboutCard({
  bg1,
  xmlns,
  icon,
  viewBox,
  iconBg,
  iconFill,
  bg3,
  title,
  description,
}) {
  return (
    <GenericContainer className={`${bg1} ${styles.aboutCard}`}>
      <SmallIcon
        xmlns={xmlns}
        icon={icon}
        viewBox={viewBox}
        className={`${iconBg} absolute left-0 top-0`}
        iconFill={iconFill}
      />
      <SmallTitle className={bg3}>{title}</SmallTitle>
      <ContentBox>{description}</ContentBox>
    </GenericContainer>
  )
}
