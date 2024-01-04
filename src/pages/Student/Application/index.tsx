import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import axios from 'axios'

// API endpoint
const api = axios.create({
  baseURL: `http://localhost:3000/pvt_api/`
});

function ApplyNow() {

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    dob: '',
    gender: '',
    location: '',
    adhaarNo: '',
    adhaarCopy: null,
    jeeRank: '',
    jeeCopy: null,
    mark12: '',
    mark12Copy: null,
    mark10: '',
    mark10Copy: null,
  });

  const handleInputChange = (field, value) => {
    setFormValues({ ...formValues, [field]: value });
  };

  const handleFileChange = (field, file) => {
    setFormValues({ ...formValues, [field]: file });
  };

  const handleSubmit = async e => {

    e.preventDefault();

    const formData = new FormData();
    for (const [key, value] of Object.entries(formValues)) {
      formData.append(key, value);
    }

    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    const result = await api.post('/student_apply/surya', formData);
    console.log(result.data);

  };

  return (
    <div className="application-body">
      <div className="container">
        <h1 className="text-center mb-4 application-h1">Application Form</h1>
        <div className="application-form">
          <div className="row g-3">
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
              />
            </div>
            <div className="col-md-6 custom-spacing-col">
              <label htmlFor="adhaarCardNumber" className="form-label">
                Aadhaar Card Number:
              </label>
              <input
                type="text"
                id="adhaarCardNumber"
                name="adhaarCardNumber"
                className="form-control"
                value={formValues.adhaarNo}
                onChange={e => handleInputChange('adhaarNo',e.target.value)}
              />
            </div>
            <div className="col-md-6 custom-spacing-col">
              <label htmlFor="adhaarCardCopy" className="form-label">
                Aadhaar Card Copy:
              </label>
              <input
                type="file"
                id="adhaarCardCopy"
                name="adhaarCardCopy"
                className="form-control"
                onChange={e => handleFileChange('adhaarCopy',e.target.files[0])}
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
              />
            </div>
            <div className="col-12 text-center">
              <br />
              <button className="btn btn-primary" onClick={handleSubmit}>
                Submit Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyNow;
