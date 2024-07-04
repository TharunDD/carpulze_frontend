// AdminDashboard.js
import React, { useState, useEffect } from "react";
import "./AdminDashboard.css";
import axios from "../API/axios";
import { logout } from "../features/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"; // Import the UserTable component
import { NotificationManager } from "react-notifications";
import Ut from "./UT";
const Userdashbord= () => {
  const u = useSelector((state) => state.cart.user);
  const dispatch=useDispatch();
  const [ad, setad] = useState({
    uname: 'Tharun',
    uid: 123,
    umail:"tharuntharun7248@gmail.com",
    uadd: '123 Main Street',
    role: 'Admin'
});
  const adminInfo = {
    picture:
      "https://tse4.mm.bing.net/th?id=OIP.1jZsQ4Wez7n-lD3b7GJm_wHaHa&pid=Api&P=0&h=220", // URL to admin's picture
  };
  const [userBk, setUserBk] = useState({
    bk: {
    umail: 'loading',
    uname: 'loading',
    uid: 'loading',
    serviceid: 'loading',
    Approval: 0},
    length: 0,
  });
  const [showSearchTable, setShowSearchTable] = useState(false);
useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`users/geud/${u}`, {
                headers: {
                    'Authorization': `Bearer ${u}` // Adding JWT token as Authorization header
                }
            });
            if (response.status === 200) {
                const { user } = response.data;
                setad(user);
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                const { exp } = error.response.data;
                if (exp) {
                    console.log("Session expired");
                    dispatch(logout());
                    NotificationManager.error("Session expired pls login again","session experied");
                }
            } else {
                console.error('Error fetching data:', error);
            }
        }
    };

    fetchData(); // Call the async function

}, []);



  useEffect(() => {
    const fetchBooking = async () => {
      try {
        console.log("hi from booking");
        const response = await axios.get("/book/gboking", {
          headers: {
            Authorization: `Bearer ${u}`,
          },
        });
        if(response.status==200){
        setUserBk({
          bk: response.data.user,
        }); // Assuming response.data is an array of users
    }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchBooking();
  }, []);
  useEffect(() => {
    console.log(ad);
   
   }, [ad,userBk.bk]);
 
  

  return (
    <div style={{backgroundColor:"#D6E4F0",width:"100vw",marginBottom:"30px",minHeight:"100vh"}}>
    <div className="admin-dashboard" style={{backgroundColor:"EAE3D2"}}>
      <h1 style={{paddingLeft:"45%" ,  maxWidth:"100%" , alignItems:"center", justifyContent:"center",marginBottom:"10px"}}>User Dashbord</h1>
      <div className="admin-info">
        <img src={adminInfo.picture} alt="Admin" />
        <p>
          <strong>Name:</strong> {ad.uname}
        </p>
        <p>
          <strong>Email:</strong> {ad.umail}
        </p>
        <p>
          <strong>User ID</strong> {ad.uid}
        </p>
        <p>
          <strong>Address</strong> {ad.uadd}
        </p>
        <p>
          <strong>Role</strong> {ad.role ==1 ? "ADMIN" : "USer"}
        </p>
      </div>
      <div
          className="card"
          onClick={() => setShowSearchTable(!showSearchTable)}
        >
          <h2>See your Slots</h2>
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.lHRPlscG_LdIPIC7pMvoSwHaHa&pid=Api&P=0&h=220"
            alt="Services Logo"
          />
          <p>{userBk.length}</p>
        </div>
        {showSearchTable && <Ut users={userBk.bk} />}
    </div>
  </div>
  );
};

export default Userdashbord;
