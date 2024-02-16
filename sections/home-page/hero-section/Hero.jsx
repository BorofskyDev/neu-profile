import styles from './Hero.module.scss'
import HeroContent from './content/HeroContent'

export default function Hero() {
    return (
        <section className={styles.hero}> 
        <HeroContent />
        </section>
    )
}