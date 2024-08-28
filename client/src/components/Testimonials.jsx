import React, { useEffect, useState } from 'react'
import styles from './Testimonials.module.css'
import { TestimonialsData } from '../Data'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
 const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)
 const testimonialItemsPerPage = window.innerWidth < 880 ? 1 : 2
 const data = TestimonialsData.length

 useEffect(() => {
  const intervalId = setInterval(() => {
   setCurrentTestimonialIndex(
    (prevIndex) => (prevIndex + testimonialItemsPerPage) % data
   )
  }, 5000)

  return () => clearInterval(intervalId)
 }, [data, testimonialItemsPerPage])

 return (
  <div className={styles.TestimonialsMain} id='testimonials'>
   <h3>Hear From Our Proud Alumni!</h3>

   <div className={styles.carouselConatiner}>
    {TestimonialsData.slice(
     currentTestimonialIndex,
     currentTestimonialIndex + testimonialItemsPerPage
    ).map((item) => (
     <TestimonialCard item={item} key={item.id} />
    ))}
   </div>
  </div>
 )
}

export default Testimonials
