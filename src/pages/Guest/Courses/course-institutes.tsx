import React from 'react'
import Navbar from '../../../components/GuestNavbar'
import '../guest-style.css'
import './index.css'
import { useLocation, useNavigate } from 'react-router-dom';

function CourseInstitutes() {

    const loc = useLocation();
    const navigate = useNavigate();
    const courseInstitute = loc.state.clg_detials;
    const branchName = loc.state.branch;
    // console.log(loc.state);

    const handleAdmission = (clg) =>{
      navigate('/admission-criteria', {state: {admission_details: clg.admission_criteria, clg_name: clg.institute_name, branch: branchName}});
    }

    const handleConsortium = (clg) => {
      navigate('/consortium-partners', {state: {courses: courseInstitute, clg_name: clg.institute_name, chosen: clg.consortiums}});
    }
  
    return (
      <>
        <Navbar />
        <div className="container">
          <h1 className="guest-heading">Institutes</h1>
          <p className="guest-para">These institutes offer a degree in {branchName}</p>
          <div className="row text-center justify-content-center" style={{marginTop: '50px'}}>
            {courseInstitute.map((data, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex flex-column align-items-center">
                <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={`${data.logo_path}`} alt={`${data.institute_name} logo`} />
                <h3 className="guest-content-subheading" style={{padding: '10px 0 2.5px'}}>
                  {data.institute_name}
                </h3>
                <p><a className="btn btn-secondary" onClick={() => handleAdmission(data)}>Admission Criteria »</a></p>
                <p><a className="btn btn-secondary" href='/consortium-partners' onClick={() => handleConsortium(data)}>Consortium Partners »</a></p>
              </div>                
            ))}
          </div>
        </div>
      </>
    );
}


export default CourseInstitutes