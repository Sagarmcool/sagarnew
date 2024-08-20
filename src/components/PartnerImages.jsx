import React from 'react'
import styles from './PartnerImages.module.css'
import PartnerSlideShow from './PartnerSlideShow'

const PartnerImages = () => {
  const Images = [
    '/images/AWS_Home.svg',
    '/images/IBM_Home.svg',
    '/images/Miscrosoft_Home.svg',
    '/images/ArcelorMittal.png',
    '/images/Caltech_Home.svg',
    '/images/Evernorth.png',
    '/images/regis.png',
    '/images/Technologent.png',
    '/images/Tillsonburg.png',
    '/images/TSG.png',
    '/images/Purdue_Home.svg',
    '/images/Wharton_Home.svg',
  ]

  return (
    <div className={styles.PartnerImagesDiv}>
      <p>Collaborating with Top Corporations worldwide</p>
      <PartnerSlideShow images={Images} />
    </div>
  )
}

export default PartnerImages
