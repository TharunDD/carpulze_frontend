import React, { useState } from "react";
import axios from "../API/axios";
import '../styles/TestimonialsStyles/log.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { login } from "../features/cartSlice";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { Fade } from 'react-reveal';
// ... (previous imports and component setup)

function Sigg() {
  const [formData, setFormData] = useState({
    name: "",
    umail: "",
    password: "",
    phone: "",
    city: "",
    address: "",
    zipcode: "",
  });
  var a;
  const [sent, setsent] = useState(false);
  const [otpData, setOtpData] = useState({
    otp: 0,
    verified: false,
  });
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [otpp, setOtp] = useState(0);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOTPChange = (e) => {
    const { name, value } = e.target;
    setOtpData({ ...otpData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log(sent);
    e.preventDefault();
    const { name, umail, password, phone, address, zipcode, city } = formData;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(umail);
    const isPhoneValid = /^\d{10}$/.test(phone);
    if (!sent) {
      const sendOTP = async () => {
        try {
          console.log(umail);
          const response = await axios.post(
            `/users/${umail}`
          );
          if (response.status == 201) {
            setsent(true);
            console.log("hi froom seto");
            console.log(response.data.ot);
            setOtp(response.data.ot);
            formData.umail = umail;
            NotificationManager.success("SUccess otp");
          } // Set OTP message
        } catch (error) {
          console.error(error);
        }
      };
      sendOTP();
    }
    if (sent) {
      const verify = () => {
        console.log(otpData.otp);
        console.log(otpp+"my data");
        if (otpData.otp == otpp) {
          setOtpData({ ...otpData, verified: true });
          console.log("success");
        } else {
          NotificationManager.error("wrong password");
        }
      };
      verify();
    }
    if (!name || !umail || !password || !phone || !address) {
      NotificationManager.error("Please fill in all fields.");
    } else if (!isEmailValid) {
      NotificationManager.error("Please enter a valid email address.");
    } else if (!isPhoneValid) {
      NotificationManager.error("Phone number must have exactly 10 digits.");
    } else if (!sent) {
      NotificationManager.error("Please enter a vaild email");
    } else if (!otpData.verified) {
      NotificationManager.error("Enter the correct otp");
    } else {
      const io = v4();
      const requestData = {
        uid: io,
        uname: name,
        umail: umail,
        password: password,
        uadd: address,
        phone: phone,
        zipcode: zipcode,
        city: city,
      };
      try {
        const response = await axios.post(
          "/users/new",
          requestData
        );
        if (response.status==200) {
          navigate("/login");
          NotificationManager.success("User is cra " + response.data.uname + "✌️✌️");
        } else {
          NotificationManager.error("Fill all the fields");
        }
      } catch (error) {
        console.error("Error uploading data:", error);
      }
    }
  };
  return (
    <div className="asdi">
       <Fade duration={2000}>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="content">
            <div className="input-field">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
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
            <div className="input-field">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-field">
              <input
                type="number"
                name="zipcode"
                placeholder="Zipcode"
                value={formData.zipcode}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-field">
              <div className="email-input">
                <input
                  type="text"
                  name="umail"
                  placeholder="Your Mail Id"
                  value={formData.umail}
                  onChange={handleInputChange}
                />
                {!sent ? (
                  <>
                    <button className="btn btn-danger" onClick={handleSubmit}>
                      Send OTP
                    </button>
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      name="otp"
                      placeholder="Enter OTP"
                      value={otpData.otp}
                      onChange={handleOTPChange}
                    />
                    <button className="btn btn-primary" onClick={handleSubmit}>
                      Verify
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="input-field">
              <input
                type="text"
                name="address"
                placeholder="Enter Address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="action">
            <Link to="/login">
              <button>Login</button>
            </Link>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      </Fade>
    </div>
  );
}

export default Sigg;
