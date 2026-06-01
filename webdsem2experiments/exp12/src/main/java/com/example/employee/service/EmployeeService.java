package com.example.employee.service;

import com.example.employee.model.Employee;
import com.example.employee.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service layer containing business logic for Employee CRUD operations.
 */
@Service
public class EmployeeService {

    private final EmployeeRepository repository;

    public EmployeeService(EmployeeRepository repository) {
        this.repository = repository;
    }

    // Create / Add employee
    public Employee addEmployee(Employee employee) {
        return repository.save(employee);
    }

    // Read all employees
    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    // Read by id
    public Employee getEmployeeById(Long id) {
        return repository.findById(id).orElseThrow(() -> new RuntimeException("Employee not found with id: " + id));
    }

    // Update existing employee
    public Employee updateEmployee(Long id, Employee employeeDetails) {
        Employee existing = getEmployeeById(id);
        existing.setName(employeeDetails.getName());
        existing.setDepartment(employeeDetails.getDepartment());
        existing.setSalary(employeeDetails.getSalary());
        return repository.save(existing);
    }

    // Delete employee
    public void deleteEmployee(Long id) {
        repository.deleteById(id);
    }
}
