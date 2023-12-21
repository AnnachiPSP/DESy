import React from 'react'
import './index.css'
import StudentNavbar from '../../../components/StudentNavbar'
import nsut from '../../../assets/images/nsut-campus.jpeg'
import dtu from '../../../assets/images/dtu-campus.jpg'

function ConsortiumInstitutes() {
  return (
    <>
        < StudentNavbar />
        <div className='contendor text-center'>
        <div className='row'>
            <div className='col-md-4'>
              <div className='consortium-row'>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto ">
                  <div className="ver_mas text-center">
                    <span className='consortium-span'>
                      <button className="icon-button">
                        <i className="fa-solid fa-right-left"></i>
                        <span>Host Change Criteria</span>
                      </button>
                      <button className="icon-button">
                        <i className="fa-solid fa-list"></i>
                        <span>Course List</span>
                      </button>
                    </span>
                  </div>
                  <article className="text-left">
                      <h2>DTU</h2>
                      <h4>Delhi Technological Universty</h4>
                  </article>
                  <img src={dtu} alt="" />
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='consortium-row'>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto">
                  <div className="ver_mas text-center">
                    <span className='consortium-span'>
                      <button className="icon-button">
                        <i className="fa-solid fa-right-left"></i>
                        <span>Host Change Criteria</span>
                      </button>
                      <button className="icon-button">
                        <i className="fa-solid fa-list"></i>
                        <span>Course List</span>
                      </button>
                    </span>
                  </div>
                  <article className="text-left">
                      <h2>NSUT</h2>
                      <h4>Netaji Subash University of Technology</h4>
                  </article>
                  <img src={nsut} alt="" />
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='consortium-row'>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto ">
                  <div className="ver_mas text-center">
                    <span className='consortium-span'>
                      <button className="icon-button">
                        <i className="fa-solid fa-right-left"></i>
                        <span>Host Change Criteria</span>
                      </button>
                      <button className="icon-button">
                        <i className="fa-solid fa-list"></i>
                        <span>Course List</span>
                      </button>
                    </span>
                  </div>
                  <article className="text-left">
                      <h2>DTU</h2>
                      <h4>Delhi Technological Universty</h4>
                  </article>
                  <img src={dtu} alt="" />
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
    </>
  )
}

export default ConsortiumInstitutes