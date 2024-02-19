import React from 'react'
import styles from './Banner.module.scss'

 const Banner = React.forwardRef((props, bannerRef) => {
    return (
        <div className={styles.banner} ref={bannerRef}>
            <h1>Joel Borofsky</h1>
        </div>
    )
})

export default Banner