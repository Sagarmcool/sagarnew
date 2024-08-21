import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './ContactUs.module.css'
import NearMeIcon from '@mui/icons-material/NearMe'
import CallIcon from '@mui/icons-material/Call'
import MailIcon from '@mui/icons-material/Mail'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import XIcon from '@mui/icons-material/X'
import Instagram from '@mui/icons-material/Instagram'
import QueryForm from '../components/QueryForm'

const ContactUs = () => {
 return (
  <div className={styles.ContactUsContainer}>
   <div className={styles.contactInfoContainer}>
    <div className={styles.checkOutTitles}>
     <h4 style={{ fontWeight: 'bolder' }}>Reach out to us</h4>
    </div>
    <div style={{ margin: '15px auto' }}>
     <NearMeIcon
      style={{ color: 'orange', fontSize: '20px', margin: '0 15px' }}
     />{' '}
     30 N Gould St Ste R, Sheridan, WY 82801
    </div>
    <div style={{ margin: '15px auto' }}>
     <CallIcon
      style={{ color: 'orange', fontSize: '20px', margin: '0 15px' }}
     />{' '}
     +1 256-607-9830
    </div>
    <div style={{ margin: '15px auto' }}>
     <MailIcon
      style={{ color: 'orange', fontSize: '20px', margin: '0 15px' }}
     />{' '}
     support@smartranx.com
    </div>
    <div className={styles.contactUsIconsContainer}>
     <Link
      to='https://www.facebook.com/smartranxeducationcentre?mibextid=ZbWKwL'
      target='_blank'
     >
      <FacebookIcon
       className={styles.contactUsIcon}
       style={{ fontSize: '30px' }}
      />
     </Link>
     <Link to='https://www.linkedin.com/company/smartranx/' target='_blank'>
      <LinkedInIcon
       className={styles.contactUsIcon}
       style={{ fontSize: '30px' }}
      />
     </Link>
     <Link to='https://x.com/SmartranxEdu' target='_blank'>
      <XIcon className={styles.contactUsIcon} style={{ fontSize: '30px' }} />{' '}
     </Link>
     <Link
      to='https://www.instagram.com/smartranx?igsh=cHQ3a2xxYjhjamo='
      target='_blank'
     >
      <Instagram
       className={styles.contactUsIcon}
       style={{ fontSize: '30px' }}
      />
     </Link>
    </div>
   </div>

   <div className={styles.QueryFormContainer}>
    <div className={styles.checkOutTitles}>
     <h4 style={{ fontWeight: 'bolder' }}>Drop a Query!</h4>
    </div>
    <QueryForm />
   </div>
  </div>
 )
}

export default ContactUs
