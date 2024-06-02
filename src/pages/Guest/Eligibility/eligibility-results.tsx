import React from 'react'
import Navbar from '../../../components/GuestNavbar'
import '../guest-style.css'
import { useLocation } from "react-router-dom";
import './index.css'

function EligibilityResults() {

  const location = useLocation();
  const instituteData = JSON.parse(location.state.data);
  console.log(instituteData)

  return (
    <>
        <Navbar />
        <div className='container'>
          <h1 className='guest-heading'>Results</h1>
          {instituteData.length == 0 ? <p className='guest-para'>Sorry, There are no college according to your preferance or eligibility</p> : 
          <>
            <p className='guest-para'>Based on your scores, these instittutes offer you degrees</p>
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
                    <a key={index} className='table-anchor' href={`${data.web_domain}`} target="_blank">
                      <tr className='table-rows'>
                        <td>{data.institute_name}</td>
                        <td>{data.institute_location}</td>
                        <td>B. Tech</td>
                        <td>{data.branch}</td>
                      </tr>
                    </a>
                  ))}
                </tbody>
              </table>
            </div>
          </>
          }
        </div>
    </>
  )
}

export default EligibilityResults