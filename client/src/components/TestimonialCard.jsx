import React from 'react'
import styles from './TestimonialCard.module.css'

const TestimonialCard = ({ item }) => {
 const handleProfileClick = (profileLink) => {
  window.open(`https://www.${profileLink}`, '_blank')
 }

 return (
  <div
   className={`card ${styles.TestimonialCard}`}
   onClick={() => handleProfileClick(item.profileLink)}
  >
   <div className={styles.top}>
    <div className={styles.imageDiv}>
     <img src={item.img} alt={item.name} className={styles.profileImg} />
     <img
      src='/images/LinkedIn.png'
      alt='LinkedIn Icon'
      className={styles.linkedInImg}
     />
    </div>
    <div className={styles.textDiv}>
     <p>
      {' '}
      <strong>{item.name}</strong>
     </p>
     <p>{item.Designation}</p>
    </div>
   </div>

   <div className={styles.mid}>
    <p style={{ textAlign: 'justify' }}>{item.Description}</p>
   </div>

   <div className={styles.bottom}></div>
  </div>
 )
}

export default TestimonialCard
