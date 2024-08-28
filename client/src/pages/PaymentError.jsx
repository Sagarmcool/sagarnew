import React from 'react'
import ErrorIcon from '@mui/icons-material/Error'
import { Link } from 'react-router-dom'

const PaymentError = () => {
 return (
  <div style={{ marginTop: '100px', padding: '20px', textAlign: 'center' }}>
   <p
    style={{
     color: 'red',
     padding: '10px 0',
     fontWeight: '900',
     fontSize: '30px',
     marginBottom: '0',
    }}
   >
    <ErrorIcon style={{ color: 'red', fontSize: '35px' }} /> Payment
    Unsuccessful <span style={{ fontWeight: '400' }}>!!</span>
   </p>
   <p style={{ marginBottom: '30px' }}>
    We're sorry, but your payment could not be processed at this time. Please
    try again or contact our support team for assistance.
   </p>
   <Link to='/'>Return to Home Page</Link>
  </div>
 )
}

export default PaymentError
