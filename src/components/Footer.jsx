import React from 'react'
import styles from './Footer.module.css'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import XIcon from '@mui/icons-material/X'
import Instagram from '@mui/icons-material/Instagram'
import CallIcon from '@mui/icons-material/Call'
import MailIcon from '@mui/icons-material/Mail'
import { Link } from 'react-router-dom'
import { disclaimerArray } from '../Data'
import TermsAndConditions from '../pages/TermsAndConditions'
import PrivacyPolicy from '../pages/PrivacyPolicy'

const Footer = () => {
 return (
  <div className={styles.footer}>
   <div className={styles.top}>
    <div className={styles.columns}>
     <p className={styles.title}>Support</p>
     <p className={styles.list}>
      <Link
       to='/termsAndConditions'
       className={styles.listLink}
       target='_blank'
       element={<TermsAndConditions />}
      >
       Terms & Conditions
      </Link>
     </p>
     <p className={styles.list}>
      <Link
       to='/privacyPolicy'
       className={styles.listLink}
       target='_blank'
       element={<PrivacyPolicy />}
      >
       Privacy Policy
      </Link>
     </p>
     <p className={styles.list}>
      <Link
       to='/cancellationPolicy'
       className={styles.listLink}
       target='_blank'
      >
       Cancellation Policy
      </Link>
     </p>

     <p className={styles.list}>
      <Link to='/contactUs' className={styles.listLink} target='_blank'>
       Contact Us
      </Link>
     </p>
    </div>
    <div className={styles.columns}>
     <p className={styles.title}>Company</p>
     <p className={styles.list}>
      <Link to='/aboutUs' className={styles.listLink} target='_blank'>
       About Us
      </Link>
     </p>
     <p className={styles.list}>
      <Link to='/' className={styles.listLink} target='_blank'>
       Testimonials
      </Link>
     </p>
     <p className={styles.list}>
      <Link to='/' className={styles.listLink} target='_blank'>
       Workshop
      </Link>
     </p>
     <p className={styles.list}>
      <Link to='/corporateTraining' className={styles.listLink} target='_blank'>
       Corporate Training
      </Link>
     </p>
     <p className={styles.list}>
      <Link to='/' className={styles.listLink} target='_blank'>
       Blog
      </Link>
     </p>
    </div>
    <div className={styles.columns}>
     <p className={styles.title}>Secure Payments</p>
     <img
      src='/images/SecurePayments.png'
      alt='secure payments'
      style={{ height: '30px', width: 'auto', marginBottom: '20px' }}
     />
     <p className={styles.title}>Connect With Us</p>
     <div className={styles.socialIcons}>
      <Link
       to='https://www.facebook.com/smartranxeducationcentre?mibextid=ZbWKwL'
       target='_blank'
      >
       <FacebookIcon className={styles.icon} />
      </Link>
      <Link to='https://www.linkedin.com/company/smartranx/' target='_blank'>
       <LinkedInIcon className={styles.icon} />
      </Link>
      <Link to='https://x.com/SmartranxEdu' target='_blank'>
       <XIcon className={styles.icon} />{' '}
      </Link>
      <Link
       to='https://www.instagram.com/smartranx?igsh=cHQ3a2xxYjhjamo='
       target='_blank'
      >
       <Instagram className={styles.icon} />
      </Link>
     </div>
    </div>
    <div className={styles.columns}>
     <p className={styles.title}>Contact Us</p>
     <p className={styles.list}>Smartranx Education Center</p>
     <p className={styles.list}>
      <span
       style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
       }}
      >
       <CallIcon style={{ fontSize: '20px', marginRight: '10px' }} /> +1 256-607-9830
      </span>
     </p>
     <p className={styles.list}>
      <span
       style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
       }}
      >
       <MailIcon style={{ fontSize: '20px', marginRight: '10px' }} />{' '}
       support@smartranx.com
      </span>
     </p>
    </div>
   </div>

   {/* Take these in phase 2 */}
   {/* <div className={styles.categories}>
        <p className={styles.title}>Categories</p>
      </div>

      <div className={styles.trendingCourses}>
        <p className={styles.title}>Trending Courses</p>
      </div> */}

   <div className={styles.disclaimer}>
    <p className={styles.title}>Disclaimer</p>
    <ul>
     {disclaimerArray.map((item) => (
      <li key={item.id}>{item.description}</li>
     ))}
    </ul>
   </div>

   <div className={styles.copyrights}>
    <p style={{ fontSize: '12px', margin: '0' }}>
     &copy; 2023-24 Smartranx Business Solutions LLC. All Rights Reserved. The
     certification names are the trademarks of their respective owners.
    </p>
   </div>
  </div>
 )
}

export default Footer
