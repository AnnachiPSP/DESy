import {useState} from 'react'
import './index.css'
import yourImage from '../../assets/images/DESy.png';
import ConfirmModal from '../ConfirmModal';

function InstituteNavbar() {

    const [openModal, setOpenModal] = useState(false);

  return (
    <>
        <nav className="institute-nav">
            <ul>
                <li>
                    <a href="/abc/clg-dashboard" className='institute-logo'>
                        <img className='logo-img' src={yourImage} />
                        <span className='nav-item'>Institute</span>
                    </a>
                </li>
                <li>
                    <a href="/abc/clg-profile">
                        <i className="fa-solid fa-user"></i>
                        <span className='nav-item'>Profile</span>
                    </a>
                </li>
                <li>
                    <a href="/abc/clg-analysis">
                        <i className="fa-solid fa-chart-area"></i>
                        <span className='nav-item'>Analysis</span>
                    </a>
                </li>
                <li>
                    <a href="/abc/clg-criterias">
                        <i className="fa-solid fa-list-check"></i>
                        <span className='nav-item'>Criterias</span>
                    </a>
                </li>
                <li>
                    <a href="/abc/clg-students">
                        <i className="fa-solid fa-user-group"></i>
                        <span className='nav-item'>Students</span>
                    </a>
                </li>
                <li>
                    <a href="/abc/clg-faculties">
                        <i className="fa-solid fa-chalkboard-user"></i> 
                        <span className='nav-item'>Faculties</span>
                    </a>
                </li>
                <li>
                    <a href="/abc/clg-courses">
                        <i className="fa-solid fa-list"></i>
                        <span className='nav-item'>Courses</span>
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

export default InstituteNavbar