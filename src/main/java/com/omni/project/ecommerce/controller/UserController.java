package com.omni.project.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.omni.project.ecommerce.bookServices.StockService;
import com.omni.project.ecommerce.bookServices.UserService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@Autowired
	StockService bookService;
	
	@PostMapping("/addBookInCart")
	public ResponseEntity<?> addBookInCart(@RequestParam(name="username") String username,
			@RequestParam(name="bookName") String bookName){
		this.userService.addBookToCart(username,
				this.bookService.getBookStockByBookName(bookName).getBook());
		return new ResponseEntity<String>("added to cart", HttpStatus.OK);
	}
	
	@PostMapping("/removeBookFromCart")
	public ResponseEntity<?> removeBookFromCart(@RequestParam(name="username") String username,
			@RequestParam(name="bookName") String bookName){
		this.userService.removeBookFromCart(username,
				this.bookService.getBookStockByBookName(bookName).getBook());
	
		return new ResponseEntity<String>("removed from cart", HttpStatus.OK);
	}
	
}
