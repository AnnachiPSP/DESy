import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/GuestNavbar'
import '../guest-style.css'
import './index.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AllCourses() {

  const [courseDetails, setCourseDetails] = useState([]);
  const navigate = useNavigate();

  const api = axios.create({
    baseURL: `http://localhost:3000/api/v1`
  });

  useEffect(() => {
    api.get('/programs').then(res => {
      setCourseDetails(res.data);
    })
  }, []);

  //console.log(cd);

  const handleClick = (clg) => {
    navigate('/course-institutes', {state: {clg_detials: clg.institute_details, branch: clg.branch}});
  }

  
  return (
    <>
        <Navbar />
        <div className='container'>
            <h1 className='guest-heading'>Courses</h1>
            <p className='guest-para'>We offer degress in varied disciplines across colleges in India</p>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                {courseDetails.map((data, index) => (
                    <div key={index} className="col d-flex align-items-start">
                        <i className={`bi guest-bi ${data.branch_icon}`}></i>
                        <div className='course-list'>
                            <h3 className="guest-content-subheading fw-bold mb-0 fs-4 text-body-emphasis">{data.branch}</h3>
                            <p>{data.number_of_colleges} institutes offer this!</p>
                            <p><a className="btn btn-secondary" onClick={() => handleClick(data)}>View details »</a></p>
                        </div>
                    </div>                   
                ))}  
            </div>
        </div>
    </>
  )
}

export default AllCourses