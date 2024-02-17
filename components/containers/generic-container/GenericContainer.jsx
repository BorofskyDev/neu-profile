import style from './GenericContainer.module.scss'

export default function GenericContainer({ children, className }) {
  const containerClasses = `${style.genericContainer} ${className || ''}`

  return <div className={containerClasses}>{children}</div>
}
