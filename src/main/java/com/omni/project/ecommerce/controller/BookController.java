package com.omni.project.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.omni.project.ecommerce.Model.BookModel;
import com.omni.project.ecommerce.bookServices.BookServiceImpl;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class BookController {
	
	@Autowired
	BookServiceImpl service;
	
	@GetMapping("/getAllBooks")
	public List<BookModel> getAllBooks(){
		return this.service.getAllBooks();
	}
	
	@GetMapping("/getBooksByAuthorName")
	public List<BookModel> getBooksByAuthorName(@RequestParam(name="authorName") String authorName){
		return this.service.getBooksByAuthorName(authorName);
	}
	
	@GetMapping("/getBooksByGenre")
	public List<BookModel> getBooksByGenre(@RequestParam(name="genre") String genre){
		return this.service.getBooksByGenre(genre);
	}
	
	@GetMapping("/getBookByName")
	public BookModel getBookByModel(@RequestParam(name="bookName") String bookName) {
		return this.service.getBookByName(bookName);
	}
	
	@PostMapping("/addBook")
	public String addBook(@RequestBody BookModel book) {
		this.service.addBook(book);
		return "added successfully";
	}
	
	@PutMapping("/updateBook")
	public String updateBook(@RequestBody BookModel book,@RequestParam(name="bookName") String bookName) {
		this.service.updateBook(book, bookName);;
		return "updated successfully";
	}
	
	@DeleteMapping("/deleteBook")
	public String deleteBook(@RequestParam(name="bookName") String bookName) {
		this.service.deleteBook(bookName);
		return "deleted successfully";
	}
}
