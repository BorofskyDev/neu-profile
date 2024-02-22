import { icons } from '@/components/icons/icons'
import SectionHeader from '@/components/header/section-header/SectionHeader'
import AboutCard from './about-card/AboutCard'
import styles from './About.module.scss'

export default function About() {
  const developer = icons.developer
  const designer = icons.designer
  const business = icons.business
  return (
    <section className={styles.about}>
      <SectionHeader className='light-bg-blue'>About</SectionHeader>
      <AboutCard
        bg1='light-bg-yellow'
        xmlns={developer.xmlns}
        icon={developer.path}
        viewBox={developer.viewBox}
        iconBg='bg-black'
        iconFill='fill-green'
        bg3='light-bg-indigo'
        title='Developer'
        description='Next.js, React, Node.js, Express.js, MongoDB, and more!'
      />
      <AboutCard
        bg1='light-bg-blue'
        xmlns={designer.xmlns}
        icon={designer.path}
        viewBox={designer.viewBox}
        iconBg='bg-indigo'
        iconFill='fill-light-orange'
        bg3='light-bg-pink'
        title='Designer'
        description='Figma, SCSS, Framer Motion, and an obsession with accessibility!'
      />
      <AboutCard
        bg1='light-bg-green'
        xmlns={business.xmlns}
        icon={business.path}
        viewBox={business.viewBox}
        iconBg='bg-purple'
        iconFill='fill-light-yellow'
        bg3='light-bg-orange'
        title='Business'
        description='Financial Sales, Service, Investor Relations, even Retail!!'
      />
    </section>
  )
}
