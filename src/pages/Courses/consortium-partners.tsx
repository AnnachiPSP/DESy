import React from 'react'
import Navbar from '../../components/Navbar'
import './index.css'

function ConsortiumPartners() {

  const consortiumPartners = [
    {institute: 'IIITD', image: 'src/assets/images/iiitd-campus.jpeg'},
    {institute: 'NSUT', image: 'src/assets/images/nsut-campus.jpeg'},
    {institute: 'DTU', image: 'src/assets/images/dtu-campus.jpg'},
  ];

  return (
    <>
        <Navbar />
        <div className='container'>
            <h1 className="course-heading">Consortium Partners</h1>
            <p className="course-para">These institutes are in a consortium with National Institiute of Technology, Delhi</p>

            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                {consortiumPartners.map((data, index) => (
                    <div key={index} className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${data.image})`}}>
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{data.institute}</h3>
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