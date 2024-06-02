import React from 'react'
import Navbar from '../../../components/GuestNavbar'
import '../guest-style.css'
import './index.css'
import { useLocation } from 'react-router-dom'

function AdmissionCritria() {

  const location = useLocation();
  const branchName = location.state.branch;
  const admissionCriteria = location.state.admission_details;

  return (
    <>
        <Navbar />
        <div className='container'>
            <h1 className="guest-heading">Admission Criteria</h1>
            <p className="guest-para">Check if you fulfill the requirement to join {location.state.clg_name}</p>
            <div className="course-table">
                <table className="table table-borderless table-hover">
                    <tbody>
                        <tr>
                            <td>Stream</td>
                            <td>{branchName}</td>
                        </tr>
                        <tr>
                            <td>Minimum Age</td>
                            <td>{admissionCriteria.min_age}</td>
                        </tr>
                        <tr>
                            <td>Minimum JEE Mains Rank</td>
                            <td>{admissionCriteria.min_jee_rank}</td>
                        </tr>
                        <tr>
                            <td>Minimum Class 12 CBSE Board Percentage</td>
                            <td>{admissionCriteria.min_class_12_mark}%</td>
                        </tr>
                        <tr>
                            <td>Minimum Class 10 CBSE Board Percentage</td>
                            <td>{admissionCriteria.min_class_10_mark}%</td>
                        </tr>
                        <tr>
                            <td>Syllabus</td>
                            <td>CBSE/ICSE</td>
                        </tr>
                    </tbody>
                </table>
            </div>   
        </div>
    </>
  )
}

export default AdmissionCritria