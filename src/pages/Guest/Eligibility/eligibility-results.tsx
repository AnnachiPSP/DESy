import React from 'react'
import Navbar from '../../../components/GuestNavbar'
import './index.css'

function EligibilityResults() {

  const instituteData = [
    { institute: 'National Institute of Technology', state: 'Haryana', degree: 'B. Tech', program: 'Computer Science', link:  'https://home.iitd.ac.in/'},
    { institute: 'Delhi Technological University', state: 'Delhi', degree: 'B. Des', program: 'Maths & Computing', link:  'http://www.dtu.ac.in/'},
    { institute: 'Netajis Subhash University of Technology', state: 'Delhi', degree: 'B. Eng', program: 'Information Technology', link:  'http://nsut.ac.in/en/home'},
    { institute: 'Jaypee Institute of Technology', state: 'Uttar Pradesh', degree: 'B. Tech', program: 'Computer Science', link: 'https://jiit.ac.in'},
    { institute: 'Delhi University', state: 'Delhi', degree: 'B. Sc', program: 'Computers', link: 'https://www.du.ac.in/'},
    { institute: 'Indian Institute of Technology', state: 'Goa', degree: 'B. Tech', program: 'Computer Science', link: 'https://iitgoa.ac.in/'},
  ];

  return (
    <>
        <Navbar />
        <div className='container'>
          <h1 className='eligibility-heading'>Results</h1>
          <p className='eligibility-para'>Based on your scores, these instittutes offer you degrees</p>
          <div className='eligibility-table'>
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">Institute</th>
                  <th scope="col">State</th>
                  <th scope="col">Degree</th>
                  <th scope="col">Program</th>
                </tr>
              </thead>
              <tbody>
                {instituteData.map((data, index) => (
                  <a key={index} className='table-anchor' href={`${data.link}`} target="_blank">
                    <tr className='table-rows'>
                      <td>{data.institute}</td>
                      <td>{data.state}</td>
                      <td>{data.degree}</td>
                      <td>{data.program}</td>
                    </tr>
                  </a>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </>
  )
}

export default EligibilityResults