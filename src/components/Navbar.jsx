import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { Close } from '@mui/icons-material'

const Navbar = () => {
 const logoIcon = '/images/LogoIcon.png'
 const [isMenuOpen, setIsMenuOpen] = useState(false)

 const handleMenuToggle = () => {
  setIsMenuOpen(!isMenuOpen)
 }

 const scrollToSection = (id) => {
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

 const handleNavItemClick = (id) => {
  setIsMenuOpen(false)
  id === 'AllCourses' && scrollToSection(id)
 }

 return (
  <>
   <header className={styles.navHeader}>
    <nav className={styles.navbar}>
     <Link
      to='/'
      className={styles.smartranxLogo}
      style={{ textDecoration: 'none' }}
     >
      <span>
       <img src={logoIcon} alt='Logo' height='60px' />
       <span>
        <p>
         s<span>mart</span>r<span>anx</span>
        </p>
        <p>education center</p>
       </span>
      </span>
     </Link>

     <div className={styles.navbarMenuIcon} onClick={handleMenuToggle}>
      {isMenuOpen ? (
       <Close
        style={{ color: 'red', fontSize: '30px', fontWeight: 'bolder' }}
       />
      ) : (
       <MenuIcon style={{ color: 'orange', fontSize: '40px' }} />
      )}
     </div>

     <ul className={`${styles.navbarLinks} ${isMenuOpen ? 'open' : ''}`}>
      <li className={styles.navbarItem} onClick={handleNavItemClick}>
       <Link
        to='/'
        className={styles.navItem}
        onClick={() => scrollToSection('AllCourses')}
       >
        All Courses
       </Link>
      </li>
      <li className={styles.navbarItem} onClick={handleNavItemClick}>
       <Link to='/blogs' className={styles.navItem}>
        Blogs
       </Link>
      </li>
      <li className={styles.navbarItem} onClick={handleNavItemClick}>
       <Link to='/' className={styles.navItem}>
        Reviews
       </Link>
      </li>
      <li className={styles.navbarItem} onClick={handleNavItemClick}>
       <Link to='/contactUs' className={styles.navItem}>
        Contact Us
       </Link>
      </li>
     </ul>
    </nav>

    {isMenuOpen && (
     <div className={styles.navItemsVertical}>
      <Link
       to='/'
       onClick={() => handleNavItemClick('AllCourses')}
       className={`${styles.navItem} ${styles.navItemVertical}`}
      >
       All Courses
      </Link>
      <Link
       to='/blogs'
       onClick={() => handleNavItemClick('')}
       className={`${styles.navItem} ${styles.navItemVertical}`}
      >
       Blogs
      </Link>
      <Link
       to='/'
       onClick={() => handleNavItemClick('')}
       className={`${styles.navItem} ${styles.navItemVertical}`}
      >
       Reviews
      </Link>
      <Link
       to='/contactUs'
       onClick={() => handleNavItemClick('')}
       className={`${styles.navItem} ${styles.navItemVertical}`}
      >
       Contact Us
      </Link>
     </div>
    )}
   </header>
  </>
 )
}

export default Navbar
