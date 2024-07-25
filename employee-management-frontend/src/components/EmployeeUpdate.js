// src/EmployeeUpdate.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EmployeeUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    hireDate: '',
    salary: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:9999/api/employees/${id}`)
      .then(response => {
        setEmployee(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the employee!', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:9999/api/employees/update', employee)
      .then(response => {
        alert('Employee updated successfully!');
        navigate('/employees');
      })
      .catch(error => {
        console.error('There was an error updating the employee!', error);
      });
  };

  return (
    <div>
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          value={employee.firstname}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastname"
          value={employee.lastname}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="phoneNumber"
          value={employee.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <input
          type="date"
          name="hireDate"
          value={employee.hireDate}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="salary"
          value={employee.salary}
          onChange={handleChange}
          placeholder="Salary"
          required
        />
        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
}

export default EmployeeUpdate;
