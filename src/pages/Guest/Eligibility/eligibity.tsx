import React, { useState } from 'react'
import Navbar from '../../../components/GuestNavbar'
import axios from 'axios'
import '../guest-style.css'
import './index.css'
import { useNavigate } from 'react-router-dom'

function Eligibility() {

  const navigate = useNavigate();

  const api = axios.create({
    baseURL: `http://localhost:3000/api/v1`
  })

  const [formValues, setFormValues] = useState({
    dob: '',
    location: '',
    jeeRank: undefined,
    mark12: undefined,
    mark10: undefined,
  });

  const handleInputChange = (field, value) => {
    setFormValues({ ...formValues, [field]: value });
  };

  const formDataToQueryString = (formData) => {
    const params = new URLSearchParams();
    for(const [key, val] of formData.entries()){
      params.append(key, val);
    }

    return params.toString();
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Perform Form Submission
    const formData = new FormData();
    for (const [key, value] of Object.entries(formValues)) {
      formData.append(key, value);
    }

    const queryString = formDataToQueryString(formData);

    const gotData = await api.get(`/eligible?${queryString}`);
    const serializableData = JSON.stringify(gotData.data);
    navigate("/eligibility-results", {state: {data: serializableData}});
  }

  return (
    <>
        <Navbar />
        <div className='container'>
          <h1 className='guest-heading'>Eligibility</h1>
          <p className='guest-para'>Find the perfect courses that meet your eligibilty</p>
          <div className='eligibility-form text-center'>

            <form onSubmit={handleSubmit}>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="name" placeholder="Name" required />
                <label htmlFor="name">Name</label>
              </div>

              <div className='eligibility-row row mb-3'>
                <div className='col'>
                  <div className="form-floating mb-3">
                    <input type="date" className="form-control" id="dob" placeholder="DOB" value={formValues.dob} onChange={e => handleInputChange('dob',e.target.value)} required />
                    <label htmlFor="dob">DOB</label>
                  </div>
                </div>

                <div className='col'>
                  <div className="form-floating mb-3">
                    <select className="form-select" id="gender" defaultValue="" required>  
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                      <option value="3">Others</option>
                    </select>
                    <label htmlFor="gender">Gender</label>
                  </div>
                </div>
              </div>

              <div className='eligibility-row row mb-3'>
                <div className='col'>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="location" placeholder="location" value={formValues.location} onChange={e => handleInputChange('location',e.target.value)} required />
                    <label htmlFor="location">Location</label>
                  </div>
                </div>

                <div className='col'>
                  <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="jee" placeholder="jee rank" value={formValues.jeeRank} onChange={e => handleInputChange('jeeRank',e.target.value)} required />
                    <label htmlFor="jee">JEE Mains Rank</label>
                  </div>
                </div>
              </div>

              <div className='eligibility-row row mb-3'>
                <div className='col'>
                  <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="class10" placeholder="class 10" value={formValues.mark10} onChange={e => handleInputChange('mark10',e.target.value)} required />
                    <label htmlFor="class10">CBSE Class 10 Percentage</label>
                  </div>
                </div>

                <div className='col'>
                  <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="class12" placeholder="class 12" value={formValues.mark12} onChange={e => handleInputChange('mark12',e.target.value)} required />
                    <label htmlFor="class12">CBSE Class 12 Percentage</label>
                  </div>
                </div>
              </div>

              <button type="submit" className="guest-btn btn btn-success"> Fetch Results </button>

            </form>
          </div>
        </div>
    </>
  )
}

export default Eligibility