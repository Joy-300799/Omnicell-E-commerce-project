package com.omni.project.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.omni.project.ecommerce.Model.BookModel;
import com.omni.project.ecommerce.Model.UserAllDetails;
import com.omni.project.ecommerce.bookServices.StockService;
import com.omni.project.ecommerce.bookServices.UserService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@Autowired
	StockService bookService;
	
	@GetMapping("/getUserCart")
	public List<BookModel> getUserCart(@RequestParam(value="username") String username){
		UserAllDetails user = userService.getUserAllDetails(username);
		return user.getCart();
	}
	
	@PostMapping("/addBookInCart")
	public ResponseEntity<?> addBookInCart(@RequestParam(name="username") String username,
			@RequestParam(name="bookName") String bookName){
		try {
			this.userService.addBookToCart(username,
					this.bookService.getBookStockByBookName(bookName).getBook());
			return new ResponseEntity<String>("added to cart", HttpStatus.OK);
		}catch(Exception e) {
			return  new ResponseEntity<String>("Book Not found",HttpStatus.NOT_FOUND);
		}
		
		
	}
	
	@DeleteMapping("/removeBookFromCart")
	public ResponseEntity<?> removeBookFromCart(@RequestParam(name="username") String username,
			@RequestParam(name="bookName") String bookName){
		try {
			this.userService.removeBookFromCart(username,
					this.bookService.getBookStockByBookName(bookName).getBook());
		
			return new ResponseEntity<String>("removed from cart", HttpStatus.OK);
		}catch(Exception e) {
			return  new ResponseEntity<String>("Book Not found",HttpStatus.NOT_FOUND);
		}
		
	}
	
	@DeleteMapping("/buyAllBookInCart")
	public ResponseEntity<?> buyAllBookInCart(@RequestParam(name="username") String username){
		try {
			this.userService.buyAllBookInCart(username);
			return new ResponseEntity<String>("transaction successful", HttpStatus.OK);
		}catch(Exception e) {
			return  new ResponseEntity<String>("User Not found",HttpStatus.NOT_FOUND);
		}
	}
	
}
