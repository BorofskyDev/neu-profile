import GenericContainer from '@/components/containers/generic-container/GenericContainer'
import SmallTitle from '@/components/typography/headers/small-title/SmallTitle'
import ContentBox from '@/components/typography/content/ContentBox'
import SmallIcon from '@/components/icons/small-icon/SmallIcon'
import styles from './AboutCard.module.scss'

export default function AboutCard({ title, description, icon, iconbg, bg1, bg2 }) {
    return (
      <GenericContainer>
        <SmallIcon
          xmlns={xmlns1}
        //   icon={icon1}
          viewBox={viewBox1}
        //   className={`${iconBg1} ${iconStyles.left}`}
          iconFill={iconFill1}
        />
        <SmallTitle className={styles.title}>{title}</SmallTitle>
        <ContentBox>{description}</ContentBox>
      </GenericContainer>
    )
    }