import React, { useState } from 'react';
import axios from "../API/axios";
import '../styles/TestimonialsStyles/log.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../features/cartSlice';
import { srole } from '../features/cartSlice';
import { toast } from 'react-toastify';
import { NotificationManager } from 'react-notifications';
function Logg() {
  const [formData, setFormData] = useState({
    umail: '',
    password: '',
  });
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    const { umail, password } = formData;
  
    if (!umail || !password) {
      NotificationManager.error('Please fill in all fields.');
      return;
    }
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(umail);
    if (!isEmailValid) {
      NotificationManager.error('Please enter a valid email address.');
      return;
    }
    try {
      console.log("trying");
        const response = await axios.post(`/users/login`, {
            umail,
            upassword: password, // Make sure the server expects 'upassword'
          });
          console.log(umail,password)
          console.log(response.data);
          const { success, message, token,role} = response.data;
          if (token) {
            dispatch(login(token));
            if(role!= null)
              {
              console.log("user"+role);
            dispatch(srole(role));
          }else{
            console.log("admin"+role);
            dispatch(srole(0));
          }
            navigate('/');
            NotificationManager.success(`Welcome Back,!`);
          } else {
            NotificationManager.error('Login failed');
            console.log('Login failed: ' + response.data.message);
          }
    } catch (error) {
      console.error("Error logging in:", error);
      NotificationManager.error("Something went wrong");
    }
  }    
  

  return (
    <div>
    <div className='l'>
    <div className="asd">
      <div className="login-form" style={{marginLeft:"100px"}}>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="content">
            
            <div className="input-field">
              <input
                type="text"
                name="umail"
                placeholder="Your Mail Id"
                value={formData.umail}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-field">
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="action">
            <Link to="/sigin">
              <button>SignIn</button>
            </Link>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Logg;
