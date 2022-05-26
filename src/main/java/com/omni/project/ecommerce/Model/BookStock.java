package com.omni.project.ecommerce.Model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="BookStock")
public class BookStock {
	@Id
	private ObjectId id;
	private BookModel book;
	private int quantity;
	
	
	public BookStock(BookModel book, int quantity) {
		this.book = book;
		this.quantity = quantity;
	}
	
	public BookModel getBook() {
		return book;
	}
	
	public void setBook(BookModel book) {
		this.book = book;
	}
	
	public int getQuantity() {
		return quantity;
	}
	
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	public void changeBookQuantityBy(int amount) {
		this.quantity += amount;
	}
	
	
}
