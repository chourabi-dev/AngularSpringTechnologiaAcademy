package com.heros.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.heros.entitys.Department;
import com.heros.repositories.DepartmentRepository;

@RestController()
@RequestMapping("/departments")

public class DepartmentController {

	@Autowired
	DepartmentRepository departmentRepository;
	
	@GetMapping("/list")
	List<Department> getAll(){
		return this.departmentRepository.findAll();
	}
	
	@PostMapping("/add")
	Department add(@RequestBody Department tmp){
		return this.departmentRepository.save(tmp);
	}
	
}
