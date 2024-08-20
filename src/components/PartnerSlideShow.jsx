import React from 'react'
import styles from './PartnerSlideShow.module.css'

const PartnerSlideShow = ({ images }) => {
  return (
    <div className={styles.slideshowContainer}>
      <div className={styles.slideshowImages}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt='Partner Images'
            className={styles.slideshowImage}
          />
        ))}
      </div>
    </div>
  )
}

export default PartnerSlideShow
