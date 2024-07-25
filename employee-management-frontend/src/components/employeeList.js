// src/EmployeeList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9999/api/employees/list')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the employees!', error);
      });
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.employeeId}>
            {employee.firstname} {employee.lastname} 
            <Link to={`/employees/edit/${employee.employeeId}`}>Edit</Link>
            {/* Add Delete functionality here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
