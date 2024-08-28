import React from 'react'
import styles from './BlogDetails.module.css'
import { useParams } from 'react-router-dom'
import { BlogsData } from '../Data'

const BlogDetails = () => {
 const { path } = useParams()
 const selectedBlogDetail = BlogsData.find((item) => item.path === path)

 return (
  <div className={styles.BlogDetailsContainer}>
   <h6 style={{ fontWeight: 'bolder' }}>{selectedBlogDetail.blogCategory}</h6>
   <h4 style={{ fontWeight: 'bolder' }}>{selectedBlogDetail.blogTitle}</h4>
   <p className={styles.blogTitle}>Introduction</p>
   <p className={styles.blogDescription}>
    {selectedBlogDetail.blogIntroduction}
   </p>

   {selectedBlogDetail.blogDescription.map((item, ind) => (
    <div key={ind}>
     <p className={styles.blogTitle}>{item.title}</p>
     {item.description.map((desc, ind) => (
      <p key={ind} className={styles.blogDescription}>
       {desc}
      </p>
     ))}
    </div>
   ))}

   <p className={styles.blogTitle}>Conclusion:</p>
   <p className={styles.blogDescription}>{selectedBlogDetail.blogConclusion}</p>
  </div>
 )
}

export default BlogDetails
