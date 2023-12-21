import {useState} from 'react'
import StudentNavbar from '../../../components/StudentNavbar'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import { useNavigate } from 'react-router-dom';
import CriteriaTemplate from '../CriteriaTemplate'

const ConsortiumHostChange = ({ onPrev, onNext, onSelectCollege}) => {

  const consortiumInstitutes = [
    {college: 'Indian Institute of Technology Delhi - IITD', degreeCriteria: [
      ['Min credits for degree', 160, 140, false],
      ['Min credits from host', 80, 80, true],
      ['Max online credits', 10, 8, true],
      ['Mandatory host courses', 'DE, IP, CD, PNS, WRLC, COM', 'DE, IP, CD, PNS, WRLC', false],
      ['Others', '0 active backlogs', '0 active backlogs', true]
    ]},
    {college: 'Netaji Subash University of Technology - NSUT', degreeCriteria: [
      ['Min credits for degree', 140, 140, true],
      ['Min credits from host', 80, 84, true],
      ['Max online credits', 20, 16, true],
      ['Mandatory host courses', 'DE, IP, CD, PNS, WRLC, COM', 'DE, IP, CD, PNS, WRLC, COM', true],
      ['Others', '0 active backlogs', '0 active backlogs', true]
    ]},
    {college: 'Delhi Technological University - DTU', degreeCriteria: [
      ['Min credits for degree', 120, 140, true],
      ['Min credits from host', 80, 80, true],
      ['Max online credits', 10, 8, true],
      ['Mandatory host courses', 'DE, IP, CD, PNS, WRLC, COM, AP', 'DE, IP, CD, PNS, WRLC, COM', false],
      ['Others', '0 active backlogs', '0 active backlogs', true]
    ]},
    {college: 'National Institute of Technology - NITD', degreeCriteria: [
      ['Min credits for degree', 120, 120, true],
      ['Min credits from host', 60, 60, true],
      ['Max online credits', 10, 8, true],
      ['Mandatory host courses', 'DE, IP, CD, PNS, WRLC', 'DE, IP, CD, PNS, WRLC', true],
      ['Others', '0 active backlogs', '0 active backlogs', true]
    ]}
  ];

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
    <h2 className="h2-criteria">Do you want to see your current Degree Status</h2>
    <div className='criteria-design-btn1'>
      <button className='btn btn-info' onClick={onNext}>Yes</button>
      <button className='btn btn-info' onClick={onNo}>No</button>
    </div>
  </div>
);

const Form2 = ({ onNextOne, onNextTwo, onPrev }) => (
    <div>
      <h2 className="h2-criteria">Do you want to see your degree status with current host? Or do you want to see the status with different host? Please select the required option.</h2>
      <div className='criteria-design-btn3'>
        <button className='btn btn-info' onClick={onNextOne}>Current</button>
        <button className='btn btn-info' onClick={onNextTwo}>Host Change</button>
        <button className='btn btn-info' onClick={onPrev}>Cancel</button>
      </div>
    </div>
);

const Form3 = ({ onBtnOne, onBtnTwo, criterias, respCollege }) => {

  const isAllFulfilled = criterias.degreeCriteria.every(row => row[3] === true);

  const handleSubmit = () => {
    onBtnTwo();
    respCollege(criterias.college);
  }

  return (
    <div className='degree-criteria-container'>
      {isAllFulfilled ? (
        <>
          <h2 className="h2-criteria">You have fulfilled all the criteria of {criterias.college}!! </h2>
          <CriteriaTemplate data={criterias.degreeCriteria} />
          <div className='criteria-design-btn4'>
            <button className='btn btn-info' onClick={onBtnOne}>Goback</button>
            <button className='btn btn-info' onClick={handleSubmit}>Proceed</button>
          </div>
        </>
      ) : (
        <>
          <h2 className="h2-criteria">You are not yet eligible to get the degree from {criterias.college}</h2>
          <CriteriaTemplate data={criterias.degreeCriteria} />
          <button className='btn btn-info' onClick={onBtnOne}>Goback</button>
        </>
      )}
    </div>
  );
}

const  Form4 = ({ clgName, onBtn}) => {

  return(
    <div>
      <h2 className="h2-criteria">Do you want to graduate from {clgName}? Take an Educated Decision</h2>
      <div className='criteria-design-btn1'>
        <button className='btn btn-info' onClick={() => {toast.success("The respective Institute have been notified!")}}>Yes</button>
        <button className='btn btn-info' onClick={onBtn}>No</button>
      </div>
  </div>
  );
}

function Degree() {

  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedCollegeName, setSelectedCollegeName] = useState("");

  const handleNext = () => setCurrentStep(currentStep + 1);
  const handleNextTwo = () => setCurrentStep(currentStep + 2);
  const handlePrev = () => setCurrentStep(currentStep - 1);
  const handlePrevTwo = () => setCurrentStep(currentStep - 2);
  const handleSelectCollege = (college) => setSelectedCollege(college);
  const handleCollegeName = (clgName) => setSelectedCollegeName(clgName);

  const handleNo = () => navigate('/xyz/dashboard');

  const hostInstitute = {college: "Indraprastha Institute of Information Technology - IIITD", degreeCriteria:[
    ['Min credits for degree', 80, 76, false],
    ['Min credits from host', 60, 60, true],
    ['Max online credits', 10, 8, true],
    ['Mandatory host courses', 'DE, IP, CD, PNS, WRLC, COM', 'DE, IP, CD, PNS, WRLC', false],
    ['Others', '0 active backlogs', '0 active backlogs', true]
  ]};

  return (
    <>
      < StudentNavbar />
      <div className='degree-body'>
        <h1>DEGREE</h1>
        <div className='degree-frombody'>
          {currentStep === 1 && < Form1 onNext={handleNext} onNo={handleNo} />}
          {currentStep === 2 && < Form2 onNextOne={handleNext} onNextTwo={handleNextTwo} onPrev={handlePrev} />}
          {currentStep === 3 && < Form3 onBtnOne={handlePrevTwo} onBtnTwo={handleNextTwo} criterias={hostInstitute} respCollege={handleCollegeName}/>}
          {currentStep === 4 && < ConsortiumHostChange onPrev={handlePrevTwo} onNext={handleNextTwo} onSelectCollege={handleSelectCollege}/>}
          {currentStep === 5 && < Form4 clgName={selectedCollegeName} onBtn={() => {setCurrentStep(2)}} />}
          {currentStep === 6 && < Form3 onBtnOne={handlePrevTwo} onBtnTwo={handlePrev} criterias={selectedCollege} respCollege={handleCollegeName}/>}
        </div>
      </div>
      < ToastContainer />
    </>
  )
}

export default Degree