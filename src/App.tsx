import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FrontPage from './pages/Guest/FrontPage'
import InstituteSignup from './pages/Authenticate/InstituteSignup'
import InstituteLogin from './pages/Authenticate/InstituteLogin'
import StudentSignup from './pages/Authenticate/StudentSignup'
import StudentLogin from './pages/Authenticate/StudentLogin'
import Contact from './pages/Guest/Contact'
import Eligibility from './pages/Guest/Eligibility/eligibity'
import EligibilityResults from './pages/Guest/Eligibility/eligibility-results'
import Founders from './pages/Guest/Founders'
import AllCourses from './pages/Guest/Courses/all-courses'
import CourseInstitutes from './pages/Guest/Courses/course-institutes'
import ConsortiumPartners from './pages/Guest/Courses/consortium-partners'
import AdmissionCritria from './pages/Guest/Courses/admission-criteria'
import Profile from './pages/Student/Profile'
import Dashboard from './pages/Student/Dashboard'
import CourseList from './pages/Student/CourseList'
import ConsortiumInstitutes from './pages/Student/ConsortiumInstitutes'
import CourseRegistration from './pages/Student/CourseRegistration'
import Dropout from './pages/Student/Dropout'
import Degree from './pages/Student/Degree'
import HostChange from './pages/Student/HostCange'
import InstituteDashboard from './pages/Institute/InstituteDashboard';
import InstituteProfile from './pages/Institute/InstituteProfile';
import InstituteAnalysis from './pages/Institute/InstituteAnalysis';
import InstituteCriterias from './pages/Institute/InstituteCriterias';
import InstituteStudents from './pages/Institute/InstituteStudents';
import InstituteFaculties from './pages/Institute/InstituteFaculties';
import InstituteCourses from './pages/Institute/InstituteCourses';
import ApplyNow from './pages/Student/Application';
import ResultApply from './pages/Student/Application/results-apply';


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
          <Route path='/:student/apply' element={< ApplyNow />} />
          <Route path='/:student/apply-results' element={< ResultApply />} />
          <Route path='/:student/profile' element={< Profile />} />
          <Route path='/:student/dashboard' element={< Dashboard />} />
          <Route path='/:student/course-list' element={< CourseList />} />
          <Route path='/:student/consortium-institutes' element={< ConsortiumInstitutes />} />
          <Route path='/:student/course-registration' element={< CourseRegistration />} />
          <Route path='/:student/dropout' element={< Dropout />} />
          <Route path='/:student/degree' element={< Degree />} />
          <Route path='/:student/host-change' element={< HostChange />} />
          <Route path='/:institute/clg-dashboard' element={< InstituteDashboard />} />
          <Route path='/:institute/clg-profile' element={< InstituteProfile />} />
          <Route path='/:institute/clg-analysis' element={< InstituteAnalysis />} />
          <Route path='/:institute/clg-criterias' element={< InstituteCriterias />} />
          <Route path='/:institute/clg-students' element={< InstituteStudents />} />
          <Route path='/:institute/clg-faculties' element={< InstituteFaculties />} />
          <Route path='/:institute/clg-courses' element={< InstituteCourses />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
