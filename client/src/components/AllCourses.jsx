import React, { useState, useEffect } from 'react'
import styles from './AllCourses.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import CourseCard from './CourseCard'
import { CategoriesData, CourseMasterData } from '../Data'

const AllCoursesPage = () => {
 const categories = CategoriesData.map((item) => item.category)
 const categoriesList = [...new Set(categories)]

 const [selectedCategory, setSelectedCategory] = useState('Most Popular')
 const [activeCategory, setActiveCategory] = useState(categoriesList[0])

 const handleCategoryClick = (category) => {
  setSelectedCategory(category)
  setActiveCategory(category)
 }

 let filteredCategoryData = CategoriesData.filter(
  (item) => item.category === selectedCategory
 )

 // mobile and laptop view - Responsive window
 const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 880)
 useEffect(() => {
  const handleResize = () => {
   setIsWideScreen(window.innerWidth > 880)
  }
  window.addEventListener('resize', handleResize)

  return () => {
   window.removeEventListener('resize', handleResize)
  }
 }, [])

 const handleKnowMore = (clickedTitle) => {
  const selectedCard = CourseMasterData.find(
   (item) => item.title === clickedTitle
  )
  const urlPath = selectedCard.path
  const url = `/${urlPath}`

  // open a new tab with the details of the selected card
  const newWindow = window.open(url, '_blank')
  if (newWindow) {
   newWindow.onload = () => {}
  }
 }

 return (
  <div className={styles.AllCourses} id='AllCourses'>
   <div>
    <p>
     <strong>Advance your skills with Our Programs</strong>
    </p>
    <div className={styles.AllCoursesDiv}>
     <aside>
      <p>Categories</p>
      <hr style={{ borderColor: 'orange', margin: '5px' }} />
      <ul>
       {categoriesList.map((category, index) => (
        <div
         onClick={() => handleCategoryClick(category)}
         key={index}
         className={category === activeCategory ? `${styles.activeCtgr}` : ''}
        >
         <li>{category}</li>{' '}
         <span>
          <ArrowForwardIosIcon style={{ fontSize: '15px', color: 'orange' }} />
         </span>
        </div>
       ))}
      </ul>
     </aside>
     <main>
      {isWideScreen
       ? filteredCategoryData.map((card) => (
          <CourseCard key={card.id} item={card} onKnowMore={handleKnowMore} />
         ))
       : CategoriesData.map((card) => (
          <CourseCard key={card.id} item={card} onKnowMore={handleKnowMore} />
         ))}
     </main>
    </div>
   </div>
  </div>
 )
}

export default AllCoursesPage
