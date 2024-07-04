// ServiceTable.js
import React from 'react';
import './ServiceTable.css';
const ServiceTable = ({ services }) => {
  return (
    <div className="table-container">
    <table>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Service</th>
          <th>Service Category</th>
          <th>Date</th>
          <th>Action</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {services.map((service, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{service.name}</td>
            <td>{service.category}</td>
            <td>{service.date}</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default ServiceTable;
