import {useState, useEffect} from 'react'
import './index.css'
import yourImage from '../../assets/images/DESy.png';
import ConfirmModal from '../ConfirmModal';

function InstituteNavbar() {

    const [openModal, setOpenModal] = useState(false);
    const [activeItem, setActiveItem] = useState('');

    useEffect(() => {
        const currentPath = window.location.pathname;
        setActiveItem(currentPath);
      }, []);

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
                    <a href="/abc/clg-profile" className={activeItem === '/abc/clg-profile' ? 'active' : ''} onClick={() => setActiveItem('/xyz/clg-profile')}>
                        <i className="fa-solid fa-user"></i>
                        <span className='nav-item'>Profile</span>
                    </a>
                </li>
                <li>
                    <a href="/abc/clg-analysis" className={activeItem === '/abc/clg-analysis' ? 'active' : ''} onClick={() => setActiveItem('/abc/clg-analysis')}>
                        <i className="fa-solid fa-chart-area"></i>
                        <span className='nav-item'>Analysis</span>
                    </a>
                </li>
                <li>
                    <a href="/abc/clg-criterias" className={activeItem === '/abc/clg-criterias' ? 'active' : ''} onClick={() => setActiveItem('/abc/clg-criterias')}>
                        <i className="fa-solid fa-list-check"></i>
                        <span className='nav-item'>Criterias</span>
                    </a>
                </li>
                <li>
                    <a href="/abc/clg-students" className={activeItem === '/abc/clg-students' ? 'active' : ''} onClick={() => setActiveItem('/abc/clg-students')}>
                        <i className="fa-solid fa-user-group"></i>
                        <span className='nav-item'>Students</span>
                    </a>
                </li>
                <li>
                    <a href="/abc/clg-faculties" className={activeItem === '/abc/clg-faculties' ? 'active' : ''} onClick={() => setActiveItem('/abc/clg-faculties')}>
                        <i className="fa-solid fa-chalkboard-user"></i> 
                        <span className='nav-item'>Faculties</span>
                    </a>
                </li>
                <li>
                    <a href="/abc/clg-courses" className={activeItem === '/abc/clg-courses' ? 'active' : ''} onClick={() => setActiveItem('/abc/clg-courses')}>
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