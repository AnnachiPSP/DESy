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

  const [user, setUser] = useState(undefined)
  const [instituteData, setInstituteData] = useState(undefined);

  const navigate = useNavigate();

  // Redirect the user accordingly 
  useEffect(() => {
    axios.defaults.withCredentials = true;
    api.get('/isnew', {withCredentials: true}).then(redirect => {
      if(redirect.data['Success'] == 1){
        //If the student is new applicant and not yet approved by any institute take him/her to application page
        if(redirect.data['isNew'] == 0){
          navigate('/student/apply');
        } else if(redirect.data['isNew'] == 1) {
          navigate('/student/apply-results'); // If a student has already uploaded and waiting for approval or rejection from certain college
        } 
        else {
          navigate('/student/dashboard'); // If the student isn't new navigate him/her to the main portal
        }
      } else {
        navigate('/student-login') // If not authorized go to login page
      }
    })
  }, []);

  // Verify if user is an authenticated student and perform necessary action
  useEffect(() => {
      try {
        axios.defaults.withCredentials = true;
        api.get('/getInstitutes', { withCredentials: true }).then(res => {
          if(res.data['Success'] == 1) {
            setInstituteData(res.data['data']);
            setUser(res.data['name'])
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

    const handleLogOut = async () => {
      console.log('hey trying to logout')
      const logout = await axios.post('http://localhost:3000/api/v1/student/logout')
      if(logout.data['Success'] == 1){
        toast.success('Logged Out!!');

        setTimeout(() => {
          navigate('/student-login');
        }, 4000);
      }
    }

      return (
        <>
            <div className='container'>

              {instituteData ? (
                <>
                  {/* Navbar */}
                  <nav className='navbar navbar-expand-lg'>
                    <div className="container-md d-flex justify-content-between align-items-center">
                      <div style={{ width: '100%' }} className="d-flex justify-content-end">
                        <form>
                          <a className="nav-content">{user}</a>
                          <button className="btn btn-primary sign-out-button" type="submit" onClick={handleLogOut}>Sign Out</button>
                        </form>
                      </div>
                    </div>
                  </nav>

                  <h1 className='application-h1'>Results</h1>

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
              ) : ( <div className="loader"></div>)
              }
            </div>
            < ToastContainer />
        </>
      )
}

export default ResultApply