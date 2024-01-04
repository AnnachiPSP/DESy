import React from 'react'
import Navbar from '../../../components/GuestNavbar'
import '../guest-style.css'
import './index.css'

function CourseInstitutes() {
    const courseInstitute = [
      { institute: "IIITD", source: "src/assets/images/iiitd-logo.png" },
      { institute: "NSUT", source: "src/assets/images/nsut-logo.png" }
    ];
  
    return (
      <>
        <Navbar />
        <div className="container">
          <h1 className="guest-heading">Institutes</h1>
          <p className="guest-para">These institutes offer a degree in Computer Science</p>
          <div className="row text-center" style={{marginTop: '50px'}}>
            {courseInstitute.map((data, index) => (
                <div key={index} className="col-lg-4">
                    <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={`${data.source}`} />
                    <h3 className="guest-content-subheading" style={{padding: '10px 0 2.5px'}}>{data.institute}</h3>
                    <p><a className="btn btn-secondary" href='/admission-criteria'>Admission Criteria »</a></p>
                    <p><a className="btn btn-secondary" href='/consortium-partners'>Consortium Partners »</a></p>
                </div>                
            ))}
          </div>
        </div>
      </>
    );
  }


export default CourseInstitutes