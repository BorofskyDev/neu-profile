import MainTitle from '@/components/typography/headers/main-title/MainTitle'
import styles from './HeroContent.module.scss'
import SubTitleContainer from '@/components/containers/sub-title-container/SubTitleContainer'

export default function HeroContent({ className }) {
  const containerClasses = `${styles.heroContent} ${className || ''}`

  return (
    <div className={containerClasses}>
       <MainTitle>Hello!</MainTitle>
       <p className='fs-600'>My name is <span className='accent fs-700'>Joel</span></p>
       <p className='fs-600'>I am a...</p>
       <SubTitleContainer className='accent light-bg-red fs-700'>Fullstack Developer</SubTitleContainer>
    </div>
  )
}
