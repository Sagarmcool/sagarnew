import React from 'react'
import styles from './Accordion.module.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div>
      <div onClick={onClick} className={styles.accordionHeading}>
        <h6 style={{ fontSize: '15px', fontWeight: 'bolder' }}>
          {item.heading}
        </h6>
        <ExpandMoreIcon
          style={{ fontSize: '25px', color: 'orange', fontWeight: 'bolder' }}
        />
      </div>
      {isOpen && (
        <div className={styles.accordionDescription}>
          {item.description.map((desc, ind) => (
            <p key={ind}>{desc}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default AccordionItem
