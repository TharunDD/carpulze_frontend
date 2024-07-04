import React, { useState } from 'react';
import axios from '../API/axios';
// import "./AdminDashboard.css";

import { NotificationManager } from 'react-notifications';
const Ut = ({ users }) => {

  const [usersh, setUsersh] = useState(null); // Updated state variable
  const [showPopup, setShowPopup] = useState(false);
  const [myObject, setMyObject] = useState();

  
  const viewuser = async (u) => {
    try {
        if(u.Approval>0){
            return NotificationManager.warning("Unable to cancel the order , time over","Cannot cancel",2000);
        }
        else{
            const res=await axios.post(`/book/cancel/${u.serviceid}`);
            if(res.status===200){
                NotificationManager.success("Cancelled Successfully");
            }
        }
    } catch (err) {
      console.log(err);
      NotificationManager.error("something went wrong");
    }
  };

  return (
  <div style={{marginBottom:"100px"}}>
    <div className="table-responsive" style={{backgroundColor:"#ECEFF1"}}>
      <div className="table-container" style={{ overflowX: 'auto'}}>
        <table className="">
          <thead>
            <tr>
              <th>S.No.</th>
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
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
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
                    <button className="btn btn-primary" onClick={() => viewuser(user)}>
                      Cancel Booking
                    </button>
                  )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default Ut;
