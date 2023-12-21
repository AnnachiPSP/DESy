import {useEffect, useState, useRef} from 'react'
import './index.css'
import yourImage from '../../assets/images/DESy.png';
import ConfirmModal from '../ConfirmModal';

function StudentNavbar() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
        <nav className="student-nav">
            <ul>
                <li>
                    <a href="/xyz/dashboard" className='student-logo'>
                        <img className='logo-img' src={yourImage} />
                        <span className='nav-item'>User Name</span>
                    </a>
                </li>
                <li>
                    <a href="/xyz/profile">
                        <i className="fa-solid fa-user"></i>
                        <span className='nav-item'>Profile</span>
                    </a>
                </li>
                <li>
                    <a href="/xyz/course-list">
                        <i className="fa-solid fa-list"></i>
                        <span className='nav-item'>Course List</span>
                    </a>
                </li>
                <li>
                    <a href="/xyz/consortium-institutes">
                        <i className="fa-solid fa-people-group"></i>
                        <span className='nav-item'>Consortium Institutes</span>
                    </a>
                </li>
                <li>
                    <a href="/xyz/course-registration">
                        <i className="fa-solid fa-registered"></i>  
                        <span className='nav-item'>Course Regisration</span>
                    </a>
                </li>
                <li>
                    <a href="/xyz/dropout">
                        <i className="fa-solid fa-outdent"></i>
                        <span className='nav-item'>Dropout</span>
                    </a>
                </li>
                <li>
                    <a href="/xyz/degree">
                        <i className="fa-solid fa-user-graduate"></i>
                        <span className='nav-item'>Degree</span>
                    </a>
                </li>
                <li>
                    <a href="/xyz/host-change">
                        <i className="fa-solid fa-right-left"></i>
                        <span className='nav-item'>Host Change</span>
                    </a>
                </li>
                <li>
                    <a href="#" className='logout' onClick={() => {setOpenModal(true)}}>
                        <i className="fa-solid fa-right-from-bracket"></i>
                        <span className='nav-item'>Logout</span>
                    </a>
                </li>
            </ul>
        </nav>
        {openModal && < ConfirmModal setOpenModal={setOpenModal} message={'Sure About Logging Out'} destination={'/'}/>}
    </>
  )
}

export default StudentNavbar