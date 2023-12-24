import React from 'react'
import './index.css'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ResultApply() {

    const instituteData = [
        { institute: 'National Institute of Technology', state: 'Haryana', degree: 'B. Tech', program: 'Computer Science'},
        { institute: 'Delhi Technological University', state: 'Delhi', degree: 'B. Des', program: 'Maths & Computing'},
        { institute: 'Netajis Subhash University of Technology', state: 'Delhi', degree: 'B. Eng', program: 'Information Technology'},
        { institute: 'Jaypee Institute of Technology', state: 'Uttar Pradesh', degree: 'B. Tech', program: 'Computer Science'},
        { institute: 'Delhi University', state: 'Delhi', degree: 'B. Sc', program: 'Computers'},
        { institute: 'Indian Institute of Technology', state: 'Goa', degree: 'B. Tech', program: 'Computer Science'},
      ];

    const handleClick = () => {
        toast.info("Your Application has been sent to the Institute!")
        setTimeout(() => {
            window.location.href = '/xyz/dashboard';
        }, 2000)
    }
    
      return (
        <>
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
                      <a key={index} className='table-anchor' >
                        <tr className='table-rows'>
                          <td>{data.institute}</td>
                          <td>{data.state}</td>
                          <td>{data.degree}</td>
                          <td>{data.program}</td>
                          <td><button onClick={handleClick}>Apply</button></td>
                        </tr>
                      </a>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            < ToastContainer />
        </>
      )
}

export default ResultApply