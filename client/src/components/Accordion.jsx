import React, { useState } from 'react'
import AccordionItem from './AccordionItem'

const Accordion = ({ title, data }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? null : index)
  }

  return (
    <div>
      <h4 style={{ fontWeight: '900', marginBottom: '20px' }}>{title}</h4>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={index === openIndex}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  )
}

export default Accordion
