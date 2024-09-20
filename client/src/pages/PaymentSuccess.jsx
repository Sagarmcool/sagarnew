import React, { useEffect, useState } from 'react'
import styles from './PaymentSuccess.module.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { useLocation } from 'react-router-dom'

const PaymentSuccess = () => {
 const [paymentDetails, setPaymentDetails] = useState(null)
 const location = useLocation()
 const [error, setError] = useState(null)

 useEffect(() => {
  const fetchSessionDetails = async () => {
   const queryParams = new URLSearchParams(location.search)
   const sessionId = queryParams.get('session_id')

   if (sessionId) {
    try {
     const response = await fetch(
      `https://smartranx.com/retrieve-session?sessionId=${sessionId}`
     )
     if (!response.ok) {
      throw new Error('Failed to fetch payment session')
     }
     const data = await response.json()
     setPaymentDetails(data)
    } catch (error) {
     console.error('Error fetching session details: ', error)
     setError('Failed to retrieve payment details. Please contact support')
    }
   }
  }

  fetchSessionDetails()
 }, [location])

 if (!paymentDetails) {
  return (
   <div className={styles.checkoutLoadingOverlay}>
    <div className={styles.checkoutSpinner}></div>
    <p style={{ margin: '30px' }}>Loading payment details...</p>
   </div>
  )
 }

 if (error) {
  return (
   <div style={{ marginTop: '70px', textAlign: 'center' }}>
    <h3> {error}</h3>
   </div>
  )
 }

 const {
  amount_total = 0,
  customer_details = {},
  metadata = {},
  payment_intent = '',
 } = paymentDetails

 function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
 }

 return (
  <div style={{ marginTop: '80px' }}>
   <p
    style={{
     textAlign: 'center',
     color: 'green',
     padding: '10px 0',
     fontWeight: '900',
     fontSize: '30px',
     marginBottom: '0',
    }}
    onClick={() => console.log(paymentDetails)}
    aria-live='polite'
   >
    <CheckCircleIcon style={{ color: 'green', fontSize: '35px' }} /> Payment
    Successful
   </p>
   <p
    style={{
     textAlign: 'center',
     fontWeight: 'bolder',
     fontSize: '17px',
    }}
   >
    Hey {capitalizeFirstLetter(customer_details.name)}. Your payment of $
    {(amount_total / 100).toFixed(2)} has been received.
   </p>
   <hr />
   <table className={styles.paymentSuccessTable}>
    <tbody>
     <tr>
      <td>
       <strong>Transaction ID:</strong>
      </td>
      <td>{payment_intent}</td>
     </tr>
     <tr>
      <td>
       <strong>Amount Paid:</strong>
      </td>
      <td>${(amount_total / 100).toFixed(2)}</td>
     </tr>
     <tr>
      <td>
       <strong>Course Title:</strong>
      </td>
      <td>{metadata.title || 'N/A'}</td>
     </tr>
     <tr>
      <td>
       <strong>Batch Timings:</strong>
      </td>
      <td>{metadata.batchTimings || 'N/A'}</td>
     </tr>
     <tr>
      <td>
       <strong>Batch Dates:</strong>
      </td>
      <td>{metadata.batchDates || 'N/A'}</td>
     </tr>
    </tbody>
   </table>
  </div>
 )
}

export default PaymentSuccess
