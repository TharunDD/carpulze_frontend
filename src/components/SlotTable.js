import React, { useState } from "react";
import "./AdminDashboard.css";
import axios from "../API/axios";
import { NotificationManager } from "react-notifications";
const SlotTable = ({ slots }) => {
  const [editingSlot, setEditingSlot] = useState(null);
  const [technicianOptions] = useState(["SELECT", "A", "B", "C"]);
  const [approvalOptions] = useState(["SELECT", "Approved", "Not Approved"]);
  const [ap, setAp] = useState("PENDING");
  const [th, setTh] = useState("NOT selected");
  const [userdt, setshowsdetial] = useState(false);
  const [usersh, setuserslot] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [myObject, setMyObject] = useState();
  const adminInfo = {
    name: "John Doe",
    email: "john@example.com",
    date: "March 19, 2024",
    role: "ADMIN",
    picture:
      "https://tse4.mm.bing.net/th?id=OIP.1jZsQ4Wez7n-lD3b7GJm_wHaHa&pid=Api&P=0&h=220",
  };

  const updateSlot = async (slot,mail) => {
    try {
      console.log(slot + "  " + ap + "  " + th);
      if (
        ap != "NOT selected" &&
        ap != "PENDING" &&
        ap != "SELECT" &&
        th != "SELECT" &&
        th != "NOT selected"
      ) {
        const updt = {
          Approved: ap == "Approved" ? 1 : -1,
          technicianName: th,
          maill:mail
        };
        await axios.post(`/admin/approval/${slot}`,updt);
        setEditingSlot(null);
        NotificationManager.success("Changes updated", 3000);
      } else {
        NotificationManager.warning("Fill All the values");
      }
    } catch (error) {
      NotificationManager.error("Error updating slot");
    }
  };
  const viewuser = async (u) => {
    try {
      setuserslot(u);
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
    setuserslot(null);
    setshowsdetial(!userdt);
  };

  return (
    <div className="table-responsive">
        <div style={{maxWidth:"100%",marginLeft:"47%", marginTop:"10px",marginBottom:"10px"}}><h1>Pending Requests</h1></div>
      <div className="table-container"  style={{ overflowX: 'auto'}}>
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>User id</th>
              <th>Service ID</th>
              <th>requested date</th>
              <th>Approval Status</th>
              <th>Technician Name</th>
              <th>Edit</th>
              <th>View Profile</th>
            </tr>
          </thead>
          <tbody>
            {slots
              .filter((slot) => slot.Approval === 0)
              .map((slot, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{slot.uname}</td>
                  <td>{slot.serviceid}</td>
                  <td>{slot.uid}</td>
                  <td>
                    {editingSlot === slot.serviceid ? (
                      <select value={ap} onChange={(e) => setAp(e.target.value)}>
                        {approvalOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : slot.Approval === 0 ? (
                      "Pending"
                    ) : slot.Approval === -1 ? (
                      "Rejected"
                    ) : (
                      "Approved"
                    )}
                  </td>
                  <td>{slot.requestdate}</td>
                  <td>
                    {editingSlot === slot.serviceid ? (
                      <select value={th} onChange={(e) => setTh(e.target.value)}>
                        {technicianOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      slot.technicianName
                    )}
                  </td>
                  <td>
                    {editingSlot === slot.serviceid ? (
                      <button onClick={() => updateSlot(editingSlot,slot.umail)}>
                        Done
                      </button>
                    ) : (
                      <button onClick={() => setEditingSlot(slot.serviceid)}>
                        Edit
                      </button>
                    )}
                  </td>
                  <td>
                    {usersh === slot.serviceid ? (
                      <button>Done</button>
                    ) : (
                      <button onClick={() => viewuser(slot.uid)}>
                        View Profile
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div
            className="popup"
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "2.5rem",
              zIndex: "9999",
            }}
          >
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <div className="admin-info">
              <img src={adminInfo.picture} alt="Admin" />
              {myObject != null ? (
                <div>
                  <p>
                    <strong>Name:</strong> {myObject.uname}
                  </p>
                  <p>
                    <strong>Email:</strong> {myObject.umail}
                  </p>
                  <p>
                    <strong>Date:</strong> {myObject.dt}
                  </p>
                  <p>
                    <strong>Role:</strong> {myObject.phone}
                  </p>
                  <p>
                    <strong>Address:</strong> {myObject.uadd}
                  </p>
                  <p>
                    <strong>City:</strong> {myObject.city}
                  </p>
                  <p>
                    <strong>Zipcode:</strong> {myObject.zipcode}
                  </p>
                </div>
              ) : (
                "hi"
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlotTable;
