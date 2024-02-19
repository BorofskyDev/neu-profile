import styles from './SectionColumn.module.scss'

export default function SectionColumn({ children, className }) {
  return (
    <section className={`${styles.sectionColumn} ${className}`}>
      {children}
    </section>
  )
}
