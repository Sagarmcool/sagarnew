import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CourseScheduleData } from '../Data'
import CourseScheduleFeatures from '../components/CourseScheduleFeatures'

const SchedulePage = () => {
 const { path } = useParams()
 const navigate = useNavigate()
 const selectedCourse = CourseScheduleData.find((item) => item.path === path)

 const selectedCoursePath = selectedCourse.path
 const selectedCourseKeyFeatures = selectedCourse.courseKeyFeatures
 const upcomingSchedulesData = selectedCourse.upcomingSchedulesData

 const handleCheckOut = (courseBatchId) => {
  navigate(`/${selectedCoursePath}/checkout/${courseBatchId}`)
 }

 return (
  <div
   style={{
    marginTop: '70px',
    padding: '20px',
    background: 'rgb(250,250,250)',
   }}
  >
   <h2 style={{ textAlign: 'center', fontWeight: '900' }}>Course Schedule</h2>
   <p style={{ fontSize: '18px' }}>
    Upcoming classes of <strong>{selectedCourse.title}</strong>{' '}
   </p>

   {upcomingSchedulesData.map((item) => (
    <CourseScheduleFeatures
     key={item.id}
     item={item}
     selectedCourseKeyFeatures={selectedCourseKeyFeatures}
     handleCheckOut={handleCheckOut}
    />
   ))}
  </div>
 )
}

export default SchedulePage
