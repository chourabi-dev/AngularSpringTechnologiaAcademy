package com.heros.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.heros.entitys.Achats;
import com.heros.entitys.Product;
import com.heros.models.BuyModel;
import com.heros.repositories.ProductRepository;
import com.heros.services.AchatService;

@RestController // ready for mapping
@RequestMapping("/achats")
public class AchatController {

	@Autowired
	AchatService achatService;
	
 
	@PostMapping("/buy") 
	Achats transaction(@RequestBody BuyModel tmp) {
		Achats a =new Achats();
		
		a.setClient( this.achatService.getClientsRepository().findById(tmp.getClientID()) .get());
		a.setProduct(this.achatService.getProductRepository().findById(tmp.getProductID()).get());
		a.setQuantity(tmp.getQuantity());
		
		// update list product ,
		Product old = this.achatService.getProductRepository().findById(tmp.getProductID()).get();
		old.setQuantity( (old.getQuantity() - tmp.getQuantity() ) );
		
		this.achatService.getProductRepository().save(old);
		
		return this.achatService.getAchatsRepository().save(a);
		
		
	}
	
}
