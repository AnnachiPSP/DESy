import {useState} from 'react'
import StudentNavbar from '../../../components/StudentNavbar'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import { useNavigate } from 'react-router-dom';
import CriteriaTemplate from '../CriteriaTemplate'

const consortiumInstitutes = [
  {
    college: 'Indian Institute of Technology Delhi - IITD',
    allowed: true,
    dropoutCriteria: [
      ['Min credits for degree', 160, 140, false],
      ['Min credits from host', 80, 80, true],
      ['Max online credits', 10, 8, true],
      ['Mandatory host courses', 'DE, IP, CD, PNS, WRLC, COM', 'DE, IP, CD, PNS, WRLC', false],
      ['Others', '0 active backlogs', '0 active backlogs', true],
    ],
  },
  {
    college: 'Netaji Subash University of Technology - NSUT',
    allowed: true,
    dropoutCriteria: [
      ['Min credits for degree', 140, 140, true],
      ['Min credits from host', 80, 84, true],
      ['Max online credits', 20, 16, true],
      ['Mandatory host courses', 'DE, IP, CD, PNS, WRLC, COM', 'DE, IP, CD, PNS, WRLC, COM', true],
      ['Others', '0 active backlogs', '0 active backlogs', true],
    ],
  },
  {
    college: 'Delhi Technological University - DTU',
    allowed: false,
    dropoutCriteria: [
      ['Min credits for degree', 120, 140, true],
      ['Min credits from host', 80, 80, true],
      ['Max online credits', 10, 8, true],
      ['Mandatory host courses', 'DE, IP, CD, PNS, WRLC, COM, AP', 'DE, IP, CD, PNS, WRLC, COM', false],
      ['Others', '0 active backlogs', '0 active backlogs', true],
    ],
  },
  {
    college: 'National Institute of Technology - NITD',
    allowed: true,
    dropoutCriteria: [
      ['Min credits for degree', 120, 120, true],
      ['Min credits from host', 60, 60, true],
      ['Max online credits', 10, 8, true],
      ['Mandatory host courses', 'DE, IP, CD, PNS, WRLC', 'DE, IP, CD, PNS, WRLC', true],
      ['Others', '0 active backlogs', '0 active backlogs', true],
    ],
  },
];


const ConsortiumDropOut = ({onPrev, onNext, onSelectCollege}) => {

  const handleClick = (data) => {
    onSelectCollege(data);
    onNext();
  }

  return(
    <div>
      <div className='dropout-container'>
        <ul className="list-group">
          {consortiumInstitutes.map((data, dataIndex) => (
            <li key={dataIndex} className="list-group-item list-round">
              <div className='row dropout-row'>
                <div className='col dropout-element'>
                  {data.college}
                </div>
                <div className='col dropout-element-btn'>
                  <button className='btn btn-primary' onClick={() => {handleClick(data)}}>Check</button>
                </div>
              </div>
            </li>
          ))}
        </ul>      
      </div>
      <br />
      <button className='btn btn-info' onClick={onPrev}>Cancel</button>  
    </div>

  );
}

const Form1 = ({ onNext, onNo }) => (
  <div>
    <h2 className="h2-criteria">Do you want to Dropout? Please Select YES to confirm</h2>
    <div className='criteria-design-btn1'>
      <button className='btn btn-info' onClick={onNext}>Yes</button>
      <button className='btn btn-info' onClick={onNo}>No</button>
    </div>
  </div>
);

const Form2 = ({ onPrev, onNextOne, onNextTwo, allowDropout }) => (
  <div>
    <h2 className="h2-criteria">
      Your Institute {allowDropout ? 'allows' : 'does not allow'} Dropout! These are the options available accordingly!
    </h2>
    <div className='criteria-design-btn3'>
      <button className='btn btn-info' onClick={onNextOne}>Proceed</button>
      <button className='btn btn-info' onClick={onNextTwo}>Host Change</button>
      <button className='btn btn-info' onClick={onPrev}>Cancel</button>
    </div>
  </div>
);

const Form3 = ({ onPrev, onNext, message }) => (
  <div>
    <h2 className="h2-criteria">{message}. However, you can apply for a host change to an institute that allows it. Please click yes to proceed</h2>
    <div className='criteria-design-btn1'>
      <button className='btn btn-info' onClick={onNext}>Yes</button>
      <button className='btn btn-info' onClick={onPrev}>No</button>
    </div>
  </div>
);

const Form4 = ({ onPrev, onSubmit, criterias }) => {

  const isAllFulfilled = criterias.dropoutCriteria.every((row) => row[3] === true);

  return(
    <div className='dropout-criteria-container'>
      {isAllFulfilled ? (
        <>
          <h2 className="h2-criteria">You are eligible to drop out from your host College!! Take an Educated Decision!! <strong>Are you Dropping?</strong></h2>
          < CriteriaTemplate data={criterias.dropoutCriteria} />
          <div className='criteria-design-btn4'> 
            <button className='btn btn-info' onClick={onSubmit}>Poceed</button>
            <button className='btn btn-info' onClick={onPrev}>Go back</button>
          </div>
        </>
      ) : (
        <>
          <h2 className="h2-criteria">You are not eligible to drop out from your host College!! Maybe you can change your HOST!! Take an Educated Decision!!</h2>
          < CriteriaTemplate data={criterias.dropoutCriteria} />
          <button className='btn btn-info' onClick={onPrev}>Go back</button> 
        </>
      )}
    </div>
  );
};

const Form5 = ({ onPrev, onNext, criterias }) => {

  const isAllFulfilled = criterias.dropoutCriteria.every((row) => row[3] === true);

  return(
    <div className='dropout-criteria-container'>
      {criterias.allowed ? (isAllFulfilled ? (
        <>
          <h2 className="h2-criteria">You are eligible to drop out from {criterias.college}!! Take an Educated Decision!! <strong>Are you Dropping?</strong></h2>
          < CriteriaTemplate data={criterias.dropoutCriteria} />
          <div className='criteria-design-btn4'>
            <button className='btn btn-info' onClick={onNext}>Poceed</button>
            <button className='btn btn-info' onClick={onPrev}>Go back</button>
          </div>
        </>
      ) : (
        <>
          <h2 className="h2-criteria">You are not eligible to drop out from {criterias.college}!! Maybe you can check another college!! Take an Educated Decision!!</h2>
          < CriteriaTemplate data={criterias.dropoutCriteria} />
          <button className='btn btn-info' onClick={onPrev}>Go back</button> 
        </>
      )) : (
        <>
          <h2 className="h2-criteria">{criterias.college} doesn't allow Drop facilty! Check Another colege!!</h2>
          <button className='btn btn-info' onClick={onPrev}>Go back</button>
        </>
      )}
    </div>
  );
};

const Form4a = ({ onPrev, onNext }) => (
  <div>
    <h2 className="h2-criteria">Your institute does not allow dropout. If you proceed, all your credits till now will be nullified. Do you still want to proceed?</h2>
    <div className='criteria-design-btn1'>
      <button className='btn btn-info' onClick={onNext}>Yes</button>
      <button className='btn btn-info' onClick={onPrev}>No</button>
    </div>
  </div>
);

const Form4b = ({ onPrev, onSubmit }) => (
  <div>
    <h2 className="h2-criteria">Are you sure about Dropping?? Take an Educated Decision!!</h2>
    <div className='criteria-design-btn1'>
      <button className='btn btn-info' onClick={onSubmit}>Yes</button>
      <button className='btn btn-info' onClick={onPrev}>No</button>
    </div>
  </div>
);

function Dropout() {

  const hostCollege =   {
    college: 'Indian Institute of Technology Delhi - IIITD',
    allowed: true,
    dropoutCriteria: [
      ['Min credits for degree', 160, 140, true],
      ['Min credits from host', 80, 80, true],
      ['Max online credits', 10, 8, true],
      ['Mandatory host courses', 'DE, IP, CD, PNS, WRLC, COM', 'DE, IP, CD, PNS, WRLC', true],
      ['Others', '0 active backlogs', '0 active backlogs', true],
    ],
  }

  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCollege, setSelectedCollege] = useState(null);

  const handleNext = () => setCurrentStep(currentStep + 1);
  const handlePrev = () => setCurrentStep(currentStep - 1);
  const handleNextTwo = () => setCurrentStep(currentStep + 3);
  const handleSelectCollege = (college) => setSelectedCollege(college);

  const handleSubmit = () => {
    toast.success('You will be dropped once the college confirms!!');
  };

  const handleNo = () => {
    navigate('/xyz/dashboard')
  };

  return (
    <>
      <StudentNavbar />
      <div className='dropout-body'>
        <h1>DROPOUT</h1>
        <div className='dropout-formbody'>
          {currentStep === 1 && <Form1 onNext={handleNext} onNo={handleNo} />}
          {currentStep === 2 && <Form2 onPrev={handlePrev} onNextOne={handleNext} onNextTwo={handleNextTwo} allowDropout={hostCollege.allowed} />}
          {currentStep === 3 && hostCollege.allowed && < Form4 onPrev={handlePrev} onSubmit={handleSubmit} criterias={hostCollege}/>}
          {currentStep === 3 && !hostCollege.allowed && <Form4a onPrev={handlePrev} onNext={handleNext} />}
          {currentStep === 4 && <Form4b onPrev={handlePrev} onSubmit={handleSubmit} />}
          {currentStep === 5 && <Form3 onPrev={() => {setCurrentStep(1)}} onNext={handleNext} message={hostCollege.allowed ? 'Your Institute allows Dropout' : 'Your Institute does not allow Dropout'} />}
          {currentStep === 6 && <ConsortiumDropOut onPrev={() => setCurrentStep(1)} onNext={handleNext} onSelectCollege={handleSelectCollege}/>}
          {currentStep === 7 && <Form5 onPrev={handlePrev} onNext={handleSubmit} criterias={selectedCollege}/>}
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Dropout;
