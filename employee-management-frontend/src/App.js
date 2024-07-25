// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/employeeList';
import EmployeeUpdate from './components/EmployeeUpdate';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/employees">Employee List</Link></li>
          <li><Link to="/employees/new">Add Employee</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employees/new" element={<EmployeeForm />} />
        <Route path="/employees/edit/:id" element={<EmployeeUpdate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;