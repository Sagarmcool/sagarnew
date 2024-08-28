import React, { useState } from 'react'
import styles from './Blogs.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { BlogsData } from '../Data'
import Blog from '../components/Blog'

const Blogs = () => {
 const blogsCategories = BlogsData.map((item) => item.blogCategory)
 const blogsCategory = [...new Set(blogsCategories)]

 const [selectedBlog, setSelectedBlog] = useState(
  'PMI-ACP (Agile Certified Practitioner)'
 )
 const [activeBlog, setActiveBlog] = useState(blogsCategory[0])

 const scrollToSection = (id) => {
  const element = document.getElementById(id)
  const offset = 90
  const elementPosition =
   element.getBoundingClientRect().top + window.pageYOffset
  const offsetPosition = elementPosition - offset

  window.scrollTo({
   top: offsetPosition,
   behavior: 'smooth',
  })
 }

 const handleBlogCategoryClick = (blog) => {
  setSelectedBlog(blog)
  setActiveBlog(blog)
  scrollToSection('blogs')
 }

 let filteredBlogCategory = BlogsData.filter(
  (item) => item.blogCategory === selectedBlog
 )

 return (
  <div className={styles.BlogsContainer}>
   <aside className={styles.blogsAsideContainer}>
    <p>Categories</p>
    <hr style={{ borderColor: 'orange', margin: '5px' }} />
    <ul>
     {/* <div onClick={() => handleBlogCategoryClick('All')}>
      <li>All</li>
      <span>
       <ArrowForwardIosIcon style={{ fontSize: '15px', color: 'orange' }} />
      </span>
     </div> */}
     {blogsCategory.map((category, index) => (
      <div
       onClick={() => handleBlogCategoryClick(category)}
       key={index}
       className={category === activeBlog ? `${styles.activeBlog}` : ''}
      >
       <li>{category}</li>{' '}
       <span>
        <ArrowForwardIosIcon style={{ fontSize: '15px', color: 'orange' }} />
       </span>
      </div>
     ))}
    </ul>
   </aside>
   <main className={styles.blogsMainContainer} id='blogs'>
    {filteredBlogCategory.map((blogs) => (
     <Blog blogs={blogs} key={blogs.id} />
    ))}
   </main>
  </div>
 )
}

export default Blogs
