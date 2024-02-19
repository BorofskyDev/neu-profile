import styles from './SectionHeader.module.scss'

export default function SectionHeader({ children, className }) {
  return (
    <h2 className={`${styles.sectionHeader} ${className}`}>
      <span>{children}</span>
    </h2>
  )
}
