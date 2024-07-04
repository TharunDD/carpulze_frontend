import React, { useState, useEffect } from 'react';
import axios from '../API/axios';
import 'react-notifications-component/dist/theme.css';
import "./AdminDashboard.css";
import { NotificationContainer, NotificationManager } from 'react-notifications';

const Totaldet = ({ users }) => {
  const [sid, setsid] = useState("");
  const [inc, sinc] = useState(0);
  const [maill, smail] = useState(0);
  const [approvalFilter, setApprovalFilter] = useState(null);

  useEffect(() => {
    takework();
  }, [sid, inc]);

  const tkwr = (uid, a,mail) => {
    var t = "";
    if (a === 2) {
      t = "ON GOING";
    } else if (a === 3) {
      t = "COMPLETED"
    }

    NotificationManager.success(
      `Click here to make the request "${t}" state`,
      'Click here to change the work status',
      7000,
      () => {
        setsid(uid);
        sinc(a);
        smail(mail);
      },
      {
        className: 'custom-notification' // Apply custom CSS class
      })
  }

  const takework = async () => {
    if (inc >= 2 && sid !== "") {
      console.log(sid, inc,maill);
      // Uncomment the following line to make HTTP request
      await axios.post(`/admin/statusup/${sid}/${inc}/${maill}`);
    }
  }

  return (
    <div>
        <div style={{maxWidth:"100%",marginLeft:"47%", marginTop:"15px",marginBottom:"15px"}}><h1>Slot Detials</h1></div>
      <div className="sortbt">
        <button onClick={() => setApprovalFilter(1)}>Approved</button>
        <button onClick={() => setApprovalFilter(-1)}>Rejected</button>
        <button onClick={() => setApprovalFilter(2)}>OnGOing</button>
        <button onClick={() => setApprovalFilter(3)}>Completed</button>
        <button onClick={() => setApprovalFilter(null)}>ALL REQUESTS</button>
      </div>
      <div className="table-container" style={{ overflowX: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Uid</th>
              <th>Role</th>
              <th>Request date</th>
              <th>Current status</th>
              <th>Status change</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter(user => approvalFilter === null || user.Approval === approvalFilter).map((user, index) =>
                (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.uname}</td>
                    <td>{user.umail}</td>
                    <td>{user.uid}</td>
                    <td>{user.serviceid}</td>
                    <td>{user.requestdate}</td>
                    <td>{user.Approval === 1 ?
                      (<h4 style={{ marginLeft: "10px", marginTop: "5px" }}>Accepted (work not started) </h4>)
                      :
                      user.Approval === 2 ?
                        (<h4 style={{ marginLeft: "10px", marginTop: "5px" }}>work on going</h4>)
                        :
                        user.Approval === 3 ?
                          (<h4 style={{ marginLeft: "10px", marginTop: "5px" }}>completed</h4>)
                          :
                          user.Approval === -1 ?
                            (<h4 style={{ marginLeft: "10px", marginTop: "5px" }}>Rejected</h4>)
                            : null}
                    </td>
                    {user.Approval === 1 ?
                      (<button style={{ marginLeft: "20px", marginTop: "14px" ,marginBottom:"7px",backgroundColor: "#FF6F5E"}} onClick={() => tkwr(user.serviceid, 2,user.umail,user.mail)}>Start the work</button>)
                      :
                      user.Approval === 2 ?
                        (<button style={{ marginLeft: "10px",marginRight:"10px", marginTop: "5px",marginBottom:"10px",backgroundColor: "#00AF91" }} onClick={() => tkwr(user.serviceid, 3,user.umail)}>Mark as completed</button>)
                        :
                        user.Approval === 3 ?
                          (<h4 style={{ marginLeft: "50px", marginTop: "25px" }} disabled>Completed</h4>)
                          :
                          user.Approval === -1 ?
                            (<h4 style={{ marginLeft: "50px", marginTop: "25px" }} disabled>Rejected</h4>)
                            : null}
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Totaldet;
