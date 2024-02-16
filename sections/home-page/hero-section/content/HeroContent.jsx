import MainTitle from '@/components/typography/headers/main-title/MainTitle'
import styles from './HeroContent.module.scss'
import SubTitleContainer from '@/components/containers/sub-title-container/SubTitleContainer'

export default function HeroContent({ className }) {
  const containerClasses = `${styles.heroContent} ${className || ''}`

  return (
    <div className={containerClasses}>
       <MainTitle>Hello!</MainTitle>
       <p>My name is <span>Joel</span></p>
       <p>I am a...</p>
       <SubTitleContainer>Fullstack Developer</SubTitleContainer>
    </div>
  )
}
