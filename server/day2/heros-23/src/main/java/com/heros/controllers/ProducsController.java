package com.heros.controllers;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.heros.entitys.Product;
import com.heros.models.ProductAddModel;
import com.heros.repositories.ProductRepository;
import com.heros.responses.productResponse;

@RestController()
@RequestMapping("/products")

public class ProducsController {
	
	
	@Autowired
	ProductRepository productRepository;
	 
	
	// SELECT * FROM products
	@GetMapping("/list")
	List<Product> getProductsList(){
		// connection DATABASE => SELECT
		return this.productRepository.findAll();
		
	}
	
	
	@PostMapping("/add")
	Product insertNewProduct(@RequestBody ProductAddModel tmp ) {
		
		Product p = new Product();
		
		p.setTitle(tmp.getTitle());
		p.setPrice(tmp.getPrice());
		p.setQuantity(tmp.getQuantity());
		
		// INSERT INTO products
		
		return this.productRepository.save(p);
	}
	
	@PostMapping("/update/{id}")
	Product updateProduct(@RequestBody ProductAddModel tmp, @PathVariable() long id) {
		Product old = this.productRepository.findById(id).get();
		
		old.setPrice(tmp.getPrice());
		old.setTitle(tmp.getTitle());
		old.setQuantity(tmp.getQuantity()); 
		return this.productRepository.save(old); 
	} 
	// findBy id
	@GetMapping("/details/{id}")
	Product findById( @PathVariable() long id) {
		try {
			return  this.productRepository.findById(id).get();
		}catch (NoSuchElementException e) {
			return null;
		}
		
	}
	
	// DELETE
	
	// findBy id
	@GetMapping("/delete/{id}")
	productResponse deleteById( @PathVariable() long id) {
		productResponse res = new productResponse();
		
		try {
			Product old = this.productRepository.findById(id).get();
			this.productRepository.delete(old);
			
			res.setMessage("product deleted successfully");
			res.setSuccess(true);
			
			return res;
		}catch (NoSuchElementException e) {
			res.setMessage("No such product with provided id ");
			res.setSuccess(false);
			
			return res;
		}
		
		
		
	}
	
	
	@GetMapping("/get-by-price/lowerthan")
	List<Product> findByPriceLower(@RequestParam( required = true ) float price){
		
		// call repository 
		
		return this.productRepository.findByPriceLessThanEqual(price);
	}
	

}
