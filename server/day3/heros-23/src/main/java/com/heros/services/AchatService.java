package com.heros.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.heros.repositories.AchatsRepository;
import com.heros.repositories.ClientsRepository;
import com.heros.repositories.ProductRepository;

@Service
public class AchatService {

	@Autowired
	ClientsRepository clientsRepository;
	
	@Autowired
	AchatsRepository achatsRepository;
	
	
	@Autowired
	ProductRepository productRepository;


	public ClientsRepository getClientsRepository() {
		return clientsRepository;
	}


	public AchatsRepository getAchatsRepository() {
		return achatsRepository;
	}


	public ProductRepository getProductRepository() {
		return productRepository;
	}
	
	
	
	
}
