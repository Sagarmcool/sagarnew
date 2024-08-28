import React, { useEffect, useState } from 'react'
import styles from './OrderSummary.module.css'
import DiscountIcon from '@mui/icons-material/Discount'
import ReceiptIcon from '@mui/icons-material/Receipt'
import { PromoData } from '../Data'

const OrderSummary = ({ item, handleOrderSummaryEntries }) => {
 const coursePrice = item.coursePrice.split(' ')
 const price = Number(coursePrice[coursePrice.length - 1])

 const [quantity, setQuantity] = useState(1)
 const [enteredPromoCode, setEnteredPromoCode] = useState('')
 const [promoCodeSuccess, setPromoCodeSuccess] = useState(false)
 const [promoMsg, setPromoMsg] = useState('')
 const [promoMsgColor, setPromoMsgColor] = useState('')
 const [totalDiscount, setTotalDiscount] = useState(0)
 const [courseFees, setCourseFees] = useState(price)
 const [grandTotal, setGrandTotal] = useState(courseFees)

 useEffect(() => {
  const newGrandTotal = courseFees - totalDiscount
  setGrandTotal(newGrandTotal)

  handleOrderSummaryEntries({
   enteredPromoCode,
   promoCodeSuccess,
   totalDiscount,
   selectedQty: quantity,
   currency: coursePrice[0],
   courseFees,
   grandTotal: newGrandTotal,
   price,
  })
 }, [enteredPromoCode, promoCodeSuccess, totalDiscount, quantity, courseFees])

 const handlePromoCode = () => {
  let promoData = PromoData.find(
   (item) => item.promoCode === enteredPromoCode.toUpperCase()
  )

  if (promoData) {
   const discountAmount = (courseFees * promoData.discount) / 100
   setTotalDiscount(discountAmount.toFixed(0))
   setPromoCodeSuccess(true)
   setPromoMsg('Offer applied successfully')
   setPromoMsgColor('green')
  } else {
   setTotalDiscount(0)
   setPromoCodeSuccess(false)
   setPromoMsg('Invalid Promo Code')
   setPromoMsgColor('red')
  }
 }

 const handleQtyChange = (increment) => {
  const newQty = quantity + increment
  if (newQty > 0) {
   setQuantity(newQty)
   setCourseFees(Number((newQty * price).toFixed(0)))
   setEnteredPromoCode('')
   setPromoCodeSuccess(false)
   setPromoMsg('')
   setTotalDiscount(0)
  }
 }

 return (
  <div className={styles.courseDetailsContainer}>
   <strong>
    <p style={{ fontSize: '20px' }}>{item.title}</p>
   </strong>
   <p>
    <strong style={{ color: 'orange' }}>Batch Dates : </strong>
    {item.batchDates} {item.batchWeek}
   </p>
   <p>
    <strong style={{ color: 'orange' }}>Batch Timings : </strong>
    {item.batchTimings}
   </p>
   <p>
    <strong style={{ color: 'orange' }}>Mode of Training : </strong>
    {item.batchMode}
   </p>
   <hr />
   <span style={{ color: 'orange' }}>
    <DiscountIcon />
    {'   '}
    <strong>Promo Code</strong>
   </span>
   <div style={{ margin: '15px 0' }}>
    <input
     type='text'
     placeholder='Promo Code'
     value={enteredPromoCode}
     className={styles.promoInput}
     onChange={(e) => setEnteredPromoCode(e.target.value)}
    />
    <button className={styles.promoButton} onClick={handlePromoCode}>
     Apply
    </button>
   </div>
   {promoMsg && (
    <p style={{ color: promoMsgColor, margin: 0, fontWeight: 'bolder' }}>
     {promoMsg}
    </p>
   )}
   <hr />
   <div style={{ color: 'orange', marginBottom: '10px' }}>
    <ReceiptIcon />
    {'   '}
    <strong>Billing Details</strong>
   </div>
   <div
    style={{
     display: 'flex',
     justifyContent: 'space-between',
     margin: '0px',
    }}
   >
    <strong>Quantity:</strong>
    <div className={styles.qtyContainer}>
     <button onClick={() => handleQtyChange(-1)} disabled={quantity === 1}>
      -
     </button>
     <p style={{ margin: '0 10px', fontWeight: 'bolder' }}>{quantity}</p>
     <button onClick={() => handleQtyChange(1)}>+</button>
    </div>
   </div>
   <p
    style={{
     display: 'flex',
     justifyContent: 'space-between',
     margin: '0px',
    }}
   >
    <strong>Course Fees : </strong>
    {coursePrice[0]} {courseFees}
   </p>
   <p
    style={{
     display: 'flex',
     justifyContent: 'space-between',
     margin: '0px',
     fontSize: '13px',
    }}
   >
    <span>Discount :</span>
    {totalDiscount !== null && totalDiscount}
   </p>
   <hr />
   <p
    style={{
     display: 'flex',
     justifyContent: 'space-between',
     color: 'orange',
    }}
   >
    <strong>Grand Total :</strong>
    <strong>
     {coursePrice[0]} {grandTotal}
    </strong>
   </p>
  </div>
 )
}

export default OrderSummary
