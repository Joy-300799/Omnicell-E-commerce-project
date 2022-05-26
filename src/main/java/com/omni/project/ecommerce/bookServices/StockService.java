package com.omni.project.ecommerce.bookServices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.omni.project.ecommerce.Model.BookModel;
import com.omni.project.ecommerce.Model.BookStock;
import com.omni.project.ecommerce.repository.StockRepository;

@Service
public class StockService {
	
	@Autowired
	StockRepository repo;
	
	public List<BookStock> getAllBookStockOfAGenre(String genre){
		return this.repo.findByBookGenre(genre);
	}
	
	public List<BookStock> getAllBookStock(){
		return this.repo.findAll();
	}
	
	public BookStock getBookStockByBookName(String bookName) {
		return this.repo.findByBookBookName(bookName);
	}
	
	public void addBookStock(BookModel book,int quantity) {
		this.repo.insert(new BookStock(book,quantity));
	}
	
	public void updateStock(BookStock bookStock,String name) {
		BookStock oldStock = this.repo.
				findByBookBookName(name);
		oldStock.setBook(bookStock.getBook());
		oldStock.setQuantity(bookStock.getQuantity());
		this.repo.save(oldStock);
	}
	
	public void updateBookQuantity(String name,int additionalQuantity) {
		BookStock book = this.repo.findByBookBookName(name);
		book.changeBookQuantityBy(additionalQuantity);
		this.repo.save(book);
	}
	
	public void deleteBook(String name) {
		this.repo.deleteByBookBookName(name);
	}
	
	
	
}
