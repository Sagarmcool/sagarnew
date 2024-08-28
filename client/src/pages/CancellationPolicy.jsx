import React from 'react'
import styles from './FooterDetails.module.css'

const CancellationPolicy = () => {
  return (
    <div className={styles.FooterDetails}>
      <h1 className={styles.title}>Cancellation Policy</h1>
      <h3 className={styles.heading}>
        Refund Policy for Smartranx Education Center
      </h3>
      <p className={styles.body}>
        Thank you for choosing Smartranx Education Center for your training
        needs. We strive to ensure that your experience with us is rewarding,
        both before and after attending our training sessions. As with any
        online purchase, there are terms and conditions governing our refund and
        cancellation policy. By purchasing a training course from Smartranx
        Education Center, you agree to abide by our privacy policy, terms of
        use, and the refund policy outlined below.
      </p>
      <br />
      <h3 className={styles.heading}>
        Cancellation & Refunds: Classroom Training
      </h3>
      <p className={styles.body}>
        Smartranx Education Center reserves the right to postpone, cancel, or
        change the location of an event due to reasons such as insufficient
        enrollments, instructor illness, or force majeure events (e.g., floods,
        earthquakes, political instability, etc.).
      </p>
      <br />
      <p className={styles.body}>
        If Smartranx Education Center cancels a training event, you will receive
        a full refund.
      </p>
      <br />
      <p className={styles.body}>
        If you cancel your enrollment within 3 days from the date of
        registration, a cancellation fee of 10% of the registration fee will be
        deducted, and the remaining amount will be refunded.
      </p>
      <br />
      <p className={styles.body}>
        Cancellations made more than 7 days before the start of the program will
        incur a cancellation fee of 20%, with the remaining amount refunded.
      </p>
      <br />
      <p className={styles.body}>
        No refunds will be issued for cancellations made within 7 days of the
        event start date.
      </p>
      <br />
      <h3 className={styles.heading}>
        Cancellation & Refunds: Online Training
      </h3>
      <p className={styles.body}>
        If a delegate cancels within 48 hours of subscribing, a 5%
        administration fee will be deducted.
      </p>
      <br />
      <p className={styles.body}>
        No refund will be issued for cancellations made after 48 hours of
        subscribing.
      </p>
      <br />
      <p className={styles.body}>
        For third-party courses (e.g., MS Project and MS SharePoint), a 50%
        administration and cancellation fee will be levied if cancellation
        occurs within 48 hours of subscription.
      </p>
      <br />
      <p className={styles.body}>
        No refunds will be issued after 48 hours of subscribing to the course.
      </p>
      <br />
      <h3 className={styles.heading}>Reschedule Policy</h3>
      <h3 className={styles.heading}>
        Cancellations / Reschedules By Participant:
      </h3>
      <p className={styles.body}>
        If Smartranx Education Center cancels a session, a full refund will be
        issued.
      </p>
      <br />
      <p className={styles.body}>
        Cancellations made 1-3 days prior to the class and no-shows will not be
        eligible for a refund, and the amount will be credited toward a future
        training.
      </p>
      <br />
      <p className={styles.body}>
        Please note that failure to cancel or attend will result in no refund or
        credit toward a future training.
      </p>
      <br />
      <h3 className={styles.heading}>
        Cancellations / Reschedules By Smartranx Education Center:
      </h3>
      <p className={styles.body}>
        Smartranx Education Center reserves the right to cancel or reschedule a
        class at any time due to reasons such as insufficient registrations,
        trainer unavailability, or unforeseen circumstances.
      </p>
      <br />
      <p className={styles.body}>
        Registrants will not be charged for the training in the event of a
        cancellation and will be offered a full credit toward a future workshop
        or a full refund based on their preference.
      </p>
      <br />
      <h3 className={styles.heading}>Please Note:</h3>
      <p className={styles.body}>
        Refunds may be subject to a 5% deduction to cover bank charges
        applicable during the refund process.
      </p>
      <br />
      <p className={styles.body}>
        For any cancellations or rescheduling requests, please contact us at
        support@smartranx.com.
      </p>
    </div>
  )
}

export default CancellationPolicy
