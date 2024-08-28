import React, { useEffect, useState } from 'react'
import styles from './PaymentSuccess.module.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { useLocation } from 'react-router-dom'

const PaymentSuccess = () => {
 const [paymentDetails, setPaymentDetails] = useState(null)
 const location = useLocation()

 useEffect(() => {
  const fetchSessionDetails = async () => {
   const queryParams = new URLSearchParams(location.search)
   const sessionId = queryParams.get('session_id')

   if (sessionId) {
    try {
     const response = await fetch(
      `http://localhost:7000/retrieve-session?sessionId=${sessionId}`
     )
     const data = await response.json()
     setPaymentDetails(data)
    } catch (error) {
     console.error('Error fetching session details: ', error)
    }
   }
  }

  fetchSessionDetails()
 }, [location])

 if (!paymentDetails) {
  return (
   <div className={styles.checkoutLoadingOverlay}>
    <div className={styles.checkoutSpinner}></div>
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
      <td>{metadata.title}</td>
     </tr>
     <tr>
      <td>
       <strong>Batch Timings:</strong>
      </td>
      <td>{metadata.batchTimings}</td>
     </tr>
     <tr>
      <td>
       <strong>Batch Dates:</strong>
      </td>
      <td>{metadata.batchDates}</td>
     </tr>
    </tbody>
   </table>
  </div>
 )
}

export default PaymentSuccess
