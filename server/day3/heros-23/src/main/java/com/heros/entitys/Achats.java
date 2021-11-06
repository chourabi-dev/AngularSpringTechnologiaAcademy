package com.heros.entitys;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table( name="achats" )
public class Achats {
	
	
	@Id
	@GeneratedValue( strategy = GenerationType.AUTO )
	private long id;
	
	@ManyToOne
	@JoinColumn( name="clients_id" ) 
	private Clients client;
	
	@ManyToOne
	@JoinColumn( name="products_id" )
	private Product product;
	
	
	
	private int quantity;
	private LocalDateTime dateTransaction = LocalDateTime.now();
	public Clients getClient() {
		return client;
	}
	public void setClient(Clients client) {
		this.client = client;
	}
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public LocalDateTime getDateTransaction() {
		return dateTransaction;
	}
	public void setDateTransaction(LocalDateTime dateTransaction) {
		this.dateTransaction = dateTransaction;
	}
	public Achats() {
		super();
	}
	
	

}
