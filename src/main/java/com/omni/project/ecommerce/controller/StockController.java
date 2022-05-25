package com.omni.project.ecommerce.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.omni.project.ecommerce.Model.BookStock;
import com.omni.project.ecommerce.bookServices.StockService;
@RestController
@CrossOrigin(origins="http://localhost:4200")
public class StockController {
	
	@Autowired
	StockService stockService;
	
	@GetMapping("/getBookStock")
	public BookStock getBookStock(@RequestParam(name="bookName") String bookName){
		return this.stockService.getBookStockByBookName(bookName);
		
	}
	
	@GetMapping("/getAllBookStock")
	public List<BookStock> getAllBookStock(){
		return this.stockService.getAllBookStock();
	}
	
	@GetMapping("/getAllBookStockOfParticularGenre")
	public List<BookStock> getAllBookStockOfParticularGenre(@RequestParam(name="genre")String genre){
		return this.stockService.getAllBookStockOfAGenre(genre);
	}
	
	@PostMapping("/addBookStock")
	public ResponseEntity<?> addBookStock(@RequestBody BookStock bookStock) throws Exception{
		try {
			this.stockService.addBookStock(bookStock.getBook(),bookStock.getQuantity());
			return new ResponseEntity<>("authentication success", HttpStatus.OK);
		}catch(Exception e) {
			throw new Exception(e);
		}
	}
	
	
}

