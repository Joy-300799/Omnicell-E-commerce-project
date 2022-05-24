package com.omni.project.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.omni.project.ecommerce.Model.UserModel;
import com.omni.project.ecommerce.bookServices.BookServiceImpl;
import com.omni.project.ecommerce.bookServices.UserService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class UserController {
	
	@Autowired
	BookServiceImpl bookService;
	
	@Autowired
	UserService userService;
	
	@PostMapping("/addBookInCart")
	public ResponseEntity<String> addBookInCart(@RequestParam(name="username") String username,
			@RequestParam(name="bookName") String bookName){
		UserModel user = this.userService.getUserByUsername(username);
		user.addBookInCart(bookService.getBookByName(bookName));
		this.userService.updateUser(user);
		return new ResponseEntity("success", HttpStatus.OK);
	}
	
	@PostMapping("/removeBookFromCart")
	public ResponseEntity<String> removeBookFromCart(@RequestParam(name="username") String username,
			@RequestParam(name="bookName") String bookName){
		UserModel user = this.userService.getUserByUsername(username);
		user.removeBookFromCart(this.bookService.getBookByName(bookName));
		this.userService.updateUser(user);
		return new ResponseEntity("success", HttpStatus.OK);
	}
	
}
