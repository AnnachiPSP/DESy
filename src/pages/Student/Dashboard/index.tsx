import React from 'react';
import StudentNavbar from '../../../components/StudentNavbar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import myImg from "../../../assets/images/Surya photo 3.5x3.5.jpg"

function Dashboard() {
  return (
    <>
      <StudentNavbar />
      <div className='dashboard-body'>
        <div className='container'>
          <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-md-4'>
            <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
              {/* 1. Welcome Message with Image */}
              <div className='welcome-message'>
                <img src={myImg} alt='Profile' className='profile-image' />
                <h1 className='h2'>Welcome back, Surya Prakash</h1>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-6'>
                <div className='card mb-4 shadow-sm'>
                  <div className='card-body'>
                    {/* 2. Courses List */}
                    <h5 className='card-title'>Courses</h5>
                    <ul className='course-list'>
                      <li>Algorithms Design</li>
                      <li>Bioinformatics</li>
                      <li>Introduction to DataBases</li>
                      <li>Calculus IV</li>
                      <li>Learning and Memory</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='card mb-4 shadow-sm'>
                  <div className='card-body'>
                    {/* 3. Circular Progress */}
                    <h5 className='card-title'>Credits</h5>
                    <p className='card-text'>84% Progress Done</p>
                    <div className='circular-progress'></div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Dashboard;
