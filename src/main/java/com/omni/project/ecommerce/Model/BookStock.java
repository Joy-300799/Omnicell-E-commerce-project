package com.omni.project.ecommerce.Model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

<<<<<<< HEAD
@Document(collection="BookStock")
=======
@Document(collection = "BookStock")
>>>>>>> 89f7c4be1217a2686122967bcb1ba2b751f38497
public class BookStock {
	@Id
	private ObjectId id;
	private BookModel book;
	private int quantity;
<<<<<<< HEAD
	
	
=======

>>>>>>> 89f7c4be1217a2686122967bcb1ba2b751f38497
	public BookStock(BookModel book, int quantity) {
		this.book = book;
		this.quantity = quantity;
	}
<<<<<<< HEAD
	
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
=======

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

}
>>>>>>> 89f7c4be1217a2686122967bcb1ba2b751f38497
