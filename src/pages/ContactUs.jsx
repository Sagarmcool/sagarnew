import React, { useState } from 'react'
import styles from './ContactUs.module.css'
import NearMeIcon from '@mui/icons-material/NearMe'
import CallIcon from '@mui/icons-material/Call'
import MailIcon from '@mui/icons-material/Mail'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import XIcon from '@mui/icons-material/X'
import Instagram from '@mui/icons-material/Instagram'
import QueryForm from '../components/QueryForm'
import Modal from '../components/Modal'

const ContactUs = () => {
 const [queryStatus, setQueryStatus] = useState('')
 console.log('queryStatus:', queryStatus)

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
     (+1) 12345 67890
    </div>
    <div style={{ margin: '15px auto' }}>
     <MailIcon
      style={{ color: 'orange', fontSize: '20px', margin: '0 15px' }}
     />{' '}
     support@smartranx.com
    </div>
    <div className={styles.contactUsIconsContainer}>
     <FacebookIcon
      className={styles.contactUsIcon}
      style={{ color: '#737373', fontSize: '30px' }}
     />
     <LinkedInIcon
      className={styles.contactUsIcon}
      style={{ color: '#737373', fontSize: '30px' }}
     />
     <XIcon
      className={styles.contactUsIcon}
      style={{ color: '#737373', fontSize: '30px' }}
     />
     <Instagram
      className={styles.contactUsIcon}
      style={{ color: '#737373', fontSize: '30px' }}
     />
    </div>
   </div>

   <div className={styles.QueryFormContainer}>
    <div className={styles.checkOutTitles}>
     <h4 style={{ fontWeight: 'bolder' }}>Drop a Query!</h4>
    </div>
    <QueryForm setQueryStatus={setQueryStatus} />
   </div>

   {queryStatus && <Modal />}
  </div>
 )
}

export default ContactUs
