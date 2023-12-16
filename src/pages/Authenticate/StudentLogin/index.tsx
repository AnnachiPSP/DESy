import React from 'react'
import '../index.css'
import Navbar from '../../../components/Navbar'

function StudentLogin() {

  const horStyle = {
    display: 'inline-block',
    width: '120px',
    height: '2.1px',
    margin: '2px 10px',
    border: 'none',
    backgroundColor: "black"
  }

  return (
    <>
      <Navbar />
      <div className="authenticate-body">
          <div className="container text-center desy-auth">

            <h2 className='auth-heading'>For a better World!</h2>

            <div className="form-floating mb-3">
                <input type="email" className="form-control desy-input" id="floatingInput" placeholder="name@example.com" required/>
                <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control desy-input" id="floatingPassword" placeholder="Password" required/>
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className='col-md-12'>
                <button type="submit" className="auth-btn btn btn-success">Log In</button>
            </div>

            <br />

            <hr style={horStyle}/>
                <span>or</span>
            <hr style={horStyle}/>

            <br /><br />

            <a className="anchor-style" href="/institute-login">Log in as institute?</a>
          </div>
        </div>
    </>
  )
}

export default StudentLogin