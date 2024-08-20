import React from 'react'
import styles from './Blog.module.css'
import { Link } from 'react-router-dom'

const Blog = ({ blogs }) => {
 return (
  <div className={`card ${styles.blogCard}`}>
   <img src={`/images/${blogs.blogImg}`} alt='blogimage' />
   <hr />
   <p className={styles.blogCategory}>{blogs.blogCategory}</p>
   <p className={styles.blogTitle}>{blogs.blogTitle}</p>
   <Link to={`/blogs/${blogs.path}`} style={{ textDecoration: 'none' }}>
    <p className={styles.blogReadMore}>Read More</p>
   </Link>
  </div>
 )
}

export default Blog
