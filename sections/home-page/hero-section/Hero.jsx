import styles from './Hero.module.scss'
import HeroContent from './content/HeroContent'
import HeroImage from './image/HeroImage'

export default function Hero() {
    return (
        <section className={styles.hero}> 
        <HeroContent className='light-bg-blue' />
        <HeroImage className='light-bg-green' />
        </section>
    )
}