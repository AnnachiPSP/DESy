import React from 'react'
import Navbar from '../../../components/GuestNavbar'
import './index.css'

function AdmissionCritria() {

  const admissionCriteria = {
    institute: "IIITD",
    stream: "CSE",
    minAge: 18,
    minJee: 2000,
    min12: 90,
    min10: 95,
    syllabus: 'CBSE'
  }

  return (
    <>
        <Navbar />
        <div className='container'>
            <h1 className="course-heading">Admission Criteria</h1>
            <p className="course-para">Check if you fulfill the requirement to join {admissionCriteria.institute}</p>
            <div className="course-table">
                <table className="table table-borderless table-hover">
                    <tbody>
                        <tr>
                            <td>Stream</td>
                            <td>{admissionCriteria.stream}</td>
                        </tr>
                        <tr>
                            <td>Minimum Age</td>
                            <td>{admissionCriteria.minAge}</td>
                        </tr>
                        <tr>
                            <td>Minimum JEE Mains Rank</td>
                            <td>{admissionCriteria.minJee}</td>
                        </tr>
                        <tr>
                            <td>Minimum Class 12 CBSE Board Percentage</td>
                            <td>{admissionCriteria.min12}%</td>
                        </tr>
                        <tr>
                            <td>Minimum Class 10 CBSE Board Percentage</td>
                            <td>{admissionCriteria.min10}%</td>
                        </tr>
                        <tr>
                            <td>Syllabus</td>
                            <td>{admissionCriteria.syllabus}</td>
                        </tr>
                    </tbody>
                </table>
            </div>   
        </div>
    </>
  )
}

export default AdmissionCritria