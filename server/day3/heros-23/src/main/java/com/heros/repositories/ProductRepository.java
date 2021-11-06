package com.heros.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.heros.entitys.Product;

public interface ProductRepository extends JpaRepository<Product,Long> {

	// WHERE price = ?
	List<Product> findByPrice( float price );
	
	// WHERE price <= ?
	List<Product> findByPriceLessThanEqual(float price);
	
	
	Product findByTitle(String title);
	
}
