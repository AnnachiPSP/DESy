import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './index.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// API endpoint
const api = axios.create({
  baseURL: `http://localhost:3000/pvt_api/`
});

function ResultApply() {

  const [instituteData, setInstituteData] = useState(undefined);

  const navigate = useNavigate();

  // Verify if user is an authenticated student and perform necessary action
  useEffect(() => {
      try {
        axios.defaults.withCredentials = true;
        api.get('/getInstitutes', { withCredentials: true }).then(res => {
          if(res.data['Success'] == 1) {
            setInstituteData(res.data['data']);
          } else if(res.data['Success'] == 0) {
            navigate('/student-login');
          }
        });
      } catch (error) {
        console.error('Error during data fetching:', error);
      }
  
  }, []);
  

    const handleClick = async (data) => {
      console.log(data);
      const application = {
        institute_id: data.id,
        branch: data.branch
      }

      const result = await api.post('/applicationGenerate', application);
      console.log(result.data);
    }
    
      return (
        <>
            <div className='container'>
              <h1 className='eligibility-heading'>Results</h1>
              {instituteData ? (
                <>
                  <p className='eligibility-para'>Based on your scores, these instittutes offer you degrees</p>
                  <div className='eligibility-table'>
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">Institute</th>
                          <th scope="col">State</th>
                          <th scope="col">Program</th>
                        </tr>
                      </thead>
                      <tbody>
                        {instituteData.map((data, index) => (
                            <tr key={index} className='table-rows'>
                              <td>{data.institute_name}</td>
                              <td>{data.institute_location}</td>
                              <td>{data.branch}</td>
                              <td><button onClick={() => handleClick(data)}>Apply</button></td>
                            </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              ) : ( <p>Loading institutes...</p>)
              }
            </div>
            < ToastContainer />
        </>
      )
}

export default ResultApply