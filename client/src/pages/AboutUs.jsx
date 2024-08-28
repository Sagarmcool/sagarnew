import React from 'react'
import styles from './FooterDetails.module.css'

const AboutUs = () => {
 return (
  <div className={styles.FooterDetails}>
   <img src='/images/AboutUs.jpeg' alt='about-us' width='100%' />
   <h1 className={styles.title}>About Us</h1>
   <h3 className={styles.heading}>Welcome to Smartranx Education Center </h3>
   <p className={styles.body}>
    At Smartranx, we are dedicated to empowering working professionals by
    providing top-notch professional development programs. Our mission is to
    help you advance your career through comprehensive industry-relevant
    training, ensuring you achieve your certification goals on the very first
    attempt.
   </p>
   <h3 className={styles.heading}>Our Focus</h3>
   <p className={styles.body}>
    Our platform specializes in offering courses for professional certifications
    such as PMP, ITIL, CSM, and more. With our tailor-made learning approach, we
    provide participants with in-depth knowledge and practical skills essential
    for mastering their chosen subjects.
   </p>
   <h3 className={styles.heading}>Why Choose Us?</h3>
   <p className={styles.body}>
    What sets Smartranx education center apart is our commitment to quality and
    success. Our trainers are industry experts with over 25 years of experience,
    bringing a wealth of knowledge and real-world insights to our programs. With
    their guidance, our participants are well-prepared to excel in their
    certification exams.
   </p>
   <h3 className={styles.heading}>Key Features</h3>
   <p className={styles.body}>
    <ol>
     <li>
      <p className={styles.body}>
       <span className={styles.subHeading}>24/7 Customer Support:</span> Our
       dedicated support team is available round-the-clock via email, chat, or
       phone to assist you.
      </p>
     </li>
     <li>
      <p className={styles.body}>
       <span className={styles.subHeading}>Expert Training:</span> Learn from
       highly skilled trainers with decades of industry experience.
      </p>
     </li>
     <li>
      <p className={styles.body}>
       <span className={styles.subHeading}>High Success Rate:</span> We boast a
       98.6% success rate, ensuring our participants achieve their certification
       goals.
      </p>
     </li>
     <li>
      <p className={styles.body}>
       <span className={styles.subHeading}>Guaranteed Boot Camps:</span> Our
       boot camps are guaranteed to run, providing you with reliable and
       consistent training schedules.
      </p>
     </li>
     <li>
      <p className={styles.body}>
       <span className={styles.subHeading}>Weekly Newsletters:</span> Stay
       updated with the latest trends and developments in your field through our
       weekly newsletters.
      </p>
     </li>
     <li>
      <p className={styles.body}>
       <span className={styles.subHeading}>Quality Study Materials:</span>{' '}
       Receive timely and high-quality study materials tailored to your enrolled
       courses.
      </p>
     </li>
    </ol>
   </p>
   <h3 className={styles.heading}>Our Achievements</h3>
   <p className={styles.body}>
    We take pride in our 100% customer satisfaction rate and our impressive
    98.6% pass rate, one of the highest in the industry. These accomplishments
    reflect our unwavering dedication to providing exceptional training and
    support to our participants. Join Smartranx Education Center today and take
    the next step in advancing your career. Together, we can achieve your
    professional development goals and set you on the path to success.
   </p>
  </div>
 )
}

export default AboutUs
