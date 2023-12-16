import React from 'react'
import Navbar from '../../components/Navbar'
import './index.css'

function AllCourses() {
  
  const courseDetails = [
    {course: 'Computer Science', numbers: 2, icon: "bi-laptop"},
    {course: 'Electronics', numbers: 2, icon: "bi-cpu"},
    {course: 'Finance', numbers: 2, icon: "bi-cash-coin"},
    {course: 'Mechanics', numbers: 2, icon: "bi-nut-fill"},
    {course: 'Computer Science', numbers: 2, icon: "bi-laptop"},
    {course: 'Electronics', numbers: 2, icon: "bi-cpu"},
    {course: 'Finance', numbers: 2, icon: "bi-cash-coin"},
    {course: 'Mechanics', numbers: 2, icon: "bi-nut-fill"},
  ];
  
  return (
    <>
        <Navbar />
        <div className='container'>
            <h1 className='course-heading'>Courses</h1>
            <p className='course-para'>We offer degress in varied disciplines across colleges in India</p>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                {courseDetails.map((data, index) => (
                    <div key={index} className="col d-flex align-items-start">
                        <i className={`bi ${data.icon}`}></i>
                        <div className='course-list'>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">{data.course}</h3>
                            <p>{data.numbers} institutes offer this!</p>
                            <p><a className="btn btn-secondary" href='/course-institutes'>View details »</a></p>
                        </div>
                    </div>                   
                ))}  
            </div>
        </div>
    </>
  )
}

export default AllCourses