import React from 'react'
import styles from './CourseCard.module.css'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import StarIcon from '@mui/icons-material/Star'

const CourseCard = ({ item, onKnowMore }) => {
 return (
  <div
   className='card'
   style={{ width: '18rem', cursor: 'pointer' }}
   onClick={() => onKnowMore(item.title)}
  >
   <img src={`/images/${item.img}`} className='card-img-top' alt={item.title} />
   <div className={`card-body ${styles.mid}`}>
    <h4 style={{ marginBottom: '20px' }}>{item.title}</h4>
    <ul className={styles.iconList}>
     <li>
      <ArrowRightIcon style={{ color: 'orange', fontSize: '25px' }} />
      {item.point1}
     </li>
     <li>
      <ArrowRightIcon style={{ color: 'orange', fontSize: '25px' }} />
      {item.point2}
     </li>
    </ul>
    <div className={styles.bottom}>
     <span>
      <StarIcon
       style={{
        fontSize: '15px',
        color: 'orange',
        marginRight: '2px',
       }}
      />{' '}
      {item.ratings}
     </span>
     <span>
      <h6 className={styles.cardKnowMoreBtn}>Know More</h6>
     </span>
    </div>
   </div>
  </div>
 )
}

export default CourseCard
