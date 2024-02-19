import MainTitle from '@/components/typography/headers/main-title/MainTitle'
import SubTitleContainer from '@/components/containers/sub-title-container/SubTitleContainer'
import MediumIcon from '@/components/icons/medium-icon/MediumIcon'
import { icons } from '@/components/icons/icons'
import styles from './HeroContent.module.scss'

export default function HeroContent({ className }) {
  const containerClasses = `${styles.heroContent} ${className || ''}`
  const notBad = icons.notBad

  return (
    <div className={containerClasses}>
      <MainTitle>Hello!</MainTitle>
      <p className='fs-600'>
        My name is <span className='accent fs-700'>Joel</span>
      </p>
      <p className='fs-600'>I am a...</p>
      <SubTitleContainer className='accent light-bg-red fs-600 relative'>
        Fullstack Developer
        <MediumIcon
          icon={notBad.path}
          viewBox={notBad.viewBox}
          xmlns={notBad.xmlns}
          className='absolute bg-default fill-blue rotate1'
        />
      </SubTitleContainer>
    </div>
  )
}
