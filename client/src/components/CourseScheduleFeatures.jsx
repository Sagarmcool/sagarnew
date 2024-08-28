import React, { useState } from 'react'
import styles from './CourseScheduleFeatures.module.css'

const CourseScheduleFeatures = ({
 item,
 selectedCourseKeyFeatures,
 handleCheckOut,
}) => {
 const [showDescription, setShowDescription] = useState(false)

 const handleToggle = () => {
  setShowDescription(!showDescription)
 }

 return (
  <div
   className='card'
   style={{
    margin: '20px auto',
    padding: '20px',
    width: '80%',
    position: 'relative',
   }}
  >
   <div className={styles.scheduleTopLine}></div>

   <div className={styles.scheduleTopContainer}>
    <div>
     <strong>{item.batchDates}</strong> {item.batchWeek}
     <p
      style={{
       color: 'orange',
       fontWeight: '900',
       lineHeight: '25px',
       marginBottom: '0',
      }}
     >
      <strong>{item.batchTimings}</strong>
     </p>
     <p style={{ marginBottom: '0' }}>{item.batchMode}</p>
    </div>
    <div>
     <p
      style={{
       color: 'red',
       textDecoration: 'line-through',
       marginBottom: '0',
      }}
     >
      {' '}
      <strong>{item.courseStrikedPrice}</strong>{' '}
     </p>
     <p style={{ color: 'green', marginBottom: '0', fontSize: '20px' }}>
      {' '}
      <strong>{item.coursePrice}</strong>{' '}
     </p>
     <span
      style={{
       display: 'flex',
       justifyContent: 'space-evenly',
       alignItems: 'center',
      }}
     >
      <img
       src={`/images/${item.courseLastChanceImg}`}
       alt='img'
       width='120px'
      />
      <p style={{ fontWeight: 'bolder', marginBottom: '-25px' }}>
       Offer Ends Soon!
      </p>
     </span>
    </div>
    <div>
     <img
      src={`/images/${item.courseLimitedSpotsImg}`}
      alt='img'
      height='100px'
     />
     <br />
     <button
      className={styles.scheduleEnrollButton}
      onClick={() => handleCheckOut(item.id)}
      style={{ marginTop: '-22px' }}
     >
      Enroll Now
     </button>
    </div>
   </div>

   {showDescription && (
    <div className={styles.scheduleKeyFeaturesContainer}>
     <ul>
      {selectedCourseKeyFeatures.map((keyFeature, ind) => (
       <li key={ind}>{keyFeature}</li>
      ))}
     </ul>
    </div>
   )}

   <div className={styles.scheduleKnowMoreContainer}>
    <button className={styles.scheduleButton} onClick={handleToggle}>
     {showDescription ? 'Close' : 'Know More'}
    </button>
   </div>

   <div className={styles.scheduleBottomLine}></div>
  </div>
 )
}

export default CourseScheduleFeatures
