import React from 'react'
import Navbar from '../../../components/GuestNavbar'
import '../guest-style.css'
import './index.css'
import { useLocation } from 'react-router-dom'

function ConsortiumPartners() {

  const location = useLocation();
  const consortiumPartners = location.state.courses;

  return (
    <>
        <Navbar />
        <div className='container'>
            <h1 className="guest-heading">Consortium Partners</h1>
            <p className="guest-para">These institutes are in a consortium with {location.state.clg_name}</p>

            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                {consortiumPartners.filter(data => data.consortiums === location.state.chosen && data.institute_name != location.state.clg_name).map((data, index) => (
                    <div key={index} className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${data.campuse_glimpse_path})`}}>
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-black text-shadow-1">
                                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{data.institute_name}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default ConsortiumPartners