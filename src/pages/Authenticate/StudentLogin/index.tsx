import {useState} from 'react'
import '../index.css'
import Navbar from '../../../components/GuestNavbar'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

// API endpoint
const api = axios.create({
  baseURL: `http://localhost:3000/api/v1/student/`
});

function StudentLogin() {

  const horStyle = {
    display: 'inline-block',
    width: '120px',
    height: '2.1px',
    margin: '2px 10px',
    border: 'none',
    backgroundColor: "black"
  }

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  axios.defaults.withCredentials  = true;
  const handleChange = async e => {
    e.preventDefault();

    try {
      // Perform Login Action
      const student_details = {
        student_mail: email,
        student_password: password
      }

      let login_user = await api.post('/login', student_details, {withCredentials: true});
      if(login_user.data['Success'] == 2){

        toast.success("Login Successfull!");
        
        // Redirection if Authenticated and Authorized by checking if the student is new
        const redirect = await axios.get('http://localhost:3000/pvt_api/isnew'); // Using private route for students
        if(redirect.data['Success'] == 1){
          //If the student is new applicant and not yet approved by any institute take him/her to application page
          if(redirect.data['isNew']){
            navigate('/student/apply');
          } else {
            navigate('/student/dashboard'); // If the student isn't new navigate him/her to the main portal
          }
        } else {
          toast.error("You are Unaothorized!")
        }

      } else if (login_user.data['Success'] == 1) {
        toast.error("No such user!");
      } else {
        toast.error("Invalid Password!");
      }

    } catch (err) {
      throw err;
    }
  }

  return (
    <>
      <Navbar />
      <div className="authenticate-body">
          <div className="container text-center desy-auth">

            <h2 className='auth-heading'>For a better World!</h2>

            <div className="form-floating mb-3">
                <input type="email" className="form-control desy-input" id="floatingInput" placeholder="name@example.com" value={email} onChange={e => setEmail(e.target.value)} required/>
                <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control desy-input" id="floatingPassword" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required/>
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className='col-md-12'>
                <button type="submit" className="auth-btn btn btn-success" onClick={handleChange}>Log In</button>
            </div>

            <br />

            <hr style={horStyle}/>
                <span>or</span>
            <hr style={horStyle}/>

            <br /><br />

            <a className="anchor-style" href="/institute-login">Log in as institute?</a>
          </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default StudentLogin