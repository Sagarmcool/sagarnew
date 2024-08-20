import React from 'react'
import styles from './Banner.module.css'
import { bannerTitle } from '../Data'

const Banner = () => {
  const bannerBtnValue = 'Explore Programs'

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    const offset = 50
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }

  return (
    <div className={styles.banner}>
      <div className={styles.bannerIn}>
        {bannerTitle.map((item) => (
          <h1 key={item.id}>{item.title}</h1>
        ))}

        <p>
          <span className={styles.bannerNumText}>50,000+</span> careers advanced
        </p>
        <p>
          <span className={styles.bannerNumText}>100+</span> live classes every
          month
        </p>
        <p>
          <span className={styles.bannerNumText}>78%</span> report career
          benefits including promotion or a new job
        </p>

        <a
          href='#AllCourses'
          onClick={(e) => scrollToSection(e, 'AllCourses')}
          className={styles.bannerBtn}
        >
          {bannerBtnValue}
        </a>
      </div>
    </div>
  )
}

export default Banner
