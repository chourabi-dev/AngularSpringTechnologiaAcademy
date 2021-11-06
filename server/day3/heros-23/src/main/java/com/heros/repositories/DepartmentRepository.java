package com.heros.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.heros.entitys.Department;

public interface DepartmentRepository extends JpaRepository<Department,Long> {

}
