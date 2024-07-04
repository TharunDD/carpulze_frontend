// AdminDashboard.js
import React, { useState, useEffect } from "react";
import "./AdminDashboard.css";
import ServiceTable from "./ServiceTable";
import SlotTable from "./SlotTable";
import axios from "../API/axios";
import UserTable from "./UserTable";
import { useSelector,useDispatch } from "react-redux"; // Import the UserTable component
import Totaldet from "./Totaldet";
import { logout } from "../features/cartSlice";
import SearchUD from "./SearchUD";
import { NotificationManager } from "react-notifications";
const AdminDashboard = () => {
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

  useEffect(() => {
    const fetchDat= async () => {
      try {
        console.log("user mount");
        const response = await axios.get(`users/geud/${u}`,{  headers: {
          'Authorization': `Bearer ${u}` // Adding JWT token as Authorization header
        }});
        if(response.status==200){
        const {user} =response.data;        
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
  
    fetchDat(); // Call the async function
  }, []);
  useEffect(() => {
   console.log(ad);
  
  }, [ad]);
  const totalServices = 11;
  const totalSlots = 5;

  // Sample services data
  const servicesData = [
    {
      name: "Preventive Maintenance Service (PMS)",
      category: "Mechanical Works",
      date: "2024-03-19",
    },
    {
      name: "Running Repairs",
      category: "Mechanical Works",
      date: "2024-03-20",
    },
    {
      name: "Air Conditioning (A/C) Service",
      category: "Electrical Works",
      date: "2024-03-21",
    },
    {
      name: "Engine Electrical Works",
      category: "Electrical Works",
      date: "2024-03-22",
    },
    { name: "Dent Repair", category: "Body Shop", date: "2024-03-23" },
    { name: "Painting Services", category: "Body Shop", date: "2024-03-24" },
    { name: "Wash & Wax", category: "Car Detailing", date: "2024-03-25" },
    {
      name: "Rubbing & Polishing",
      category: "Car Detailing",
      date: "2024-03-26",
    },
    { name: "Teflon Coating", category: "Car Detailing", date: "2024-03-27" },
    {
      name: "Interior Cleaning",
      category: "Car Detailing",
      date: "2024-03-28",
    },
    {
      name: "Headlight Polishing",
      category: "Car Detailing",
      date: "2024-03-29",
    },
  ];

  const [showServiceTable, setShowServiceTable] = useState(false);
  const [showSlotTable, setShowSlotTable] = useState(false);
  const [showUserTable, setShowUserTable] = useState(false);
  const [showSearchTable, setShowSearchTable] = useState(false);
  const [showAPPROVALTable, setShowAPPROVALTable] = useState(false);
  const [userData, setUserData] = useState({
    us: {},
    length: 0,
  });
  const [userBk, setUserBk] = useState({
    bk: {},
    length: 0,
  });
  const [userRQ, setUserRQ] = useState({
    rq: {},
    length: 0,
  });

  useEffect(() => {
    console.log("JIK");
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/admin/getall", {
          headers: {
            Authorization: `Bearer ${u}`,
          },
        });
        setUserData({
          us: response.data.us,
          length: response.data.us.length,
        });
        console.log(response.data.us);
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
    const Pending = async () => {
      try {
        console.log("new approval");
        const response = await axios.get("/admin/pendingreq", {
          headers: {
            Authorization: `Bearer ${u}`,
          },
        });
        setUserRQ({
          rq: response.data.us,
          length: response.data.us.length,
        }); // Assuming response.data is an array of users
        console.log(response.data.us);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    const fetchBooking = async () => {
      try {
        console.log("hiiii");
        const response = await axios.get("/admin/getallp", {
          headers: {
            Authorization: `Bearer ${u}`,
          },
        });
        setUserBk({
          bk: response.data.us,
          length: response.data.us.length,
        }); // Assuming response.data is an array of users
        console.log(response.data.us[0].completion);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchBooking();
    fetchUsers();
  }, []);

  return (
    <div style={{backgroundColor:"#D6E4F0",width:"100vw",marginBottom:"30px",minHeight:"100vh"}}>
    <div className="admin-dashboard" style={{backgroundColor:"#D6E4F0"}}>
      <h1 style={{marginLeft:"45%",marginTop:"25px",marginBottom:"20px"}}>Admin Dashboard</h1>
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
      <div className="dashboard-cards">
        <div
          className="card"
          onClick={() => setShowSearchTable(!showSearchTable)}
        >
          <h2>Search</h2>
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.JhPP7jb6nNcU3FBxTlBhkgHaGb&pid=Api&P=0&h=220"
            alt="Services Logo"
          />
          <p>{userBk.length}</p>
        </div>
        <div
          className="card"
          onClick={() => setShowAPPROVALTable(!showAPPROVALTable)}
        >
          {" "}
          {/* Add onClick handler */}
          <h2>Under Progress</h2>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.SLISHo3FhhTtQzMS-DBCGQHaE8&pid=Api&P=0&h=220"
            alt="Users Logo"
          />
          <p>{userData.length}</p>
        </div>
        <div className="card" onClick={() => setShowSlotTable(!showSlotTable)}>
          <h2>Requested</h2>
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.vyk5iWQXaWhxvDGJ3UoadwHaHa&pid=Api&P=0&h=220"
            alt="Slots Logo"
          />
          <p>{totalSlots}</p>
        </div>
        <div className="card" onClick={() => setShowUserTable(!showUserTable)}>
          {" "}
          {/* Add onClick handler */}
          <h2>Users</h2>
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.BXmROsHCrR_7O85bDjLGnQHaHM&pid=Api&P=0&h=220"
            alt="Users Logo"
          />
          <p>{userData.length}</p>
        </div>
      </div>
      {showServiceTable && <ServiceTable services={servicesData} />}
      {showSlotTable && <SlotTable slots={userBk.bk} />}
      {showUserTable && <UserTable users={userData.us} />}
      {showAPPROVALTable && <Totaldet users={userBk.bk} />}
      {showSearchTable && <SearchUD users={userBk.bk} />}
      {/* Render UserTable conditionally */}
    </div>
    </div>
  );
};

export default AdminDashboard;
