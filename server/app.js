const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
// const secretKey =
//  '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'
const secretKey =
 'sk_test_51PgmDEFd5Ku8yrHot5dGnZIC5A77ZUVIb03rCFOfAY1hzGuvjlBUxWjWZoHNfCVAo1qBdgInV067tKyNxJH8jvHa00nEWpBiAl'

const stripe = require('stripe')(`${secretKey}`)

app.use(express.json())
app.use(cors())
app.use(bodyParser.raw({ type: 'application/json' }))

app.post('/api/create-checkout-session', async (req, res) => {
 const { candidateCourseData } = req.body
 const stripeDataObject = candidateCourseData[0]
 const { title, batchDates, batchWeek, batchTimings, currency, grandTotal } =
  stripeDataObject

 try {
  const session = await stripe.checkout.sessions.create({
   payment_method_types: ['card'],
   line_items: [
    {
     price_data: {
      currency: currency || 'USD',
      product_data: {
       name: title,
       description: `${batchDates} ${batchWeek}, ${batchTimings}`,
      },
      unit_amount: grandTotal * 100,
     },
     quantity: 1,
    },
   ],
   mode: 'payment',
   success_url:
    'http://localhost:3000/PaymentSuccess?session_id={CHECKOUT_SESSION_ID}',
   cancel_url: 'http://localhost:3000/PaymentError',
   metadata: {
    title,
    batchDates,
    batchWeek,
    batchTimings,
    grandTotal,
   },
  })
  res.json({ id: session.id })
 } catch (error) {
  res.status(500).json({ error: error.message })
 }
})

app.post('/webhook', async (req, res) => {
 const sig = req.headers['stripe-signature']

 let event
 try {
  event = stripe.webhooks.constructEvent(req.body, sig, 'your')
 } catch (err) {
  res.status(400).send(`Webhook Error: ${err.message}`)
  return
 }

 res.json({ received: true })
})

app.get('/retrieve-session', async (req, res) => {
 const { sessionId } = req.query

 try {
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
   expand: ['payment_intent'],
  })

  res.json({
   id: session.id,
   amount_total: session.amount_total,
   customer_details: session.customer_details,
   metadata: session.metadata,
  })
 } catch (error) {
  res.status(500).json({ error: error.message })
 }
})

app.listen(7000, () => {
 console.log('server started')
})
