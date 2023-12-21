import {useState} from 'react'
import StudentNavbar from '../../../components/StudentNavbar'
import './index.css'
import { useNavigate } from 'react-router-dom';
import CriteriaTemplate from '../CriteriaTemplate';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const hostCollege = [
  {college: "Indraprastha Institute of Information Technology - IIITD", branch: "Branch 2"}
]

const hostChangeCriteria = [
  {
      college: "Indian Institute of Technology Delhi - IITD",
      branches: [
          {
              branch: "Branch 1",
              criteria: [
                  ["Min credits for degree", 124, 116, true ],
                  ["Min credits from host", 72, 76, true ],
                  ["Max online credits", 16, 16, true ],
                  ["Mandatory host courses", "CD, IP, CSE, PNS, WRLC, CE, DE", "ECE, AP, EEE, WRLC", true],
                  ["Others", "0 active backlogs", "0 active backlogs", true ]
              ],
              allowedHosts: ["Branch 3","Branch 2"]
          },
          {
              branch: "Branch 2",
              criteria: [
                  ["Min credits for degree",156,120,false],
                  ["Min credits from host",64,72,false],
                  ["Max online credits",12,20,false],
                  ["Mandatory host courses","WRLC, CE, PNS","CSE, CD, IP, AP, PNS",false],
                  ["Others","0 active backlogs","0 active backlogs",false]
              ],
              allowedHosts: ["Branch 4","Branch 3"]
          },
          {
              branch: "Branch 3",
              criteria: [
                  ["Min credits for degree",148,120,true],
                  ["Min credits from host",68,80,false],
                  ["Max online credits",20,16,true],
                  ["Mandatory host courses","DE, ECE, PNS, EEE, COM, CE, ME, WRLC, AP, CSE, CD, IP","DE, CSE, PNS, CD, ME, ECE, CE",false],
                  ["Others","0 active backlogs","0 active backlogs",true]
              ],
              allowedHosts: ["Branch 1","Branch 4"]
          },
          {
              branch: "Branch 4",
              criteria: [
                  ["Min credits for degree",128,136,true],
                  ["Min credits from host",64,72,false],
                  ["Max online credits",16,16,true],
                  ["Mandatory host courses","COM, AP, CD, CE, ME, IP, ECE","EEE, AP, COM, CD, PNS, CE",false],
                  ["Others","0 active backlogs","0 active backlogs",false]
              ],
              allowedHosts: ["Branch 1","Branch 2","Branch 3"]
          },
          {
              branch: "Branch 5",
              criteria: [
                  ["Min credits for degree",136,132,false],
                  ["Min credits from host",76,76,true],
                  ["Max online credits",20,20,true],
                  ["Mandatory host courses","DE, AP, EEE, CE, CSE","DE, ECE, PNS",true],
                  ["Others","0 active backlogs","0 active backlogs",true]
              ],
              allowedHosts: ["Branch 2","Branch 3"]
          }
      ]
  },
  {
    college: "Netaji Subash University of Technology - NSUT",
    branches: [
      {
        branch: "Branch 1",
        criteria: [
          ["Min credits for degree", 132, 128, true],
          ["Min credits from host", 64, 64, false],
          ["Max online credits", 8, 16, false],
          ["Mandatory host courses", "WRLC, ECE, CD, COM", "DE, ECE, CE", false],
          ["Others", "0 active backlogs", "0 active backlogs", false]
        ],
        allowedHosts: ["Branch 3", "Branch 4"]
      },
      {
        branch: "Branch 2",
        criteria: [
          ["Min credits for degree", 144, 132, true],
          ["Min credits from host", 76, 72, true],
          ["Max online credits", 16, 16, true],
          ["Mandatory host courses", "AP, IP, ME, EEE, WRLC", "WRLC, COM, AP, ECE, CSE, ME, CD", true],
          ["Others", "0 active backlogs", "0 active backlogs", false]
        ],
        allowedHosts: ["Branch 1", "Branch 4", "Branch 3"]
      },
      {
        branch: "Branch 3",
        criteria: [
          ["Min credits for degree", 124, 132, false],
          ["Min credits from host", 68, 80, true],
          ["Max online credits", 12, 16, true],
          ["Mandatory host courses", "DE, EEE, WRLC, CSE, ECE, CE, CD, PNS, AP, ME, COM", "ECE, ME, PNS, EEE, CE", false],
          ["Others", "0 active backlogs", "0 active backlogs", true]
        ],
        allowedHosts: ["Branch 2", "Branch 4", "Branch 1"]
      },
      {
        branch: "Branch 4",
        criteria: [
          ["Min credits for degree", 152, 140, false],
          ["Min credits from host", 76, 76, true],
          ["Max online credits", 12, 12, true],
          ["Mandatory host courses", "ME, EEE, PNS, CSE", "IP, CSE, ECE, CE, AP, ME, COM, PNS, EEE, DE, WRLC", true],
          ["Others", "0 active backlogs", "0 active backlogs", true]
        ],
        allowedHosts: ["Branch 1", "Branch 2", "Branch 3"]
      },
      {
        branch: "Branch 5",
        criteria: [
          ["Min credits for degree", 140, 132, false],
          ["Min credits from host", 76, 80, true],
          ["Max online credits", 16, 20, true],
          ["Mandatory host courses", "CD, IP, PNS, COM, AP, CE, EEE, ECE, CSE, DE, ME, WRLC", "ECE, DE, IP, WRLC, ME", false],
          ["Others", "0 active backlogs", "0 active backlogs", false]
        ],
        allowedHosts: ["Branch 2", "Branch 3"]
      }
    ]
  },
  {
      "college": "Delhi Technological University - DTU",
      "branches": [
          {
              branch: "Branch 1",
              criteria: [
                  ["Min credits for degree",144,140,true],
                  ["Min credits from host",72,80,true],
                  ["Max online credits",16,16,false],
                  ["Mandatory host courses","ME, AP, IP, CE, EEE, WRLC, CSE, CD, COM, ECE","ECE, CD, COM, CE, PNS, EEE, WRLC",false],
                  ["Others","0 active backlogs","0 active backlogs",true]
              ],
              allowedHosts: ["Branch 2"]
          },
          {
              branch: "Branch 2",
              criteria: [
                  ["Min credits for degree",140,116,true],
                  ["Min credits from host",76,76,false],
                  ["Max online credits",16,20,true],
                  ["Mandatory host courses","CD, CSE, COM, AP, ME, WRLC, IP, PNS, DE, EEE","CD, COM, PNS, ECE, CSE, WRLC",false],
                  ["Others","0 active backlogs","0 active backlogs",true]
              ],
              allowedHosts: ["Branch 1"]
          },
          {
              branch: "Branch 3",
              criteria: [
                  ["Min credits for degree",140,132,false],
                  ["Min credits from host",72,80,true],
                  ["Max online credits",16,20,false],
                  ["Mandatory host courses","CE, CD, IP, COM, PNS, WRLC, ECE, ME, EEE, AP, CSE, DE","CE, IP, COM, ME, WRLC, DE",false],
                  ["Others","0 active backlogs","0 active backlogs",false]
              ],
              allowedHosts: ["Branch 2"]
          }
      ]
  },
  {
      college: "National Institute of Technology - NITD",
      branches: [
          {
              branch: "Branch 1",
              criteria: [
                  ["Min credits for degree",140,128,false],
                  ["Min credits from host",72,64,true],
                  ["Max online credits",16,20,true],
                  ["Mandatory host courses","ME, DE, WRLC, ECE, AP","AP, PNS, ME, CD, CSE, EEE, DE, CE, COM, ECE, IP",false],
                  ["Others","0 active backlogs","0 active backlogs",false]
              ],
              allowedHosts: ["Branch 3","Branch 2"]
          },
          {
              branch: "Branch 2",
              criteria: [
                  ["Min credits for degree",132,140,false],
                  ["Min credits from host",76,80,false],
                  ["Max online credits",16,16,false],
                  ["Mandatory host courses","COM, ECE, WRLC, PNS, CSE, ME, CD, DE, EEE, CE","EEE, CD, WRLC, CSE, CE, PNS, ME",false],
                  ["Others","0 active backlogs","0 active backlogs",true]
              ],
              allowedHosts: ["Branch 1","Branch 3"]
          },
          {
              branch: "Branch 3",
              criteria: [
                  ["Min credits for degree",152,140,false],
                  ["Min credits from host",80,68,false],
                  ["Max online credits",16,8,false],
                  ["Mandatory host courses","COM, CSE, IP, CD, AP, DE, PNS, ME, CE","CD, CE, EEE, WRLC, DE, ECE",true],
                  ["Others","0 active backlogs","0 active backlogs",false]
              ],
              allowedHosts: ["Branch 2"]
          },
          {
              branch: "Branch 4",
              criteria: [
                  ["Min credits for degree",160,108,false],
                  ["Min credits from host",72,68,true],
                  ["Max online credits",16,20,false],
                  ["Mandatory host courses","IP, EEE, COM, ME, PNS, WRLC, CSE, AP","CSE, DE, CD, PNS",false],
                  ["Others","0 active backlogs","0 active backlogs",true]
              ],
              allowedHosts: ["Branch 1","Branch 2"]
          }
      ]
  },
]


const Form1 = ({ onNext, onNo }) => (
  <div>
    <h2 className="h2-criteria">Do you wish to change your host</h2>
    <div className='criteria-design-btn1'>
      <button className='btn btn-info' onClick={onNext}>Yes</button>
      <button className='btn btn-info' onClick={onNo}>No</button>
    </div>
  </div>
);

const Form2 = ({ onPrev, onNext, onSelectCollege }) => {

  const handleClick = (data) => {
    onSelectCollege(data.college);
    onNext();
  }

  return(
    <div>
      <h2>Select a host to which you want to change</h2>
      <div className='dropout-container'>
        <ul className="list-group">
          {hostChangeCriteria.map((data, dataIndex) => (
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

const Form3 = ({ onPrev, onNext, selectedCollege, onSelectBranch }) => {
  const filteredCollege = hostChangeCriteria.find(
    (data) => data.college === selectedCollege
  );


  const handleBranchClick = (branch) => {
    console.log(branch);
    onSelectBranch(branch);
    onNext();
  };

  return (
    <div className="hostchange-div">
      <h2 className="h2-criteria">Please choose the branch from <strong>{selectedCollege}</strong> to which you want to change to:</h2>
      <div className='hostchange-container'>
        <ul className='list-group'>{
          filteredCollege?.branches.map((branch, index) => (
            <li key={index} className="list-group-item list-round">
            <div className='row dropout-row'>
              <div className='col dropout-element'>
                {branch.branch}
              </div>
              <div className='col dropout-element-btn'>
                <button className='btn btn-primary' onClick={() => handleBranchClick(branch.branch)}>Check</button>
              </div>
            </div>
          </li>
          ))}
        </ul>
      </div>
      <br />
      <button className='btn btn-info' onClick={onPrev}>Go Back</button>
    </div>
  );
};

const Form4 = ({ onPrev, onNext, selectedCollege, selectedBranch }) => {
  
  const filteredCriteria = hostChangeCriteria.find(
    (data) => data.college === selectedCollege
  )?.branches.find((branch) => branch.branch === selectedBranch);

  const isHostChangeAllowed =
    filteredCriteria?.allowedHosts?.includes(hostCollege[0].branch);

  const areAllCriteriaMet = filteredCriteria?.criteria.every((criterion) =>
    criterion[3] === true
  );

  return (
    <div className='hostchange-final'>
      {isHostChangeAllowed ? (
        areAllCriteriaMet ? (
          <>
            <h2>Congratulations! You are eligible for host change</h2>
            <CriteriaTemplate data={filteredCriteria.criteria} />
            <div className="criteria-design-btn2">
              <button className="btn btn-info" onClick={onNext}>Proceed</button>
              <button className="btn btn-info" onClick={onPrev}>Go Back</button>
            </div>
          </>
        ) : (
          <>
            <h2>Unfortunately, you don't meet all the criteria for host change</h2>
            <CriteriaTemplate data={filteredCriteria.criteria} />
            <button className="btn btn-info" onClick={onPrev}>Go Back</button>
          </>
        )
      ) : (
        <>
          <h2>Sorry! Host change from your current branch ({hostCollege[0].branch}) to {selectedBranch} at {selectedCollege} is not allowed</h2>
          <button className="btn btn-info" onClick={onPrev}>Go Back</button>
        </>

      )}
    </div>
  );
};

function HostChange() {

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const navigate = useNavigate();

  const handleNext = () => setCurrentStep(currentStep + 1);
  const handlePrev = () => setCurrentStep(currentStep - 1);
  const handleSelectCollege = (college) => setSelectedCollege(college);
  const handleSelectBranch = (branch) => setSelectedBranch(branch)
  const handleNo = () => navigate('/xyz/dashboard');

  const handleSubmit = () => {
    toast.success('The respective colleges has been informed about your state!!');
  };

  return (
    <>
        < StudentNavbar />
        <div className='hostchange-body'>
          <h1>Host Change</h1>
          <div className='hostchange-formbody'>
            {currentStep === 1 && < Form1 onNext={handleNext} onNo={handleNo} />}
            {currentStep === 2 && < Form2 onPrev={handlePrev} onNext={handleNext} onSelectCollege={handleSelectCollege} />}
            {currentStep === 3 && < Form3 onPrev={handlePrev} onNext={handleNext} selectedCollege={selectedCollege} onSelectBranch={handleSelectBranch}/>}
            {currentStep === 4 && < Form4 onPrev={handlePrev} onNext={handleSubmit} selectedCollege={selectedCollege} selectedBranch={selectedBranch}/>}
          </div>
        </div>
      < ToastContainer />
    </>
  )
}

export default HostChange

 