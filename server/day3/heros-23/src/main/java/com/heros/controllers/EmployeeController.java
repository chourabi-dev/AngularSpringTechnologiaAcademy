package com.heros.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.heros.entitys.Employee;
import com.heros.models.EmployeeAddModel;
import com.heros.repositories.DepartmentRepository;
import com.heros.responses.EmployeeRepository;

@RestController()
@RequestMapping("/employees")
public class EmployeeController {
	
	@Autowired
	EmployeeRepository employeeRepository;
	
	@Autowired
	DepartmentRepository departmentRepository;
	
	@PostMapping("/add")
	Employee add(@RequestBody EmployeeAddModel tmp) {
		Employee e = new Employee();
		
		e.setFullname(tmp.getFullname());
		e.setAddress(tmp.getAddress());
		e.setEmail(tmp.getEmail());
		e.setPhone(tmp.getPhone());
		e.setDepartment( this.departmentRepository.findById(tmp.getDepartment_id()).get() );
		
		
		return this.employeeRepository.save(e);
		
	}
	

}
