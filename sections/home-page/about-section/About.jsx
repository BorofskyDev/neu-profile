import SectionHeader from '@/components/header/section-header/SectionHeader'
import styles from './About.module.scss'
import AboutCard from './about-card/AboutCard'

export default function About() {
  return (
    <section className={styles.about}>
      <SectionHeader className='light-bg-blue'>About</SectionHeader>
    <AboutCard title='Developer' description='Next.js, React, Node.js, Express.js, MongoDB, and more!' icon='' iconbg='bg1' bg1='bg1' bg2='bg2' />
    </section>
  )
}
