import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import axios from 'axios';
import './helper-modal';
import HelperModal from "./helper-modal";

// API endpoint
const api = axios.create({
  baseURL: `http://localhost:3000/pvt_api/`
});

function ApplyNow() {

  const [user, setUser] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();
  
  // Verify if user is an authenticated student
  useEffect(() => {
    axios.defaults.withCredentials = true;
    api.get('/verifyUser', {withCredentials: true}).then(res => {
      if(res.data['Success'] == 1) setUser(res.data['user']);
      else navigate('/student-login');
    })
  }, []);

  const [formValues, setFormValues] = useState({
    fullname: '',
    dob: '',
    gender: '',
    location: '',
    aadharNo: '',
    aadharCopy: undefined,
    jeeRank: undefined,
    jeeCopy: undefined,
    mark12: undefined,
    mark12Copy: undefined,
    mark10: undefined,
    mark10Copy: undefined,
  });

  const handleInputChange = (field, value) => {
    setFormValues({ ...formValues, [field]: value });
  };

  const handleFileChange = (field, file) => {
    setFormValues({ ...formValues, [field]: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };

  const handleConfirm = async () => {
    // Perform the form submission
    const formData = new FormData();
    for (const [key, value] of Object.entries(formValues)) {
      formData.append(key, value);
    }

    const result = await api.post(`/student_apply/${user}`, formData);

    setFormValues({
      fullname: '',
      dob: '',
      gender: '',
      location: '',
      aadharNo: '',
      aadharCopy: null,
      jeeRank: 0,
      jeeCopy: null,
      mark12: 0,
      mark12Copy: null,
      mark10: 0,
      mark10Copy: null,
    });

    setOpenModal(false);

    if(result.data['Success'] == 1) navigate('/student/apply-results');
  };


  return (
    <div className="application-body">
      <div className="container">
        <h1 className="text-center mb-4 application-h1">Application Form</h1>
        <form className="application-form" onSubmit={handleSubmit}>
          <div className="row g-3">
          <div className="col-md-12">
              <label htmlFor="fullName" className="form-label">
                Full Name:
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="form-control"
                value={formValues.fullname}
                onChange={e => handleInputChange('fullname',e.target.value)}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="dob" className="form-label">
                Date of Birth:
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="form-control"
                value={formValues.dob}
                onChange={e => handleInputChange('dob', e.target.value)}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="gender" className="form-label">
                Gender:
              </label>
              <select
                id="gender"
                name="gender"
                className="form-select"
                value={formValues.gender}
                onChange={e => handleInputChange('gender', e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="location" className="form-label">
                Location:
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="form-control"
                value={formValues.location}
                onChange={e => handleInputChange('location',e.target.value)}
                required
              />
            </div>
            <div className="col-md-6 custom-spacing-col">
              <label htmlFor="aadharCardNumber" className="form-label">
                Aadhar Card Number:
              </label>
              <input
                type="text"
                id="aadharCardNumber"
                name="aadharCardNumber"
                className="form-control"
                value={formValues.aadharNo}
                onChange={e => handleInputChange('aadharNo',e.target.value)}
                required
              />
            </div>
            <div className="col-md-6 custom-spacing-col">
              <label htmlFor="aadharCardCopy" className="form-label">
                Aadhar Card Copy:
              </label>
              <input
                type="file"
                id="aadharCardCopy"
                name="aadharCardCopy"
                className="form-control"
                onChange={e => handleFileChange('aadharCopy',e.target.files[0])}
                required
              />
            </div>

            <div className="col-md-6 custom-spacing-col">
              <label htmlFor="jeeRank" className="form-label">
                JEE Rank:
              </label>
              <input
                type="number"
                id="jeeRank"
                name="jeeRank"
                className="form-control"
                value={formValues.jeeRank}
                onChange={e => handleInputChange('jeeRank',e.target.value)}
                required
              />
            </div>
            <div className="col-md-6 custom-spacing-col">
              <label htmlFor="jeeScoresheet" className="form-label">
                JEE Scoresheet:
              </label>
              <input
                type="file"
                id="jeeScoresheet"
                name="jeeScoresheet"
                className="form-control"
                onChange={e => handleFileChange('jeeCopy',e.target.files[0])}
                required
              />
            </div>

            <div className="col-md-6 custom-spacing-col">
              <label htmlFor="class12Percentile" className="form-label">
                Class 12 Percentile:
              </label>
              <input
                type="number"
                id="class12Percentile"
                name="class12Percentile"
                className="form-control"
                value={formValues.mark12}
                onChange={e => handleInputChange('mark12',e.target.value)}
                required
              />
            </div>
            <div className="col-md-6 custom-spacing-col">
              <label htmlFor="class12Scoresheet" className="form-label">
                Class 12 Scoresheet:
              </label>
              <input
                type="file"
                id="class12Scoresheet"
                name="class12Scoresheet"
                className="form-control"
                onChange={e => handleFileChange('mark12Copy',e.target.files[0])}
                required
              />
            </div>

            <div className="col-md-6 custom-spacing-col">
              <label htmlFor="class10Percentile" className="form-label">
                Class 10 Percentile:
              </label>
              <input
                type="number"
                id="class10Percentile"
                name="class10Percentile"
                className="form-control"
                value={formValues.mark10}
                onChange={e => handleInputChange('mark10',e.target.value)}
                required
              />
            </div>
            <div className="col-md-6 custom-spacing-col">
              <label htmlFor="class10Scoresheet" className="form-label">
                Class 10 Scoresheet:
              </label>
              <input
                type="file"
                id="class10Scoresheet"
                name="class10Scoresheet"
                className="form-control"
                onChange={e => handleFileChange('mark10Copy',e.target.files[0])}
                required
              />
            </div>
            <div className="col-12 text-center">
              <br />
              <button type="submit" className="btn btn-primary">
                Submit Application
              </button>
            </div>
          </div>
        </form>
      </div>
      {openModal && <HelperModal setOpenModal={setOpenModal} handleConfirm={handleConfirm}/>}
    </div>
  );
}

export default ApplyNow;
