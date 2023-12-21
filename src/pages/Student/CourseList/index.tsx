import React from 'react'
import StudentNavbar from '../../../components/StudentNavbar'
import './index.css'

function CourseList() {

  const courses = [
    {semester: 'Semester 1', details: [
      {course: 'Introduction to Programming - IP', college: 'IIITD', grade: 9},
      {course: 'Envirnmental Science - EVS', college: 'NSUT', grade: 7},
      {course: 'Basic Electronics - BE', college: 'IIITD', grade: 8},
      {course: 'Human Computer Interaction - HCI', college: 'IIITD', grade: 9},
    ]},
    {semester: 'Semester 2', details: [
      {course: 'Data Structures and Algorithms - DSA', college: 'IITD', grade: 8},
      {course: 'Envirnmental Science - EVS', college: 'NSUT', grade: 7},
      {course: 'Advanced Electronics - AE', college: 'IIITD', grade: 8},
      {course: 'Introduction to Digital Ethnography - IDE', college: 'IIITD', grade: 9},
    ]},
    {semester: 'Semester 3', details: [
      {course: 'Advanced Programming - AP', college: 'NITD', grade: 9},
      {course: 'Operating System - OS', college: 'IIITD', grade: 6},
      {course: '3D Printing', college: 'DTU', grade: 8},
      {course: 'Money & Banking', college: 'IIITD', grade: 7},
    ]},
  ];

  return (
    <>
      <StudentNavbar />
      <div className='courselist-body'>
        <div className='courselist-container'>
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
                              <div className="col">
                                {details.college}
                              </div>
                              <div className="col">
                                {details.course}
                              </div>
                              <div className="col">
                                {details.grade}
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
      </div>
    </>
  );
}

export default CourseList