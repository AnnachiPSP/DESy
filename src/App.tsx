import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FrontPage from './pages/FrontPage'
import InstituteSignup from './pages/Authenticate/InstituteSignup'
import InstituteLogin from './pages/Authenticate/InstituteLogin'
import StudentSignup from './pages/Authenticate/StudentSignup'
import StudentLogin from './pages/Authenticate/StudentLogin'
import Contact from './pages/Contact'
import Eligibility from './pages/Eligibility/eligibity'
import EligibilityResults from './pages/Eligibility/eligibility-results'
import Founders from './pages/Founders'
import AllCourses from './pages/Courses/all-courses'
import CourseInstitutes from './pages/Courses/course-institutes'
import ConsortiumPartners from './pages/Courses/consortium-partners'
import AdmissionCritria from './pages/Courses/admission-criteria'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<FrontPage />} />
          <Route path='/student-login' element={< StudentLogin />} />
          <Route path='/student-signup' element={< StudentSignup />} />
          <Route path='/institute-login' element={< InstituteLogin />} />
          <Route path='/institute-signup' element={< InstituteSignup />} /> 
          <Route path='/contact' element={< Contact />} />
          <Route path='/founders' element={< Founders />} />
          <Route path='/eligibility' element={< Eligibility />} />
          <Route path='/eligibility-results' element={< EligibilityResults />} />
          <Route path='/courses' element={< AllCourses />} />
          <Route path='/course-institutes' element={< CourseInstitutes />} />
          <Route path='/consortium-partners' element={< ConsortiumPartners />} />
          <Route path='/admission-criteria' element={< AdmissionCritria />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
