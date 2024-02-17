import Image from 'next/image'
import joelKid from '@/assets/images/joel-kid.png'
import styles from './ImageContainer.module.scss'

export default function ImageContainer({ children, className }) {
    const imageClasses = `${styles.imageContainer} ${className || ''}`
    
    return <div className={imageClasses}>
        <div>
            <Image src={joelKid} alt="Hero Image" layout="fill" objectFit="cover" />
        </div>
    </div>
    }