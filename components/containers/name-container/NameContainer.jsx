import style from './NameContainer.module.scss'

export default function NameContainer({ children, className }) {
    const containerClasses = `${style.nameContainer} ${className || ''}`
    
    return <div className={containerClasses}>{children}</div>
    }