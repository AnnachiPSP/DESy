import React from 'react'
import StudentNavbar from '../../../components/StudentNavbar'
import profilePic from '../../../assets/images/DESy.png'
import './index.css'

function Profile() {
  return (
    <>
        < StudentNavbar />
        <div className='profile-body'>
        <div className="profile-container">
          <img className="profile-picture" src={profilePic} alt="Profile Picture" />
          <div className="profile-details">
            <h2>User Name</h2>
            <p><strong>Gender:</strong> Male</p>
            <p><strong>Father Name:</strong> John Doe Sr.</p>
            <p><strong>DOB:</strong> January 1, 1990</p>
            <p><strong>Branch:</strong> Computer Science</p>
            <p><strong>Email:</strong> user@example.com</p>
            <p><strong>Admission Date:</strong> January 1, 2022</p>
            <p><strong>Phone Number:</strong> +1 (123) 456-7890</p>
            <p><strong>Permanent Address:</strong> 123 Main St, City, Country</p>
          </div>
        </div>
        </div>
    </>
  )
}

export default Profile