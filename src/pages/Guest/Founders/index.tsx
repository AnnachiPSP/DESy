import React from 'react'
import Navbar from '../../../components/GuestNavbar'
import './index.css'

function Founders() {
  return (
    <>
        <Navbar/>
        <div className='container'>
            <h1 className='founder-heading'>Founders</h1>
            <p className='founder-para'>Meet the wonderful minds behind this project</p>
            <div className="row text-center ">
                <div className="col-lg-4">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                    <h2 className="founder-subheading" style={{padding: '10px 0 2.5px'}}>Heading</h2>
                    <p className="founder-para">Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                    <p><a className="btn btn-secondary" href="#">View details »</a></p>
                </div>
                <div className="col-lg-4">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                    <h2 className="founder-subheading" style={{padding: '10px 0 2.5px'}}>Heading</h2>
                    <p className="founder-para">Some representative placeholder content for the three columns of text below the carousel. This is the second column.</p>
                    <p><a className="btn btn-secondary" href="#">View details »</a></p>
                </div>
                <div className="col-lg-4">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                    <h2 className="founder-subheading" style={{padding: '10px 0 2.5px'}}>Heading</h2>
                    <p className="founder-para">Some representative placeholder content for the three columns of text below the carousel. This is the third column.</p>
                    <p><a className="btn btn-secondary" href="#">View details »</a></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Founders