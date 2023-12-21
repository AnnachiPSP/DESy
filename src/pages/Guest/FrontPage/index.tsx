import React from 'react'
import Navbar from '../../../components/GuestNavbar'
import './index.css'

function FrontPage() {
  return (
    <>
        <Navbar />
        <div className='container'>
            <div className="row">
                <div className="col frontpage-col">
                    <div>
                        <h1 className="desy-heading">DESy</h1>
                        <h2 className="desy-subheading">A decentralized education network for students</h2>
                        <p className="desy-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac sem ac nibh donec. Amet aliquet viverra tincidunt rhoncus, est. Tellus quam netus nibh turpis malesuada neque. Sapien in non quaquam quam quamm duis vqel.</p>
                    </div>
                </div>  
                <div className="col frontpage-col">
                    <div className='col-r'>
                        <img src="src\assets\images\Cool Kids Study.png"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FrontPage