import {useState} from 'react'
import '../index.css'
import Navbar from '../../../components/GuestNavbar'
import { useNavigate } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

// API endpoint
const api = axios.create({
    baseURL: `http://localhost:3000/api/v1/student/`
});

function StudentSignup() {

  const horStyle = {
    display: 'inline-block',
    width: '120px',
    height: '2.1px',
    margin: '2px 10px',
    border: 'none',
    backgroundColor: "black"
  }

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      if (password === repassword) {
        // Checking if the user already exists
        let unique_user = await api.get('/check', {
          params: { name, phone, email },
        });
        console.log(unique_user.data);
  
        if (unique_user.data['Unique']) {
          // Perform if new user
          const student_details = {
            student_username: name,
            phone_number: phone,
            student_mail: email,
            student_password: password,
          };
  
          let register_user = await api.post('/signup', student_details);
  
          if (register_user.data['Success']) {

            toast.success('Please sign In using your credentials!');

            setTimeout(() => {
              navigate('/student-login');
            }, 4000);

          }
        } else {
          toast.error('User with similar credential already enrolled!!');
        }
      } else {
        toast.error('Passwords are not matching!! Please try again!!');
      }
    } catch (err) {
      throw err;
    }
  };
  

  const handleChange = (value) => {
    setPhone(value);
  }
  
  return (
    <>
        <Navbar />
        <div className="authenticate-body">
            <div className="container text-center desy-auth">

                <h2 className='auth-heading'>For a better World!</h2>

                <div className="form-floating mb-3 form-fonting">
                    <input type="text" className="form-control desy-input" id="floatingNameInput" placeholder='reg number' value={name} onChange={e => setName(e.target.value)} required/>
                    <label htmlFor="floatingNameInput">User Name</label>
                </div>
                <div className="form-floating mb-3 form-fonting">
                    <input type="email" className="form-control desy-input" id="floatingEmailInput" placeholder="name@example.com" value={email} onChange={e => setEmail(e.target.value)} required/>
                    <label htmlFor="floatingEmailInput">Email</label>
                </div>
                <div className="form-floating mb-3 form-fonting">
                    <PhoneInput country={'in'} value={phone} onChange={handleChange}/>
                </div>
                <div className="form-floating mb-3 form-fonting">
                    <input type="password" className="form-control desy-input" id="floatingPassword" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-floating mb-3 form-fonting">
                    <input type="password" className="form-control desy-input" id="floatingConfirmPassword" placeholder="Password" value={repassword} onChange={e => setRepassword(e.target.value)} required/>
                    <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                </div>
                <div className='col-md-12'>
                    <button type="submit" className="auth-btn btn btn-success" onClick={handleSubmit}>Sign Up</button>
                </div>
                <br />
                <hr style={horStyle}/>
                    <span>or</span>
                <hr style={horStyle}/>
                <br /><br />

                <a className="anchor-style" href="/institute-signup">Sign up as institute?</a>
            </div>
        </div>
        <ToastContainer />
    </>
  )
}

export default StudentSignup