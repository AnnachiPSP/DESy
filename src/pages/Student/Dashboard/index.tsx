import React from 'react'
import StudentNavbar from '../../../components/StudentNavbar'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

function Dashboard() {
  return (
    <>
        < StudentNavbar />
        <div className='container'>
            Dashboard
        </div>
        < ToastContainer />
    </>
  )
}

export default Dashboard