package com.heros.responses;

import org.springframework.data.jpa.repository.JpaRepository;

import com.heros.entitys.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {

}
