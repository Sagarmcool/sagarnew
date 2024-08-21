import React, { useState } from 'react'
import styles from './Checkout.module.css'
import { useParams } from 'react-router-dom'
import { CourseScheduleData } from '../Data'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import BasicInformation from '../components/BasicInformation'
import OrderSummary from '../components/OrderSummary'

const Checkout = () => {
 const { id, path } = useParams()
 const selectedCourseSchedule = CourseScheduleData.find(
  (item) => item.path === path
 )
 const selectedBatch = selectedCourseSchedule.upcomingSchedulesData.filter(
  (item) => item.id === id
 )
 const [orderSummaryEntries, setOrderSummaryEntries] = useState({
  enteredPromoCode: '',
  promoCodeSuccess: false,
  totalDiscount: 0,
  selectedQty: 1,
  currency: '',
  courseFees: 0,
  grandTotal: 0,
 })

 const handleOrderSummaryEntries = (newDetails) => {
  setOrderSummaryEntries(newDetails)
 }

 const orderSummaryDetails = { ...selectedBatch[0], ...orderSummaryEntries }

 return (
  <div
   style={{
    margin: '70px 0 -70px 0',
    paddingBottom: '70px',
    backgroundColor: 'rgb(230, 230, 230)',
   }}
  >
   <div className={styles.checkoutContainer}>
    <div className={styles.orderSummaryContainer}>
     <div className={styles.checkOutTitles}>
      <span
       style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
       }}
      >
       <ShoppingCartIcon />
       <h4 style={{ fontWeight: 'bolder', marginLeft: '10px' }}>
        Order Summary
       </h4>
      </span>
     </div>
     {selectedBatch.map((item) => (
      <OrderSummary
       item={item}
       key={id}
       handleOrderSummaryEntries={handleOrderSummaryEntries}
      />
     ))}
    </div>

    <div className={styles.basicDetailsContainer}>
     <div className={styles.checkOutTitles}>
      <h4 style={{ fontWeight: 'bolder' }}>1. Basic Information</h4>
     </div>
     <BasicInformation orderSummaryDetails={orderSummaryDetails} />
    </div>
   </div>

   <div className={styles.trustBatchesContainer}>
    <div>
     <img src='/images/Moneyback.jpeg' alt='' height='70px' />
     <img src='/images/SSL.jpeg' alt='' height='70px' />
    </div>
    <p>
     Transactions on this site are safe, secure & PCI-DSS complaint as indicated
     by the secure lock in your address bar. Over 500,000+ users like you have
     enrolled for courses.
    </p>
    <img
     src='/images/securedPayments.png'
     alt='secured payments'
     height='70px'
    />
   </div>
  </div>
 )
}

export default Checkout
