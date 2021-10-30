package com.heros.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.heros.models.EmployeeModel;

@RestController // ready for mapping
@RequestMapping("/app")
public class AppController {
	
/** // GET 
 * 	
	@GetMapping("/hello")
	String sayHelloToTheClient(){
		return "hello world"; 
	}
	
	
	// somme de deux ints x y result x+y
	@GetMapping("/somme")
	int sommeXplusY( @RequestParam() int x, @RequestParam() int y ) {
		return ( x + y );
	}
	
	// list users
	@GetMapping("/users")
	List<String> getListOfUser(@RequestParam( required = false ) String username ) {
		List<String> users = new ArrayList<String>();
		
		users.add("chourabi taher");
		users.add("Wael abidi");
		users.add("hiba al amari");
		
		
		if( username != null ) {
			List<String> tmp = new ArrayList<String>();
			
			
			for( String user:users ) {
				if( user.equals(username)  ) {
					tmp.add(user);
				}
			} 
			return tmp;
		}else {
			return users;
		} 
	}
	
	
	// get list of employees
	@GetMapping("/employees")
	List<EmployeeModel> getListEmployees(){
		List<EmployeeModel> employees = new ArrayList<EmployeeModel>();
		
		EmployeeModel e1 = new EmployeeModel();
		e1.setFullname("chourabi taher");
		e1.setEmail("tchourabi@gmail.com");
		e1.setCin("130130130");
		
		EmployeeModel e2 = new EmployeeModel();
		e2.setFullname("Custom employee");
		e2.setEmail("custom@gmail.com");
		e2.setCin("140140140");
		
		employees.add(e1);
		employees.add(e2);
		
		return employees;
		
	}
	
	@GetMapping("/employee/{cin}")
	EmployeeModel findEmployeeByCin( @PathVariable() String cin ){
		
		List<EmployeeModel> employees = new ArrayList<EmployeeModel>(); 
		EmployeeModel e1 = new EmployeeModel();
		e1.setFullname("chourabi taher");
		e1.setEmail("tchourabi@gmail.com");
		e1.setCin("130130130"); 
		EmployeeModel e2 = new EmployeeModel();
		e2.setFullname("Custom employee");
		e2.setEmail("custom@gmail.com");
		e2.setCin("140140140"); 
		employees.add(e1);
		employees.add(e2); 
		for(EmployeeModel e: employees ) {
			if(e.getCin().equals(cin)) {
				return e;
			}
		} 
		return null;  
	}
	
 */
	
	
	
	//POST
	@PostMapping("/employees/add")
	List<EmployeeModel> addEmployee( @RequestBody() EmployeeModel tmp ){
		
		
		List<EmployeeModel> employees = new ArrayList<EmployeeModel>();
		
		employees.add(tmp);
		// insert , table employees :/
		// check list after adding
		
		return employees;
	}
	
	
	
	
	

}
