import axios from 'axios';

const API_URL = 'http://localhost:9999/api/employees';

export const getAllEmployees = () => axios.get(`${API_URL}/list`);
export const getEmployeeById = (id) => axios.get(`${API_URL}/${id}`);
export const createEmployee = (employee) => axios.post(`${API_URL}/register`, employee);
export const updateEmployee = (employee) => axios.put(`${API_URL}/update`, employee);
export const deleteEmployee = (id) => axios.delete(`${API_URL}/delete/${id}`);
