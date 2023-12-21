import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

function GuestNavbar() {

  const navbarStyle = {
    background: '#ffffff',
  };

  const navigate = useNavigate()

  return (
    <>
      <nav className='navbar navbar-expand-lg' style={navbarStyle}>
        <div className="container-md d-flex justify-content-between align-items-center">
          <div style={{ width: '33%' }}>
            <a className="desy-icon" href="/">DESy</a>
          </div>
          <div style={{ width: '33%' }} className="d-flex justify-content-center">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="item-pad"><a className="nav-link desy-link" href="/eligibility">Eligibility</a></li>
              <li className="item-pad"><a className="nav-link desy-link" href="/courses">Courses</a></li>
              <li className="item-pad"><a className="nav-link desy-link" href="/founders">Founders</a></li>
              <li className="item-pad"><a className="nav-link desy-link" href="/contact">Contact</a></li>
            </ul>
          </div>
          <div style={{ width: '33%' }} className="d-flex justify-content-end">
            <form>
              <a className="login-link" href="/student-login">Login</a>
              <button className="btn btn-primary desy-button" type="submit" onClick={() => navigate('/student-signup')}>Signup</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default GuestNavbar;
