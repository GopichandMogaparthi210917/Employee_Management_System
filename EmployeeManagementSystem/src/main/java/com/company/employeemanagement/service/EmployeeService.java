package com.company.employeemanagement.service;


import com.company.employeemanagement.model.Employee;
import com.company.employeemanagement.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee save(Employee employee) {
        return employeeRepository.save(employee);
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Optional<Employee> getEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }

    public Employee updateEmployee(Employee employeeDetails) {
        Optional<Employee> employeeOptional = employeeRepository.findById(employeeDetails.getEmployeeId());
        if (employeeOptional.isPresent()) {
            Employee employee = employeeOptional.get();
            employee.setFirstname(employeeDetails.getFirstname());
            employee.setLastname(employeeDetails.getLastname());
            employee.setEmail(employeeDetails.getEmail());
            employee.setPhoneNumber(employeeDetails.getPhoneNumber());
            employee.setHireDate(employeeDetails.getHireDate());
            employee.setSalary(employeeDetails.getSalary());
            return employeeRepository.save(employee);
        } else {
            throw new RuntimeException("Employee not found with id " + employeeDetails.getEmployeeId());
        }
    }

    public String deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
        return "Employee removed !! " + id;
    }
}