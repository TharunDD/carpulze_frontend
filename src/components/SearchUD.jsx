import React, { useState } from 'react';
import axios from '../API/axios';
import "./AdminDashboard.css";
const SearchUD = ({ users }) => {
  const [ColumntbSearched, setColumntbSearched] = useState(null);
  const [SearchWord, setSearchWord] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [userdt, setshowsdetial] = useState(false);
  const [usersh, setUsersh] = useState(null); // Updated state variable
  const [showPopup, setShowPopup] = useState(false);
  const [myObject, setMyObject] = useState();
  const [editingSlot, setEditingSlot] = useState(null);
  const [feature] = useState([
    "umail", "uname", "uid", "requestdate", "technicianName", "vnumber",
    "serviceid", "Approvaldate", "Onboarddate", "completion", "fuel"
  ]);
  const adminInfo = {
    name: 'John Doe',
    email: 'john@example.com',
    date: 'March 19, 2024',
    role: 'ADMIN',
    picture: 'https://tse4.mm.bing.net/th?id=OIP.1jZsQ4Wez7n-lD3b7GJm_wHaHa&pid=Api&P=0&h=220',
  };
  
  const viewuser = async (u) => {
    try {
      setUsersh(u); // Update usersh state with the current user's service id
      setShowPopup(true);
      const res = await axios.get(`/admin/ut/${u}`);
      setMyObject(res.data.dt);
      setshowsdetial(!userdt);
    } catch (err) {
      console.log(err);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setUsersh(null);
    setshowsdetial(!userdt);
  };

  return (
    <div className="table-responsive">
    <div style={{maxWidth:"100%",marginLeft:"47%", marginTop:"25px",marginBottom:"15px"}}><h1>Search Slot Detials</h1></div>
      <div className="table-container" style={{ overflowX: 'auto'}}>
        <div style={{ display: 'flex', width: "80vw", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
          <div>
            <span>Select the criteria</span>
            <select className="form-select" value={ColumntbSearched} onChange={(e) => setColumntbSearched(e.target.value)}>
              {feature.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {(ColumntbSearched !== "requestdate" && ColumntbSearched !== "Approvaldate" && ColumntbSearched !== "Onboarddate" && ColumntbSearched !== "completion") ? (
              <input type="text" value={SearchWord} onChange={(e) => setSearchWord(e.target.value)} placeholder="Search..." className="form-control" />) : null}
          </div>
          {(ColumntbSearched === "completion" || ColumntbSearched === "Onboarddate" || ColumntbSearched === "Approvaldate" || ColumntbSearched === "requestdate") && (
            <div>
              <span>Filter by {ColumntbSearched}:</span>
              <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="form-control" />
              <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="form-control" />
            </div>
          )}
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Uid</th>
              <th>Status</th>
              <th>Service ID</th>
              <th>RQdate</th>
              <th>APdate</th>
              <th>OBdate</th>
              <th>CMdate</th>
              <th>view User</th>
            </tr>
          </thead>
          <tbody>
            {users.filter(user => {
              if (ColumntbSearched === null || (SearchWord && user[ColumntbSearched] && user[ColumntbSearched].includes(SearchWord))) {
                return true;
              }
              if ((ColumntbSearched == null || ColumntbSearched === "requestdate" || ColumntbSearched === "Approvaldate" || ColumntbSearched === "Onboarddate" || ColumntbSearched === "completion") && startDate && endDate) {
                const userDate = new Date(user[ColumntbSearched]);
                const start = new Date(startDate);
                const end = new Date(endDate);
                return userDate >= start && userDate <= end;
              }
              return false;
            }).map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.uname}</td>
                <td>{user.umail}</td>
                <td>{user.uid}</td>
                <td>{user.Approval === 0 ?
                  "pending" :
                  user.Approval === -1 ?
                    "Rejected" :
                    user.Approval === 1 ?
                      "Accepted" :
                      user.Approval === 2 ?
                        "OnGoing" :
                        user.Approval === 3 ?
                          "Completed" : null
                }</td>
                <td>{user.serviceid}</td>
                <td>{user.requestdate}</td>
                <td>{user.Approvaldate}</td>
                <td>{user.Onboarddate}</td>
                <td>{user.completion}</td>
                {/* Check if current user service id matches usersh state */}
                {usersh === user.serviceid ? (
                    <button className="btn btn-primary">Done</button>
                  ) : (
                    <button className="btn btn-primary" onClick={() => viewuser(user.uid)}>
                      View Profile
                    </button>
                  )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '2.5rem', zIndex: '9999' }}>
            <span className="close" onClick={closePopup}>&times;</span>
            <div className="admin-info">
              <img src={adminInfo.picture} alt="Admin" />
              {myObject != null ? (
                <div>
                  <p><strong>Name:</strong> {myObject.uname}</p>
                  <p><strong>Email:</strong> {myObject.umail}</p>
                  <p><strong>Date:</strong> {myObject.dt}</p>
                  <p><strong>Role:</strong> {myObject.phone}</p>
                  <p><strong>Address:</strong> {myObject.uadd}</p>
                  <p><strong>City:</strong> {myObject.city}</p>
                  <p><strong>Zipcode:</strong> {myObject.zipcode}</p>
                </div>
              ) : (
                'hi'
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchUD;
