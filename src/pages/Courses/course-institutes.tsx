import React from 'react'
import Navbar from '../../components/Navbar'
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
          <h1 className="course-heading">Institutes</h1>
          <p className="course-para">These institutes offer a degree in Computer Science</p>
          <div className="row text-center" style={{marginTop: '50px'}}>
            {courseInstitute.map((data, index) => (
                <div key={index} className="col-lg-4">
                    <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={`${data.source}`} />
                    <h2 className="course-subheading" style={{padding: '10px 0 2.5px'}}>{data.institute}</h2>
                    <div className='d-flex'></div>
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