import React, { useState } from 'react'
import styles from './BasicInformation.module.css'
import InfoIcon from '@mui/icons-material/Info'

const BasicInformation = ({ orderSummaryDetails }) => {
 const [formData, setFormData] = useState({
  name: '',
  countryCode: '',
  contactNumber: '',
  email: '',
  address: '',
  enrollFor: '',
 })
 const [formErrors, setFormErrors] = useState({})

 const handleChange = (e) => {
  const { name, value } = e.target
  setFormData({
   ...formData,
   [name]: value,
  })

  // Remove error message for the field being updated
  if (formErrors[name]) {
   setFormErrors({ ...formErrors, [name]: '' })
  }
 }

 const validate = () => {
  const errors = {}
  if (!formData.name.trim()) {
   errors.name = 'Name is required'
  }
  if (!formData.contactNumber.trim()) {
   errors.contactNumber = 'Please Enter a Valid Phone Number'
  }
  if (!formData.email.trim()) {
   errors.email = 'Email is required'
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
   errors.email = 'Please Enter a Valid Email ID'
  }
  if (!formData.address.trim()) {
   errors.address = 'Please Enter a Valid Address'
  }
  return errors
 }

 const handleSubmit = (e) => {
  e.preventDefault()
  const errors = validate()
  if (Object.keys(errors).length === 0) {
   const candidateCourseData = { ...formData, ...orderSummaryDetails }
   console.log('candidateCourseData:', candidateCourseData)
   //  const basicInfoFormData = new FormData(e.target)
   //  fetch('https://formspree.io/f/xrbzbbqn', {
   //   headers: {
   //    Accept: 'application/json',
   //   },
   //   method: 'POST',
   //   body: basicInfoFormData,
   //  })
   //   .then((res) => {
   //    if (res.ok) {
   //     console.log('Proceed for Payment')
   //    } else {
   //     res.json().then((data) => {
   //      if (Object.hasOwn(data, 'errors')) {
   //       console.log(data.errors.map((err) => err.message).join(', '))
   //      } else {
   //       console.log('Failed to send email')
   //      }
   //     })
   //    }
   //   })
   //   .catch(() => {
   //    console.log('Failed to send email')
   //   })
  } else {
   setFormErrors(errors)
  }
 }

 return (
  <form onSubmit={handleSubmit} className={styles.basicInfoFormContainer}>
   <div className={`form-floating ${styles.basicInfoInput}`}>
    <input
     type='text'
     name='name'
     value={formData.name}
     onChange={handleChange}
     className='form-control'
     id='floatingFullName'
     placeholder='Full Name'
    />
    <label htmlFor='floatingFullName'>Full Name*</label>
    {formErrors.name && (
     <span style={{ color: 'red' }}>
      {' '}
      <InfoIcon style={{ fontSize: '15px' }} /> {formErrors.name}
     </span>
    )}
   </div>

   <div className={`container-fluid ${styles.basicInfoContactNumContainer}`}>
    <div className='col-3'>
     <select
      className='form-select form-select-md'
      aria-label='country code'
      name='countryCode'
      value={formData.countryCode}
      onChange={handleChange}
     >
      <option value=''>Country Code</option>
      <option value='+1'>+1 United States</option>
      <option value='+1'>+1 Canada</option>
      <option value='+52'>+52 Mexico</option>
      <option value='+61'>+61 Australia</option>
      <option value='+64'>+61 New Zealand</option>
      <option value='+44'>+44 United Kingdom</option>
      <option value='+971'>+971 United Arab Emirates</option>
      <option value='+91'>+91 India</option>
      <option value='+65'>+65 Singapore</option>
      <option value='+66'>+66 Thailand</option>
      <option value='+852'>+852 Hong Kong</option>
      <option value='+62'>+62 Indonesia</option>
      <option value='+60'>+60 Malaysia</option>
     </select>
    </div>
    <div className={`form-floating col-6 ${styles.basicInfoInput}`}>
     <input
      type='text'
      name='contactNumber'
      value={formData.contactNumber}
      onChange={handleChange}
      className='form-control'
      id='floatingPhoneNumber'
      placeholder='Phone Number'
     />
     <label htmlFor='floatingPhoneNumber'>Phone Number*</label>
     {formErrors.contactNumber && (
      <span style={{ color: 'red' }}>
       <InfoIcon style={{ fontSize: '15px' }} /> {formErrors.contactNumber}
      </span>
     )}
    </div>
   </div>

   <div className={`form-floating ${styles.basicInfoInput}`}>
    <input
     type='email'
     name='email'
     value={formData.email}
     onChange={handleChange}
     className='form-control'
     id='floatingEmail'
     placeholder='Enter Your Email Here'
    />
    <label htmlFor='floatingEmail'>Email ID*</label>
    {formErrors.email && (
     <span style={{ color: 'red' }}>
      <InfoIcon style={{ fontSize: '15px' }} /> {formErrors.email}
     </span>
    )}
   </div>

   <div className={`form-floating ${styles.basicInfoInput}`}>
    <input
     type='text'
     name='address'
     value={formData.address}
     onChange={handleChange}
     className='form-control'
     id='floatingAddress'
     placeholder='Enter Your Address Here'
    />
    <label htmlFor='floatingAddress'>Address*</label>
    {formErrors.address && (
     <span style={{ color: 'red' }}>
      <InfoIcon style={{ fontSize: '15px' }} /> {formErrors.address}
     </span>
    )}
   </div>

   <div className='form-floating container col-8'>
    <h6>Enroll For</h6>
    <select
     className='form-select form-select-md mb-3'
     aria-label='enroll for'
     name='enrollFor'
     value={formData.enrollFor}
     onChange={handleChange}
    >
     <option value=''>Choose Here</option>
     <option value='self'>Self</option>
     <option value='others'>Others</option>
    </select>
   </div>

   <div
    style={{
     display: 'flex',
     justifyContent: 'center',
     margin: '50px 0 20px 0',
    }}
   >
    <button type='submit' className={styles.basicInfoProceedBtn}>
     <span style={{ fontSize: '18px' }}>
      Pay {orderSummaryDetails.currency} {orderSummaryDetails.grandTotal} with
     </span>
     <span>
      <img src='/images/stripe.png' alt='stripe' height='40px' />
     </span>
    </button>
   </div>
  </form>
 )
}

export default BasicInformation
