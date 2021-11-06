package com.heros.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.heros.entitys.Clients;
import com.heros.entitys.Department;
import com.heros.repositories.ClientsRepository;

@RestController // ready for mapping
@RequestMapping("/clients")
public class ClientsController {

	@Autowired
	ClientsRepository clientsRepository;
	
	@GetMapping("/list")
	List<Clients> getAll(){
		return this.clientsRepository.findAll();
	}
	
	@PostMapping("/add")
	Clients add(@RequestBody Clients tmp){
		return this.clientsRepository.save(tmp);
	}
}
