import React, { useState } from 'react'
import styles from './QueryForm.module.css'
import InfoIcon from '@mui/icons-material/Info'

const QueryForm = ({ setQueryStatus }) => {
 const [QueryFormData, setQueryFormData] = useState({
  queryName: '',
  queryContactNumber: '',
  queryEmail: '',
  queryMessage: '',
 })
 const [queryFormErrors, setQueryFormErrors] = useState({})

 const handleChange = (e) => {
  const { name, value } = e.target
  setQueryFormData({
   ...QueryFormData,
   [name]: value,
  })
 }

 const validate = () => {
  const errors = {}
  if (!QueryFormData.queryName) {
   errors.queryName = 'Name is required'
  }
  if (!QueryFormData.queryContactNumber) {
   errors.queryContactNumber = 'Please Enter a Valid Phone Number'
  }
  if (!QueryFormData.queryEmail) {
   errors.queryEmail = 'Email is required'
  } else if (!/\S+@\S+\.\S+/.test(QueryFormData.queryEmail)) {
   errors.queryEmail = 'Please Enter a Valid Email ID'
  }
  if (!QueryFormData.queryMessage) {
   errors.queryMessage = 'Please Enter Your Message'
  }
  return errors
 }

 const handleSubmit = (e) => {
  e.preventDefault()
  const errors = validate()
  if (Object.keys(errors).length === 0) {
   const queryFormDetails = new FormData(e.target)
   fetch('https://formspree.io/f/mzzpzdlp', {
    headers: {
     Accept: 'application/json',
    },
    method: 'POST',
    body: queryFormDetails,
   })
    .then((res) => {
     if (res.ok) {
      setQueryStatus('Query Sent Successfully')
      // setQueryModal(true)
      setQueryFormData({
       queryName: '',
       queryContactNumber: '',
       queryEmail: '',
       queryMessage: '',
      })
     } else {
      res.json().then((data) => {
       if (Object.hasOwn(data, 'errors')) {
        setQueryStatus(data.errors.map((err) => err.message).join(', '))
       } else {
        setQueryStatus('Failed to send email')
       }
      })
     }
    })
    .catch(() => {
     setQueryStatus('Failed to send email')
    })
  } else {
   setQueryFormErrors(errors)
  }
 }

 return (
  <>
   <form onSubmit={handleSubmit} className={styles.QueryForm} id='queryForm'>
    <div className={`form-floating ${styles.QueryFormInput}`}>
     <input
      type='text'
      name='queryName'
      value={QueryFormData.queryName}
      onChange={handleChange}
      className='form-control'
      id='queryFullName'
      placeholder='Full Name'
     />
     <label htmlFor='queryFullName'>Full Name*</label>
     {queryFormErrors.queryName && (
      <span style={{ color: 'red' }}>
       {' '}
       <InfoIcon style={{ fontSize: '15px' }} /> {queryFormErrors.queryName}
      </span>
     )}
    </div>

    <div className={`form-floating ${styles.QueryFormInput}`}>
     <input
      type='text'
      name='queryContactNumber'
      value={QueryFormData.queryContactNumber}
      onChange={handleChange}
      className='form-control'
      id='queryPhoneNumber'
      placeholder='Phone Number'
     />
     <label htmlFor='queryPhoneNumber'>Phone Number*</label>
     {queryFormErrors.queryContactNumber && (
      <span style={{ color: 'red' }}>
       <InfoIcon style={{ fontSize: '15px' }} />{' '}
       {queryFormErrors.queryContactNumber}
      </span>
     )}
    </div>

    <div className={`form-floating ${styles.QueryFormInput}`}>
     <input
      type='email'
      name='queryEmail'
      value={QueryFormData.queryEmail}
      onChange={handleChange}
      className='form-control'
      id='queryEmail'
      placeholder='Enter Your Email Here'
     />
     <label htmlFor='queryEmail'>Email ID*</label>
     {queryFormErrors.queryEmail && (
      <span style={{ color: 'red' }}>
       <InfoIcon style={{ fontSize: '15px' }} /> {queryFormErrors.queryEmail}
      </span>
     )}
    </div>

    <div className={`form-floating ${styles.QueryFormInput}`}>
     <textarea
      type='text'
      name='queryMessage'
      value={QueryFormData.queryMessage}
      onChange={handleChange}
      className='form-control'
      id='queryMessage'
      placeholder='Your Message Here ...'
     />
     <label htmlFor='queryMessage'>Your Message Here ...</label>
     {queryFormErrors.queryMessage && (
      <span style={{ color: 'red' }}>
       <InfoIcon style={{ fontSize: '15px' }} /> {queryFormErrors.queryMessage}
      </span>
     )}
    </div>

    <div
     style={{
      display: 'flex',
      justifyContent: 'center',
      margin: '50px 0 20px 0',
     }}
    >
     <button type='submit' className={`col-6 ${styles.querySubmitBtn}`}>
      Submit
     </button>
    </div>
   </form>
  </>
 )
}

export default QueryForm
