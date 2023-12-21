import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentNavbar from '../../../components/StudentNavbar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

function CourseRegistration() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [isSaveButtonEnabled, setIsSaveButtonEnabled] = useState(false);
  const navigate = useNavigate();

  const courses = [
    {
      semester: 'History of Backlogs - Check if you want to repeat any course failed',
      details: [
        { course: 'Introduction to Programming - IP', college: 'IIITD' },
        { course: 'Envirnmental Science - EVS', college: 'NSUT' },
        { course: 'Basic Electronics - BE', college: 'IIITD' },
        { course: 'Human Computer Interaction - HCI', college: 'IIITD' },
      ],
    },
    {
      semester: 'Following courses are offered from Consortium Institutes for Semester 5',
      details: [
        { course: 'Data Structures and Algorithms - DSA', college: 'IITD' },
        { course: 'Operating System - OS', college: 'DTU' },
        { course: 'Advanced Electronics - AE', college: 'IIITD' },
        { course: 'Introduction to Digital Ethnography - IDE', college: 'IIITD' },
        
      ],
    },
  ];

  const updateSaveButtonStatus = (prevCourses) => {
    const selectedCount = prevCourses.length;
  
    if (selectedCount >= 2 && selectedCount <= 6) {
      setIsSaveButtonEnabled(true);
    } else {
      setIsSaveButtonEnabled(false);
    }
  
    if (selectedCount > 6) {
      setIsSaveButtonEnabled(false);
      toast.error('You can\'t register more than 6 courses.');
    }
  };
  
  const handleCheckboxChange = (course) => {
    setSelectedCourses((prevCourses) => {
      const isCurrentlySelected = prevCourses.includes(course);
      const updatedCourses = isCurrentlySelected
        ? prevCourses.filter((selected) => selected !== course)
        : [...prevCourses, course];
  
      updateSaveButtonStatus(updatedCourses);
      return updatedCourses;
    });
  };
  
  const handleSaveCourses = () => {
    if (isSaveButtonEnabled) {
      toast.success(`Courses saved successfully: ${selectedCourses.join(', ')}`);
      setSelectedCourses([]);
      updateSaveButtonStatus([]);
    }
  };

  return (
    <>
      <StudentNavbar />
      <div className='courseregister-body'>
        <div className='courseregister-container'>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            {courses.map((course, courseIndex) => (
              <div key={courseIndex} className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse${courseIndex}`}
                    aria-expanded="false"
                    aria-controls={`flush-collapse${courseIndex}`}
                  >
                    {course.semester}
                  </button>
                </h2>
                <div
                  id={`flush-collapse${courseIndex}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <ul className="list-group">
                      {course.details.map((details, detailsIndex) => (
                        <li key={detailsIndex} className="list-round list-group-item">
                          <div className="course-group row">
                            <div className="col">{details.college}</div>
                            <div className="col">{details.course}</div>
                            <div className="col">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={`checkbox${courseIndex}-${detailsIndex}`}
                                checked={selectedCourses.includes(details.course)}
                                onChange={() => handleCheckboxChange(details.course)}
                              />
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ToastContainer />
          <div className="max-courses-message courseregister-item">
            {isSaveButtonEnabled
              ? 'You can save your courses now'
              : 'Select at least 2 courses to enable the Save button'}
          </div>
          <button
            className="save-button btn btn-info btn-lg"
            onClick={handleSaveCourses}
            disabled={!isSaveButtonEnabled}
          >
            Save Courses
          </button>
      </div>
    </>
  );
}

export default CourseRegistration;
