import React from 'react'
import styles from './CourseDetails.module.css'
import { CourseMasterData as dataArray } from '../Data'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import EditNoteIcon from '@mui/icons-material/EditNote'
import PaidIcon from '@mui/icons-material/Paid'
import { useNavigate, useParams } from 'react-router-dom'
import Accordion from '../components/Accordion'

const CourseDetails = () => {
 const { path } = useParams()
 const navigate = useNavigate()
 const selectedCourse = dataArray.find((item) => item.path === path)

 const scrollToSection = (e, id) => {
  e.preventDefault()
  const element = document.getElementById(id)
  const offset = 125
  const elementPosition =
   element.getBoundingClientRect().top + window.pageYOffset
  const offsetPosition = elementPosition - offset

  window.scrollTo({
   top: offsetPosition,
   behavior: 'smooth',
  })
 }

 const handleSchedule = (selectedPath) => {
  navigate(`/${selectedPath}/schedule`)
 }

 return (
  <>
   <div className={styles.CourseDetails}>
    <div className={styles.topDiv}>
     <div className={styles.topLeft}>
      <h1>{selectedCourse.heading}</h1>
      <h4 style={{ padding: '10px 0px' }}>{selectedCourse.subHeading}</h4>
      <div>
       <ul>
        {selectedCourse.introPointers.map((item, index) => (
         <li style={{ marginBottom: '10px', textAlign: 'justify' }} key={index}>
          {item}
         </li>
        ))}
       </ul>
      </div>
      {/* <div className={styles.reviewImagesDiv}>
              {selectedCourse.reviewImages.map((item, index) => (
                <div style={{ margin: '0 10px' }} key={index}>
                  <img src={`/images/${item}`} alt={item} />
                </div>
              ))}
            </div> */}
      <button
       className={styles.scheduleButton}
       onClick={() => handleSchedule(selectedCourse.path)}
      >
       Course Schedule
      </button>
     </div>

     <div className={styles.topRight}>
      <div className={styles.rightImageDiv}>
       <img
        src={`/images/${selectedCourse.categoryImg}`}
        alt={selectedCourse.categoryImg}
        className={styles.rightImage}
       />
      </div>
     </div>
    </div>

    <div className={styles.container}>
     <div className={styles.aside}>
      <div className={styles.courseContentNavbar}>
       <a
        href='#courseOverView'
        onClick={(e) => scrollToSection(e, 'courseOverView')}
       >
        Overview
       </a>
       <a
        href='#courseSkills'
        onClick={(e) => scrollToSection(e, 'courseSkills')}
       >
        Skills Covered
       </a>
       <a
        href='#courseKeyFeatures'
        onClick={(e) => scrollToSection(e, 'courseKeyFeatures')}
       >
        Key Features
       </a>
       <a
        href='#courseEligibilityCriteria'
        onClick={(e) => scrollToSection(e, 'courseEligibilityCriteria')}
       >
        Eligibility Criteria
       </a>
      </div>

      <div style={{ margin: '20px 0' }} id='courseOverView'>
       <h4 style={{ margin: '10px 0' }}>
        {selectedCourse.heading}
        <strong> Overview</strong>{' '}
       </h4>
       {selectedCourse.overviewContent.map((overview, ind) => (
        <p style={{ textAlign: 'justify', lineHeight: '20px' }} key={ind}>
         {overview}
        </p>
       ))}

       <div className={styles.epgDiv}>
        <span className={styles.epg}>
         <span>
          <EditNoteIcon style={{ marginRight: '10px' }} />
         </span>
         <strong>Exam Pass Guarantee*</strong>{' '}
        </span>
        <span className={styles.mbg}>
         <span>
          <PaidIcon style={{ marginRight: '10px' }} />
         </span>
         <strong> 100% Money Back Guarantee*</strong>
        </span>
       </div>
      </div>

      <div style={{ margin: '20px 0' }} id='courseSkills'>
       <h4 style={{ margin: '10px 0', fontWeight: '900' }}>
        What you'll learn?
       </h4>
       <div className={styles.twoColumnList}>
        <div className={styles.columnList}>
         <ul>
          {selectedCourse.skillsPointers1.map((skills, ind) => (
           <li key={ind}>
            <span
             style={{
              display: 'flex',
              justifyContent: 'flexStart',
              alignItems: 'center',
             }}
            >
             <CheckCircleIcon
              style={{
               color: 'orange',
               fontSize: '20px',
               marginRight: '20px',
              }}
             />{' '}
             {skills}
            </span>
           </li>
          ))}
         </ul>
        </div>
        <div className={styles.columnList}>
         <ul>
          {selectedCourse.skillsPointers2.map((skills, ind) => (
           <li key={ind}>
            <span
             style={{
              display: 'flex',
              justifyContent: 'flexStart',
              alignItems: 'center',
             }}
            >
             <CheckCircleIcon
              style={{
               color: 'orange',
               fontSize: '20px',
               marginRight: '20px',
              }}
             />{' '}
             {skills}
            </span>
           </li>
          ))}
         </ul>
        </div>
       </div>
      </div>

      <div className={styles.keyFeaturesDiv} id='courseKeyFeatures'>
       <h4 style={{ margin: '10px 0', fontWeight: '900' }}>Key Features</h4>
       <ul>
        {selectedCourse.keyFeaturesPointers.map((keyFeatures, ind) => (
         <li key={ind}>{keyFeatures}</li>
        ))}
       </ul>
      </div>

      <div style={{ margin: '20px 0' }} id='courseEligibilityCriteria'>
       <h4 style={{ margin: '10px 0', fontWeight: '900' }}>
        Eligibility Criteria
       </h4>
       {selectedCourse.eligibilityCriteria1.map((ec1, ind) => (
        <p style={{ textAlign: 'justify' }} key={ind}>
         {ec1}
        </p>
       ))}

       <h5 style={{ textAlign: 'center', fontWeight: '900' }}>Or</h5>

       {selectedCourse.eligibilityCriteria2.map((ec2, ind) => (
        <p style={{ textAlign: 'justify' }} key={ind}>
         {ec2}
        </p>
       ))}

       <h4 style={{ fontWeight: '900' }}>Exam Format</h4>
       {selectedCourse.examFormat.map((examFormat, ind) => (
        <p style={{ textAlign: 'justify' }} key={ind}>
         {examFormat}
        </p>
       ))}

       <h4 style={{ fontWeight: '900' }}>Exam Duration</h4>
       {selectedCourse.examDuration.map((examDuration, ind) => (
        <p style={{ textAlign: 'justify' }} key={ind}>
         {examDuration}
        </p>
       ))}
      </div>

      <div className={styles.accordionDiv}>
       <Accordion title='Course Agenda' data={selectedCourse.courseAgenda} />
      </div>

      <div style={{ width: '80%' }}>
       <h4 style={{ fontWeight: '900', margin: '20px 0' }}>
        Course Completion Certificate
       </h4>
       <img
        src={selectedCourse.courseCertificate}
        alt='Certificate'
        width='100%'
       />
      </div>
     </div>

     <div className={styles.scheduleForm}>
      <img
       src={`/images/${selectedCourse.scheduleFormImg}`}
       alt={selectedCourse.scheduleFormImg}
      />
      <div style={{ width: '100%', padding: '20px' }}>
       <h4 style={{ textAlign: 'center' }}>{selectedCourse.title}</h4>
       <p>
        <strong>Duration : </strong>
        {selectedCourse.scheduleFormDuration}
       </p>

       <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
        {selectedCourse.scheduleFormPointers.map((point, ind) => (
         <li key={ind}>
          <span
           style={{
            display: 'flex',
            justifyContent: 'flexStart',
            alignItems: 'center',
            margin: '10px 0',
           }}
          >
           <CheckCircleIcon
            style={{
             color: 'orange',
             fontSize: '20px',
             marginRight: '20px',
            }}
           />{' '}
           {point}
          </span>
         </li>
        ))}
       </ul>

       <button
        className={styles.scheduleButton}
        style={{ width: '100%' }}
        onClick={() => handleSchedule(selectedCourse.path)}
       >
        Enroll Now
       </button>
      </div>
     </div>
    </div>

    <div style={{ width: '90%', margin: '20px auto 70px auto' }}>
     <Accordion title='FAQs' data={selectedCourse.faqs} />
    </div>
   </div>
  </>
 )
}

export default CourseDetails
