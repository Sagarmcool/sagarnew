import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Footer from './components/Footer'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CancellationPolicy from './pages/CancellationPolicy'
import CourseDetails from './pages/CourseDetails'
import SchedulePage from './pages/SchedulePage'
import Checkout from './pages/Checkout'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import CorporateTraining from './pages/CorporateTraining'
import Blogs from './pages/Blogs'
import BlogDetails from './pages/BlogDetails'

function App() {
 return (
  <div>
   <Navbar />
   <Routes>
    <Route exact path='/' element={<Landing />} />
    <Route path='/:path' Component={CourseDetails} />
    <Route path='/:path/schedule' Component={SchedulePage} />
    <Route path='/:path/checkout/:id' Component={Checkout} />
    <Route path='termsAndConditions' element={<TermsAndConditions />} />
    <Route path='privacyPolicy' element={<PrivacyPolicy />} />
    <Route path='cancellationPolicy' element={<CancellationPolicy />} />
    <Route path='contactUs' element={<ContactUs />} />
    <Route path='aboutUs' element={<AboutUs />} />
    <Route path='corporateTraining' element={<CorporateTraining />} />
    <Route path='blogs' element={<Blogs />} />
    <Route path='/blogs/:path' element={<BlogDetails />} />
   </Routes>
   <Footer />
  </div>
 )
}

export default App
