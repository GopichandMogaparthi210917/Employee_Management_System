// src/EmployeeForm.js
import React, { useState } from 'react';
import axios from 'axios';

function EmployeeForm() {
  const [employee, setEmployee] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    hireDate: '',
    salary: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:9999/api/employees/register', employee)
      .then(response => {
        alert('Employee added successfully!');
      })
      .catch(error => {
        console.error('There was an error adding the employee!', error);
      });
  };

  return (
    <div>
      <h2>Add Employee</h2>
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
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
