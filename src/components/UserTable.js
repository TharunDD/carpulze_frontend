import React, { useEffect } from 'react';
import axios from "../API/axios";
import { useSelector } from "react-redux";
import { NotificationManager } from 'react-notifications';

const UserTable = ({ users }) => {
  const u = useSelector((state) => state.cart.user);
  const deleteuser = async (userId) => {
    try {
      await axios.post(`/admin/deleteus/${userId}`, {
        headers: {
          'Authorization': `Bearer ${u}`
        }
      });
      NotificationManager.success("The user removed successfully")
      // Handle success, for example, refresh the user list
    } catch (error) {
      console.error('Error deleting user:', error);
      // Handle error, show a message to the user, etc.
    }
  }

  return (
    <div className="table-container" style={{ overflowX: 'auto' }}>
      <div style={{maxWidth:"100%",marginLeft:"47%", marginTop:"10px",marginBottom:"10px"}}><h1>User Detials</h1></div>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Uid</th>
            <th>Role</th>
            <th>Address</th>
            <th>Date</th>
            <th>Delete User</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.uname}</td>
              <td>{user.umail}</td>
              <td>{user.uid}</td>
              <td>{user.phone}</td>
              <td>{user.uadd}</td>
              <td>{user.dt}</td>
              <td><button onClick={() => deleteuser(user.uid)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
