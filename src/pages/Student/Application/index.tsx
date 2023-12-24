import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function ApplyNow() {

  const navigate = useNavigate();
    
  const [formData, setFormData] = useState<FormData>({
    dob: "",
    gender: "",
    location: "",
    adhaarCardNumber: "",
    jeeRank: 0,
    class12Percentile: 0,
    class10Percentile: 0,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.files[0] });
  };

  return (
    <div className="application-body">
      <div className="container">
        <h1 className="text-center mb-4 application-h1">Application Form</h1>
        <div className="application-form">
          <form className="row g-3">
            <div className="col-md-4">
              <label htmlFor="dob" className="form-label">
                Date of Birth:
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="form-control"
                value={formData.dob}
                onChange={handleChange}
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
                value={formData.gender}
                onChange={handleChange}
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
                value={formData.location}
                onChange={handleChange}
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
                value={formData.adhaarCardNumber}
                onChange={handleChange}
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
                onChange={handleFileChange}
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
                value={formData.jeeRank}
                onChange={handleChange}
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
                onChange={handleFileChange}
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
                value={formData.class12Percentile}
                onChange={handleChange}
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
                onChange={handleFileChange}
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
                value={formData.class10Percentile}
                onChange={handleChange}
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
                onChange={handleFileChange}
              />
            </div>
            <div className="col-12 text-center">
              <br />
              <button type="submit" className="btn btn-primary" onClick={() => navigate('/xyz/apply-results')}>
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ApplyNow;
